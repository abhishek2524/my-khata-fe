(this["webpackJsonpmy-khata"]=this["webpackJsonpmy-khata"]||[]).push([[1],{31:function(t,e,n){"use strict";n.d(e,"f",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return j})),n.d(e,"a",(function(){return l})),n.d(e,"g",(function(){return b})),n.d(e,"b",(function(){return f}));var c=n(10),a=n(17),r={isLoading:!1,isConfirm:!1,show:!1},o=Object(a.b)({name:"bank",initialState:r,reducers:{setLoader:function(t,e){t.isLoading=!0},stopLoader:function(t){t.isLoading=!1},setInit:function(t){return Object(c.a)(Object(c.a)({},t),{},{initState:r})},setConfirmModal:function(t){t.isConfirm=!0},closeConfirmModal:function(t){t.isConfirm=!1},showModal:function(t,e){t.show=!0},closeModal:function(t,e){t.show=!1}}}),i=o.actions,s=i.setLoader,u=i.stopLoader,d=i.setInit,j=i.setConfirmModal,l=i.closeConfirmModal,b=i.showModal,f=i.closeModal;e.c=o.reducer},33:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var c=n(17),a=Object(c.b)({name:"bankData",initialState:{data:[],fetchData:!1},reducers:{setIsFetch:function(t,e){t.fetchData=!0},clearIsFetch:function(t,e){t.fetchData=!1}}}),r=a.actions,o=r.setIsFetch,i=r.clearIsFetch;e.b=a.reducer},60:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);n(0);var c=n(19),a=n.n(c),r=function(t){t&&t instanceof Function&&n.e(7).then(n.bind(null,193)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))},o=n(9),i=n(17),s=n(40),u=n(21),d=n(8),j=n(31),l=n(33),b=n(20),f=n.n(b),h=function(t){return Object(d.b)({router:Object(u.b)(t),toastr:b.reducer,bankReducer:l.b,globalReducer:j.c})},O=Object(s.a)(),m=Object(i.a)({reducer:h(O)}),x=n(10),p=n(32),g=n(4),v=n(29),k=n(68),C=(n(60),n(2)),F=function(){return Object(C.jsx)("div",{children:Object(C.jsx)(k.a,{animated:!0,variant:"danger",now:"100",max:"100",className:"loader"})})},w=n(22),y=(n(62),function(){return Object(C.jsx)("header",{children:Object(C.jsx)("div",{className:"headerDiv",children:"KhataApp"})})});n(63);var I=function(){var t=(new Date).getFullYear();return Object(C.jsx)("footer",{children:Object(C.jsxs)("div",{className:"footerDiv",children:["MyKhataApp\xa9 ",t]})})},L=function(){return Object(C.jsx)(F,{})},D=Object(v.a)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,197))}),{fallback:Object(C.jsx)(L,{})}),M=Object(v.a)((function(){return Promise.all([n.e(0),n.e(3),n.e(5)]).then(n.bind(null,199))}),{fallback:Object(C.jsx)(L,{})}),R=Object(o.connect)((function(t){return{globalReducer:t.globalReducer}}),null)((function(t){var e=t.component,n=t.globalReducer,c=Object(p.a)(t,["component","globalReducer"]);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(g.a,Object(x.a)(Object(x.a)({},c),{},{render:function(t){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(f.a,{timeOut:1e3,newestOnTop:!1,preventDuplicates:!0,position:"top-center",getState:function(t){return t.toastr},transitionIn:"fadeIn",transitionOut:"fadeOut",progressBar:!0,closeOnToastrClick:!0}),Object(C.jsxs)("div",{className:"container-fluid main m-0 p-0",children:[Object(C.jsx)(y,{}),n.isLoading&&Object(C.jsx)(L,{}),Object(C.jsx)(e,Object(x.a)({},t)),Object(C.jsx)(I,{})]})]})}}))})})),S=Object(C.jsx)("div",{children:Object(C.jsxs)(g.c,{children:[Object(C.jsx)(R,{exact:!0,path:"".concat("/my-khata-fe","/try"),component:y}),Object(C.jsx)(R,{exact:!0,path:"".concat("/my-khata-fe","/account-detail/:bankid"),component:M}),Object(C.jsx)(R,{exact:!0,path:"".concat("/my-khata-fe","/bank"),component:D}),Object(C.jsx)(g.a,{path:"*",component:function(){return Object(C.jsxs)("div",{children:["Oops! Seems like you are misdirected",Object(C.jsx)(w.b,{to:"/bank",children:"Go to home"})]})}})]})});n(64),n(42),n(65);a.a.render(Object(C.jsx)(o.Provider,{store:m,children:Object(C.jsx)(u.a,{history:O,children:S})}),document.getElementById("root")),r()}},[[66,2,4]]]);
//# sourceMappingURL=main.04ed8512.chunk.js.map