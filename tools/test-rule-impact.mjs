import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {loadRules,graph,compare} from './rule-impact.mjs';
const oracle=process.env.PROMQL_REFERENCE;
const golden=process.argv.includes('--golden');
if(!oracle&&!golden)throw Error('Set PROMQL_REFERENCE to the pinned official parser adapter executable, or use --golden');
const root=new URL('../',import.meta.url);
const input=new URL('../examples/rule-impact/control-plane.yaml',import.meta.url);
const source=loadRules(input);
const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const expected=JSON.parse(fs.readFileSync(new URL('../examples/rule-impact/SOURCE.json',import.meta.url),'utf8'));
assert.equal(sha(input),expected.files.find(f=>f.path==='control-plane.yaml').sha256);
const r=(id,record,expr,context='')=>({id,record,expr,context});
const base=source.rules;
const candidate=graph(base);
const producer=candidate.edges[0].producer;
const index=base.findIndex(r=>r.id===producer);
const clone=x=>structuredClone(x);
const cases=[];
for(const kind of ['unchanged','expression','metadata','rename','delete']) {
  const after=clone(base);
  if(kind==='expression')after[index].expr=`(${after[index].expr}) * 2`;
  if(kind==='metadata')after[index].context+=' updated-label-context';
  if(kind==='rename')after[index].record+=':renamed';
  if(kind==='delete')after.splice(index,1);
  cases.push({name:'public-'+kind,before:base,after});
}
cases.push({name:'ambiguous-cycle-unknown',before:[r('a','a','raw'),r('b','a','other'),r('c','c','a'),r('d',null,'{__name__=~"a|c"}')],after:[r('a','a','c'),r('b','a','other'),r('c','c','a'),r('d',null,'{__name__=~"a|c"}')]});
cases.push({name:'nested-exact-name',before:[r('a','a','raw'),r('b','b','raw'),r('x',null,'sum(rate(a[5m])) + scalar({__name__="b"})')],after:[r('a','a','raw + 2'),r('b','b','raw'),r('x',null,'sum(rate(a[5m])) + scalar({__name__="b"})')]});
let state=20260927;
const random=n=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state%n;};
for(let test=0;test<32;test++) {
  const before=Array.from({length:12},(_,i)=>r(String(i),i<9?`m${random(7)}`:null,`m${random(9)} + m${random(9)}`));
  const after=clone(before);after[random(after.length)].expr=`m${random(9)} + raw`;
  cases.push({name:'generated-'+test,before,after});
}
const queries=[...new Set(cases.flatMap(c=>[...c.before,...c.after].map(r=>r.expr)))];
const vectorsPath=new URL('../evidence/rule-impact-20260927/parser-vectors.json',import.meta.url);
let lines,referenceHash;
if(golden) {
  const saved=JSON.parse(fs.readFileSync(vectorsPath,'utf8'));
  assert.deepEqual(saved.queries,queries);lines=saved.lines;referenceHash=saved.oracleSha256;
} else {
  const proc=spawnSync(oracle,[],{input:[JSON.stringify({metadata:true}),...queries.map(query=>JSON.stringify({query}))].join('\n')+'\n',encoding:'utf8',maxBuffer:32*1024*1024});
  assert.equal(proc.status,0,proc.stderr);
  lines=proc.stdout.trim().split('\n').map(x=>JSON.parse(x));referenceHash=sha(oracle);
  fs.mkdirSync(new URL('../evidence/rule-impact-20260927/',import.meta.url),{recursive:true});
  fs.writeFileSync(vectorsPath,JSON.stringify({queries,lines,oracleSha256:referenceHash},null,2)+'\n');
}
assert.equal(lines.length,queries.length+1);
const metadata=lines.shift();assert.equal(metadata.version,'v0.314.0');
const answers=new Map(queries.map((query,i)=>{assert.equal(lines[i].accepted,true,query);return [query,lines[i].ast];}));
// Read vector selectors from the official parser's AST, never candidate ASTs.
const text=b=>new TextDecoder('utf-8',{fatal:true}).decode(Buffer.from(b,'base64'));
function references(ast) {
  const names=new Set();let unresolved=false;
  function walk(node) {
    if(!Array.isArray(node))return;
    if(node[0]==='selector') {
      const exact=new Set();if(node[1])exact.add(node[1]);
      for(const [key,op,value] of node[2])if(text(key)==='__name__'&&op==='='&&text(value))exact.add(text(value));
      if(!exact.size)unresolved=true;
      if(exact.has('ALERTS')||exact.has('ALERTS_FOR_STATE'))unresolved=true;
      for(const name of exact)names.add(name);
    }
    if(node[0]==='call'&&node[1]==='info')unresolved=true;
    for(const item of node)if(Array.isArray(item))walk(item);
  }
  walk(ast);return {names,unresolved};
}
const triple=e=>JSON.stringify([e.producer,e.consumer,e.metric,e.ambiguous]);
const sorted=a=>[...a].sort();
function reference(rules) {
  const edges=[],external=[],unknown=[];
  rules.forEach(rule=>{
    const refs=references(answers.get(rule.expr));
    if(refs.unresolved)unknown.push(rule.id);
    for(const name of refs.names) {
      const matches=rules.filter(p=>p.record===name);
      if(!matches.length)external.push(JSON.stringify([rule.id,name]));
      for(const p of matches)edges.push({producer:p.id,consumer:rule.id,metric:name,ambiguous:matches.length>1});
    }
  });
  return {edges,external,unknown};
}
// Boolean Floyd-Warshall closure is intentionally different from the product's
// queue walk. Small test snapshots make an independent cubic oracle practical.
function closure(ids,edges) {
  const ix=new Map(ids.map((id,i)=>[id,i]));
  const matrix=ids.map(()=>ids.map(()=>false));
  for(const e of edges)matrix[ix.get(e.producer)][ix.get(e.consumer)]=true;
  for(let k=0;k<ids.length;k++)for(let i=0;i<ids.length;i++)if(matrix[i][k])for(let j=0;j<ids.length;j++)matrix[i][j] ||= matrix[k][j];
  return {matrix,ix};
}
function checkGraph(rules,actual,ref) {
  assert.deepEqual(sorted(actual.edges.map(triple)),sorted(ref.edges.map(triple)));
  assert.deepEqual(sorted(actual.external.map(e=>JSON.stringify([e.consumer,e.metric]))),sorted(ref.external));
  assert.deepEqual(sorted(new Set(actual.unresolved.map(e=>e.consumer))),sorted(ref.unknown));
  const ids=rules.map(r=>r.id),{matrix}=closure(ids,ref.edges);
  assert.deepEqual(sorted(actual.cyclic_rules),sorted(ids.filter((_,i)=>matrix[i][i])));
}
const reports=[];
for(const c of cases) {
  const old=reference(c.before),fresh=reference(c.after),result=compare(c.before,c.after);
  checkGraph(c.before,result.before,old);checkGraph(c.after,result.after,fresh);
  const ids=[...new Set([...c.before,...c.after].map(r=>r.id))];
  const changed=ids.filter(id=>JSON.stringify(c.before.find(r=>r.id===id))!==JSON.stringify(c.after.find(r=>r.id===id)));
  assert.deepEqual(sorted(result.changed),sorted(changed));
  const {matrix,ix}=closure(ids,[...old.edges,...fresh.edges]);
  const downstream=seeds=>ids.filter(id=>seeds.includes(id)||seeds.some(seed=>matrix[ix.get(seed)][ix.get(id)]));
  assert.deepEqual(sorted(result.affected),sorted(downstream(changed)));
  assert.deepEqual(sorted(result.uncertain),sorted(changed.length?downstream([...old.unknown,...fresh.unknown]):[]));
  reports.push({name:c.name,oldEdges:old.edges.length,newEdges:fresh.edges.length,changed:result.changed.length,affected:result.affected.length,uncertain:result.uncertain.length});
}
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'promql-rule-host-'));
let hostChecks=0;
try {
  for(const [name,content] of [
    ['duplicate-key','groups: []\ngroups: []'],
    ['alias','groups: &g []\nextra: *g'],
    ['invalid-query','groups: [{name: a, rules: [{alert: Broken, expr: "sum(1)"}]}]'],
    ['multiple-documents','groups: []\n---\ngroups: []'],
    ['unsafe-integer','groups: [{name: a, rules: [{record: huge, expr: 9007199254740993}]}]'],
  ]) {
    const p=path.join(temp,name+'.yaml');fs.writeFileSync(p,content);
    const run=spawnSync(process.execPath,['tools/rule-impact.mjs',p],{cwd:root,encoding:'utf8'});
    assert.equal(run.status,1,name);assert.equal(run.stdout,'',name);hostChecks++;
  }
  const before=path.join(temp,'before.yaml'),after=path.join(temp,'after.yaml');
  fs.writeFileSync(before,'groups: [{name: a, rules: [{record: base, expr: raw}, {alert: Alert, expr: "base > 1"}]}]');
  fs.writeFileSync(after,'groups: [{name: a, rules: [{record: renamed, expr: raw}, {alert: Alert, expr: "base > 1"}]}]');
  const run=spawnSync(process.execPath,['tools/rule-impact.mjs',before,after],{cwd:root,encoding:'utf8'});
  assert.equal(run.status,0,run.stderr);assert.deepEqual(JSON.parse(run.stdout).result.affected,['0/0','0/1']);hostChecks++;
  for(const field of ['labels','namespace']) {
    const document={apiVersion:'monitoring.coreos.com/v1',kind:'PrometheusRule',metadata:{name:'sample',namespace:'old',labels:{team:'old'}},spec:{groups:[{name:'g',rules:[{record:'a',expr:'raw'},{alert:'A',expr:'a > 0'}]}]}};
    fs.writeFileSync(before,JSON.stringify(document));
    if(field==='labels')document.metadata.labels.team='new';else document.metadata.namespace='new';
    fs.writeFileSync(after,JSON.stringify(document));
    const run=spawnSync(process.execPath,['tools/rule-impact.mjs',before,after],{cwd:root,encoding:'utf8'});
    assert.equal(run.status,0,run.stderr);const impact=JSON.parse(run.stdout).result;
    assert.deepEqual(impact.changed,['0/0','0/1']);assert.deepEqual(impact.affected,['0/0','0/1']);hostChecks++;
  }
} finally {fs.rmSync(temp,{recursive:true,force:true});}
const receipt={utc:new Date().toISOString(),mode:golden?'saved independent AST replay':'live official parser',sourceSha256:sha(input),publicRules:base.length,publicEdges:candidate.edges.length,publicExternalReferences:candidate.external.length,oracleSha256:referenceHash,referenceVersion:metadata.version,queries:queries.length,comparisons:reports.length,hostChecks,reports,limits:['Static local name-reference candidates; no TSDB label intersection or execution validation','Public deployment manifest is not adoption by this project','Random cases are synthetic; official parser used only as a development reference']};
const output=process.argv.slice(2).find(a=>a!=='--golden');
if(!output)throw Error('Provide a new evidence JSON path');
fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,JSON.stringify(receipt,null,2)+'\n');
console.log(JSON.stringify({publicRules:base.length,publicEdges:candidate.edges.length,comparisons:reports.length,queries:queries.length,hostChecks}));
