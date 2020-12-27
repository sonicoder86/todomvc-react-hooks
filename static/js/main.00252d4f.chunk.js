(this["webpackJsonptodomvc-react-hooks"]=this["webpackJsonptodomvc-react-hooks"]||[]).push([[0],{25:function(e,t,c){"use strict";c.r(t);var o=c(1),s=c(0),n=c(4),a=(c(16),c(2)),l=c(3);const d="all",r="active",i="completed";var j=c(27);const b="LOAD",u="CREATE",O="REMOVE",h="UPDATE_TODO",m="COMPLETE_ALL",p="CLEAR_COMPLETED",x="SELECT_FILTER";function f(e){return e.filter((e=>e.completed))}function g(e){return e.filter((e=>!e.completed))}const v=e=>e.length&&f(e).length===e.length,y=Object(l.b)({todos:(e=[],t)=>{switch(t.type){case b:return[...t.todos];case u:return[...e,{id:Object(j.a)(),name:t.name,completed:!1}];case h:return e.map((e=>e.id===t.values.id?{...e,...t.values}:e));case O:return e.filter((e=>e.id!==t.id));case m:return e.map((t=>({...t,completed:!v(e)})));case p:return g(e);default:return e}},filter:(e=d,t)=>{switch(t.type){case x:return t.filter;default:return e}}}),E=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),N={todos:[],filter:d},k=e=>({type:u,name:e}),C="todoapp_todos";class T{static loadTodos(){return JSON.parse(window.localStorage.getItem(C)||"[]")}static storeTodos(e){window.localStorage.setItem(C,JSON.stringify(e))}}function _(){const[e,t]=Object(s.useState)(""),c=Object(a.b)();return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("h1",{children:"todos"}),Object(o.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",value:e,onInput:e=>t(e.target.value),onKeyUp:o=>{"Enter"===o.key&&(c(k(e)),k(e),t(""))},onChange:()=>{},"data-testid":"todo-create"})]})}var w=c(5),S=c.n(w);function D({todo:e,onUpdate:t,onRemove:c}){const[n,a]=Object(s.useState)(!1),[l,d]=Object(s.useState)(e.name),{completed:r}=e;return Object(o.jsxs)("li",{className:S()({completed:r,editing:n}),"data-testid":"todo-item",children:[Object(o.jsxs)("div",{className:"view",children:[Object(o.jsx)("input",{className:"toggle",type:"checkbox",checked:r,onChange:()=>t({id:e.id,completed:!e.completed})}),Object(o.jsx)("label",{onDoubleClick:()=>a(!0),"data-testid":"todo-name",children:e.name}),Object(o.jsx)("button",{className:"destroy",onClick:()=>c(e.id),"data-testid":"todo-remove"})]}),n&&Object(o.jsx)("input",{className:"edit",value:l,onInput:e=>d(e.target.value),onBlur:()=>{t({id:e.id,name:l}),a(!1)},onChange:()=>{}})]})}function L(){const e=Object(a.b)(),t=Object(a.c)((e=>function(e,t){switch(t){case d:return[...e];case i:return f(e);case r:return g(e);default:return[...e]}}(e.todos,e.filter))),c=Object(a.c)((e=>e.todos.length&&e.todos.every((e=>e.completed)))),s=t=>e((e=>({type:h,values:e}))(t)),n=t=>e((e=>({type:O,id:e}))(t));return Object(o.jsxs)("section",{className:"main",children:[Object(o.jsx)("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",checked:c,readOnly:!0}),Object(o.jsx)("label",{htmlFor:"toggle-all",onClick:()=>e({type:m})}),Object(o.jsx)("ul",{className:"todo-list",children:t.map((e=>Object(o.jsx)(D,{todo:e,onUpdate:s,onRemove:n},e.id)))})]})}function R(){const e=[{key:d,value:"All"},{key:r,value:"Active"},{key:i,value:"Completed"}],t=Object(a.b)(),c=Object(a.c)((e=>f(e.todos).length)),s=Object(a.c)((e=>g(e.todos).length)),n=Object(a.c)((e=>e.filter)),l=e=>t((e=>({type:x,filter:e}))(e)),j=1===s?"item":"items";return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsxs)("span",{className:"todo-count",children:[Object(o.jsx)("strong",{children:s}),Object(o.jsxs)("span",{children:[" ",j," left"]})]}),Object(o.jsx)("ul",{className:"filters",children:e.map((e=>Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"./#",className:S()({selected:e.key===n}),onClick:()=>l(e.key),children:e.value})},e.key)))}),!!c&&Object(o.jsx)("button",{className:"clear-completed",onClick:()=>t({type:p}),children:"Clear completed"})]})}function A(){return Object(o.jsxs)("footer",{className:"info",children:[Object(o.jsx)("p",{"data-testid":"instruction",children:"Double-click to edit a todo"}),Object(o.jsxs)("p",{children:["Created by ",Object(o.jsx)("a",{href:"http://github.com/blacksonic/",children:"blacksonic"})]}),Object(o.jsxs)("p",{children:["Part of ",Object(o.jsx)("a",{href:"http://todomvc.com",children:"TodoMVC"})]})]})}function I(){const e=Object(a.b)(),t=Object(a.c)((e=>e.todos));return Object(s.useEffect)((()=>{e((e=>({type:b,todos:e}))(T.loadTodos()))}),[e]),Object(s.useEffect)((()=>{T.storeTodos(t)}),[t]),Object(o.jsxs)("div",{id:"app",children:[Object(o.jsxs)("section",{className:"todoapp",children:[Object(o.jsx)(_,{}),!!t.length&&Object(o.jsx)(L,{}),!!t.length&&Object(o.jsx)(R,{})]}),Object(o.jsx)(A,{})]})}Object(n.render)(Object(o.jsx)(a.a,{store:((e=N)=>Object(l.c)(y,e,E))(),children:Object(o.jsx)(I,{})}),document.getElementsByTagName("app-root")[0])}},[[25,1,2]]]);
//# sourceMappingURL=main.00252d4f.chunk.js.map