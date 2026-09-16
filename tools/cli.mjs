import fs from 'node:fs';
import {run, inspect_json} from '../web/engine.mjs';
const args=process.argv.slice(2);let input,json=false,ast=false;
const options={};
const features={functions:'experimental_functions',durations:'duration_expressions',ranges:'extended_ranges',fills:'fill_modifiers'};
try {
 for(let i=0;i<args.length;i++){
  const a=args[i];
  if(a==='--help'){process.stdout.write('Usage: node tools/cli.mjs [--input TEXT | --file PATH] [--json | --ast]\n  --experimental     Enable all four experimental feature groups\n  --features LIST    Comma-separated functions,durations,ranges,fills\nWithout --input/--file, reads UTF-8 stdin. --ast emits structured JSON with byte-safe strings and positions on errors.\nExit: 0 success, 2 invalid query, 1 host/argument error.\n');process.exit(0)}
  else if(a==='--json')json=true;
  else if(a==='--ast')ast=true;
  else if(a==='--experimental')options.experimental=true;
  else if(a==='--features'){
   if(i+1>=args.length)throw new Error('--features requires a list');
   for(const name of args[++i].split(',')){if(!Object.hasOwn(features,name))throw new Error('Unknown feature: '+name);options[features[name]]=true;}
  }
  else if(a==='--input'||a==='--file'){
   if(input!==undefined||i+1>=args.length)throw new Error('Exactly one input source is required');
   const value=args[++i];
   if(a==='--file'){if(fs.statSync(value).size>2097152)throw new Error('Input exceeds 2 MiB');input=fs.readFileSync(value,'utf8')}else input=value;
  }else throw new Error('Unknown argument: '+a);
 }
 if(input===undefined){let size=0;const chunks=[];for await(const chunk of process.stdin){size+=chunk.length;if(size>2097152)throw new Error('Input exceeds 2 MiB');chunks.push(chunk)}input=Buffer.concat(chunks).toString('utf8')}
 if(Buffer.byteLength(input)>2097152)throw new Error('Input exceeds 2 MiB');
 let output,ok;
 if(ast||Object.keys(options).length){
  const result=JSON.parse(inspect_json(JSON.stringify({query:input,...options})));ok=result.accepted;
  if(ast){process.stdout.write(JSON.stringify(result)+'\n');process.exitCode=ok?0:2;}
  else {output=ok?`Type: ${result.type}\nAST: ${JSON.stringify(result.ast)}`:`ERROR: ${result.error}${result.span?` (${result.span.line}:${result.span.column})`:''}`;}
 }else{output=run(input);ok=!output.startsWith('ERROR:');}
 if(!ast){process.stdout.write(json?JSON.stringify({ok,output})+'\n':output+(output.endsWith('\n')?'':'\n'));process.exitCode=ok?0:2;}
}catch(e){process.stderr.write(JSON.stringify({ok:false,error:String(e.message||e)})+'\n');process.exitCode=1}
