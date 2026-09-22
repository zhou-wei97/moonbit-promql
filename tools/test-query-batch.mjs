import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'promql-batch-'));
const cli=fileURLToPath(new URL('./check-queries.mjs',import.meta.url));
const run=(input)=>{const file=path.join(dir,'job.json');fs.writeFileSync(file,typeof input==='object'&&!Buffer.isBuffer(input)?JSON.stringify(input):input);return spawnSync(process.execPath,[cli,file],{encoding:'utf8',timeout:10000,windowsHide:true});};
try {
  const mixed=run({queries:[{id:'valid',query:'rate(up[5m])'},{id:'invalid',query:'rate(up)'},{id:'after-error',query:'up offset 1h30m'}]});
  assert.equal(mixed.status,2,mixed.stderr);const report=JSON.parse(mixed.stdout);
  assert.deepEqual(report.results.map(r=>[r.id,r.accepted]),[['valid',true],['invalid',false],['after-error',true]]);
  assert.equal(report.accepted,2);assert.equal(report.rejected,1);assert.match(report.inputSha256,/^[a-f0-9]{64}$/);
  const duplicate=run({queries:[{id:'x',query:'up'},{id:'x',query:'down'}]});assert.equal(duplicate.status,1);assert.equal(duplicate.stdout,'');
  assert.equal(run(Buffer.from([0xff])).status,1);
  assert.equal(run({queries:[{id:'x',query:'up',typo:true}]}).status,1);
  assert.equal(run({queries:[{id:'x',query:'up'}]}).status,0);
  console.log('batch queries: all records checked, stable ids, duplicate/UTF-8/options rejected');
} finally {
  if(path.dirname(dir)!==path.resolve(os.tmpdir())||!path.basename(dir).startsWith('promql-batch-'))throw Error('Unexpected temporary path');
  fs.rmSync(dir,{recursive:true,force:true});
}
