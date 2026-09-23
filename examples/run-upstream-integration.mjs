#!/usr/bin/env node
import assert from 'node:assert/strict';
import {mkdirSync, writeFileSync} from 'node:fs';
import {inspect_query} from './integration-engine.mjs';

const sources = [
  '1 + 2', 'temperature', 'temperature{job="@mail"}',
  'avg_over_time(temperature[2m])', 'sum(temperature)',
  'rate(temperature[2m])', 'temperature[1h30m]',
  'rate(temperature[5m])[30m:1m]', 'temperature @ 120',
  'sum(rate(temperature[2m] @ 60000))', 'sum(1)',
  'temperature +', 'absent(up)', 'mystery(temperature)',
  'temperature{job=~".*mail"}', 'temperature offset 1m',
];
const rows=sources.map(source=>JSON.parse(inspect_query(source)));
const bySource=new Map(rows.map(r=>[r.source,r]));
for (const row of rows) {
  if(row.prepared.ok) assert.deepEqual(row.prepared.execution,row.direct);
}
for(const [source,expected] of [['1 + 2',[3]],['avg_over_time(temperature[2m])',[2.5]],['sum(temperature)',[3]],['temperature{job="@mail"}',[3]]]) {
  const row=bySource.get(source);
  assert.equal(row.prepared.ok,true);
  assert.deepEqual(row.prepared.execution.value.numbers,expected);
}
assert.equal(bySource.get('sum(1)').prepared.stage,'static');
assert.equal(bySource.get('rate(temperature[5m])[30m:1m]').prepared.stage,'runtime-syntax');
for(const source of ['temperature @ 120','sum(rate(temperature[2m] @ 60000))']) assert.equal(bySource.get(source).prepared.stage,'unsupported');
assert.equal(bySource.get('absent(up)').prepared.ok,true);
assert.equal(bySource.get('absent(up)').prepared.execution.ok,false);
const report={ok:true,upstream:'Santa968/moonpromql@0.1.0',fixture:'Original synthetic temperature: (0ms,1),(60000ms,2),(120000ms,3); evaluation=120000ms',scope:'Actual upstream parser/evaluator; selected cases only; static success is not runtime or Prometheus equivalence',cases:rows};
if(process.argv[2]) {mkdirSync(process.argv[2],{recursive:true});writeFileSync(`${process.argv[2]}/report.json`,JSON.stringify(report,null,2)+'\n');}
console.log(JSON.stringify(report,null,2));
