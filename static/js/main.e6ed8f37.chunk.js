(this["webpackJsonppersonal-resume"]=this["webpackJsonppersonal-resume"]||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={};n.r(c),n.d(c,"getWorkHistory",(function(){return r})),n.d(c,"workHistoryReceived",(function(){return s})),n.d(c,"getProjects",(function(){return i})),n.d(c,"projectsReceived",(function(){return E})),n.d(c,"getCompanies",(function(){return a})),n.d(c,"companiesReceived",(function(){return O})),n.d(c,"showProjects",(function(){return d}));var o=n(5);const r=()=>({type:o.a.GET_WORK_HISTORY}),s=e=>({type:o.a.WORK_HISTORY_RECEIVED,payload:e}),i=()=>({type:o.a.GET_PROJECTS}),E=e=>({type:o.a.PROJECTS_RECEIVED,payload:e}),a=()=>({type:o.a.GET_COMPANIES}),O=e=>({type:o.a.COMPANIES_RECEIVED,payload:e}),d=e=>({type:o.a.SHOW_PROJECTS,payload:e})},30:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"getWorkHistorys",(function(){return b})),n.d(c,"getProjectList",(function(){return T})),n.d(c,"getCompanyList",(function(){return l}));var o=n(1),r=n.n(o),s=n(14),i=n.n(s);n(30),n(31);var E=e=>{e&&e instanceof Function&&n.e(4).then(n.bind(null,151)).then((t=>{let{getCLS:n,getFID:c,getFCP:o,getLCP:r,getTTFB:s}=t;n(e),c(e),o(e),r(e),s(e)}))},a=n(20),O=n(10),d=n(25),u=n(5);const R={workHistory:[],projects:[],companies:[],showProjects:!1},j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,{type:t,payload:n}=arguments.length>1?arguments[1]:void 0;switch(t){case u.a.WORK_HISTORY_RECEIVED:return{...e,workHistory:n};case u.a.PROJECTS_RECEIVED:return{...e,projects:n};case u.a.COMPANIES_RECEIVED:return{...e,companies:n};case u.a.SHOW_PROJECTS:return{...e,showProjects:n};default:return e}};var _=n(22),C=n(7),I=n(13);const S=document.baseURI,b=()=>fetch(S+"/fake-db/word-history.json").then((e=>e.json())),T=()=>fetch(S+"/fake-db/projects.json").then((e=>e.json())),l=()=>fetch(S+"/fake-db/companies.json").then((e=>e.json()));function*p(){yield Object(C.d)(u.a.GET_WORK_HISTORY,y),yield Object(C.d)(u.a.GET_PROJECTS,f),yield Object(C.d)(u.a.GET_COMPANIES,P)}function*y(e){let t=yield Object(C.b)(c.getWorkHistorys);yield Object(C.c)(I.a.workHistoryReceived(t))}function*f(e){const t=yield Object(C.b)(c.getProjectList);yield Object(C.c)(I.a.projectsReceived(t))}function*P(e){const t=yield Object(C.b)(c.getCompanyList);yield Object(C.c)(I.a.companiesReceived(t))}function*h(){yield Object(_.a)([p()])}const H=Object(d.a)(),D=Object(O.c)(Object(O.a)(H));var g=n(23);const v=Object(g.a)();var W=n(17),A=n(8);const J=r.a.lazy((()=>n.e(2).then(n.bind(null,152))));function m(){return Object(A.jsx)("div",{children:Object(A.jsx)(o.Suspense,{fallback:Object(A.jsx)("div",{children:"Loading..."}),children:Object(A.jsx)(W.b,{history:v,children:Object(A.jsx)(W.c,{children:Object(A.jsx)(W.a,{exact:!0,path:"/",component:J})})})})})}const k=function(){const e=Object(O.d)(Object(O.b)({Main:j}),D);return H.run(h),e}();i.a.render(Object(A.jsx)(a.a,{store:k,children:Object(A.jsx)(m,{})}),document.getElementById("root")),E()},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c={GET_WORK_HISTORY:"GET_WORK_HISTORY",WORK_HISTORY_RECEIVED:"WORK_HISTORY_RECEIVED",WORK_HISTORY_FAILED:"WORK_HISTORY_FAILED",GET_PROJECTS:"GET_PROJECTS",PROJECTS_RECEIVED:"PROJECTS_RECEIVED",PROJECTS_FAILED:"PROJECTS_FAILED",GET_COMPANIES:"GET_COMPANIES",COMPANIES_RECEIVED:"COMPANIES_RECEIVED",COMPANIES_FAILED:"COMPANIES_FAILED",SHOW_PROJECTS:"SHOW_PROJECTS"}}},[[38,1,3]]]);
//# sourceMappingURL=main.e6ed8f37.chunk.js.map