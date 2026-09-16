import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {readFileSync, writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {inspect_json} from '../web/engine.mjs';
const root = new URL('../',import.meta.url);
const read = p=>readFileSync(new URL(p,root),'utf8');
const metadata=JSON.parse(read('evidence/reference-metadata.json'));
const requests=[];
const seen=new Set();
function add(query,experimental=false){const r={query,experimental};const key=JSON.stringify(r);if(!seen.has(key)){seen.add(key);requests.push(r);}}
const queries=[
'up','sum by(job)(rate(http_requests_total{status=~"5.."}[5m]))','(up)','(up)[5m]','up[5m]','up[1h:5m]','rate(up[5m])[1h:]',
'1+2*3','-2^2','(-2)^2','2^3^4','-up^2','--1','+-1','1 < bool 2','1 < 2','up == bool on(job) group_left(zone) other',
'up + on() 1','up + ignoring() group_left 1','up + on(job) 1','up and on() other','up or on(job) group_left other','up + group_left other',
'up + on(job) group_left(job) other','sum by(job,job)(up)','sum by("a.b",标签)(up)','sum by("a.b","标签")(up)','sum by(job)(up) by(zone)',
'{}','{job=""}','{job!=""}','{job!="api"}','{job=~".*"}','{job=~".+"}','{job!~".*"}','{job!~".+"}','{job="",instance="x"}',
'up{__name__="other"}','{__name__="up",__name__="other"}','{"metric.name", "标签"="值"}','{"metric.name"}','{""}','up{"metric"}','up{""="a"}',
'up{and="a",on="b",bool="x"}','up{a="x",}','up{a="x",,}','{123="x"}','{"\\xff"="a"}','{"a"="\\xff"}','{a=~"\\xff"}',
'"\\xff"', '"\\uFEFF"','"\\U0001f600"','"\\377"','"\\400"','"\\uD800"','"\\U00110000"','"\\x0"','"a\\\'b"',"'a\\\"b'",'`a\nb`','"a\nb"',
'0','012','08','0x10','0x_10','0x7fffffffffffffff','0x8000000000000000','0b10','0x1p2','1_234.5_6e1_0','1__2','1e309','1e-9999','1h30m','1_2m','NaN','-Inf','iNF',
'up offset 0s','up offset 0s offset 1s','up offset 1s offset 0s','up @ 1 @ 2','up @ start()','up @ 1.001','up @ -1.001','up @ 1e16','up @ 1h',
'up[0s]','up[-1]','up[+1]','up[1e-10]','up[1.2]','up[1h1m]','up[1m1h]','up[1h1h]','up[1d:0]','up offset 1h[5m]','up @ 1[5m]',
'up anchored','up anchored anchored','up anchored smoothed','up[5m] smoothed','up smoothed[5m]','up[1h:] anchored',
'up + fill(0) other','up + on(job) group_left fill_left(-Inf) fill_right(NaN) other','up or fill(0) other','1 + fill(0) up',
'up[step()]','up[range()]','up[min_of(1h,step()*2)]','up[1h+2m]','up[(5m)]','up[1-2]','up[1/0]','up[1/(1-1)]','up[-step()]',
'up offset step()','up offset (1h+step())','up offset -(step()+1)','up offset 1+2','up[5m:step()]','up[5m:1+2]',
'info(up,{})','info(up,{a=""})','info(up,{"name"})','info(up,up)','info(up,({}))','info(up,{} offset 1s)','info(up,rate(up[5m]))',
'SUM(up)','ABS(up)','ON','and','offset','fill','anchored','range','step','NaNx','up # comment\n + 1','up\v+1','up\f+1','测试','up // comment',
];
for(const q of queries){add(q);add(q,true);}
for (const literal of ['.5','1.','1e+2','1E-2','00','01_2','0_7','0_8','0777777777777777777777','0999999999999999999999','0XfF','0x_FF','0xFF_','0x_F_F','0x__f','-0','+Inf','-NaN','1e-324','5e-324','2.2250738585072014e-308','1.7976931348623157e308','1.7976931348623159e308','9007199254740993','1d12h30m5s1ms','0ms','1ms','1y','1w','1s1ms','1ms1s','1.5m','1h0m','9223372036.854775','9223372036.854775807','9223372036.854776','9223372036854ms','9223372036855ms']){
 for(const template of [s=>s,s=>`up[${s}]`,s=>`up offset ${s}`,s=>`up @ ${s}`])add(template(literal),true);
}
for(const keyword of ['on','ignoring','group_left','group_right','bool','by','without','offset','and','or','unless','atan2','anchored','smoothed','fill','fill_left','fill_right','step','range','min_of','max_of','start','end','limitk','limit_ratio','sum']){
 for(const template of [s=>s,s=>`up{${s}="a"}`,s=>`sum by(${s})(up)`])add(template(keyword),true);
}
for(const query of ['step()','up[step()]','up anchored','up + fill(0) other','limitk(1,up)','info(up,{})'])for(const flag of ['experimental_functions','duration_expressions','extended_ranges','fill_modifiers'])requests.push({query,[flag]:true});
for(const query of ['up[+step()]','up[-step()]','up[(1h+2m)*2]','up[2^3^4]','up[-1^2]','up[1h+-1h]','up[2%0]','up[1e-10:1e-10]','up offset 1e-10 offset 1','up offset -0 offset 1','up smoothed smoothed','up anchored[5m] anchored','up{a=~"\\xff|x"}','up{a=~"\\xff*"}','up{a=~"|\\xff"}','up{a="\\uFEFF"}','up{"\\uFEFF"="a"}'])add(query,true);
const value={vector:'up',matrix:'up[5m]',scalar:'1',string:'"label"'};
for(const fn of Object.values(metadata.functions)){
 const args=fn.ArgTypes.map(t=>value[t]); if(fn.Name==='info')args[1]='{}';
 for(const exp of [false,true]){
  add(`${fn.Name}(${args.join(',')})`,exp);
  add(`${fn.Name}()`,exp);
  add(`${fn.Name}(${args.concat('1').join(',')})`,exp);
  for(let i=0;i<args.length;i++){const wrong=[...args];wrong[i]=fn.ArgTypes[i]==='string'?'1':'"bad"';add(`${fn.Name}(${wrong.join(',')})`,exp);}
  if(fn.Variadic!==0){add(`${fn.Name}(${args.slice(0,-1).join(',')})`,exp);add(`${fn.Name}(${args.concat(Array(12).fill(args.at(-1))).join(',')})`,exp);}
 }
}
for(const op of ['+','-','*','/','%','^','==','!=','>','<','>=','<=','and','or','unless','atan2'])for(const a of ['up','1','up[5m]','"x"'])for(const b of ['other','2'])for(const mod of ['','bool ','on() ','ignoring(job) group_right(zone) '])add(`${a} ${op} ${mod}${b}`);
const regexes=['','a','.*','.+','^$','a|','|a','()','(?:)','(?i)','(?i:a)','(?-i)','(?i-)','(?P<x>a)','(?<x>a)','(?P<1>a)','(?=a)','(?!a)','(?<=a)','(a)\\1','\\1','\\0','\\00','\\12','\\123','\\777','\\8','\\u0041','\\x41','\\x{10ffff}','\\x{d800}','\\x{110000}','\\x{}','\\pL','\\p{Greek}','\\p{^Latin}','\\p{NotReal}','\\Qabc\\E*','\\Q\\E*','\\Qx','[a-z]','[z-a]','[\\d-a]','[a-\\d]','[]]','[^]','[]','[[:alpha:]]','[[:word:]]','[[:bad:]]','[\\b]','\\b','\\B','\\A\\z','\\b?','(?i)*','a(?i)*','a**','a*?','a+?','a??','a{0}','a{00}','a{1,}','a{1001}','a{2,1}','a{2,03}','(a{100}){11}','(a*){1000}','(?:a|)*','(?i-m:a)','(?U:.*)','a\0b',')','(','[a-]'];
for(const prop of metadata.unicodeProperties??[])regexes.push(`\\p{${prop}}`);
for(const pattern of regexes){requests.push({regex:pattern});for(const op of ['=~','!~'])add(`{a${op}${JSON.stringify(pattern)}}`);}
let seed=123456789;const next=n=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed%n;};
const atoms=['a','b','[a-z]','\\d','\\b','\\B','(?:)','.', '^','$','\\Qab\\E'];
for(let i=0;i<400;i++){let p='';for(let j=0;j<1+next(4);j++)p+=atoms[next(atoms.length)]+['','*','+','?','{0,2}'][next(5)];if(next(3)===0)p=`(?:${p}|${atoms[next(atoms.length)]})`;requests.push({regex:p});}
// Explicitly generated expressions provide precedence and nested-modifier coverage.
for(let i=0;i<200;i++){const a=['up','rate(up[5m])','sum by(job)(up)','vector(1)'][next(4)];const b=['other','1','(up+2)'][next(3)];add(`(${a} ${['+','*','^','/'][next(4)]} ${b}) ${['+','/','atan2'][next(3)]} ${next(10)+1}`);}
export function canonical(ast){
 if(ast===null)return null;
 if(!Array.isArray(ast))return ast;
 const tag=ast[0];
 if(tag==='number'){const n=Number(ast[1]==='+Inf'?'Infinity':ast[1]==='-Inf'?'-Infinity':ast[1]);return ['number',Number.isNaN(n)?'NaN':!Number.isFinite(n)?String(n):Object.is(n,-0)?0:n];}
 if(tag==='unary'){const v=canonical(ast[2]);if(v[0]==='number'){if(ast[1]==='+')return v;return canonical(['number',String(-Number(v[1]))]);}return ['unary',ast[1],v];}
 if(tag==='binary'){
  const a=canonical(ast[2]),b=canonical(ast[3]);const m=ast[5];
  const scalar=v=>v[0]==='number'||(v[0]==='binary'&&v[5]===null)||(v[0]==='call'&&metadata.functions[v[1]]?.ReturnType==='scalar')||(v[0]==='unary'&&scalar(v[2]));
  let matching=null;
  if(!scalar(a)&&!scalar(b)){matching={mode:m?.mode==='on'?'on':'ignoring',labels:m?.labels??[],group:m?.group??'',include:m?.include??[],left:m?.left==null?null:canonical(['number',m.left])[1],right:m?.right==null?null:canonical(['number',m.right])[1]};}
  return [tag,ast[1],a,b,ast[4],matching];
 }
 if(tag==='aggregate')return [tag,ast[1],ast[2]??[],ast[3],canonical(ast[4]),canonical(ast[5])];
 if(tag==='call')return [tag,ast[1],ast[2].map(canonical)];
 if(tag==='selector')return [tag,ast[1],ast[2],canonical(ast[3]),...ast.slice(4)];
 if(tag==='range')return [tag,canonical(ast[1]),canonical(ast[2])];
 if(tag==='subquery')return [tag,...ast.slice(1,5).map(canonical),...ast.slice(5)];
 if(tag==='duration')return [tag,ast[1],canonical(ast[2]),canonical(ast[3])];
 return ast;
}
let references;
const golden=process.argv.includes('--golden');
if(golden){const saved=JSON.parse(read('evidence/parser-reference-vectors.json'));assert.deepEqual(saved.requests,requests,'corpus changed; regenerate with live oracle');references=saved.references;}
else {
 const executable=process.env.PROMQL_REFERENCE;assert(executable,'Set PROMQL_REFERENCE to the independently built Go adapter, or pass --golden');
 const r=spawnSync(executable,[],{input:requests.map(r=>JSON.stringify(r)).join('\n')+'\n',encoding:'utf8',windowsHide:true,maxBuffer:64*1024*1024,timeout:90000});
 assert.equal(r.status,0,r.stderr||String(r.error));references=r.stdout.trim().split(/\r?\n/).map(s=>JSON.parse(s));
 assert.equal(references.length,requests.length,'reference must respond to every input');
 assert(!references.some(r=>r.adapterError),'reference adapter failed');
 writeFileSync(new URL('evidence/parser-reference-vectors.json',root),JSON.stringify({reference:'Prometheus v3.14.0 / module v0.314.0',requests,references},null,2)+'\n');
}
const results=requests.map((request,i)=>{
 const actual=JSON.parse(inspect_json(JSON.stringify(request))),reference=references[i];let mismatch;
 if(actual.accepted!==reference.accepted)mismatch='acceptance';
 else if(actual.accepted&&request.regex!==undefined&&actual.matchesEmpty!==reference.matchesEmpty)mismatch='empty matching';
 else if(actual.accepted&&request.query!==undefined){if(actual.type!==reference.type)mismatch='type';else{try{assert.deepEqual(canonical(actual.ast),canonical(reference.ast));}catch{mismatch='AST';}}}
 return {request,passed:!mismatch,...(mismatch?{mismatch,actual,reference}:{})};
});
const failed=results.filter(r=>!r.passed);
const sha=p=>createHash('sha256').update(readFileSync(new URL(p,root))).digest('hex');
writeFileSync(new URL('evidence/parser-reference-validation.json',root),JSON.stringify({date:new Date().toISOString(),mode:golden?'saved independent vectors':'live independent parser',reference:'github.com/prometheus/prometheus v0.314.0',scope:'acceptance, result type, normalized AST; RE2 acceptance and empty-string matching; no query evaluation',total:results.length,queries:requests.filter(r=>r.query!==undefined).length,regex:requests.filter(r=>r.regex!==undefined).length,accepted:references.filter(r=>r.accepted).length,passed:results.length-failed.length,failed:failed.length,hashes:Object.fromEntries(['web/engine.mjs','tools/test-reference.mjs','tools/prometheus-reference/main.go','tools/prometheus-reference/go.mod','tools/prometheus-reference/go.sum','evidence/parser-reference-vectors.json'].map(p=>[p,sha(p)])),failures:failed},null,2)+'\n');
console.log(`${results.length-failed.length}/${results.length} independent reference cases agree (${failed.length} differences)`);
for(const r of failed.slice(0,35))console.log(JSON.stringify(r));
if(failed.length)process.exitCode=1;
