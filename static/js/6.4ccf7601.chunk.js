(this["webpackJsonpmy-khata"]=this["webpackJsonpmy-khata"]||[]).push([[6],{123:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(73),c=a.n(n),r=a(74),s=a(72),i=a(32),o=a(0),l=a.n(o),u=a(195),d=a(194),b=a(125),j=a(9),m=a(31),f=a(33),h=a(75),O=(a(123),a(83)),p=a(88),v=a(71),x=a(99),g=a(2);var y={showModal:m.g,closeModal:m.b},k=Object(j.connect)(null,y)((function(e){var t=e.addUser;return e.showModal,Object(i.a)(e,["addUser","showModal"]),Object(g.jsx)(x.a,{children:Object(g.jsx)(v.a,{onClick:t,icon:"fa fa-plus",children:"Add Bank"})})})),N=a(1),w=a(5),C=a(12),D=a.n(C),E=a(30),S=a(81),I=a(103),A=l.a.createContext(null);A.displayName="CardContext";var T=A,M=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.variant,r=e.as,s=void 0===r?"img":r,i=Object(w.a)(e,["bsPrefix","className","variant","as"]),o=Object(E.a)(a,"card-img");return l.a.createElement(s,Object(N.a)({ref:t,className:D()(c?o+"-"+c:o,n)},i))}));M.displayName="CardImg",M.defaultProps={variant:null};var R=M,L=Object(I.a)("h5"),B=Object(I.a)("h6"),P=Object(S.a)("card-body"),H=Object(S.a)("card-title",{Component:L}),F=Object(S.a)("card-subtitle",{Component:B}),z=Object(S.a)("card-link",{Component:"a"}),U=Object(S.a)("card-text",{Component:"p"}),G=Object(S.a)("card-header"),J=Object(S.a)("card-footer"),Y=Object(S.a)("card-img-overlay"),_=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.bg,r=e.text,s=e.border,i=e.body,u=e.children,d=e.as,b=void 0===d?"div":d,j=Object(w.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),m=Object(E.a)(a,"card"),f=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:m+"-header"}}),[m]);return l.a.createElement(T.Provider,{value:f},l.a.createElement(b,Object(N.a)({ref:t},j,{className:D()(n,m,c&&"bg-"+c,r&&"text-"+r,s&&"border-"+s)}),i?l.a.createElement(P,null,u):u))}));_.displayName="Card",_.defaultProps={body:!1},_.Img=R,_.Title=H,_.Subtitle=F,_.Body=P,_.Link=z,_.Text=U,_.Header=G,_.Footer=J,_.ImgOverlay=Y;var X=_,q=a(22),K=a.p+"static/media/axis.b40725ff.png",Q=a.p+"static/media/icici.ff197871.png",V=a.p+"static/media/sbi.c35f85fb.png",W=a.p+"static/media/syndicate.21a6835f.png",Z=a.p+"static/media/canara.08e89d18.png",$={1:[K,"axis"],2:[Q,"icici"],3:[V,"sbi"],4:[Z,"canara"],5:[W,"syndicate"]},ee=[{id:"Salary",value:"Salary"},{id:"Savings",value:"Savings"}],te=[{id:1,name:"Axis Bank",imgSrc:K,className:"axis"},{id:2,name:"ICICI Bank",imgSrc:Q,className:"icici"},{id:3,name:"SBI Bank",imgSrc:V,className:"sbi"},{id:4,name:"Canara Bank",imgSrc:Z,className:"canara"},{id:5,name:"Syndicate Bank",imgSrc:W,className:"syndicate"}];var ae=function(e){var t=e.data,a=t.bank,n=t.totalAmount,c=t.isActive,r=t.bankID,i=t.accountHolder,l=t.accountType,u=Object(o.useRef)(),d=Object(o.useState)({}),b=Object(s.a)(d,2),j=b[0],m=b[1],f=function(){return m(u&&u.current?u.current.getBoundingClientRect():{})};return Object(o.useEffect)((function(){f();var e=u.current;return e&&(e.addEventListener("mousemove",(function(t){var a=(t.clientX-j.left)/j.width,n=(t.clientY-j.top)/j.height-.6,c=-(a-.6),r=Math.min(Math.max(c,-.6),.6);e.style.transform="perspective(50px)\n          rotateY(".concat(4*r,"deg)\n          rotateY(").concat(0*a,"deg)\n          rotateX(").concat(0*r,"deg)\n          rotateX(").concat(0*n,"deg)\n          ")})),e.addEventListener("mouseleave",(function(){e.style.transform="none"}))),function(){e&&(e.removeEventListener("mousemove",f),e.removeEventListener("mouseleave",f))}}),[j.top]),Object(g.jsx)("div",{className:"bankCard",children:Object(g.jsxs)(X,{style:{width:"100%"},className:"bg-".concat($[a][1]),ref:u,children:[Object(g.jsx)(X.Img,{variant:"top",src:$[a][0]}),Object(g.jsxs)(X.Body,{children:[Object(g.jsx)(q.a,{to:{pathname:"/account-detail/".concat(r),state:{isActive:c,accountHolder:i,bankname:$[a][1],accountType:l}},children:Object(g.jsx)(X.Title,{style:{textTransform:"capitalize"},children:"".concat(i)})}),Object(g.jsx)(X.Text,{children:"Rs.".concat(n,"/-")})]}),Object(g.jsx)(X.Footer,{className:"text-muted",children:Object(g.jsxs)("div",{className:"bank-actions",children:[Object(g.jsx)(v.a,{className:"del",variant:"info",onClick:function(){return e.onEdit(e.data)},icon:"fa fa-edit",disabled:!e.data.isActive,children:"Edit"}),Object(g.jsx)(v.a,{className:"edit",variant:e.data.isActive?"danger":"primary",onClick:function(){return e.onDelete(e.data)},icon:e.data.isActive?"fa fa-trash":"fa fa-check",children:e.data.isActive?"Deactivate":"Activate"})]})})]})})},ne={setLoader:m.f,stopLoader:m.h,setInit:m.e,clearIsFetch:f.a},ce=Object(j.connect)((function(e){return{globalReducer:e.globalReducer,bankReducer:e.bankReducer}}),ne)((function(e){var t=e.globalReducer,a=e.bankReducer,n=e.clearIsFetch,i=e.setLoader,l=e.stopLoader,u=e.setInit,j=t.isLoading,m=a.fetchData,f=Object(o.useState)([]),O=Object(s.a)(f,2),p=O[0],v=O[1],x=Object(g.jsxs)("span",{children:[Object(g.jsx)("i",{className:"fas fa-money-check"}),"No Bank Found.Please Add Bank Using Add Bank Button."]});return Object(o.useEffect)((function(){return function(){var e=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),t=new h.a,e.next=4,t.get("user");case 4:a=e.sent,l(!0),n(),v(a.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){u(),n()}}),[m]),Object(g.jsx)("div",{className:"bankBodyDiv",children:Object(g.jsx)(d.a,{children:j?null:p&&p.length>0?p.map((function(t,a){return Object(g.jsx)(b.a,{className:"col",xs:12,sm:12,md:4,lg:4,xl:4,children:Object(g.jsx)(ae,{data:t,onDelete:e.onDelete,onEdit:e.onEdit})},a)})):Object(g.jsx)("div",{className:"no-data-div",children:x})})})})),re=a(77),se=a(35),ie=a(10),oe=a(198);var le=function(e){var t="",a=Object(j.useDispatch)(),n=e.isEdit,i=Object(o.useState)({bankID:"",accountHolder:"",accountType:"",companyname:""}),l=Object(s.a)(i,2),u=l[0],O=l[1],p=function(){var s=Object(r.a)(c.a.mark((function r(s){var i,o,l,d,b,j,O,p,v,x;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(s.preventDefault(),!n){c.next=23;break}return c.prev=2,i=e.editData,o=i._id,l=i.bankID,d=i.companyID,b=new h.a,c.next=7,b.put("user",Object(ie.a)(Object(ie.a)({},u),{},{bankID:l,bank_obj_id:u.bankID,companyID:d}),o);case 7:c.sent,t="Account Updated Successfully",a(Object(m.b)()),a(Object(f.c)()),Object(re.a)(t,"Success"),c.next=21;break;case 14:return c.prev=14,c.t0=c.catch(2),c.next=18,c.t0.json();case 18:j=c.sent,O=j.msg,Object(re.a)(O,"Error");case 21:c.next=41;break;case 23:return c.prev=23,p=new h.a,c.next=27,p.post("user",u);case 27:c.sent,t="Account Created Successfully",a(Object(m.b)()),a(Object(f.c)()),Object(re.a)(t,"Success"),c.next=41;break;case 34:return c.prev=34,c.t1=c.catch(23),c.next=38,c.t1.json();case 38:v=c.sent,x=v.msg,Object(re.a)(x,"Error");case 41:case"end":return c.stop()}}),r,null,[[2,14],[23,34]])})));return function(e){return s.apply(this,arguments)}}();return Object(o.useEffect)((function(){if(e.isEdit){var t=e.editData,a=t.accountHolder,n=t.accountType,c=t.bank,r=t.companyName;O({bankID:c,accountHolder:a,accountType:n,companyname:r})}else O({bankID:"1",accountHolder:"",accountType:"Savings",companyname:""})}),[]),Object(g.jsx)("div",{className:"bank-form",children:Object(g.jsxs)(oe.a,{onSubmit:p,children:[Object(g.jsxs)(oe.a.Group,{as:d.a,children:[Object(g.jsx)(oe.a.Label,{column:!0,sm:"12",children:"Account Holder Name"}),Object(g.jsx)(b.a,{sm:"12",className:"p-0 m-0",children:Object(g.jsx)(oe.a.Control,{type:"text",name:"accountHolder",id:"accountHolder",placeholder:"Enter Account Holder Name",value:u.accountHolder,onChange:function(e){return O((function(t){return Object(ie.a)(Object(ie.a)({},t),{},Object(se.a)({},e.target.name,e.target.value))}))}})})]}),Object(g.jsxs)(oe.a.Group,{as:d.a,children:[Object(g.jsx)(oe.a.Label,{column:!0,sm:"12",children:"Bank Name"}),Object(g.jsx)(oe.a.Control,{as:"select",size:"md",name:"bankID",placeholder:"Enter Bank Name",id:"bankID",value:u.bankID,onChange:function(e){return O((function(t){return Object(ie.a)(Object(ie.a)({},t),{},Object(se.a)({},e.target.name,e.target.value))}))},children:te.map((function(e,t){return Object(g.jsx)("option",{value:e.id,children:e.name},t)}))})]}),Object(g.jsxs)(oe.a.Group,{as:d.a,children:[Object(g.jsx)(oe.a.Label,{column:!0,sm:"12",children:"Account Type"}),Object(g.jsx)(oe.a.Control,{as:"select",size:"md",name:"accountType",id:"accountType",value:u.accountType,onChange:function(e){return O((function(t){return Object(ie.a)(Object(ie.a)({},t),{},Object(se.a)({},e.target.name,e.target.value))}))},children:ee.map((function(e,t){return Object(g.jsx)("option",{value:e.id,children:e.value},t)}))})]}),"Salary"===u.accountType&&Object(g.jsxs)(oe.a.Group,{as:d.a,children:[Object(g.jsx)(oe.a.Label,{column:!0,sm:12,children:"Company Name"}),Object(g.jsx)(oe.a.Control,{type:"text",name:"companyname",id:"companyname",value:u.companyname,placeholder:"Enter Company Name",onChange:function(e){return O((function(t){return Object(ie.a)(Object(ie.a)({},t),{},Object(se.a)({},e.target.name,e.target.value))}))}})]}),Object(g.jsx)(v.a,{type:"submit",size:"medium",children:e.isEdit?"Edit":"Add"})]})})};var ue=function(e){var t=e.deleteData,a=e.deleteAccount,n=e.setDeleteData,c=e.closeConfirmModal;return Object(g.jsxs)("div",{className:"prompt",children:[Object(g.jsx)("pre",{children:"Are you sure you want to ".concat(t.isActive?"Deactive":"Active"," -").concat(t.accountHolder,"'s ").concat($[t.bank]&&$[t.bank][1]," account")}),Object(g.jsxs)("div",{children:[Object(g.jsxs)(v.a,{className:"mx-2",variant:"danger",onClick:function(){n({}),c()},children:[Object(g.jsx)("i",{className:"fa fa-times mx-1 text-light","aria-hidden":"true"}),"No"]}),Object(g.jsxs)(v.a,{className:"mx-2",variant:"primary",onClick:function(){return a(t._id,t.isActive)},children:[Object(g.jsx)("i",{className:"fa fa-check mx-1 text-light","aria-hidden":"true"}),"Yes"]})]})]})},de={showModal:m.g,closeModal:m.b,closeConfirmModal:m.a,setConfirmModal:m.d,setIsFetch:f.c};t.default=Object(j.connect)((function(e){return{bankReducer:e.bankReducer,globalReducer:e.globalReducer}}),de)((function(e){e.bankReducer;var t=e.globalReducer,a=e.showModal,n=(e.closeModal,e.setConfirmModal),l=e.closeConfirmModal,j=e.setIsFetch,m=(Object(i.a)(e,["bankReducer","globalReducer","showModal","closeModal","setConfirmModal","closeConfirmModal","setIsFetch"]),t.isConfirm),f=Object(o.useState)(!1),v=Object(s.a)(f,2),x=v[0],y=v[1],N=Object(o.useState)({}),w=Object(s.a)(N,2),C=w[0],D=w[1],E=Object(o.useState)({}),S=Object(s.a)(E,2),I=S[0],A=S[1],T=function(){var e=Object(r.a)(c.a.mark((function e(t,a){var n,r,s,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="",r={isActive:!a},s=new h.a,e.next=6,s.put("user",r,t);case 6:e.sent,n="Account Updated Successfully",j(),Object(re.a)(n,"Success"),l(),e.next=21;break;case 13:return e.prev=13,e.t0=e.catch(0),e.next=17,e.t0.json();case 17:i=e.sent,o=i.msg,Object(re.a)(o,"Error"),l();case 21:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p.a,{show:m,children:Object(g.jsx)(ue,{setDeleteData:A,closeConfirmModal:l,deleteAccount:T,deleteData:I})}),Object(g.jsx)(O.a,{children:Object(g.jsx)(le,{isEdit:x,editData:C})}),Object(g.jsxs)(u.a,{fluid:!0,className:"bankContainer",children:[Object(g.jsx)(d.a,{className:"sticky-header",children:Object(g.jsx)(b.a,{children:Object(g.jsx)(k,{addUser:function(){y(!1),a()}})})}),Object(g.jsx)(d.a,{children:Object(g.jsx)(b.a,{children:Object(g.jsx)(ce,{onEdit:function(e){y(!0),D(e),a()},onDelete:function(e){A(e),n(e)}})})})]})]})}))},71:function(e,t,a){"use strict";var n=a(10),c=a(32),r=(a(0),a(42),a(200)),s=(a(89),a(2)),i=function(e){var t=e.children,a=e.className,i=e.variant,o=e.icon,l=Object(c.a)(e,["children","className","variant","icon"]);return Object(s.jsxs)(r.a,Object(n.a)(Object(n.a)({className:"".concat(a," buttonDiv"),disabled:e.disabled,variant:i},l),{},{children:[o&&Object(s.jsx)("span",{children:Object(s.jsx)("i",{className:o})}),t]}))};i.defaultProps={size:"sm",type:"button",variant:"primary",disabled:!1},t.a=i},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(73),c=a.n(n),r=a(74),s=a(101),i=null,o=function e(){Object(s.a)(this,e),this.post=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,n,r,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:{},e.next=4,fetch("".concat("http://localhost:7000","/").concat(t),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(a)});case 4:if(!(n=e.sent).ok){e.next=12;break}return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",Promise.resolve(r));case 12:return e.abrupt("return",Promise.reject(n));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.get=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,n,r=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,fetch("".concat("http://localhost:7000","/").concat(t),{method:"GET",header:{"content-type":"application/json"}});case 3:if(!(a=e.sent).ok){e.next=13;break}return(new Headers).set("Cross-Origin-Embedder-Policy","require-corp"),e.next=9,a.json();case 9:return n=e.sent,e.abrupt("return",Promise.resolve(n));case 13:return e.abrupt("return",Promise.reject(a));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.delete=function(){var e=Object(r.a)(c.a.mark((function e(t,a,n){var r,s,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.length>3&&void 0!==i[3]?i[3]:{},e.next=3,fetch("".concat("http://localhost:7000","/").concat(t,"/").concat(n),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify(a)});case 3:if(!(r=e.sent).ok){e.next=11;break}return e.next=7,r.json();case 7:return s=e.sent,e.abrupt("return",Promise.resolve(s));case 11:return e.abrupt("return",Promise.reject(r));case 12:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),this.put=function(){var e=Object(r.a)(c.a.mark((function e(t,a,n){var r,s,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.length>3&&void 0!==i[3]?i[3]:{},e.next=3,fetch("".concat("http://localhost:7000","/").concat(t,"/").concat(n),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(a)});case 3:if(!(r=e.sent).ok){e.next=11;break}return e.next=7,r.json();case 7:return s=e.sent,e.abrupt("return",Promise.resolve(s));case 11:return e.abrupt("return",Promise.reject(r));case 12:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()};function l(){return null===i&&(i=new o),i}},77:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(0);var n=a(20);function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";"success"===t.toLowerCase()?n.toastr.success(e):"error"===t.toLowerCase()&&n.toastr.error(e)}},83:function(e,t,a){"use strict";var n=a(32),c=(a(0),a(196)),r=(a(84),a(9)),s=a(31),i=a(2);function o(e){var t=e.globalReducer,a=e.closeModal,r=e.children,s=e.title,o=(Object(n.a)(e,["globalReducer","closeModal","children","title"]),t.show);return Object(i.jsxs)(c.a,{show:o,onHide:function(){a()},children:[Object(i.jsx)(c.a.Header,{closeButton:!0,children:""!==s&&Object(i.jsx)(c.a.Title,{children:s})}),Object(i.jsx)(c.a.Body,{children:r})]})}o.defaultProps={title:""};var l={closeModal:s.b};t.a=Object(r.connect)((function(e){return{globalReducer:e.globalReducer}}),l)(o)},84:function(e,t,a){},88:function(e,t,a){"use strict";var n=a(32),c=a(196),r=(a(0),a(31)),s=a(9),i=a(2);t.a=function(e){var t=e.show,a=e.children,o=e.title,l=(Object(n.a)(e,["show","children","title"]),Object(s.useDispatch)());return Object(i.jsxs)(c.a,{show:t,onHide:function(){l(Object(r.a)())},children:[Object(i.jsx)(c.a.Header,{closeButton:!0,children:Object(i.jsx)(c.a.Title,{children:o||null})}),Object(i.jsx)(c.a.Body,{className:"bg-light",children:a})]})}},89:function(e,t,a){},90:function(e,t,a){},99:function(e,t,a){"use strict";var n=a(72),c=a(0),r=a(71),s=a(2);var i=function(){var e=Object(c.useState)({date:(new Date).toLocaleDateString(),time:(new Date).toLocaleTimeString()}),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){r({date:(new Date).toLocaleDateString(),time:(new Date).toLocaleTimeString()})}),1e3);return function(){clearInterval(e)}}),[a]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("span",{className:"mx-2",children:[Object(s.jsx)("i",{className:"fa fa-clock"}),a.time]}),Object(s.jsxs)("span",{className:"mx-2",children:[Object(s.jsx)("i",{className:"fa fa-calendar "}),a.date]})]})},o=(a(90),a(33)),l=a(9);t.a=function(e){var t=Object(l.useDispatch)(),a=Object(c.useState)(!1),u=Object(n.a)(a,2),d=u[0],b=u[1],j=Object(c.useState)(window.screen.width),m=Object(n.a)(j,2),f=m[0],h=m[1];return Object(c.useEffect)((function(){return function(){window.removeEventListener("resize",b(!1))}}),[]),window.addEventListener("resize",(function(){h(window.screen.width)})),Object(s.jsxs)("div",{className:"sub-header",children:[Object(s.jsx)("div",{className:"leftEnd",children:Object(s.jsx)(r.a,{onClick:function(){t(Object(o.c)())},children:"Refresh"})}),Object(s.jsx)("div",{className:"hamburger",children:Object(s.jsx)("i",{className:d?"fas fa-times":"fas fa-bars",onClick:function(){b(!d)}})}),Object(s.jsxs)("div",{className:"".concat(f<768?d?"d-flex":"d-none":""," rightEnd"),children:[e.children,Object(s.jsx)(i,{})]})]})}}}]);
//# sourceMappingURL=6.4ccf7601.chunk.js.map