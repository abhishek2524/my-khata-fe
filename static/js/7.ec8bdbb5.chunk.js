(this["webpackJsonpmy-khata"]=this["webpackJsonpmy-khata"]||[]).push([[7],{102:function(e,t,a){"use strict";var n=a(74),c=a(0),r=a(73),s=a(2);var o=function(){var e=Object(c.useState)({date:(new Date).toLocaleDateString(),time:(new Date).toLocaleTimeString()}),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){r({date:(new Date).toLocaleDateString(),time:(new Date).toLocaleTimeString()})}),1e3);return function(){clearInterval(e)}}),[a]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("span",{className:"mx-2",children:[Object(s.jsx)("i",{className:"fa fa-clock"}),a.time]}),Object(s.jsxs)("span",{className:"mx-2",children:[Object(s.jsx)("i",{className:"fa fa-calendar "}),a.date]})]})},i=(a(93),a(34)),l=a(9),u=a(4);t.a=function(e){var t=Object(u.g)(),a=Object(l.useDispatch)(),d=Object(c.useState)(!1),b=Object(n.a)(d,2),j=b[0],m=b[1],f=Object(c.useState)(window.screen.width),h=Object(n.a)(f,2),O=h[0],p=h[1];return Object(c.useEffect)((function(){return function(){window.removeEventListener("resize",m(!1))}}),[]),window.addEventListener("resize",(function(){p(window.screen.width)})),Object(s.jsxs)("div",{className:"sub-header",children:[Object(s.jsxs)("div",{className:"leftEnd",children:[Object(s.jsx)(r.a,{onClick:function(){a(Object(i.c)())},children:"Refresh"}),Object(s.jsx)(r.a,{variant:"info ml-2",onClick:function(){localStorage.clear(),t.push("".concat("/my-khata-fe","/login"))},children:"Logout"})]}),Object(s.jsx)("div",{className:"hamburger",children:Object(s.jsx)("i",{className:j?"fas fa-times":"fas fa-bars",onClick:function(){m(!j)}})}),Object(s.jsxs)("div",{className:"".concat(O<768?j?"d-flex":"d-none":""," rightEnd"),children:[e.children,Object(s.jsx)(o,{})]})]})}},125:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(75),c=a.n(n),r=a(76),s=a(74),o=a(33),i=a(0),l=a.n(i),u=a(198),d=a(197),b=a(127),j=a(9),m=a(32),f=a(34),h=a(77),O=(a(125),a(87)),p=a(92),v=a(73),x=a(102),g=a(2);var k={showModal:m.g,closeModal:m.b},y=Object(j.connect)(null,k)((function(e){var t=e.addUser;return e.showModal,Object(o.a)(e,["addUser","showModal"]),Object(g.jsx)(x.a,{children:Object(g.jsx)(v.a,{onClick:t,icon:"fa fa-plus",children:"Add Bank"})})})),N=a(1),w=a(5),C=a(12),S=a.n(C),D=a(31),E=a(84),I=a(105),T=l.a.createContext(null);T.displayName="CardContext";var A=T,L=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.variant,r=e.as,s=void 0===r?"img":r,o=Object(w.a)(e,["bsPrefix","className","variant","as"]),i=Object(D.a)(a,"card-img");return l.a.createElement(s,Object(N.a)({ref:t,className:S()(c?i+"-"+c:i,n)},o))}));L.displayName="CardImg",L.defaultProps={variant:null};var M=L,R=Object(I.a)("h5"),B=Object(I.a)("h6"),P=Object(E.a)("card-body"),H=Object(E.a)("card-title",{Component:R}),z=Object(E.a)("card-subtitle",{Component:B}),U=Object(E.a)("card-link",{Component:"a"}),F=Object(E.a)("card-text",{Component:"p"}),G=Object(E.a)("card-header"),J=Object(E.a)("card-footer"),Y=Object(E.a)("card-img-overlay"),_=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.bg,r=e.text,s=e.border,o=e.body,u=e.children,d=e.as,b=void 0===d?"div":d,j=Object(w.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),m=Object(D.a)(a,"card"),f=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:m+"-header"}}),[m]);return l.a.createElement(A.Provider,{value:f},l.a.createElement(b,Object(N.a)({ref:t},j,{className:S()(n,m,c&&"bg-"+c,r&&"text-"+r,s&&"border-"+s)}),o?l.a.createElement(P,null,u):u))}));_.displayName="Card",_.defaultProps={body:!1},_.Img=M,_.Title=H,_.Subtitle=z,_.Body=P,_.Link=U,_.Text=F,_.Header=G,_.Footer=J,_.ImgOverlay=Y;var X=_,q=a(23),K=a.p+"static/media/axis.b40725ff.png",Q=a.p+"static/media/icici.ff197871.png",V=a.p+"static/media/sbi.c35f85fb.png",W=a.p+"static/media/syndicate.21a6835f.png",Z=a.p+"static/media/canara.08e89d18.png",$={1:[K,"axis"],2:[Q,"icici"],3:[V,"sbi"],4:[Z,"canara"],5:[W,"syndicate"]},ee=[{id:"Salary",value:"Salary"},{id:"Savings",value:"Savings"}],te=[{id:1,name:"Axis Bank",imgSrc:K,className:"axis"},{id:2,name:"ICICI Bank",imgSrc:Q,className:"icici"},{id:3,name:"SBI Bank",imgSrc:V,className:"sbi"},{id:4,name:"Canara Bank",imgSrc:Z,className:"canara"},{id:5,name:"Syndicate Bank",imgSrc:W,className:"syndicate"}];var ae=function(e){var t=e.data,a=t.bank,n=t.totalAmount,c=t.isActive,r=t.bankID,o=t.accountHolder,l=t.accountType,u=Object(i.useRef)(),d=Object(i.useState)({}),b=Object(s.a)(d,2),j=b[0],m=b[1],f=function(){return m(u&&u.current?u.current.getBoundingClientRect():{})};return Object(i.useEffect)((function(){f();var e=u.current;return e&&(e.addEventListener("mousemove",(function(t){var a=(t.clientX-j.left)/j.width,n=(t.clientY-j.top)/j.height-.6,c=-(a-.6),r=Math.min(Math.max(c,-.6),.6);e.style.transform="perspective(50px)\n          rotateY(".concat(4*r,"deg)\n          rotateY(").concat(0*a,"deg)\n          rotateX(").concat(0*r,"deg)\n          rotateX(").concat(0*n,"deg)\n          ")})),e.addEventListener("mouseleave",(function(){e.style.transform="none"}))),function(){e&&(e.removeEventListener("mousemove",f),e.removeEventListener("mouseleave",f))}}),[j.top]),Object(g.jsx)("div",{className:"bankCard",children:Object(g.jsxs)(X,{style:{width:"100%"},className:"bg-".concat($[a][1]),ref:u,children:[Object(g.jsx)(X.Img,{variant:"top",src:$[a][0]}),Object(g.jsxs)(X.Body,{children:[Object(g.jsx)(q.a,{to:{pathname:"/".concat("my-khata-fe","/account-detail/").concat(r),state:{isActive:c,accountHolder:o,bankname:$[a][1],accountType:l}},children:Object(g.jsx)(X.Title,{style:{textTransform:"capitalize"},children:"".concat(o)})}),Object(g.jsx)(X.Text,{children:"Rs.".concat(n,"/-")})]}),Object(g.jsx)(X.Footer,{className:"text-muted",children:Object(g.jsxs)("div",{className:"bank-actions",children:[Object(g.jsx)(v.a,{className:"del",variant:"info",onClick:function(){return e.onEdit(e.data)},icon:"fa fa-edit",disabled:!e.data.isActive,children:"Edit"}),Object(g.jsx)(v.a,{className:"edit",variant:e.data.isActive?"danger":"primary",onClick:function(){return e.onDelete(e.data)},icon:e.data.isActive?"fa fa-trash":"fa fa-check",children:e.data.isActive?"Deactivate":"Activate"})]})})]})})},ne={setLoader:m.f,stopLoader:m.h,setInit:m.e,clearIsFetch:f.a},ce=Object(j.connect)((function(e){return{globalReducer:e.globalReducer,bankReducer:e.bankReducer}}),ne)((function(e){var t=e.globalReducer,a=e.bankReducer,n=e.clearIsFetch,o=e.setLoader,l=e.stopLoader,u=e.setInit,j=t.isLoading,m=a.fetchData,f=Object(i.useState)([]),O=Object(s.a)(f,2),p=O[0],v=O[1],x=Object(g.jsxs)("span",{children:[Object(g.jsx)("i",{className:"fas fa-money-check"}),"No Bank Found.Please Add Bank Using Add Bank Button."]});return Object(i.useEffect)((function(){return function(){var e=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),t=new h.a,e.next=4,t.get("user");case 4:a=e.sent,l(!0),n(),v(a.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){u(),n()}}),[m]),Object(g.jsx)("div",{className:"bankBodyDiv",children:Object(g.jsx)(d.a,{children:j?null:p&&p.length>0?p.map((function(t,a){return Object(g.jsx)(b.a,{className:"col",xs:12,sm:12,md:4,lg:4,xl:4,children:Object(g.jsx)(ae,{data:t,onDelete:e.onDelete,onEdit:e.onEdit})},a)})):Object(g.jsx)("div",{className:"no-data-div",children:x})})})})),re=a(78),se=a(35),oe=a(10),ie=a(201);var le=function(e){var t="",a=Object(j.useDispatch)(),n=e.isEdit,o=Object(i.useState)({bankID:"",accountHolder:"",accountType:"",companyname:""}),l=Object(s.a)(o,2),u=l[0],O=l[1],p=function(){var s=Object(r.a)(c.a.mark((function r(s){var o,i,l,d,b,j,O,p,v,x;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(s.preventDefault(),!n){c.next=23;break}return c.prev=2,o=e.editData,i=o._id,l=o.bankID,d=o.companyID,b=new h.a,c.next=7,b.put("user",Object(oe.a)(Object(oe.a)({},u),{},{bankID:l,bank_obj_id:u.bankID,companyID:d}),i);case 7:c.sent,t="Account Updated Successfully",a(Object(m.b)()),a(Object(f.c)()),Object(re.a)(t,"Success"),c.next=21;break;case 14:return c.prev=14,c.t0=c.catch(2),c.next=18,c.t0.json();case 18:j=c.sent,O=j.msg,Object(re.a)(O,"Error");case 21:c.next=41;break;case 23:return c.prev=23,p=new h.a,c.next=27,p.post("user",u);case 27:c.sent,t="Account Created Successfully",a(Object(m.b)()),a(Object(f.c)()),Object(re.a)(t,"Success"),c.next=41;break;case 34:return c.prev=34,c.t1=c.catch(23),c.next=38,c.t1.json();case 38:v=c.sent,x=v.msg,Object(re.a)(x,"Error");case 41:case"end":return c.stop()}}),r,null,[[2,14],[23,34]])})));return function(e){return s.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(e.isEdit){var t=e.editData,a=t.accountHolder,n=t.accountType,c=t.bank,r=t.companyName;O({bankID:c,accountHolder:a,accountType:n,companyname:r})}else O({bankID:"1",accountHolder:"",accountType:"Savings",companyname:""})}),[]),Object(g.jsx)("div",{className:"bank-form",children:Object(g.jsxs)(ie.a,{onSubmit:p,children:[Object(g.jsxs)(ie.a.Group,{as:d.a,children:[Object(g.jsx)(ie.a.Label,{column:!0,sm:"12",children:"Account Holder Name"}),Object(g.jsx)(b.a,{sm:"12",className:"p-0 m-0",children:Object(g.jsx)(ie.a.Control,{type:"text",name:"accountHolder",id:"accountHolder",placeholder:"Enter Account Holder Name",value:u.accountHolder,onChange:function(e){return O((function(t){return Object(oe.a)(Object(oe.a)({},t),{},Object(se.a)({},e.target.name,e.target.value))}))}})})]}),Object(g.jsxs)(ie.a.Group,{as:d.a,children:[Object(g.jsx)(ie.a.Label,{column:!0,sm:"12",children:"Bank Name"}),Object(g.jsx)(ie.a.Control,{as:"select",size:"md",name:"bankID",placeholder:"Enter Bank Name",id:"bankID",value:u.bankID,onChange:function(e){return O((function(t){return Object(oe.a)(Object(oe.a)({},t),{},Object(se.a)({},e.target.name,e.target.value))}))},children:te.map((function(e,t){return Object(g.jsx)("option",{value:e.id,children:e.name},t)}))})]}),Object(g.jsxs)(ie.a.Group,{as:d.a,children:[Object(g.jsx)(ie.a.Label,{column:!0,sm:"12",children:"Account Type"}),Object(g.jsx)(ie.a.Control,{as:"select",size:"md",name:"accountType",id:"accountType",value:u.accountType,onChange:function(e){return O((function(t){return Object(oe.a)(Object(oe.a)({},t),{},Object(se.a)({},e.target.name,e.target.value))}))},children:ee.map((function(e,t){return Object(g.jsx)("option",{value:e.id,children:e.value},t)}))})]}),"Salary"===u.accountType&&Object(g.jsxs)(ie.a.Group,{as:d.a,children:[Object(g.jsx)(ie.a.Label,{column:!0,sm:12,children:"Company Name"}),Object(g.jsx)(ie.a.Control,{type:"text",name:"companyname",id:"companyname",value:u.companyname,placeholder:"Enter Company Name",onChange:function(e){return O((function(t){return Object(oe.a)(Object(oe.a)({},t),{},Object(se.a)({},e.target.name,e.target.value))}))}})]}),Object(g.jsx)(v.a,{type:"submit",size:"medium",children:e.isEdit?"Edit":"Add"})]})})};var ue=function(e){var t=e.deleteData,a=e.deleteAccount,n=e.setDeleteData,c=e.closeConfirmModal;return Object(g.jsxs)("div",{className:"prompt",children:[Object(g.jsx)("pre",{children:"Are you sure you want to ".concat(t.isActive?"Deactive":"Active"," -").concat(t.accountHolder,"'s ").concat($[t.bank]&&$[t.bank][1]," account")}),Object(g.jsxs)("div",{children:[Object(g.jsxs)(v.a,{className:"mx-2",variant:"danger",onClick:function(){n({}),c()},children:[Object(g.jsx)("i",{className:"fa fa-times mx-1 text-light","aria-hidden":"true"}),"No"]}),Object(g.jsxs)(v.a,{className:"mx-2",variant:"primary",onClick:function(){return a(t._id,t.isActive)},children:[Object(g.jsx)("i",{className:"fa fa-check mx-1 text-light","aria-hidden":"true"}),"Yes"]})]})]})},de={showModal:m.g,closeModal:m.b,closeConfirmModal:m.a,setConfirmModal:m.d,setIsFetch:f.c};t.default=Object(j.connect)((function(e){return{bankReducer:e.bankReducer,globalReducer:e.globalReducer}}),de)((function(e){e.bankReducer;var t=e.globalReducer,a=e.showModal,n=(e.closeModal,e.setConfirmModal),l=e.closeConfirmModal,j=e.setIsFetch,m=(Object(o.a)(e,["bankReducer","globalReducer","showModal","closeModal","setConfirmModal","closeConfirmModal","setIsFetch"]),t.isConfirm),f=Object(i.useState)(!1),v=Object(s.a)(f,2),x=v[0],k=v[1],N=Object(i.useState)({}),w=Object(s.a)(N,2),C=w[0],S=w[1],D=Object(i.useState)({}),E=Object(s.a)(D,2),I=E[0],T=E[1],A=function(){var e=Object(r.a)(c.a.mark((function e(t,a){var n,r,s,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="",r={isActive:!a},s=new h.a,e.next=6,s.put("user",r,t);case 6:e.sent,n="Account Updated Successfully",j(),Object(re.a)(n,"Success"),l(),e.next=21;break;case 13:return e.prev=13,e.t0=e.catch(0),e.next=17,e.t0.json();case 17:o=e.sent,i=o.msg,Object(re.a)(i,"Error"),l();case 21:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p.a,{show:m,children:Object(g.jsx)(ue,{setDeleteData:T,closeConfirmModal:l,deleteAccount:A,deleteData:I})}),Object(g.jsx)(O.a,{children:Object(g.jsx)(le,{isEdit:x,editData:C})}),Object(g.jsxs)(u.a,{fluid:!0,className:"bankContainer",children:[Object(g.jsx)(d.a,{className:"sticky-header",children:Object(g.jsx)(b.a,{children:Object(g.jsx)(y,{addUser:function(){k(!1),a()}})})}),Object(g.jsx)(d.a,{children:Object(g.jsx)(b.a,{children:Object(g.jsx)(ce,{onEdit:function(e){k(!0),S(e),a()},onDelete:function(e){T(e),n(e)}})})})]})]})}))},73:function(e,t,a){"use strict";var n=a(10),c=a(33),r=(a(0),a(43),a(203)),s=(a(80),a(2)),o=function(e){var t=e.children,a=e.className,o=e.variant,i=e.icon,l=Object(c.a)(e,["children","className","variant","icon"]);return Object(s.jsxs)(r.a,Object(n.a)(Object(n.a)({className:"".concat(a," buttonDiv"),disabled:e.disabled,variant:o},l),{},{children:[i&&Object(s.jsx)("span",{children:Object(s.jsx)("i",{className:i})}),t]}))};o.defaultProps={size:"sm",type:"button",variant:"primary",disabled:!1},t.a=o},77:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(75),c=a.n(n),r=a(76),s=a(86),o=a(37),i=(a(32),null),l=function e(){Object(s.a)(this,e),this.post=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,n,r,s,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:{},i.length>2&&void 0!==i[2]?i[2]:{},n=localStorage.getItem("loggedInUser"),e.next=5,fetch("".concat("https://abhishek2524-my-khata.zeet.app","/").concat(t),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Token:n},body:JSON.stringify(a)});case 5:if(!(r=e.sent).ok){e.next=13;break}return e.next=9,r.json();case 9:return s=e.sent,e.abrupt("return",Promise.resolve(s));case 13:return e.next=15,r.json();case 15:return"logout"===e.sent.status&&(localStorage.clear(),Object(o.a)().push("".concat("/my-khata-fe","/login"))),e.abrupt("return",Promise.reject(r));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.get=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,n,r,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.length>1&&void 0!==s[1]?s[1]:{},a=localStorage.getItem("loggedInUser"),e.next=4,fetch("".concat("https://abhishek2524-my-khata.zeet.app","/").concat(t),{method:"GET",headers:{"content-type":"application/json",Token:a}});case 4:if(!(n=e.sent).ok){e.next=14;break}return(new Headers).set("Cross-Origin-Embedder-Policy","require-corp"),e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",Promise.resolve(r));case 14:return e.next=16,n.json();case 16:return"logout"===e.sent.status&&(localStorage.clear(),Object(o.a)().push("".concat("/my-khata-fe","/login"))),e.abrupt("return",Promise.reject(n));case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.delete=function(){var e=Object(r.a)(c.a.mark((function e(t,a,n){var r,s,i,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.length>3&&void 0!==l[3]?l[3]:{},r=localStorage.getItem("loggedInUser"),e.next=4,fetch("".concat("https://abhishek2524-my-khata.zeet.app","/").concat(t,"/").concat(n),{method:"DELETE",headers:{"content-type":"application/json",Token:r},body:JSON.stringify(a)});case 4:if(!(s=e.sent).ok){e.next=12;break}return e.next=8,s.json();case 8:return i=e.sent,e.abrupt("return",Promise.resolve(i));case 12:return e.next=14,s.json();case 14:return"logout"===e.sent.status&&(localStorage.clear(),Object(o.a)().push("".concat("/my-khata-fe","/login"))),e.abrupt("return",Promise.reject(s));case 17:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),this.put=function(){var e=Object(r.a)(c.a.mark((function e(t,a,n){var r,s,i,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.length>3&&void 0!==l[3]?l[3]:{},r=localStorage.getItem("loggedInUser"),e.next=4,fetch("".concat("https://abhishek2524-my-khata.zeet.app","/").concat(t,"/").concat(n),{method:"PUT",headers:{"content-type":"application/json",Token:r},body:JSON.stringify(a)});case 4:if(!(s=e.sent).ok){e.next=12;break}return e.next=8,s.json();case 8:return i=e.sent,e.abrupt("return",Promise.resolve(i));case 12:return e.next=14,s.json();case 14:return"logout"===e.sent.status&&(localStorage.clear(),Object(o.a)().push("".concat("/my-khata-fe","/login"))),e.abrupt("return",Promise.reject(s));case 17:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()};function u(){return null===i&&(i=new l),i}},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(0);var n=a(20);function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";"success"===t.toLowerCase()?n.toastr.success(e):"error"===t.toLowerCase()&&n.toastr.error(e)}},80:function(e,t,a){},87:function(e,t,a){"use strict";var n=a(33),c=(a(0),a(199)),r=(a(88),a(9)),s=a(32),o=a(2);function i(e){var t=e.globalReducer,a=e.closeModal,r=e.children,s=e.title,i=(Object(n.a)(e,["globalReducer","closeModal","children","title"]),t.show);return Object(o.jsxs)(c.a,{show:i,onHide:function(){a()},children:[Object(o.jsx)(c.a.Header,{closeButton:!0,children:""!==s&&Object(o.jsx)(c.a.Title,{children:s})}),Object(o.jsx)(c.a.Body,{children:r})]})}i.defaultProps={title:""};var l={closeModal:s.b};t.a=Object(r.connect)((function(e){return{globalReducer:e.globalReducer}}),l)(i)},88:function(e,t,a){},92:function(e,t,a){"use strict";var n=a(33),c=a(199),r=(a(0),a(32)),s=a(9),o=a(2);t.a=function(e){var t=e.show,a=e.children,i=e.title,l=(Object(n.a)(e,["show","children","title"]),Object(s.useDispatch)());return Object(o.jsxs)(c.a,{show:t,onHide:function(){l(Object(r.a)())},children:[Object(o.jsx)(c.a.Header,{closeButton:!0,children:Object(o.jsx)(c.a.Title,{children:i||null})}),Object(o.jsx)(c.a.Body,{className:"bg-light",children:a})]})}},93:function(e,t,a){}}]);
//# sourceMappingURL=7.ec8bdbb5.chunk.js.map