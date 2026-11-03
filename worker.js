/**
 * Optional Cloudflare Worker + D1 consortium evidence for INNOWINE D3.5.
 * Deployment and a GDPR review are REQUIRED before use with real learners.
 * No registration; explicit opt-in is required in the client.
 * Only pseudonymous learner/attempt IDs and decision scores are accepted.
 * No request IP, cookies, precise location or user agent are written to D1.
 */
const allowedSkills = new Set(['quality','planet','trust','market','access']);
const allowedRoles = new Set(['learner','producer','trainer']);
const hasOwn=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
const isID=v=>typeof v==='string'&&v.length>=8&&v.length<=80&&/^[a-zA-Z0-9_-]+$/.test(v);
const isUTC=v=>typeof v==='string'&&v.length<=40&&!isNaN(Date.parse(v));
function send(data,status=200,origin='',env={}){
 const headers={'Content-Type':'application/json;charset=utf-8','Cache-Control':'no-store',
 'X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Vary':'Origin'};
 if(origin&&origin===env.ALLOWED_ORIGIN){headers['Access-Control-Allow-Origin']=origin;headers['Access-Control-Allow-Methods']='GET, POST, OPTIONS';headers['Access-Control-Allow-Headers']='Content-Type, Authorization';headers['Access-Control-Max-Age']='600'}
 return new Response(JSON.stringify(data),{status,headers});
}
function validation(x){
 if(!x||typeof x!=='object'||Array.isArray(x))return 'Invalid JSON object';
 const required=['event_id','learner_id','attempt_id','scenario','step','grade','skill','choice','at','role','app_version'];
 if(!required.every(k=>hasOwn(x,k)))return 'Missing fields';
 if(![x.event_id,x.learner_id,x.attempt_id].every(isID))return 'Invalid event IDs';
 if(!/^\d{2}$/.test(x.scenario)||+x.scenario<1||+x.scenario>15)return 'Scenario outside range';
 const maxStep=x.scenario==='01'||x.scenario==='15'?5:3;
 if(!Number.isInteger(x.step)||x.step<1||x.step>maxStep)return 'Invalid step';
 if(!Number.isInteger(x.grade)||x.grade<0||x.grade>2)return 'Invalid grade';
 if(!allowedSkills.has(x.skill)||!allowedRoles.has(x.role)||!['A','B','C'].includes(x.choice))return 'Invalid category';
 if(!isUTC(x.at)||typeof x.app_version!=='string'||x.app_version.length>30)return 'Invalid timestamp or version';
 return '';
}
function authorized(req,env){const token=req.headers.get('Authorization')||'';return!!env.ADMIN_TOKEN&&token===`Bearer ${env.ADMIN_TOKEN}`}
const COMPLETIONS_SQL=`WITH attempts AS (
 SELECT learner_id,scenario,attempt_id,COUNT(DISTINCT step) AS n,
 SUM(CASE WHEN grade=0 THEN 1 ELSE 0 END) AS errors,
 MAX(occurred_at) AS finished
 FROM decisions GROUP BY learner_id,scenario,attempt_id
), valid AS (
 SELECT *,ROW_NUMBER() OVER(PARTITION BY learner_id,scenario ORDER BY finished DESC,attempt_id DESC) AS ord
 FROM attempts WHERE n=CASE WHEN scenario IN (1,15) THEN 5 ELSE 3 END
), paired AS (
 SELECT b.learner_id,b.errors AS b_errors,f.errors AS f_errors
 FROM valid b JOIN valid f ON b.learner_id=f.learner_id
 WHERE b.scenario=1 AND f.scenario=15 AND b.ord=1 AND f.ord=1
)
SELECT (SELECT COUNT(DISTINCT learner_id) FROM valid) AS completed_users,
 (SELECT COUNT(*) FROM valid WHERE ord=1) AS completed_scenarios_latest,
 (SELECT COUNT(*) FROM paired) AS paired_users,
 (SELECT COALESCE(SUM(b_errors),0) FROM paired) AS baseline_errors,
 (SELECT COALESCE(SUM(f_errors),0) FROM paired) AS final_errors`;
export default {
 async fetch(req,env){
  const u=new URL(req.url),origin=req.headers.get('Origin')||'';
  if(req.method==='OPTIONS')return origin===env.ALLOWED_ORIGIN?send({},200,origin,env):send({error:'Origin not allowed'},403,origin,env);
  if(u.pathname==='/health'&&req.method==='GET')return send({ok:true,service:'INNOWINE-D3.5'},200,origin,env);
  if(u.pathname==='/event'&&req.method==='POST'){
   if(!env.ALLOWED_ORIGIN||origin!==env.ALLOWED_ORIGIN)return send({error:'Origin not allowed'},403,origin,env);
   if(Number(req.headers.get('Content-Length')||0)>4096)return send({error:'Payload too large'},413,origin,env);
   let raw;try{raw=await req.text();if(raw.length>4096)throw new Error();}catch{return send({error:'Payload too large'},413,origin,env)}
   let data;try{data=JSON.parse(raw)}catch{return send({error:'Invalid JSON'},400,origin,env)}
   const problem=validation(data);if(problem)return send({error:problem},400,origin,env);
   try{
    await env.DB.prepare(`INSERT OR IGNORE INTO decisions
     (event_id,learner_id,attempt_id,scenario,step,grade,skill,choice,occurred_at,role,app_version)
     VALUES (?,?,?,?,?,?,?,?,?,?,?)`).bind(data.event_id,data.learner_id,data.attempt_id,Number(data.scenario),data.step,data.grade,data.skill,data.choice,data.at,data.role,data.app_version).run();
    return send({ok:true},200,origin,env);
   }catch(e){return send({error:'Database unavailable'},503,origin,env)}
  }
  if(u.pathname==='/admin/summary'&&req.method==='GET'){
   if(!authorized(req,env))return send({error:'Unauthorized'},401,origin,env);
   const total=await env.DB.prepare('SELECT COUNT(*) AS choice_events FROM decisions').first();
   const stats=await env.DB.prepare(COMPLETIONS_SQL).first();
   const improvement=stats.baseline_errors>0?(stats.baseline_errors-stats.final_errors)/stats.baseline_errors*100:null;
   return send({delivery:'D3.5',unique_completers:stats.completed_users,choice_events:total.choice_events,
     completed_scenarios_latest:stats.completed_scenarios_latest,paired_users:stats.paired_users,
     baseline_errors:stats.baseline_errors,final_errors:stats.final_errors,
     cohort_error_reduction_percent:improvement,targets:{unique_completers:300,choice_events:5000,relative_error_reduction_percent:20},
     interpretation:'Matched completed cohorts, most recent attempt per learner for baseline and final, equal five-question assessments. Report success only after peer-reviewed validation.'},200,origin,env);
  }
  if(u.pathname==='/admin/events'&&req.method==='GET'){
   if(!authorized(req,env))return send({error:'Unauthorized'},401,origin,env);
   const limit=Math.min(Math.max(parseInt(u.searchParams.get('limit')||'1000',10)||1000,1),5000);
   const offset=Math.max(parseInt(u.searchParams.get('offset')||'0',10)||0,0);
   const rows=await env.DB.prepare('SELECT * FROM decisions ORDER BY recorded_at ASC, event_id ASC LIMIT ? OFFSET ?').bind(limit,offset).all();
   return send({offset,limit,records:rows.results||[],note:'Pseudonymous learner identifiers can still be personal data. Limit access and retention.'},200,origin,env);
  }
  return send({error:'Not found'},404,origin,env);
 }
};
