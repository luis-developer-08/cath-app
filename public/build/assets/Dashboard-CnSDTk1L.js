var Pe=s=>{throw TypeError(s)};var ue=(s,t,a)=>t.has(s)||Pe("Cannot "+a);var n=(s,t,a)=>(ue(s,t,"read from private field"),a?a.call(s):t.get(s)),C=(s,t,a)=>t.has(s)?Pe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,a),v=(s,t,a,r)=>(ue(s,t,"write to private field"),r?r.call(s,a):t.set(s,a),a),y=(s,t,a)=>(ue(s,t,"access private method"),a);import{S as lt,p as Te,r as T,s as he,a as le,n as it,i as me,b as De,t as ct,f as ot,c as dt,d as Ae,e as ze,g,u as oe,j as e,k,U as Q,h as ne,K as Ve,l as fe,L as ut}from"./app-DMHG94ST.js";import{A as ht}from"./AuthenticatedLayout-B8lFAI83.js";var R,p,ae,O,Y,X,U,P,re,W,G,z,V,$,Z,x,se,pe,xe,be,ge,ve,je,ye,He,Ye,mt=(Ye=class extends lt{constructor(t,a){super();C(this,x);C(this,R);C(this,p);C(this,ae);C(this,O);C(this,Y);C(this,X);C(this,U);C(this,P);C(this,re);C(this,W);C(this,G);C(this,z);C(this,V);C(this,$);C(this,Z,new Set);this.options=a,v(this,R,t),v(this,P,null),v(this,U,Te()),this.options.experimental_prefetchInRender||n(this,U).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(a)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(n(this,p).addObserver(this),Me(n(this,p),this.options)?y(this,x,se).call(this):this.updateResult(),y(this,x,ge).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Ne(n(this,p),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Ne(n(this,p),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,y(this,x,ve).call(this),y(this,x,je).call(this),n(this,p).removeObserver(this)}setOptions(t,a){const r=this.options,u=n(this,p);if(this.options=n(this,R).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof T(this.options.enabled,n(this,p))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");y(this,x,ye).call(this),n(this,p).setOptions(this.options),r._defaulted&&!he(this.options,r)&&n(this,R).getQueryCache().notify({type:"observerOptionsUpdated",query:n(this,p),observer:this});const h=this.hasListeners();h&&Qe(n(this,p),u,this.options,r)&&y(this,x,se).call(this),this.updateResult(a),h&&(n(this,p)!==u||T(this.options.enabled,n(this,p))!==T(r.enabled,n(this,p))||le(this.options.staleTime,n(this,p))!==le(r.staleTime,n(this,p)))&&y(this,x,pe).call(this);const o=y(this,x,xe).call(this);h&&(n(this,p)!==u||T(this.options.enabled,n(this,p))!==T(r.enabled,n(this,p))||o!==n(this,$))&&y(this,x,be).call(this,o)}getOptimisticResult(t){const a=n(this,R).getQueryCache().build(n(this,R),t),r=this.createResult(a,t);return pt(this,r)&&(v(this,O,r),v(this,X,this.options),v(this,Y,n(this,p).state)),r}getCurrentResult(){return n(this,O)}trackResult(t,a){const r={};return Object.keys(t).forEach(u=>{Object.defineProperty(r,u,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(u),a==null||a(u),t[u])})}),r}trackProp(t){n(this,Z).add(t)}getCurrentQuery(){return n(this,p)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const a=n(this,R).defaultQueryOptions(t),r=n(this,R).getQueryCache().build(n(this,R),a);return r.fetch().then(()=>this.createResult(r,a))}fetch(t){return y(this,x,se).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),n(this,O)))}createResult(t,a){var te;const r=n(this,p),u=this.options,h=n(this,O),o=n(this,Y),j=n(this,X),m=t!==r?t.state:n(this,ae),{state:f}=t;let d={...f},_=!1,c;if(a._optimisticResults){const S=this.hasListeners(),D=!S&&Me(t,a),A=S&&Qe(t,r,a,u);(D||A)&&(d={...d,...dt(f.data,t.options)}),a._optimisticResults==="isRestoring"&&(d.fetchStatus="idle")}let{error:w,errorUpdatedAt:E,status:b}=d;if(a.select&&d.data!==void 0)if(h&&d.data===(o==null?void 0:o.data)&&a.select===n(this,re))c=n(this,W);else try{v(this,re,a.select),c=a.select(d.data),c=Ae(h==null?void 0:h.data,c,a),v(this,W,c),v(this,P,null)}catch(S){v(this,P,S)}else c=d.data;if(a.placeholderData!==void 0&&c===void 0&&b==="pending"){let S;if(h!=null&&h.isPlaceholderData&&a.placeholderData===(j==null?void 0:j.placeholderData))S=h.data;else if(S=typeof a.placeholderData=="function"?a.placeholderData((te=n(this,G))==null?void 0:te.state.data,n(this,G)):a.placeholderData,a.select&&S!==void 0)try{S=a.select(S),v(this,P,null)}catch(D){v(this,P,D)}S!==void 0&&(b="success",c=Ae(h==null?void 0:h.data,S,a),_=!0)}n(this,P)&&(w=n(this,P),c=n(this,W),E=Date.now(),b="error");const L=d.fetchStatus==="fetching",q=b==="pending",H=b==="error",J=q&&L,ee=c!==void 0,I={status:b,fetchStatus:d.fetchStatus,isPending:q,isSuccess:b==="success",isError:H,isInitialLoading:J,isLoading:J,data:c,dataUpdatedAt:d.dataUpdatedAt,error:w,errorUpdatedAt:E,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>m.dataUpdateCount||d.errorUpdateCount>m.errorUpdateCount,isFetching:L,isRefetching:L&&!q,isLoadingError:H&&!ee,isPaused:d.fetchStatus==="paused",isPlaceholderData:_,isRefetchError:H&&ee,isStale:we(t,a),refetch:this.refetch,promise:n(this,U)};if(this.options.experimental_prefetchInRender){const S=B=>{I.status==="error"?B.reject(I.error):I.data!==void 0&&B.resolve(I.data)},D=()=>{const B=v(this,U,I.promise=Te());S(B)},A=n(this,U);switch(A.status){case"pending":t.queryHash===r.queryHash&&S(A);break;case"fulfilled":(I.status==="error"||I.data!==A.value)&&D();break;case"rejected":(I.status!=="error"||I.error!==A.reason)&&D();break}}return I}updateResult(t){const a=n(this,O),r=this.createResult(n(this,p),this.options);if(v(this,Y,n(this,p).state),v(this,X,this.options),n(this,Y).data!==void 0&&v(this,G,n(this,p)),he(r,a))return;v(this,O,r);const u={},h=()=>{if(!a)return!0;const{notifyOnChangeProps:o}=this.options,j=typeof o=="function"?o():o;if(j==="all"||!j&&!n(this,Z).size)return!0;const i=new Set(j??n(this,Z));return this.options.throwOnError&&i.add("error"),Object.keys(n(this,O)).some(m=>{const f=m;return n(this,O)[f]!==a[f]&&i.has(f)})};(t==null?void 0:t.listeners)!==!1&&h()&&(u.listeners=!0),y(this,x,He).call(this,{...u,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&y(this,x,ge).call(this)}},R=new WeakMap,p=new WeakMap,ae=new WeakMap,O=new WeakMap,Y=new WeakMap,X=new WeakMap,U=new WeakMap,P=new WeakMap,re=new WeakMap,W=new WeakMap,G=new WeakMap,z=new WeakMap,V=new WeakMap,$=new WeakMap,Z=new WeakMap,x=new WeakSet,se=function(t){y(this,x,ye).call(this);let a=n(this,p).fetch(this.options,t);return t!=null&&t.throwOnError||(a=a.catch(it)),a},pe=function(){y(this,x,ve).call(this);const t=le(this.options.staleTime,n(this,p));if(me||n(this,O).isStale||!De(t))return;const r=ct(n(this,O).dataUpdatedAt,t)+1;v(this,z,setTimeout(()=>{n(this,O).isStale||this.updateResult()},r))},xe=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(n(this,p)):this.options.refetchInterval)??!1},be=function(t){y(this,x,je).call(this),v(this,$,t),!(me||T(this.options.enabled,n(this,p))===!1||!De(n(this,$))||n(this,$)===0)&&v(this,V,setInterval(()=>{(this.options.refetchIntervalInBackground||ot.isFocused())&&y(this,x,se).call(this)},n(this,$)))},ge=function(){y(this,x,pe).call(this),y(this,x,be).call(this,y(this,x,xe).call(this))},ve=function(){n(this,z)&&(clearTimeout(n(this,z)),v(this,z,void 0))},je=function(){n(this,V)&&(clearInterval(n(this,V)),v(this,V,void 0))},ye=function(){const t=n(this,R).getQueryCache().build(n(this,R),this.options);if(t===n(this,p))return;const a=n(this,p);v(this,p,t),v(this,ae,t.state),this.hasListeners()&&(a==null||a.removeObserver(this),t.addObserver(this))},He=function(t){ze.batch(()=>{t.listeners&&this.listeners.forEach(a=>{a(n(this,O))}),n(this,R).getQueryCache().notify({query:n(this,p),type:"observerResultsUpdated"})})},Ye);function ft(s,t){return T(t.enabled,s)!==!1&&s.state.data===void 0&&!(s.state.status==="error"&&t.retryOnMount===!1)}function Me(s,t){return ft(s,t)||s.state.data!==void 0&&Ne(s,t,t.refetchOnMount)}function Ne(s,t,a){if(T(t.enabled,s)!==!1){const r=typeof a=="function"?a(s):a;return r==="always"||r!==!1&&we(s,t)}return!1}function Qe(s,t,a,r){return(s!==t||T(r.enabled,s)===!1)&&(!a.suspense||s.state.status!=="error")&&we(s,a)}function we(s,t){return T(t.enabled,s)!==!1&&s.isStaleByTime(le(t.staleTime,s))}function pt(s,t){return!he(s.getCurrentResult(),t)}var ke=g.createContext(!1),xt=()=>g.useContext(ke);ke.Provider;function bt(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}var gt=g.createContext(bt()),vt=()=>g.useContext(gt);function jt(s,t){return typeof s=="function"?s(...t):!!s}function qe(){}var yt=(s,t)=>{(s.suspense||s.throwOnError||s.experimental_prefetchInRender)&&(t.isReset()||(s.retryOnMount=!1))},Nt=s=>{g.useEffect(()=>{s.clearReset()},[s])},wt=({result:s,errorResetBoundary:t,throwOnError:a,query:r,suspense:u})=>s.isError&&!t.isReset()&&!s.isFetching&&r&&(u&&s.data===void 0||jt(a,[s.error,r])),St=s=>{const t=s.staleTime;s.suspense&&(s.staleTime=typeof t=="function"?(...a)=>Math.max(t(...a),1e3):Math.max(t??1e3,1e3),typeof s.gcTime=="number"&&(s.gcTime=Math.max(s.gcTime,1e3)))},Ct=(s,t)=>s.isLoading&&s.isFetching&&!t,_t=(s,t)=>(s==null?void 0:s.suspense)&&t.isPending,Ue=(s,t,a)=>t.fetchOptimistic(s).catch(()=>{a.clearReset()});function Ot(s,t,a){var d,_,c,w,E;const r=oe(),u=xt(),h=vt(),o=r.defaultQueryOptions(s);(_=(d=r.getDefaultOptions().queries)==null?void 0:d._experimental_beforeQuery)==null||_.call(d,o),o._optimisticResults=u?"isRestoring":"optimistic",St(o),yt(o,h),Nt(h);const j=!r.getQueryCache().get(o.queryHash),[i]=g.useState(()=>new t(r,o)),m=i.getOptimisticResult(o),f=!u&&s.subscribed!==!1;if(g.useSyncExternalStore(g.useCallback(b=>{const L=f?i.subscribe(ze.batchCalls(b)):qe;return i.updateResult(),L},[i,f]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),g.useEffect(()=>{i.setOptions(o,{listeners:!1})},[o,i]),_t(o,m))throw Ue(o,i,h);if(wt({result:m,errorResetBoundary:h,throwOnError:o.throwOnError,query:r.getQueryCache().get(o.queryHash),suspense:o.suspense}))throw m.error;if((w=(c=r.getDefaultOptions().queries)==null?void 0:c._experimental_afterQuery)==null||w.call(c,o,m),o.experimental_prefetchInRender&&!me&&Ct(m,u)){const b=j?Ue(o,i,h):(E=r.getQueryCache().get(o.queryHash))==null?void 0:E.promise;b==null||b.catch(qe).finally(()=>{i.updateResult()})}return o.notifyOnChangeProps?m:i.trackResult(m)}function K(s,t){return Ot(s,mt)}const Rt=()=>{const s=oe(),[t,a]=g.useState({studentNumber:"",fname:"",mname:"",lname:"",suffix:"",year:"",bachelor:"",contact_number:"",email:"",sem_eff_loa:"",year_eff_loa:"",sem_re:"",year_re:"",reason:""}),r=c=>{const{id:w,value:E}=c.target;if(w==="studentNumber"){const b=E.replace(/\D/g,"");let L=b;b.length>2&&(L=`${b.slice(0,2)}-${b.slice(2,7)}`),b.length<=7&&a(q=>({...q,[w]:L}))}else a(b=>({...b,[w]:E}))},u=["1st","2nd"],h=["2010-2011","2011-2012","2012-2013","2013-2014","2014-2015","2015-2016","2017-2018","2018-2019","2019-2020","2020-2021","2021-2022","2022-2023","2023-2024","2024-2025","2025-2026","2026-2027"],o=async()=>{const{data:c}=await axios.get("/api/years");return c},{data:j,isLoading:i}=K({queryFn:o,queryKey:["getAllYears"]}),m=async()=>{const{data:c}=await axios.get("/api/bachelors");return c},{data:f,isLoading:d}=K({queryFn:m,queryKey:["getAllBachelors"]}),_=async c=>{c.preventDefault(),console.log(t);let w=[];if(t.studentNumber||w.push("Student Number is required."),t.fname||w.push("First Name is required."),t.lname||w.push("Last Name is required."),w.length>0){k.error(w.join(`
`));return}const E={...t,studentNumber:t.studentNumber.padEnd(8,"-").slice(0,8)};try{const{data:b}=await axios.post("/api/transactions",E);b&&(k.success(b.message),s.invalidateQueries({predicate:L=>["getAllTransactions"].includes(L.queryKey[0])}),a({studentNumber:"",fname:"",mname:"",lname:"",suffix:"",year:"",bachelor:"",contact_number:"",email:"",sem_eff_loa:"",year_eff_loa:"",sem_re:"",year_re:"",reason:""}))}catch(b){console.error("Submission error:",b),k.error("Failed to submit form")}};return e.jsxs("form",{onSubmit:_,children:[e.jsxs("div",{className:"overflow-y-auto h-[60vh] px-2",children:[e.jsx("div",{className:"space-y-2 w-full mb-10",children:e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"studentNumber",className:"label w-2/5 text-nowrap label-xs",children:"Student #:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"studentNumber",type:"text",className:"input input-bordered w-full input-sm",maxLength:"8",value:t.studentNumber,onChange:r})})]})}),e.jsxs("div",{className:"space-y-2 w-full mb-10",children:[e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"fname",className:"label w-2/5 text-nowrap label-xs",children:"First Name:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"fname",type:"text",className:"input input-bordered w-full input-sm",value:t.fname,onChange:r})})]}),e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"mname",className:"label w-2/5 text-nowrap",children:"Middle Initial:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"mname",type:"text",className:"input input-bordered w-full input-sm",value:t.mname,onChange:r})})]}),e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"lname",className:"label w-2/5 text-nowrap",children:"Last Name:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"lname",type:"text",className:"input input-bordered w-full input-sm",value:t.lname,onChange:r})})]}),e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"suffix",className:"label w-2/5 text-nowrap",children:"Suffix:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"suffix",type:"text",className:"input input-bordered w-full input-sm",value:t.suffix,onChange:r})})]})]}),e.jsx("div",{className:"space-y-2 w-full mb-10",children:e.jsxs("div",{className:"flex gap-10",children:[e.jsxs("div",{className:"flex gap-2 w-1/5 items-center flex-1",children:[e.jsx("label",{htmlFor:"year",className:"label text-nowrap label-xs",children:"Year:"}),e.jsx("div",{className:"w-full justify-end",children:e.jsxs("select",{id:"year",className:"select select-bordered w-full select-sm text-xs",value:t.year,onChange:r,children:[e.jsx("option",{value:"",children:"--Year--"}),i?null:j.map(c=>e.jsx("option",{value:c.name,children:c.name}))]})})]}),e.jsxs("div",{className:"flex gap-3 w-3/5 items-center",children:[e.jsx("label",{htmlFor:"bachelor",className:"label w-1/5 text-nowrap label-xs",children:"Bachelor:"}),e.jsx("div",{className:"w-4/5 flex justify-end",children:e.jsxs("select",{name:"",id:"bachelor",className:"select select-bordered w-full select-sm text-xs",value:t.bachelor,onChange:r,children:[e.jsx("option",{value:"",children:"--Bachelor--"}),d?null:f.map(c=>e.jsx("option",{value:c.name,children:c.name}))]})})]})]})}),e.jsxs("div",{className:"space-y-2 w-full mb-10",children:[e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"contact_number",className:"label w-2/5 text-nowrap label-xs",children:"Contact Number:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"contact_number",type:"text",className:"input input-bordered w-full input-sm",value:t.contact_number,onChange:r})})]}),e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"email",className:"label w-2/5 text-nowrap",children:"Email:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"email",type:"text",className:"input input-bordered w-full input-sm",value:t.email,onChange:r})})]})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"space-y-2 w-full mb-10",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h1",{children:"Effectivity of LOA"}),e.jsxs("div",{className:"flex gap-10",children:[e.jsxs("div",{className:"flex gap-2 w-1/5 items-center flex-1",children:[e.jsx("label",{htmlFor:"sem_eff_loa",className:"label text-nowrap label-xs",children:"LOA Sem:"}),e.jsx("div",{className:"w-full justify-end",children:e.jsxs("select",{name:"",id:"sem_eff_loa",className:"select select-bordered w-full select-sm text-xs",value:t.sem_eff_loa,onChange:r,children:[e.jsx("option",{value:"",children:"--Sem--"}),u.map(c=>e.jsx("option",{value:c,children:c},`${c}-loa-sem`))]})})]}),e.jsxs("div",{className:"flex gap-3 w-3/5 items-center",children:[e.jsx("label",{htmlFor:"year_eff_loa",className:"label w-1/5 text-nowrap label-xs",children:"LOA Year:"}),e.jsx("div",{className:"w-4/5 flex justify-end",children:e.jsxs("select",{name:"",id:"year_eff_loa",className:"select select-bordered w-full select-sm text-xs",value:t.year_eff_loa,onChange:r,children:[e.jsx("option",{value:"",children:"--Select Bachelor--"}),h.map(c=>e.jsx("option",{value:c,children:c},`${c}-loa-year`))]})})]})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h1",{children:"Returning Academic Year"}),e.jsxs("div",{className:"flex gap-10",children:[e.jsxs("div",{className:"flex gap-2 w-1/5 items-center flex-1",children:[e.jsx("label",{htmlFor:"sem_re",className:"label text-nowrap label-xs",children:"RE. Sem:"}),e.jsx("div",{className:"w-full justify-end",children:e.jsxs("select",{name:"",id:"sem_re",className:"select select-bordered w-full select-sm text-xs",value:t.sem_re,onChange:r,children:[e.jsx("option",{value:"",children:"--Sem--"}),u.map(c=>e.jsx("option",{value:c,children:c},`${c}-re-sem`))]})})]}),e.jsxs("div",{className:"flex gap-3 w-3/5 items-center",children:[e.jsx("label",{htmlFor:"year_re",className:"label w-1/5 text-nowrap label-xs",children:"RE. Year:"}),e.jsx("div",{className:"w-4/5 flex justify-end",children:e.jsxs("select",{name:"",id:"year_re",className:"select select-bordered w-full select-sm text-xs",value:t.year_re,onChange:r,children:[e.jsx("option",{value:"",children:"--Select Bachelor--"}),h.map(c=>e.jsx("option",{value:c,children:c},`${c}-re-year`))]})})]})]})]})]}),e.jsx("div",{className:"divider"}),e.jsx("div",{className:"space-y-2 w-full mb-10",children:e.jsxs("div",{className:"mb-4",children:[e.jsx("h1",{children:"Reason:"}),e.jsx("div",{className:"flex gap-10",children:e.jsx("textarea",{className:"textarea textarea-bordered w-full",id:"reason",value:t.reason,onChange:r})})]})})]}),e.jsx("div",{className:"px-2 py-5",children:e.jsx("button",{className:"btn bg-base-300 w-full",type:"submit",children:"Submit"})})]})};var Ke={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$e=Q.createContext&&Q.createContext(Ke),Et=["attr","size","title"];function Lt(s,t){if(s==null)return{};var a=It(s,t),r,u;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(s);for(u=0;u<h.length;u++)r=h[u],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(a[r]=s[r])}return a}function It(s,t){if(s==null)return{};var a={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(t.indexOf(r)>=0)continue;a[r]=s[r]}return a}function ie(){return ie=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(s[r]=a[r])}return s},ie.apply(this,arguments)}function Be(s,t){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(s,u).enumerable})),a.push.apply(a,r)}return a}function ce(s){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Be(Object(a),!0).forEach(function(r){Ft(s,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):Be(Object(a)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(a,r))})}return s}function Ft(s,t,a){return t=Pt(t),t in s?Object.defineProperty(s,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[t]=a,s}function Pt(s){var t=Tt(s,"string");return typeof t=="symbol"?t:t+""}function Tt(s,t){if(typeof s!="object"||!s)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var r=a.call(s,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function Xe(s){return s&&s.map((t,a)=>Q.createElement(t.tag,ce({key:a},t.attr),Xe(t.child)))}function Se(s){return t=>Q.createElement(Dt,ie({attr:ce({},s.attr)},t),Xe(s.child))}function Dt(s){var t=a=>{var{attr:r,size:u,title:h}=s,o=Lt(s,Et),j=u||a.size||"1em",i;return a.className&&(i=a.className),s.className&&(i=(i?i+" ":"")+s.className),Q.createElement("svg",ie({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,r,o,{className:i,style:ce(ce({color:s.color||a.color},a.style),s.style),height:j,width:j,xmlns:"http://www.w3.org/2000/svg"}),h&&Q.createElement("title",null,h),s.children)};return $e!==void 0?Q.createElement($e.Consumer,null,a=>t(a)):t(Ke)}function At(s){return Se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"},child:[]}]})(s)}function Mt(s){return Se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"},child:[]},{tag:"path",attr:{d:"M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"},child:[]}]})(s)}const Qt=s=>{let t;const a=new Set,r=(m,f)=>{const d=typeof m=="function"?m(t):m;if(!Object.is(d,t)){const _=t;t=f??(typeof d!="object"||d===null)?d:Object.assign({},t,d),a.forEach(c=>c(t,_))}},u=()=>t,j={setState:r,getState:u,getInitialState:()=>i,subscribe:m=>(a.add(m),()=>a.delete(m))},i=t=s(r,u,j);return j},qt=s=>Qt(s),Ut=s=>s;function $t(s,t=Ut){const a=Q.useSyncExternalStore(s.subscribe,()=>t(s.getState()),()=>t(s.getInitialState()));return Q.useDebugValue(a),a}const Bt=s=>{const t=qt(s),a=r=>$t(t,r);return Object.assign(a,t),a},Yt=s=>Bt(s),We=Yt(s=>({editModalIsOpen:!1,transactionId:null,openEditModal:t=>s({editModalIsOpen:!0,transactionId:t}),closeEditModal:()=>s({editModalIsOpen:!1,transactionId:null}),toggleEditModal:()=>s(t=>({editModalIsOpen:!t.isOpen}))}));function zt(s){return Se({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(s)}const Vt=()=>{const{transactionId:s,editModalIsOpen:t,closeEditModal:a}=We(),[r,u]=g.useState(!1),h=oe(),[o,j]=g.useState(""),[i,m]=g.useState(""),[f,d]=g.useState(""),[_,c]=g.useState(""),[w,E]=g.useState(""),[b,L]=g.useState(""),[q,H]=g.useState(""),[J,ee]=g.useState(""),[de,I]=g.useState(""),[te,S]=g.useState(""),[D,A]=g.useState(""),[B,Ce]=g.useState(""),[_e,Oe]=g.useState(""),[Re,Ee]=g.useState(""),Ge=async()=>{const{data:l}=await ne.get("/api/years");return l},{data:Ze,isLoading:Je}=K({queryFn:Ge,queryKey:["getAllYears"]}),et=async()=>{const{data:l}=await ne.get("/api/bachelors");return l},{data:tt,isLoading:st}=K({queryFn:et,queryKey:["getAllBachelors"]}),Le=["1st","2nd"],Ie=["2010-2011","2011-2012","2012-2013","2013-2014","2014-2015","2015-2016","2017-2018","2018-2019","2019-2020","2020-2021","2021-2022","2022-2023","2023-2024","2024-2025","2025-2026","2026-2027"],at=async()=>{if(!s)return null;try{const{data:l}=await ne.get(`/api/transactions/${s}`);return l}catch(l){console.error("Error fetching transaction:",l)}},{data:M,isLoading:kt,isSuccess:Fe}=K({queryKey:["getTransaction",s],queryFn:at}),rt=async l=>{u(!0);try{await ne.put(`/api/transactions/${s}`,l),h.invalidateQueries("getAllTransactions"),u(!1),k.success("Transaction updated successfully!"),a()}catch(N){console.error("Error updating transaction:",N),u(!1)}},nt=l=>{l.preventDefault();let N=[];if(o||N.push("Student Number is required."),i||N.push("First Name is required."),_||N.push("Last Name is required."),N.length>0){k.error(N.join(`
`));return}rt({studentNumber:o,fname:i,mname:f,lname:_,suffix:w,year:b,bachelor:q,contact_number:J,email:de,sem_eff_loa:te,year_eff_loa:D,sem_re:B,year_re:_e,reason:Re})};return g.useEffect(()=>{var l,N;if(Fe&&M){const F=M.student||{};j(F.student_number||""),m(F.first_name||""),d(F.middle_name||""),E(F.suffix||""),c(F.last_name||""),L(((l=F.year)==null?void 0:l.name)||""),H(((N=F.bachelor)==null?void 0:N.name)||""),ee(F.contact_number||""),I(F.email||""),S(M.loa_semester||""),A(M.loa_year||""),Ce(M.re_semester||""),Oe(M.re_year||""),Ee(M.reason||"")}},[Fe,M]),e.jsx("dialog",{className:`modal ${t?"modal-open":""}`,children:e.jsxs("div",{className:"modal-box w-11/12 max-w-7xl h-[90vh]",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h3",{className:"font-bold text-lg",children:"Edit Transaction"}),e.jsx("button",{className:"btn bg-base-300",onClick:a,children:e.jsx(zt,{})})]}),M&&e.jsxs("form",{onSubmit:nt,className:"mt-4 flex flex-col gap-4",children:[e.jsxs("div",{className:"overflow-y-auto h-[60vh] px-5",children:[e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Student Number"}),e.jsx("input",{type:"text",value:o,onChange:l=>{let N=l.target.value.replace(/\D/g,"");N.length>6&&(N=N.slice(0,7)),N.length>2&&(N=N.slice(0,2)+"-"+N.slice(2)),j(N)},className:"input input-bordered w-full",placeholder:"XX-XXXX"})]})}),e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"First Name"}),e.jsx("input",{type:"text",value:i,onChange:l=>m(l.target.value),className:"input input-bordered w-full"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Middle Name"}),e.jsx("input",{type:"text",value:f,onChange:l=>d(l.target.value),className:"input input-bordered w-full"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Last Name"}),e.jsx("input",{type:"text",value:_,onChange:l=>c(l.target.value),className:"input input-bordered w-full"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Suffix"}),e.jsx("input",{type:"text",value:w,onChange:l=>E(l.target.value),className:"input input-bordered w-full"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Year"}),e.jsxs("select",{id:"year",className:"select select-bordered w-full",value:b,onChange:l=>L(l.target.value),children:[e.jsx("option",{value:"",children:"--Year--"}),Je?null:Ze.map(l=>e.jsx("option",{value:l.name,children:l.name}))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Degree"}),e.jsxs("select",{name:"",id:"bachelor",className:"select select-bordered w-full",value:q,onChange:l=>H(l.target.value),children:[e.jsx("option",{value:"",children:"--Bachelor--"}),st?null:tt.map(l=>e.jsx("option",{value:l.name,children:l.name}))]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Contact Number"}),e.jsx("input",{type:"text",value:J,onChange:l=>ee(l.target.value),className:"input input-bordered w-full"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Email"}),e.jsx("input",{type:"text",value:de,onChange:l=>I(l.target.value),className:"input input-bordered w-full"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"LOA Semester"}),e.jsxs("select",{value:te,onChange:l=>S(l.target.value),className:"select select-bordered w-full",children:[e.jsx("option",{value:"",children:"Select LOA Semester"}),Le.map(l=>e.jsx("option",{value:l,children:l},l))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"LOA Year"}),e.jsxs("select",{value:D,onChange:l=>A(l.target.value),className:"select select-bordered w-full",children:[e.jsx("option",{value:"",children:"Select LOA Year"}),Ie.map(l=>e.jsx("option",{value:l,children:l},l))]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Returning Semester"}),e.jsxs("select",{value:B,onChange:l=>Ce(l.target.value),className:"select select-bordered w-full",children:[e.jsx("option",{value:"",children:"Select Returning Semester"}),Le.map(l=>e.jsx("option",{value:l,children:l},l))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Returning Year"}),e.jsxs("select",{value:_e,onChange:l=>Oe(l.target.value),className:"select select-bordered w-full",children:[e.jsx("option",{value:"",children:"Select Returning Year"}),Ie.map(l=>e.jsx("option",{value:l,children:l},l))]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Reason"}),e.jsx("textarea",{value:Re,onChange:l=>Ee(l.target.value),className:"textarea textarea-bordered w-full"})]})]}),e.jsx("div",{className:"mt-4 flex gap-2 justify-end",children:e.jsx("button",{className:"btn btn-primary w-20",type:"submit",disabled:r,children:r?"Saving...":"Save"})})]})]})})},Ht=()=>{const s=oe(),t=()=>{const i=new URLSearchParams(window.location.search);return{query:i.get("query"),page:i.get("page")}},{openEditModal:a}=We(),r=async()=>{const{query:i,page:m}=t();try{const{data:f}=await axios.get("/api/transactions",{params:{query:i,page:m}});return f}catch(f){console.error(f)}},u=async i=>{try{await axios.delete(`/api/transactions/${i}`),s.invalidateQueries("getAllTransactions"),k.success("Transaction deleted successfully!")}catch(m){console.error(m)}},{data:h,isLoading:o}=K({queryKey:["getAllTransactions",Ve().url],queryFn:r}),j=(i,m)=>{{const f=new URLSearchParams(m.split("?")[1]),d=new URLSearchParams(window.location.search);Array.from(d).length===0?fe.visit(`?page=${f.get("page")}`):(d.set("page",f.get("page")),fe.visit(`?${d.toString()}`))}};return o?e.jsx("div",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"overflow-y-auto h-[60vh] px-2",children:[e.jsxs("table",{className:"table table-xs text-sm w-full",children:[e.jsx("thead",{className:"sticky top-0 w-full bg-base-100 z-10",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Student #"}),e.jsx("th",{children:"Full Name"}),e.jsx("th",{children:"Effectivity of LOA"}),e.jsx("th",{children:"Returning Academic Year"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:h.data.map((i,m)=>e.jsxs("tr",{className:"hover",children:[e.jsx("td",{children:i.student.student_number}),e.jsx("td",{className:"capitalize",children:`${i.student.first_name} ${i.student.middle_name?i.student.middle_name:""} ${i.student.last_name} ${i.student.suffix?i.student.suffix:""}`}),e.jsx("td",{children:`${i.loa_semester?i.loa_semester+" Sem,":""} ${i.loa_year?i.loa_year:""}`}),e.jsx("td",{children:`${i.re_semester?i.re_semester+" Sem,":""} ${i.re_year?i.re_year:""}`}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center justify-end me-2 gap-1",children:[e.jsx("div",{className:"tooltip tooltip-bottom","data-tip":"Edit",children:e.jsx("button",{className:"btn bg-base-300 btn-xs rounded-sm",onClick:()=>a(i.id),children:e.jsx(Mt,{color:"green",size:20})})}),e.jsx("div",{className:"tooltip tooltip-bottom","data-tip":"Delete",children:e.jsx("button",{className:"btn bg-base-300 btn-xs rounded-sm",onClick:()=>u(i.id),children:e.jsx(At,{color:"red",size:20})})})]})})]},m))})]}),e.jsx(Vt,{})]}),e.jsxs("div",{className:"flex justify-between mt-4",children:[e.jsx("div",{className:"flex gap-5",children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx("a",{className:"btn bg-base-300 btn-sm rounded-sm",href:"/api/generateCsv",children:"CSV"}),e.jsx("a",{className:"btn bg-base-300 btn-sm rounded-sm",href:"/api/generateExcel",children:"EXCEL"})]})}),e.jsx("div",{className:"join",children:h.links.map((i,m)=>e.jsx("div",{className:`join-item btn  btn-sm ${i.active?"bg-base-100":"bg-base-300"}`,dangerouslySetInnerHTML:{__html:i.label},onClick:()=>j("page",i.url)},m))})]})]})};function Gt(){const[s,t]=g.useState(null),{url:a}=Ve(),u=new URLSearchParams(a.split("?")[1]).get("query")||"",[h,o]=g.useState(u),j=f=>{t(f.target.files[0])},i=()=>{const f=new URLSearchParams;h&&f.append("query",h),fe.visit(`?${f.toString()}`)},m=async()=>{var d,_;if(!s){alert("Please select a CSV file first.");return}const f=new FormData;f.append("file",s);try{const c=await axios.post("/api/importCsv",f,{headers:{"Content-Type":"multipart/form-data"}});alert(c.data.message)}catch(c){alert("Error uploading file: "+((_=(d=c.response)==null?void 0:d.data)==null?void 0:_.error)||"Unknown error")}};return e.jsxs(ht,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Dashboard"}),children:[e.jsx(ut,{title:"Dashboard"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto sm:px-6 lg:px-20",children:e.jsx("div",{className:"overflow-hidden bg-base-100 shadow-sm sm:rounded-lg px-10",children:e.jsxs("div",{className:"flex gap-10",children:[e.jsx("div",{className:"flex-1 w-full",children:e.jsxs("div",{className:"p-6 text-gray-900 w-full",children:[e.jsxs("div",{className:"flex justify-between items-center pb-5",children:[e.jsx("h1",{children:"All Transaction"}),e.jsx("input",{type:"text",className:"input input-bordered input-sm rounded-sm text-base-content",placeholder:"Search...",value:h,onChange:f=>o(f.target.value),onKeyDown:f=>{f.key==="Enter"&&i()}}),e.jsxs("div",{className:"join",children:[e.jsx("input",{type:"file",accept:".csv",onChange:j,className:"file-input file-input-bordered file-input-sm rounded-sm w-56 join-item"}),e.jsx("button",{className:"btn bg-base-300 btn-sm rounded-sm join-item",onClick:m,children:"Upload CSV"})]})]}),e.jsx(Ht,{})]})}),e.jsx("div",{className:"divider divider-horizontal m-0"}),e.jsx("div",{className:"w-2/5",children:e.jsxs("div",{className:"py-5 text-gray-900 w-full",children:[e.jsx("div",{className:"flex pb-5",children:e.jsx("h1",{children:"Create New Transaction"})}),e.jsx(Rt,{})]})})]})})})})]})}export{Gt as default};
