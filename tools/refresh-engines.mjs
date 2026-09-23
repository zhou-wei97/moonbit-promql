import {copyFileSync} from 'node:fs';
for (const [name,target] of [['web','web/engine.mjs'],['integration','examples/integration-engine.mjs']]) {
  copyFileSync(new URL(`../_build/js/debug/build/cmd/${name}/${name}.js`,import.meta.url),new URL('../'+target,import.meta.url));
}
console.log('Updated web and integration engines from the current JS build.');
