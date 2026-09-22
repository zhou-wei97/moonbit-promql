#!/usr/bin/env node
// A portable CI/editor input manifest; not a Prometheus YAML rule-file validator.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {inspect_json} from '../web/engine.mjs';

try {
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === '--help') {
    console.log('Usage: node tools/check-queries.mjs queries.json\nInput: {queries:[{id,query}...]}, optional per-query ParserOptions flags.\nValidates every query, preserving ids. JSON stdout. Exit 0 accepted, 2 query rejected, 1 manifest/IO error.\nNo query execution, YAML loading, server access, or recording-rule ordering checks.');
  } else {
    if (args.length !== 1) throw Error('Expected one query manifest; use --help');
    const fd = fs.openSync(args[0], 'r');
    let bytes;
    try {
      if (!fs.fstatSync(fd).isFile()) throw Error('Manifest must be a regular file');
      const buffer = Buffer.alloc(2097153); let size = 0;
      while (size < buffer.length) { const n = fs.readSync(fd, buffer, size, buffer.length-size, null); if (!n) break; size += n; }
      if (size > 2097152) throw Error('Manifest exceeds 2 MiB');
      bytes = buffer.subarray(0,size);
    } finally { fs.closeSync(fd); }
    const manifest = JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes));
    if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest) ||
        Object.keys(manifest).some(k=>k!=='queries') || !Array.isArray(manifest.queries) ||
        manifest.queries.length < 1 || manifest.queries.length > 256) throw Error('Expected 1..256 queries');
    const ids = new Set(), flags = new Set(['experimental_functions','duration_expressions','extended_ranges','fill_modifiers']);
    // Validate the manifest fully before producing results; malformed jobs fail atomically.
    for (const entry of manifest.queries) {
      if (!entry || typeof entry !== 'object' || Array.isArray(entry) || typeof entry.id !== 'string' ||
          !entry.id.trim() || entry.id.length > 256 || ids.has(entry.id) || typeof entry.query !== 'string') throw Error('Query id must be unique and query must be a string');
      for (const [key,value] of Object.entries(entry)) if (!['id','query'].includes(key) && (!flags.has(key)||typeof value!=='boolean')) throw Error('Unknown/non-boolean query option: '+key);
      ids.add(entry.id);
    }
    const results = manifest.queries.map(({id,...request})=>({id,...JSON.parse(inspect_json(JSON.stringify(request)))}));
    const rejected = results.filter(r=>!r.accepted).length;
    console.log(JSON.stringify({schemaVersion:1,source:args[0],inputSha256:createHash('sha256').update(bytes).digest('hex'),accepted:results.length-rejected,rejected,results}));
    process.exitCode = rejected ? 2 : 0;
  }
} catch(error) { console.error(JSON.stringify({error:error.message})); process.exitCode=1; }
