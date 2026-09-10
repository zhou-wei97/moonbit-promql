import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { run } from '../web/engine.mjs';

const executable = process.env.PROMTOOL ?? 'promtool';
const cases = [
  'a / ignoring(code) group_left(job) b', '1 < bool 2',
  'a == bool on(job) group_right(zone) b', 'a unless on() b', 'a atan2 b',
  'a / ignoring(code,) group_left b', 'sum(up) by(job,)', 'topk(5, up) by(job)',
  'bottomk without(instance)(2, up)', 'count_values("version", up)', 'quantile(0.9, up)',
  'group(up)', 'stddev(up)', 'label_replace(up,"dst","$1","src","(.*)")',
  'label_join(up,"dst","-","job","instance")', 'histogram_quantile(0.9, rate(bucket[5m]))',
  'clamp(up,0,1)', 'up[1h30m] offset -5m @ start()', 'rate(up[5m])[1h:30s]',
  'up @ 1609746000.5 offset 1w', 'up offset 0s @ end()',
  'sum_over_time((up + 1)[1h:])', '(up + 1)[1h:1m] @ end()',
  '1 < 2', 'up + bool up', 'up + on(job) 1', 'up or on(job) group_left up',
  'up + on(job) group_left(job) up', 'up + group_left up', 'topk(up, up)',
  'count_values(1, up)', 'sum(1)', 'sum by(job)(up) without(code)',
  'up offset 1h offset 2h', 'sum(up) offset 1h', 'up @ start() @ end()',
  'up[1m1h]', 'up[1h1h]', 'up[0h0m]', 'up[999999999999999999999d]',
  'up[1h:0m]', 'up[1h][1d:]', '1[1h:]', 'up offset 5m[1h]',
  'clamp(up,up,1)', 'label_replace(up,1,2,3,4)', 'up // ignored',
  '(up offset 1h) offset 2h', '(up @ 1) @ 2', 'up + on(job) on',
];
function invoke(args) {
  const r = spawnSync(executable, args, { encoding: 'utf8', timeout: 15000, windowsHide: true });
  if (r.error || r.signal) throw r.error ?? new Error(`promtool terminated: ${r.signal}`);
  return r;
}
const version = invoke(['--version']);
if (version.status !== 0) throw new Error(version.stderr);
const probe = invoke(['--experimental', 'promql', 'format', 'up']);
if (probe.status !== 0) throw new Error('promtool format unavailable: ' + probe.stderr);
const results = cases.map(query => {
  const reference = invoke(['--experimental', 'promql', 'format', query]);
  const output = run(query);
  const actualAccepted = !output.startsWith('ERROR:');
  const referenceAccepted = reference.status === 0;
  return { query, referenceAccepted, actualAccepted, passed: actualAccepted === referenceAccepted,
    referenceOutput: (reference.stdout + reference.stderr).trim(), output };
});
const failed = results.filter(r => !r.passed);
writeFileSync(new URL('../evidence/promtool-focused-validation.json', import.meta.url), JSON.stringify({
  date: new Date().toISOString(), reference: (version.stdout + version.stderr).trim(),
  archiveUrl: 'https://github.com/prometheus/prometheus/releases/download/v3.14.0/prometheus-3.14.0.windows-amd64.tar.gz',
  archiveSha256: '272bcdd15d9327c7b1e08fe916ea48633819f82f2ea0bf354e6b8c0350c156ba',
  engineSha256: createHash('sha256').update(readFileSync(new URL('../web/engine.mjs', import.meta.url))).digest('hex'),
  scope: 'syntax and static semantic acceptance; no query evaluation',
  total: results.length, passed: results.length - failed.length, failed: failed.length, results,
}, null, 2) + '\n');
console.log(`${results.length - failed.length}/${results.length} reference acceptance cases agree`);
for (const result of failed) console.log(JSON.stringify(result));
if (failed.length) process.exitCode = 1;
