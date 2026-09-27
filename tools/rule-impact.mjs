#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {parseDocument, visit} from 'yaml';
import {analyze_json, compare_json} from '../_build/js/release/build/cmd/rules/rules.js';

function bounded(filename) {
  const fd=fs.openSync(filename,'r');
  try {
    if(!fs.fstatSync(fd).isFile()) throw Error('Input must be a regular file');
    const buffer=Buffer.alloc(2097153); let size=0;
    while(size<buffer.length) { const n=fs.readSync(fd,buffer,size,buffer.length-size,null); if(!n)break; size+=n; }
    if(size>2097152)throw Error('Rule file exceeds 2 MiB');
    return buffer.subarray(0,size);
  } finally {fs.closeSync(fd);}
}

function canonical(value,depth=0) {
  if(depth>32)throw Error('Rule metadata exceeds 32 nesting levels');
  if(value===null || typeof value==='string' || typeof value==='boolean') return value;
  if(typeof value==='number' && Number.isFinite(value) && (!Number.isInteger(value)||Number.isSafeInteger(value)))return value;
  if(Array.isArray(value))return value.map(v=>canonical(v,depth+1));
  if(value && typeof value==='object')return Object.fromEntries(Object.keys(value).sort().map(k=>[k,canonical(value[k],depth+1)]));
  throw Error('Metadata must contain finite, precisely represented JSON values');
}
const object = x=>x!==null && typeof x==='object' && !Array.isArray(x);
const json = value=>JSON.stringify(canonical(value));
const digest = value=>createHash('sha256').update(value).digest('hex');

export function loadRules(filename) {
  const raw=bounded(filename);
  const source=new TextDecoder('utf-8',{fatal:true}).decode(raw);
  // YAML is delegated to an existing parser. Aliases are deliberately refused:
  // the accepted host format is a single explicit rules/PrometheusRule document.
  const document=parseDocument(source,{uniqueKeys:true,stringKeys:true,strict:true});
  if(document.errors.length || document.warnings.length)throw Error([...document.errors,...document.warnings].map(e=>e.message).join('; '));
  visit(document,{Alias(){throw Error('YAML aliases are outside this host format');}});
  const data=document.toJS({maxAliasCount:0});
  if(!object(data))throw Error('Expected a rules document');
  let groups,documentContext;
  if(data.kind==='PrometheusRule') {
    if(!object(data.spec) || 'groups' in data)throw Error('PrometheusRule requires unambiguous spec.groups');
    groups=data.spec.groups;
    const {spec,...outer}=data;
    const {groups:_,...specContext}=spec;
    documentContext={...outer,spec:specContext};
  } else {
    if('spec' in data || ('kind' in data))throw Error('Unsupported rule document kind');
    groups=data.groups;
    const {groups:_,...outer}=data;
    documentContext=outer;
  }
  if(!Array.isArray(groups) || groups.length>512)throw Error('Expected at most 512 groups');
  const orderedGroups=[], names=new Set();
  groups.forEach(group=>{
    if(!object(group)||typeof group.name!=='string'||!group.name||names.has(group.name)||!Array.isArray(group.rules))throw Error('Groups require distinct names and rule arrays');
    names.add(group.name);
    orderedGroups.push({group});
  });
  // Prometheus does not promise an execution order between rule groups. Sort
  // group blocks so source-file group movement cannot masquerade as rule
  // changes; preserve order inside each group because that order is semantic.
  orderedGroups.sort((a,b)=>a.group.name<b.group.name?-1:a.group.name>b.group.name?1:0);
  const entries=[];
  for(const {group} of orderedGroups) {
    const {rules:_,...groupContext}=group;
    group.rules.forEach((rule,ri)=>{
      if(!object(rule)||('record' in rule)===('alert' in rule))throw Error('Each rule must have exactly one record or alert');
      const name=rule.record??rule.alert;
      if(typeof name!=='string'||!name)throw Error('Rule names must be nonempty strings');
      let expr=rule.expr;
      if(typeof expr==='number'&&Number.isFinite(expr)&&(!Number.isInteger(expr)||Number.isSafeInteger(expr)))expr=String(expr);
      if(typeof expr!=='string')throw Error('Rule expr must be a string or finite safe numeric scalar');
      const kind='record' in rule?'record':'alert';
      const identityKey=JSON.stringify([group.name,kind,name]);
      const ruleJson=json(rule);
      entries.push({group,groupContext,rule,ruleIndex:ri,name,kind,expr,identityKey,ruleJson});
      if(entries.length>512)throw Error('At most 512 rules per snapshot');
    });
  }
  const identityCounts=new Map(),contentCounts=new Map();
  for(const entry of entries) {
    const key=digest(entry.identityKey),content=`${key}:${digest(entry.ruleJson)}`;
    identityCounts.set(key,(identityCounts.get(key)??0)+1);
    contentCounts.set(content,(contentCounts.get(content)??0)+1);
  }
  const contentOccurrences=new Map(),rules=[],descriptions=[];
  for(const entry of entries) {
    const base=digest(entry.identityKey),ruleHash=digest(entry.ruleJson);
    let id=`rule:${base}`;
    if(identityCounts.get(base)>1) {
      id+=`:${ruleHash}`;
      const content=`${base}:${ruleHash}`;
      if(contentCounts.get(content)>1) {
        const occurrence=contentOccurrences.get(content)??0;
        contentOccurrences.set(content,occurrence+1);
        // Exact duplicate entries have no content-derived discriminator; an
        // occurrence suffix keeps them distinct. Their identities are
        // necessarily interchangeable, so equal duplicates remain equal as a
        // set when reordered.
        id+=`:${occurrence}`;
      }
    }
    rules.push({id,record:entry.rule.record??null,expr:entry.expr,context:JSON.stringify(canonical({document:documentContext,group:entry.groupContext,rule:entry.rule}))});
    descriptions.push({id,group:entry.group.name,name:entry.name,kind:entry.kind,position:entry.ruleIndex});
  }
  return {rules,descriptions,source:{path:filename,sha256:createHash('sha256').update(raw).digest('hex'),bytes:raw.length}};
}

export function graph(rules) {
  const result=JSON.parse(analyze_json(JSON.stringify(rules)));
  if(!result.ok)throw Error(result.error);
  return result.result;
}
export function compare(before,after) {
  const result=JSON.parse(compare_json(JSON.stringify(before),JSON.stringify(after)));
  if(!result.ok)throw Error(result.error);
  return result.result;
}
function main(args) {
  if(args.length===1&&args[0]==='--help') {
    console.log('Usage: node tools/rule-impact.mjs RULES.yaml [AFTER.yaml]\nSingle YAML/JSON groups or PrometheusRule document. Graph or before/after local name-reference impact.\nRule IDs use group name + kind/name; duplicate names include a content digest and exact duplicates an occurrence. Groups sort by name; within-group order is preserved.\nUnknown selectors stay unresolved. No TSDB, evaluation, deployment, or scheduling advice. Exit 0 report, 1 invalid/IO.');return;
  }
  if(args.length<1||args.length>2)throw Error('Expected one or two rule files; use --help');
  const before=loadRules(args[0]);
  if(args.length===1)console.log(JSON.stringify({schemaVersion:1,source:before.source,rules:before.descriptions,result:graph(before.rules)}));
  else {
    const after=loadRules(args[1]);
    console.log(JSON.stringify({schemaVersion:1,beforeSource:before.source,afterSource:after.source,beforeRules:before.descriptions,afterRules:after.descriptions,result:compare(before.rules,after.rules)}));
  }
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  try {main(process.argv.slice(2));}catch(e){console.error(JSON.stringify({error:String(e.message??e)}));process.exitCode=1;}
}
