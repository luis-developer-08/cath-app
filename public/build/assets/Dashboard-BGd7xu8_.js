var Pe=s=>{throw TypeError(s)};var he=(s,t,a)=>t.has(s)||Pe("Cannot "+a);var l=(s,t,a)=>(he(s,t,"read from private field"),a?a.call(s):t.get(s)),C=(s,t,a)=>t.has(s)?Pe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,a),g=(s,t,a,r)=>(he(s,t,"write to private field"),r?r.call(s,a):t.set(s,a),a),y=(s,t,a)=>(he(s,t,"access private method"),a);import{S as nt,p as Te,r as T,s as me,a as ne,n as it,i as fe,b as De,t as ct,f as ot,c as dt,d as Ae,e as ze,g as b,u as de,j as e,k,U as Q,h as le,K as He,l as ie,L as ut}from"./app-Cq4VjCR0.js";import{A as ht}from"./AuthenticatedLayout-Co5jH9_T.js";var O,m,ae,_,Y,X,U,P,re,W,G,z,H,$,Z,x,se,xe,pe,be,ge,ve,je,ye,Ve,Ye,mt=(Ye=class extends nt{constructor(t,a){super();C(this,x);C(this,O);C(this,m);C(this,ae);C(this,_);C(this,Y);C(this,X);C(this,U);C(this,P);C(this,re);C(this,W);C(this,G);C(this,z);C(this,H);C(this,$);C(this,Z,new Set);this.options=a,g(this,O,t),g(this,P,null),g(this,U,Te()),this.options.experimental_prefetchInRender||l(this,U).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(a)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(l(this,m).addObserver(this),Me(l(this,m),this.options)?y(this,x,se).call(this):this.updateResult(),y(this,x,ge).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Ne(l(this,m),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Ne(l(this,m),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,y(this,x,ve).call(this),y(this,x,je).call(this),l(this,m).removeObserver(this)}setOptions(t,a){const r=this.options,d=l(this,m);if(this.options=l(this,O).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof T(this.options.enabled,l(this,m))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");y(this,x,ye).call(this),l(this,m).setOptions(this.options),r._defaulted&&!me(this.options,r)&&l(this,O).getQueryCache().notify({type:"observerOptionsUpdated",query:l(this,m),observer:this});const u=this.hasListeners();u&&Qe(l(this,m),d,this.options,r)&&y(this,x,se).call(this),this.updateResult(a),u&&(l(this,m)!==d||T(this.options.enabled,l(this,m))!==T(r.enabled,l(this,m))||ne(this.options.staleTime,l(this,m))!==ne(r.staleTime,l(this,m)))&&y(this,x,xe).call(this);const o=y(this,x,pe).call(this);u&&(l(this,m)!==d||T(this.options.enabled,l(this,m))!==T(r.enabled,l(this,m))||o!==l(this,$))&&y(this,x,be).call(this,o)}getOptimisticResult(t){const a=l(this,O).getQueryCache().build(l(this,O),t),r=this.createResult(a,t);return xt(this,r)&&(g(this,_,r),g(this,X,this.options),g(this,Y,l(this,m).state)),r}getCurrentResult(){return l(this,_)}trackResult(t,a){const r={};return Object.keys(t).forEach(d=>{Object.defineProperty(r,d,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(d),a==null||a(d),t[d])})}),r}trackProp(t){l(this,Z).add(t)}getCurrentQuery(){return l(this,m)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const a=l(this,O).defaultQueryOptions(t),r=l(this,O).getQueryCache().build(l(this,O),a);return r.fetch().then(()=>this.createResult(r,a))}fetch(t){return y(this,x,se).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),l(this,_)))}createResult(t,a){var te;const r=l(this,m),d=this.options,u=l(this,_),o=l(this,Y),j=l(this,X),f=t!==r?t.state:l(this,ae),{state:v}=t;let h={...v},R=!1,c;if(a._optimisticResults){const S=this.hasListeners(),D=!S&&Me(t,a),A=S&&Qe(t,r,a,d);(D||A)&&(h={...h,...dt(v.data,t.options)}),a._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:w,errorUpdatedAt:E,status:p}=h;if(a.select&&h.data!==void 0)if(u&&h.data===(o==null?void 0:o.data)&&a.select===l(this,re))c=l(this,W);else try{g(this,re,a.select),c=a.select(h.data),c=Ae(u==null?void 0:u.data,c,a),g(this,W,c),g(this,P,null)}catch(S){g(this,P,S)}else c=h.data;if(a.placeholderData!==void 0&&c===void 0&&p==="pending"){let S;if(u!=null&&u.isPlaceholderData&&a.placeholderData===(j==null?void 0:j.placeholderData))S=u.data;else if(S=typeof a.placeholderData=="function"?a.placeholderData((te=l(this,G))==null?void 0:te.state.data,l(this,G)):a.placeholderData,a.select&&S!==void 0)try{S=a.select(S),g(this,P,null)}catch(D){g(this,P,D)}S!==void 0&&(p="success",c=Ae(u==null?void 0:u.data,S,a),R=!0)}l(this,P)&&(w=l(this,P),c=l(this,W),E=Date.now(),p="error");const L=h.fetchStatus==="fetching",q=p==="pending",V=p==="error",J=q&&L,ee=c!==void 0,I={status:p,fetchStatus:h.fetchStatus,isPending:q,isSuccess:p==="success",isError:V,isInitialLoading:J,isLoading:J,data:c,dataUpdatedAt:h.dataUpdatedAt,error:w,errorUpdatedAt:E,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>f.dataUpdateCount||h.errorUpdateCount>f.errorUpdateCount,isFetching:L,isRefetching:L&&!q,isLoadingError:V&&!ee,isPaused:h.fetchStatus==="paused",isPlaceholderData:R,isRefetchError:V&&ee,isStale:we(t,a),refetch:this.refetch,promise:l(this,U)};if(this.options.experimental_prefetchInRender){const S=B=>{I.status==="error"?B.reject(I.error):I.data!==void 0&&B.resolve(I.data)},D=()=>{const B=g(this,U,I.promise=Te());S(B)},A=l(this,U);switch(A.status){case"pending":t.queryHash===r.queryHash&&S(A);break;case"fulfilled":(I.status==="error"||I.data!==A.value)&&D();break;case"rejected":(I.status!=="error"||I.error!==A.reason)&&D();break}}return I}updateResult(t){const a=l(this,_),r=this.createResult(l(this,m),this.options);if(g(this,Y,l(this,m).state),g(this,X,this.options),l(this,Y).data!==void 0&&g(this,G,l(this,m)),me(r,a))return;g(this,_,r);const d={},u=()=>{if(!a)return!0;const{notifyOnChangeProps:o}=this.options,j=typeof o=="function"?o():o;if(j==="all"||!j&&!l(this,Z).size)return!0;const i=new Set(j??l(this,Z));return this.options.throwOnError&&i.add("error"),Object.keys(l(this,_)).some(f=>{const v=f;return l(this,_)[v]!==a[v]&&i.has(v)})};(t==null?void 0:t.listeners)!==!1&&u()&&(d.listeners=!0),y(this,x,Ve).call(this,{...d,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&y(this,x,ge).call(this)}},O=new WeakMap,m=new WeakMap,ae=new WeakMap,_=new WeakMap,Y=new WeakMap,X=new WeakMap,U=new WeakMap,P=new WeakMap,re=new WeakMap,W=new WeakMap,G=new WeakMap,z=new WeakMap,H=new WeakMap,$=new WeakMap,Z=new WeakMap,x=new WeakSet,se=function(t){y(this,x,ye).call(this);let a=l(this,m).fetch(this.options,t);return t!=null&&t.throwOnError||(a=a.catch(it)),a},xe=function(){y(this,x,ve).call(this);const t=ne(this.options.staleTime,l(this,m));if(fe||l(this,_).isStale||!De(t))return;const r=ct(l(this,_).dataUpdatedAt,t)+1;g(this,z,setTimeout(()=>{l(this,_).isStale||this.updateResult()},r))},pe=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(l(this,m)):this.options.refetchInterval)??!1},be=function(t){y(this,x,je).call(this),g(this,$,t),!(fe||T(this.options.enabled,l(this,m))===!1||!De(l(this,$))||l(this,$)===0)&&g(this,H,setInterval(()=>{(this.options.refetchIntervalInBackground||ot.isFocused())&&y(this,x,se).call(this)},l(this,$)))},ge=function(){y(this,x,xe).call(this),y(this,x,be).call(this,y(this,x,pe).call(this))},ve=function(){l(this,z)&&(clearTimeout(l(this,z)),g(this,z,void 0))},je=function(){l(this,H)&&(clearInterval(l(this,H)),g(this,H,void 0))},ye=function(){const t=l(this,O).getQueryCache().build(l(this,O),this.options);if(t===l(this,m))return;const a=l(this,m);g(this,m,t),g(this,ae,t.state),this.hasListeners()&&(a==null||a.removeObserver(this),t.addObserver(this))},Ve=function(t){ze.batch(()=>{t.listeners&&this.listeners.forEach(a=>{a(l(this,_))}),l(this,O).getQueryCache().notify({query:l(this,m),type:"observerResultsUpdated"})})},Ye);function ft(s,t){return T(t.enabled,s)!==!1&&s.state.data===void 0&&!(s.state.status==="error"&&t.retryOnMount===!1)}function Me(s,t){return ft(s,t)||s.state.data!==void 0&&Ne(s,t,t.refetchOnMount)}function Ne(s,t,a){if(T(t.enabled,s)!==!1){const r=typeof a=="function"?a(s):a;return r==="always"||r!==!1&&we(s,t)}return!1}function Qe(s,t,a,r){return(s!==t||T(r.enabled,s)===!1)&&(!a.suspense||s.state.status!=="error")&&we(s,a)}function we(s,t){return T(t.enabled,s)!==!1&&s.isStaleByTime(ne(t.staleTime,s))}function xt(s,t){return!me(s.getCurrentResult(),t)}var ke=b.createContext(!1),pt=()=>b.useContext(ke);ke.Provider;function bt(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}var gt=b.createContext(bt()),vt=()=>b.useContext(gt);function jt(s,t){return typeof s=="function"?s(...t):!!s}function qe(){}var yt=(s,t)=>{(s.suspense||s.throwOnError||s.experimental_prefetchInRender)&&(t.isReset()||(s.retryOnMount=!1))},Nt=s=>{b.useEffect(()=>{s.clearReset()},[s])},wt=({result:s,errorResetBoundary:t,throwOnError:a,query:r,suspense:d})=>s.isError&&!t.isReset()&&!s.isFetching&&r&&(d&&s.data===void 0||jt(a,[s.error,r])),St=s=>{const t=s.staleTime;s.suspense&&(s.staleTime=typeof t=="function"?(...a)=>Math.max(t(...a),1e3):Math.max(t??1e3,1e3),typeof s.gcTime=="number"&&(s.gcTime=Math.max(s.gcTime,1e3)))},Ct=(s,t)=>s.isLoading&&s.isFetching&&!t,_t=(s,t)=>(s==null?void 0:s.suspense)&&t.isPending,Ue=(s,t,a)=>t.fetchOptimistic(s).catch(()=>{a.clearReset()});function Ot(s,t,a){var h,R,c,w,E;const r=de(),d=pt(),u=vt(),o=r.defaultQueryOptions(s);(R=(h=r.getDefaultOptions().queries)==null?void 0:h._experimental_beforeQuery)==null||R.call(h,o),o._optimisticResults=d?"isRestoring":"optimistic",St(o),yt(o,u),Nt(u);const j=!r.getQueryCache().get(o.queryHash),[i]=b.useState(()=>new t(r,o)),f=i.getOptimisticResult(o),v=!d&&s.subscribed!==!1;if(b.useSyncExternalStore(b.useCallback(p=>{const L=v?i.subscribe(ze.batchCalls(p)):qe;return i.updateResult(),L},[i,v]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),b.useEffect(()=>{i.setOptions(o,{listeners:!1})},[o,i]),_t(o,f))throw Ue(o,i,u);if(wt({result:f,errorResetBoundary:u,throwOnError:o.throwOnError,query:r.getQueryCache().get(o.queryHash),suspense:o.suspense}))throw f.error;if((w=(c=r.getDefaultOptions().queries)==null?void 0:c._experimental_afterQuery)==null||w.call(c,o,f),o.experimental_prefetchInRender&&!fe&&Ct(f,d)){const p=j?Ue(o,i,u):(E=r.getQueryCache().get(o.queryHash))==null?void 0:E.promise;p==null||p.catch(qe).finally(()=>{i.updateResult()})}return o.notifyOnChangeProps?f:i.trackResult(f)}function K(s,t){return Ot(s,mt)}const Rt=()=>{const s=de(),[t,a]=b.useState({studentNumber:"",fname:"",mname:"",lname:"",suffix:"",year:"",bachelor:"",contact_number:"",email:"",sem_eff_loa:"",year_eff_loa:"",sem_re:"",year_re:"",reason:""}),r=c=>{const{id:w,value:E}=c.target;if(w==="studentNumber"){const p=E.replace(/\D/g,"");let L=p;p.length>2&&(L=`${p.slice(0,2)}-${p.slice(2,7)}`),p.length<=7&&a(q=>({...q,[w]:L}))}else a(p=>({...p,[w]:E}))},d=["1st","2nd"],u=["2010-2011","2011-2012","2012-2013","2013-2014","2014-2015","2015-2016","2017-2018","2018-2019","2019-2020","2020-2021","2021-2022","2022-2023","2023-2024","2024-2025","2025-2026","2026-2027"],o=async()=>{const{data:c}=await axios.get("/api/years");return c},{data:j,isLoading:i}=K({queryFn:o,queryKey:["getAllYears"]}),f=async()=>{const{data:c}=await axios.get("/api/bachelors");return c},{data:v,isLoading:h}=K({queryFn:f,queryKey:["getAllBachelors"]}),R=async c=>{c.preventDefault(),console.log(t);let w=[];if(t.studentNumber||w.push("Student Number is required."),t.fname||w.push("First Name is required."),t.lname||w.push("Last Name is required."),w.length>0){k.error(w.join(`
`));return}const E={...t,studentNumber:t.studentNumber.padEnd(8,"-").slice(0,8)};try{const{data:p}=await axios.post("/api/transactions",E);p&&(k.success(p.message),s.invalidateQueries({predicate:L=>["getAllTransactions"].includes(L.queryKey[0])}),a({studentNumber:"",fname:"",mname:"",lname:"",suffix:"",year:"",bachelor:"",contact_number:"",email:"",sem_eff_loa:"",year_eff_loa:"",sem_re:"",year_re:"",reason:""}))}catch(p){console.error("Submission error:",p),k.error("Failed to submit form")}};return e.jsxs("form",{onSubmit:R,children:[e.jsxs("div",{className:"overflow-y-auto h-[60vh] px-2",children:[e.jsx("div",{className:"space-y-2 w-full mb-10",children:e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"studentNumber",className:"label w-2/5 text-nowrap label-xs",children:"Student #:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"studentNumber",type:"text",className:"input input-bordered w-full input-sm",maxLength:"8",value:t.studentNumber,onChange:r})})]})}),e.jsxs("div",{className:"space-y-2 w-full mb-10",children:[e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"fname",className:"label w-2/5 text-nowrap label-xs",children:"First Name:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"fname",type:"text",className:"input input-bordered w-full input-sm",value:t.fname,onChange:r})})]}),e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"mname",className:"label w-2/5 text-nowrap",children:"Middle Initial:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"mname",type:"text",className:"input input-bordered w-full input-sm",value:t.mname,onChange:r})})]}),e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"lname",className:"label w-2/5 text-nowrap",children:"Last Name:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"lname",type:"text",className:"input input-bordered w-full input-sm",value:t.lname,onChange:r})})]}),e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"suffix",className:"label w-2/5 text-nowrap",children:"Suffix:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"suffix",type:"text",className:"input input-bordered w-full input-sm",value:t.suffix,onChange:r})})]})]}),e.jsx("div",{className:"space-y-2 w-full mb-10",children:e.jsxs("div",{className:"flex gap-10",children:[e.jsxs("div",{className:"flex gap-2 w-1/5 items-center flex-1",children:[e.jsx("label",{htmlFor:"year",className:"label text-nowrap label-xs",children:"Year:"}),e.jsx("div",{className:"w-full justify-end",children:e.jsxs("select",{id:"year",className:"select select-bordered w-full select-sm text-xs",value:t.year,onChange:r,children:[e.jsx("option",{value:"",children:"--Year--"}),i?null:j.map(c=>e.jsx("option",{value:c.name,children:c.name}))]})})]}),e.jsxs("div",{className:"flex gap-3 w-3/5 items-center",children:[e.jsx("label",{htmlFor:"bachelor",className:"label w-1/5 text-nowrap label-xs",children:"Bachelor:"}),e.jsx("div",{className:"w-4/5 flex justify-end",children:e.jsxs("select",{name:"",id:"bachelor",className:"select select-bordered w-full select-sm text-xs",value:t.bachelor,onChange:r,children:[e.jsx("option",{value:"",children:"--Bachelor--"}),h?null:v.map(c=>e.jsx("option",{value:c.name,children:c.name}))]})})]})]})}),e.jsxs("div",{className:"space-y-2 w-full mb-10",children:[e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"contact_number",className:"label w-2/5 text-nowrap label-xs",children:"Contact Number:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"contact_number",type:"text",className:"input input-bordered w-full input-sm",value:t.contact_number,onChange:r})})]}),e.jsxs("div",{className:"flex gap-2 w-full items-center",children:[e.jsx("label",{htmlFor:"email",className:"label w-2/5 text-nowrap",children:"Email:"}),e.jsx("div",{className:"w-3/5 flex justify-end",children:e.jsx("input",{id:"email",type:"text",className:"input input-bordered w-full input-sm",value:t.email,onChange:r})})]})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"space-y-2 w-full mb-10",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h1",{children:"Effectivity of LOA"}),e.jsxs("div",{className:"flex gap-10",children:[e.jsxs("div",{className:"flex gap-2 w-1/5 items-center flex-1",children:[e.jsx("label",{htmlFor:"sem_eff_loa",className:"label text-nowrap label-xs",children:"LOA Sem:"}),e.jsx("div",{className:"w-full justify-end",children:e.jsxs("select",{name:"",id:"sem_eff_loa",className:"select select-bordered w-full select-sm text-xs",value:t.sem_eff_loa,onChange:r,children:[e.jsx("option",{value:"",children:"--Sem--"}),d.map(c=>e.jsx("option",{value:c,children:c},`${c}-loa-sem`))]})})]}),e.jsxs("div",{className:"flex gap-3 w-3/5 items-center",children:[e.jsx("label",{htmlFor:"year_eff_loa",className:"label w-1/5 text-nowrap label-xs",children:"LOA Year:"}),e.jsx("div",{className:"w-4/5 flex justify-end",children:e.jsxs("select",{name:"",id:"year_eff_loa",className:"select select-bordered w-full select-sm text-xs",value:t.year_eff_loa,onChange:r,children:[e.jsx("option",{value:"",children:"--Select Bachelor--"}),u.map(c=>e.jsx("option",{value:c,children:c},`${c}-loa-year`))]})})]})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h1",{children:"Returning Academic Year"}),e.jsxs("div",{className:"flex gap-10",children:[e.jsxs("div",{className:"flex gap-2 w-1/5 items-center flex-1",children:[e.jsx("label",{htmlFor:"sem_re",className:"label text-nowrap label-xs",children:"RE. Sem:"}),e.jsx("div",{className:"w-full justify-end",children:e.jsxs("select",{name:"",id:"sem_re",className:"select select-bordered w-full select-sm text-xs",value:t.sem_re,onChange:r,children:[e.jsx("option",{value:"",children:"--Sem--"}),d.map(c=>e.jsx("option",{value:c,children:c},`${c}-re-sem`))]})})]}),e.jsxs("div",{className:"flex gap-3 w-3/5 items-center",children:[e.jsx("label",{htmlFor:"year_re",className:"label w-1/5 text-nowrap label-xs",children:"RE. Year:"}),e.jsx("div",{className:"w-4/5 flex justify-end",children:e.jsxs("select",{name:"",id:"year_re",className:"select select-bordered w-full select-sm text-xs",value:t.year_re,onChange:r,children:[e.jsx("option",{value:"",children:"--Select Bachelor--"}),u.map(c=>e.jsx("option",{value:c,children:c},`${c}-re-year`))]})})]})]})]})]}),e.jsx("div",{className:"divider"}),e.jsx("div",{className:"space-y-2 w-full mb-10",children:e.jsxs("div",{className:"mb-4",children:[e.jsx("h1",{children:"Reason:"}),e.jsx("div",{className:"flex gap-10",children:e.jsx("textarea",{className:"textarea textarea-bordered w-full",id:"reason",value:t.reason,onChange:r})})]})})]}),e.jsx("div",{className:"px-2 py-5",children:e.jsx("button",{className:"btn bg-base-300 w-full",type:"submit",children:"Submit"})})]})};var Ke={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$e=Q.createContext&&Q.createContext(Ke),Et=["attr","size","title"];function Lt(s,t){if(s==null)return{};var a=It(s,t),r,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(d=0;d<u.length;d++)r=u[d],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(a[r]=s[r])}return a}function It(s,t){if(s==null)return{};var a={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(t.indexOf(r)>=0)continue;a[r]=s[r]}return a}function ce(){return ce=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(s[r]=a[r])}return s},ce.apply(this,arguments)}function Be(s,t){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(d){return Object.getOwnPropertyDescriptor(s,d).enumerable})),a.push.apply(a,r)}return a}function oe(s){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Be(Object(a),!0).forEach(function(r){Ft(s,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):Be(Object(a)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(a,r))})}return s}function Ft(s,t,a){return t=Pt(t),t in s?Object.defineProperty(s,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[t]=a,s}function Pt(s){var t=Tt(s,"string");return typeof t=="symbol"?t:t+""}function Tt(s,t){if(typeof s!="object"||!s)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var r=a.call(s,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function Xe(s){return s&&s.map((t,a)=>Q.createElement(t.tag,oe({key:a},t.attr),Xe(t.child)))}function Se(s){return t=>Q.createElement(Dt,ce({attr:oe({},s.attr)},t),Xe(s.child))}function Dt(s){var t=a=>{var{attr:r,size:d,title:u}=s,o=Lt(s,Et),j=d||a.size||"1em",i;return a.className&&(i=a.className),s.className&&(i=(i?i+" ":"")+s.className),Q.createElement("svg",ce({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,r,o,{className:i,style:oe(oe({color:s.color||a.color},a.style),s.style),height:j,width:j,xmlns:"http://www.w3.org/2000/svg"}),u&&Q.createElement("title",null,u),s.children)};return $e!==void 0?Q.createElement($e.Consumer,null,a=>t(a)):t(Ke)}function At(s){return Se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"},child:[]}]})(s)}function Mt(s){return Se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"},child:[]},{tag:"path",attr:{d:"M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"},child:[]}]})(s)}const Qt=s=>{let t;const a=new Set,r=(f,v)=>{const h=typeof f=="function"?f(t):f;if(!Object.is(h,t)){const R=t;t=v??(typeof h!="object"||h===null)?h:Object.assign({},t,h),a.forEach(c=>c(t,R))}},d=()=>t,j={setState:r,getState:d,getInitialState:()=>i,subscribe:f=>(a.add(f),()=>a.delete(f))},i=t=s(r,d,j);return j},qt=s=>Qt(s),Ut=s=>s;function $t(s,t=Ut){const a=Q.useSyncExternalStore(s.subscribe,()=>t(s.getState()),()=>t(s.getInitialState()));return Q.useDebugValue(a),a}const Bt=s=>{const t=qt(s),a=r=>$t(t,r);return Object.assign(a,t),a},Yt=s=>Bt(s),We=Yt(s=>({editModalIsOpen:!1,transactionId:null,openEditModal:t=>s({editModalIsOpen:!0,transactionId:t}),closeEditModal:()=>s({editModalIsOpen:!1,transactionId:null}),toggleEditModal:()=>s(t=>({editModalIsOpen:!t.isOpen}))}));function zt(s){return Se({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(s)}const Ht=()=>{const{transactionId:s,editModalIsOpen:t,closeEditModal:a}=We(),[r,d]=b.useState(!1),u=de(),[o,j]=b.useState(""),[i,f]=b.useState(""),[v,h]=b.useState(""),[R,c]=b.useState(""),[w,E]=b.useState(""),[p,L]=b.useState(""),[q,V]=b.useState(""),[J,ee]=b.useState(""),[ue,I]=b.useState(""),[te,S]=b.useState(""),[D,A]=b.useState(""),[B,Ce]=b.useState(""),[_e,Oe]=b.useState(""),[Re,Ee]=b.useState(""),Ge=async()=>{const{data:n}=await le.get("/api/years");return n},{data:Ze,isLoading:Je}=K({queryFn:Ge,queryKey:["getAllYears"]}),et=async()=>{const{data:n}=await le.get("/api/bachelors");return n},{data:tt,isLoading:st}=K({queryFn:et,queryKey:["getAllBachelors"]}),Le=["1st","2nd"],Ie=["2010-2011","2011-2012","2012-2013","2013-2014","2014-2015","2015-2016","2017-2018","2018-2019","2019-2020","2020-2021","2021-2022","2022-2023","2023-2024","2024-2025","2025-2026","2026-2027"],at=async()=>{if(!s)return null;try{const{data:n}=await le.get(`/api/transactions/${s}`);return n}catch(n){console.error("Error fetching transaction:",n)}},{data:M,isLoading:kt,isSuccess:Fe}=K({queryKey:["getTransaction",s],queryFn:at}),rt=async n=>{d(!0);try{await le.put(`/api/transactions/${s}`,n),u.invalidateQueries("getAllTransactions"),d(!1),k.success("Transaction updated successfully!"),a()}catch(N){console.error("Error updating transaction:",N),d(!1)}},lt=n=>{n.preventDefault();let N=[];if(o||N.push("Student Number is required."),i||N.push("First Name is required."),R||N.push("Last Name is required."),N.length>0){k.error(N.join(`
`));return}rt({studentNumber:o,fname:i,mname:v,lname:R,suffix:w,year:p,bachelor:q,contact_number:J,email:ue,sem_eff_loa:te,year_eff_loa:D,sem_re:B,year_re:_e,reason:Re})};return b.useEffect(()=>{var n,N;if(Fe&&M){const F=M.student||{};j(F.student_number||""),f(F.first_name||""),h(F.middle_name||""),E(F.suffix||""),c(F.last_name||""),L(((n=F.year)==null?void 0:n.name)||""),V(((N=F.bachelor)==null?void 0:N.name)||""),ee(F.contact_number||""),I(F.email||""),S(M.loa_semester||""),A(M.loa_year||""),Ce(M.re_semester||""),Oe(M.re_year||""),Ee(M.reason||"")}},[Fe,M]),e.jsx("dialog",{className:`modal ${t?"modal-open":""}`,children:e.jsxs("div",{className:"modal-box w-11/12 max-w-7xl h-[90vh]",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h3",{className:"font-bold text-lg",children:"Edit Transaction"}),e.jsx("button",{className:"btn bg-base-300",onClick:a,children:e.jsx(zt,{})})]}),M&&e.jsxs("form",{onSubmit:lt,className:"mt-4 flex flex-col gap-4",children:[e.jsxs("div",{className:"overflow-y-auto h-[60vh] px-5",children:[e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Student Number"}),e.jsx("input",{type:"text",value:o,onChange:n=>{let N=n.target.value.replace(/\D/g,"");N.length>6&&(N=N.slice(0,7)),N.length>2&&(N=N.slice(0,2)+"-"+N.slice(2)),j(N)},className:"input input-bordered w-full",placeholder:"XX-XXXX"})]})}),e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"First Name"}),e.jsx("input",{type:"text",value:i,onChange:n=>f(n.target.value),className:"input input-bordered w-full"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Middle Name"}),e.jsx("input",{type:"text",value:v,onChange:n=>h(n.target.value),className:"input input-bordered w-full"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Last Name"}),e.jsx("input",{type:"text",value:R,onChange:n=>c(n.target.value),className:"input input-bordered w-full"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Suffix"}),e.jsx("input",{type:"text",value:w,onChange:n=>E(n.target.value),className:"input input-bordered w-full"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Year"}),e.jsxs("select",{id:"year",className:"select select-bordered w-full",value:p,onChange:n=>L(n.target.value),children:[e.jsx("option",{value:"",children:"--Year--"}),Je?null:Ze.map(n=>e.jsx("option",{value:n.name,children:n.name}))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Degree"}),e.jsxs("select",{name:"",id:"bachelor",className:"select select-bordered w-full",value:q,onChange:n=>V(n.target.value),children:[e.jsx("option",{value:"",children:"--Bachelor--"}),st?null:tt.map(n=>e.jsx("option",{value:n.name,children:n.name}))]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Contact Number"}),e.jsx("input",{type:"text",value:J,onChange:n=>ee(n.target.value),className:"input input-bordered w-full"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Email"}),e.jsx("input",{type:"text",value:ue,onChange:n=>I(n.target.value),className:"input input-bordered w-full"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"LOA Semester"}),e.jsxs("select",{value:te,onChange:n=>S(n.target.value),className:"select select-bordered w-full",children:[e.jsx("option",{value:"",children:"Select LOA Semester"}),Le.map(n=>e.jsx("option",{value:n,children:n},n))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"LOA Year"}),e.jsxs("select",{value:D,onChange:n=>A(n.target.value),className:"select select-bordered w-full",children:[e.jsx("option",{value:"",children:"Select LOA Year"}),Ie.map(n=>e.jsx("option",{value:n,children:n},n))]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Returning Semester"}),e.jsxs("select",{value:B,onChange:n=>Ce(n.target.value),className:"select select-bordered w-full",children:[e.jsx("option",{value:"",children:"Select Returning Semester"}),Le.map(n=>e.jsx("option",{value:n,children:n},n))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Returning Year"}),e.jsxs("select",{value:_e,onChange:n=>Oe(n.target.value),className:"select select-bordered w-full",children:[e.jsx("option",{value:"",children:"Select Returning Year"}),Ie.map(n=>e.jsx("option",{value:n,children:n},n))]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Reason"}),e.jsx("textarea",{value:Re,onChange:n=>Ee(n.target.value),className:"textarea textarea-bordered w-full"})]})]}),e.jsx("div",{className:"mt-4 flex gap-2 justify-end",children:e.jsx("button",{className:"btn btn-primary w-20",type:"submit",disabled:r,children:r?"Saving...":"Save"})})]})]})})},Vt=()=>{const s=de(),t=()=>{const i=new URLSearchParams(window.location.search);return{query:i.get("query"),page:i.get("page")}},{openEditModal:a}=We(),r=async()=>{const{query:i,page:f}=t();try{const{data:v}=await axios.get("/api/transactions",{params:{query:i,page:f}});return v}catch(v){console.error(v)}},d=async i=>{try{await axios.delete(`/api/transactions/${i}`),s.invalidateQueries("getAllTransactions"),k.success("Transaction deleted successfully!")}catch(f){console.error(f)}},{data:u,isLoading:o}=K({queryKey:["getAllTransactions",He().url],queryFn:r}),j=(i,f)=>{{const v=new URLSearchParams(f.split("?")[1]),h=new URLSearchParams(window.location.search);Array.from(h).length===0?ie.visit(`?page=${v.get("page")}`):(h.set("page",v.get("page")),ie.visit(`?${h.toString()}`))}};return o?e.jsx("div",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"overflow-y-auto h-[60vh] px-2",children:[e.jsxs("table",{className:"table table-xs text-sm w-full",children:[e.jsx("thead",{className:"sticky top-0 w-full bg-base-100 z-10",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Student #"}),e.jsx("th",{children:"Full Name"}),e.jsx("th",{children:"Effectivity of LOA"}),e.jsx("th",{children:"Returning Academic Year"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:u.data.map((i,f)=>e.jsxs("tr",{className:"hover",children:[e.jsx("td",{children:i.student.student_number}),e.jsx("td",{className:"capitalize",children:`${i.student.first_name} ${i.student.middle_name?i.student.middle_name:""} ${i.student.last_name} ${i.student.suffix?i.student.suffix:""}`}),e.jsx("td",{children:`${i.loa_semester?i.loa_semester+" Sem,":""} ${i.loa_year?i.loa_year:""}`}),e.jsx("td",{children:`${i.re_semester?i.re_semester+" Sem,":""} ${i.re_year?i.re_year:""}`}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center justify-end me-2 gap-1",children:[e.jsx("div",{className:"tooltip tooltip-bottom","data-tip":"Edit",children:e.jsx("button",{className:"btn bg-base-300 btn-xs rounded-sm",onClick:()=>a(i.id),children:e.jsx(Mt,{color:"green",size:20})})}),e.jsx("div",{className:"tooltip tooltip-bottom","data-tip":"Delete",children:e.jsx("button",{className:"btn bg-base-300 btn-xs rounded-sm",onClick:()=>d(i.id),children:e.jsx(At,{color:"red",size:20})})})]})})]},f))})]}),e.jsx(Ht,{})]}),e.jsxs("div",{className:"flex justify-between mt-4",children:[e.jsx("div",{className:"flex gap-5",children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx("a",{className:"btn bg-base-300 btn-sm rounded-sm",href:"/api/generateCsv",children:"CSV"}),e.jsx("a",{className:"btn bg-base-300 btn-sm rounded-sm",href:"/api/generateExcel",children:"EXCEL"})]})}),e.jsx("div",{className:"join",children:u.links.map((i,f)=>e.jsx("div",{className:`join-item btn  btn-sm ${i.active?"bg-base-100":"bg-base-300"}`,dangerouslySetInnerHTML:{__html:i.label},onClick:()=>j("page",i.url)},f))})]})]})};function Gt(){const{url:s}=He(),a=new URLSearchParams(s.split("?")[1]).get("query")||"",[r,d]=b.useState(a),u=()=>{const o=new URLSearchParams;r&&o.append("query",r),ie.visit(`?${o.toString()}`)};return e.jsxs(ht,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Dashboard"}),children:[e.jsx(ut,{title:"Dashboard"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto sm:px-6 lg:px-20",children:e.jsx("div",{className:"overflow-hidden bg-base-100 shadow-sm sm:rounded-lg px-10",children:e.jsxs("div",{className:"flex gap-10",children:[e.jsx("div",{className:"flex-1 w-full",children:e.jsxs("div",{className:"p-6 text-gray-900 w-full",children:[e.jsxs("div",{className:"flex justify-between items-center pb-5",children:[e.jsx("h1",{children:"All Transaction"}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("input",{type:"text",className:"input input-bordered input-sm rounded-sm text-base-content",placeholder:"Search...",value:r,onChange:o=>d(o.target.value),onKeyDown:o=>{o.key==="Enter"&&u()}}),e.jsx("button",{className:"btn bg-base-300 btn-sm rounded-sm",onClick:()=>ie.visit("/"),children:"Clear Filter"})]})]}),e.jsx(Vt,{})]})}),e.jsx("div",{className:"divider divider-horizontal m-0"}),e.jsx("div",{className:"w-2/5",children:e.jsxs("div",{className:"py-5 text-gray-900 w-full",children:[e.jsx("div",{className:"flex pb-5",children:e.jsx("h1",{children:"Create New Transaction"})}),e.jsx(Rt,{})]})})]})})})})]})}export{Gt as default};
