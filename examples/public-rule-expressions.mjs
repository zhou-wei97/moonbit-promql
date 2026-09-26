import assert from 'node:assert/strict';
import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {inspect_json} from '../web/engine.mjs';
const source=fs.readFileSync(new URL('./prometheus-rules/prometheus-rules.lint.yml',import.meta.url),'utf8');
const manifest=JSON.parse(fs.readFileSync(new URL('./prometheus-rules/queries.json',import.meta.url),'utf8'));
// Assert the two manually selected one-line expressions still match this fixed
// fixture. This is deliberately not a YAML reader or a rule validator.
const expressions=[...source.matchAll(/^    expr: (.+)$/gm)].map(m=>m[1]);
assert.deepEqual(expressions,manifest.queries.map(q=>q.query));
const results=manifest.queries.map(q=>({id:q.id,...JSON.parse(inspect_json(JSON.stringify({query:q.query})))}));
assert.ok(results.every(r=>r.accepted&&r.type==='vector'),JSON.stringify(results));
const cli=spawnSync(process.execPath,[fileURLToPath(new URL('../tools/check-queries.mjs',import.meta.url)),fileURLToPath(new URL('./prometheus-rules/queries.json',import.meta.url))],{encoding:'utf8',windowsHide:true});
assert.equal(cli.status,0,cli.stderr);assert.equal(JSON.parse(cli.stdout).accepted,2);
console.log(JSON.stringify({expressions:results,ruleFileValidated:false,duplicateRuleDetection:false,executionPerformed:false,explanation:'Both duplicated alert expressions are valid instant vectors; rule-level duplicate detection belongs to promtool.'},null,2));
