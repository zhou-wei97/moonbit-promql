import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {inspect_json} from '../web/engine.mjs';
const cli=new URL('cli.mjs',import.meta.url);
function invoke(args,input){const r=spawnSync(process.execPath,[cli.pathname.replace(/^\/([A-Za-z]:)/,'$1'),...args],{input,encoding:'utf8',windowsHide:true,timeout:10000});assert(!r.error,String(r.error));return r;}
let count=0;
for(const [args,query,status,type] of [
 [[], 'up',0,'vector'],
 [[], '1<2',2,undefined],
 [['--experimental'],'up[step()]',0,'matrix'],
 [['--features','durations'],'up[step()]',0,'matrix'],
 [['--features','functions'],'up[step()]',2,undefined],
 [['--features','functions'],'step()',0,'scalar'],
 [['--features','ranges,fills'],'up anchored + fill(0) other',0,'vector'],
]){const r=invoke(['--ast',...args],query);assert.equal(r.status,status,r.stderr);const out=JSON.parse(r.stdout);assert.equal(out.accepted,status===0);if(type)assert.equal(out.type,type);count++;}
const bytes=JSON.parse(invoke(['--ast','--input','"\\xff"']).stdout);assert.deepEqual(bytes.ast,['string','/w==']);count++;
const invalid=JSON.parse(invoke(['--ast'],'"😀"\n?').stdout);assert.deepEqual(invalid.span,{start:4,end:5,line:2,column:1});count++;
assert.equal(invoke(['--features','unknown'],'up').status,1);count++;
assert.equal(invoke(['--features'],'up').status,1);count++;
assert.equal(JSON.parse(invoke(['--json','--experimental'],'info(up,{})').stdout).ok,true);count++;
for(const request of [{query:'up'},{regex:'\\Qab\\E*'},{query:'up',duration_expressions:true}])assert.equal(JSON.parse(inspect_json(JSON.stringify(request))).accepted,true);
assert.equal(JSON.parse(inspect_json('invalid json')).accepted,false);
assert.equal(JSON.parse(inspect_json('{}')).accepted,false);
assert.equal(JSON.parse(inspect_json('{"metadata":true}')).length,90);count++;
console.log(`${count} structured inspector/CLI fixture groups passed`);
