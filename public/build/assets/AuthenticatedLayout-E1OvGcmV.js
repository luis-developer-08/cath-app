import{K as r,m as o,j as e,$ as a,g as t}from"./app-BrCZesEf.js";const d=()=>{const s=r().props.auth.user,{post:n}=o();return e.jsxs("div",{className:"navbar bg-base-300 px-20 sticky top-0",children:[e.jsx("div",{className:"navbar-start",children:e.jsxs("div",{className:"dropdown",children:[e.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost btn-circle",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h7"})})}),e.jsxs("ul",{tabIndex:0,className:"menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow",children:[e.jsx("li",{children:e.jsx(a,{href:route("dashboard"),children:"Homepage"})}),e.jsx("li",{children:e.jsx("a",{children:"About"})})]})]})}),e.jsx("div",{className:"navbar-center",children:e.jsx(a,{className:"btn btn-ghost text-xl",href:route("dashboard"),children:"CathCutie"})}),e.jsx("div",{className:"navbar-end",children:s?e.jsxs("div",{className:"dropdown dropdown-end",children:[e.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost btn-circle avatar bg-base-100",children:s.name.slice(0,1)}),e.jsxs("ul",{tabIndex:0,className:"menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow",children:[e.jsx("li",{children:e.jsx(a,{href:route("profile.edit"),children:"Profile"})}),e.jsx("li",{children:e.jsx("a",{onClick:()=>n(route("logout")),children:"Logout"})})]})]}):null})]})};t.createContext();function c({header:s,children:n}){return r().props.auth.user,t.useState(!1),e.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-100",children:[e.jsx(d,{}),e.jsx("main",{className:"flex-1 bg-base-200",children:n})]})}export{c as A};
