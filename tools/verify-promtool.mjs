#!/usr/bin/env node
// Independent rule-tool boundary check. Product code does not depend on promtool.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {inspect_json} from '../web/engine.mjs';

const root=fileURLToPath(new URL('../',import.meta.url));
const [binaryArg,outputArg]=process.argv.slice(2);
if (!binaryArg||!outputArg||process.argv.length!==4) {
  console.error('Usage: node tools/verify-promtool.mjs /path/to/promtool report.json');
  process.exit(1);
}
const binary=path.resolve(binaryArg),output=path.resolve(outputArg);
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
function run(args,input) {
  const result=spawnSync(binary,args,{cwd:root,input,encoding:'utf8',timeout:30000,windowsHide:true,maxBuffer:4*1024*1024});
  assert.ifError(result.error);assert.equal(result.signal,null);
  return {args,exit:result.status,stdout:result.stdout,stderr:result.stderr};
}
const version=run(['--version']);assert.equal(version.exit,0);
assert.match(version.stdout+version.stderr,/promtool, version 3\.14\.0(?:\s|\()/);
const sourcePath='examples/prometheus-rules/prometheus-rules.lint.yml';
const source=fs.readFileSync(path.join(root,sourcePath));
const sourceHash=hash(source);
assert.equal(sourceHash,'17c5cfa28dce50a6a9b2aadea2e9cd0a55fd4a4148ee031182e017cb703be457');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'examples/prometheus-rules/queries.json'),'utf8'));
const expressionChecks=[
  {id:'official-expression',query:manifest.queries[0].query,accepted:true},
  {id:'rate-aggregation',query:'sum by(job)(rate(http_requests_total[5m]))',accepted:true},
  {id:'scalar-aggregation',query:'sum(1)',accepted:false},
  {id:'instant-vector-rate',query:'rate(up)',accepted:false},
  {id:'broken-selector',query:'up{job=',accepted:false},
  {id:'absent-static-only',query:'absent(up)',accepted:true},
  {id:'subquery-static-only',query:'rate(up[5m])[1h:5m]',accepted:true},
];
const rule=query=>({groups:[{name:'local-boundary-check',rules:[{alert:'BoundaryExample',expr:query}]}]});
const cases=[];
for (const mode of [
  {id:'official-duplicate-default',args:['check','rules'],exit:0},
  {id:'official-duplicate-fatal',args:['check','rules','--lint=duplicate-rules','--lint-fatal'],exit:3},
  {id:'official-duplicate-disabled',args:['check','rules','--lint=none','--lint-fatal'],exit:0},
]) {
  const actual=run(mode.args,source);
  assert.equal(actual.exit,mode.exit,JSON.stringify(actual));
  if(mode.id==='official-duplicate-fatal')assert.match(actual.stdout+actual.stderr,/duplicate/i);
  cases.push({id:mode.id,input:sourcePath,inputSha256:sourceHash,...actual});
}
for (const item of expressionChecks) {
  const input=JSON.stringify(rule(item.query))+'\n';
  const actual=run(['check','rules','--lint=none'],input);
  const local=JSON.parse(inspect_json(JSON.stringify({query:item.query})));
  assert.equal(actual.exit,item.accepted?0:1,JSON.stringify({item,actual}));
  assert.equal(local.accepted,item.accepted,JSON.stringify({item,local}));
  cases.push({id:item.id,query:item.query,input,inputSha256:hash(input),moonbit:local,...actual});
}
for (const item of [
  {id:'missing-group-name',input:{groups:[{rules:[{alert:'BoundaryExample',expr:'up'}]}]}},
  {id:'unknown-rule-field',input:{groups:[{name:'example',rules:[{alert:'BoundaryExample',expr:'up',unknown_field:true}]}]}},
]) {
  const input=JSON.stringify(item.input)+'\n',actual=run(['check','rules','--lint=none'],input);
  assert.equal(actual.exit,1,JSON.stringify(actual));
  const local=JSON.parse(inspect_json(JSON.stringify({query:'up'})));assert.equal(local.accepted,true);
  cases.push({id:item.id,input,inputSha256:hash(input),moonbitExpression:local,ruleStructureCheckedByMoonBit:false,...actual});
}
for (const item of [
  {id:'local-ast-depth-limit',query:Array(100).fill('up').join('+'),error:/depth exceeds 64/},
  {id:'local-source-limit',query:'up #'+'.'.repeat(100001),error:/source limit/},
]) {
  const input=JSON.stringify(rule(item.query))+'\n',actual=run(['check','rules','--lint=none'],input);
  assert.equal(actual.exit,0,JSON.stringify(actual));
  const local=JSON.parse(inspect_json(JSON.stringify({query:item.query})));
  assert.equal(local.accepted,false);assert.match(local.error,item.error);
  cases.push({id:item.id,inputGenerator:item.id,queryCharacters:item.query.length,inputSha256:hash(input),moonbit:local,intentionalLocalResourceLimit:true,...actual});
}
const report={date:new Date().toISOString(),reference:'Prometheus promtool 3.14.0',version,binarySha256:hash(fs.readFileSync(binary)),sourceHash,
  cases,checksPassed:cases.length,coreChanged:false,executionPerformed:false,serverRequired:false,
  scope:'Seven selected expression parse/type outcomes, five rule-file/lint checks, and two intentional local resource limits. Promtool runs locally with stdin; no Prometheus server or query evaluation. MoonBit does not validate rule YAML or rule-level duplication.',
  engineSha256:hash(fs.readFileSync(path.join(root,'web/engine.mjs')))};
fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');
console.log(`promtool boundary checks: ${cases.length} passed; expression evaluation not tested`);
