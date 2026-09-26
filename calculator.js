/* tool-sofa · Elucenia · https://github.com/Elucenia/tool-sofa
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"sofa","title":"Escore SOFA","fields":[["pao2","PaO₂","num",{"min":20,"max":700,"unit":"mmHg","ph":"80"}],["fio2","FiO₂","num",{"min":21,"max":100,"unit":"%","ph":"40"}],["suporte","Em ventilação mecânica ou suporte ventilatório?","radio",{"opts":{"0":"Não","1":"Sim"}}],["plaq","Plaquetas","num",{"min":1,"max":1500,"unit":"×10³/µL","ph":"150"}],["bili","Bilirrubina total","num",{"min":0.1,"max":50,"step":0.1,"unit":"mg/dL","ph":"1,0"}],["cv","Cardiovascular (doses em mcg/kg/min por ≥ 1 h)","sel",{"opts":{"0":"PAM ≥ 70 mmHg, sem vasopressor","1":"PAM &lt; 70 mmHg","2":"Dopamina ≤ 5 ou dobutamina (qualquer dose)","3":"Dopamina &gt; 5, adrenalina ≤ 0,1 ou noradrenalina ≤ 0,1","4":"Dopamina &gt; 15, adrenalina &gt; 0,1 ou noradrenalina &gt; 0,1"}}],["gcs","Escala de Coma de Glasgow","num",{"min":3,"max":15,"ph":"15"}],["cr","Creatinina","num",{"min":0.1,"max":20,"step":0.1,"unit":"mg/dL","ph":"1,0"}],["diurese","Diurese em 24 h","num",{"min":0,"max":10000,"unit":"mL/dia","ph":"1500","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
var r=function(a,e,o){for(var i=0;i<e.length;i++)if(a>=e[i][0])return e[i][1];return o};
a.def("sofa",function(a){var e=a.pao2/(a.fio2/100),i="1"===a.suporte,n=e<100&&i?4:e<200&&i?3:e<300?2:e<400?1:0,c=a.plaq<20?4:a.plaq<50?3:a.plaq<100?2:a.plaq<150?1:0,s=r(a.bili,[[12,4],[6,3],[2,2],[1.2,1]],0),l=+a.cv,d=a.gcs>=15?0:a.gcs>=13?1:a.gcs>=10?2:a.gcs>=6?3:4,t=r(a.cr,[[5,4],[3.5,3],[2,2],[1.2,1]],0);null!=a.diurese&&(t=Math.max(t,a.diurese<200?4:a.diurese<500?3:0));var m=n+c+s+l+d+t,p=m<2?"low":m<10?"mid":"high",u=m<2?"Sem disfunção orgânica relevante pelo SOFA":m<10?"Disfunção orgânica (SOFA ≥ 2)":"Disfunção orgânica grave (SOFA ≥ 10)";return{main:[String(m),"de 24"],label:"Escore SOFA",level:p,verdict:u,rows:[["Respiratório (PaO₂/FiO₂ "+o(e,0)+")",n],["Coagulação",c],["Fígado",s],["Cardiovascular",l],["Sistema nervoso central",d],["Renal",t]],note:"Na Sepsis-3, sepse = infecção com aumento agudo de ≥ 2 pontos em relação ao SOFA basal (considerado 0 se não houver disfunção prévia conhecida).",raw:{score:m,resp:n,coag:c,fig:s,cv:l,snc:d,ren:t,pf:e}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
