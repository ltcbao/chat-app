(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{193:function(e,t,n){},194:function(e,t,n){},276:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(49),r=n.n(i),o=(n(193),n(194),n(99)),s=n.n(o),l=n(122),d=n(283),u=n(279),j=n(280),b=n(83),h=n(103);n(277),n(195),n(197),h.a.initializeApp({apiKey:"AIzaSyBHwztGzl76uIUJ1m6dFReEbYhie7wY-2I",authDomain:"chat-app-571c8.firebaseapp.com",projectId:"chat-app-571c8",storageBucket:"chat-app-571c8.appspot.com",messagingSenderId:"425393038023",appId:"1:425393038023:web:3ab1337a9bf5a2982a54e2",measurementId:"G-TKGYQS2JMF"});h.a.analytics();var p=h.a.auth(),m=h.a.firestore();window.location.hostname;var O=h.a,f=n(102),x=n(64),v=function(e,t){m.collection(e).add(Object(x.a)(Object(x.a)({},t),{},{createdAt:O.firestore.FieldValue.serverTimestamp()}))},g=function(e){for(var t=e.split(" ").filter((function(e){return e})),n=t.length,a=[],c=[],i=[],r=0;r<n;r++)a[r]=!1;return function e(r){for(var o=0;o<n;o++)a[o]||(a[o]=!0,c[r]=t[o],r===n-1&&i.push(c.join(" ")),e(r+1),a[o]=!1)}(0),i.reduce((function(e,t){var n=function(e){var t=[],n="";return e.split("").forEach((function(e){n+=e,t.push(n)})),t}(t);return[].concat(Object(f.a)(e),Object(f.a)(n))}),[])},y=n(5),C=d.a.Title,w=new O.auth.FacebookAuthProvider,I=new O.auth.GoogleAuthProvider;function N(){var e=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.signInWithPopup(t);case 2:n=e.sent,a=n.additionalUserInfo,c=n.user,(null===a||void 0===a?void 0:a.isNewUser)&&v("users",{displayName:c.displayName,email:c.email,photoURL:c.photoURL,uid:c.uid,providerId:a.providerId,keywords:g(null===(i=c.displayName)||void 0===i?void 0:i.toLowerCase())});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{children:Object(y.jsx)(u.a,{justify:"center",style:{height:800},children:Object(y.jsxs)(j.a,{span:8,children:[Object(y.jsx)(C,{style:{textAlign:"center"},level:3,children:"HB Chat"}),Object(y.jsx)(b.a,{style:{width:"100%",marginBottom:5},onClick:function(){return e(I)},children:"\u0110\u0103ng nh\u1eadp b\u1eb1ng Google"}),Object(y.jsx)(b.a,{style:{width:"100%"},onClick:function(){return e(w)},children:"\u0110\u0103ng nh\u1eadp b\u1eb1ng Facebook"})]})})})}var R=n(149),U=n(35),A=n(47),k=n(287),L=n(48),S=n(40),F=n(281),V=c.a.createContext();function T(e){var t=e.children,n=Object(a.useState)({}),i=Object(S.a)(n,2),r=i[0],o=i[1],s=Object(U.f)(),l=Object(a.useState)(!0),d=Object(S.a)(l,2),u=d[0],j=d[1];return c.a.useEffect((function(){var e=p.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.email,a=e.uid,c=e.photoURL;return o({displayName:t,email:n,uid:a,photoURL:c}),j(!1),void s.push("/")}o({}),j(!1),s.push("/login")}));return function(){e()}}),[s]),Object(y.jsx)(V.Provider,{value:{user:r},children:u?Object(y.jsx)(F.a,{style:{position:"fixed",inset:0}}):t})}var M,_=function(e,t){var n=Object(a.useState)([]),i=Object(S.a)(n,2),r=i[0],o=i[1];return c.a.useEffect((function(){var n=m.collection(e).orderBy("createdAt");if(t){if(!t.compareValue||!t.compareValue.length)return void o([]);n=n.where(t.fieldName,t.operator,t.compareValue)}return n.onSnapshot((function(e){var t=e.docs.map((function(e){return Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id})}));o(t)}))}),[e,t]),r},z=c.a.createContext();function P(e){var t=e.children,n=Object(a.useState)(!1),i=Object(S.a)(n,2),r=i[0],o=i[1],s=Object(a.useState)(!1),l=Object(S.a)(s,2),d=l[0],u=l[1],j=Object(a.useState)(""),b=Object(S.a)(j,2),h=b[0],p=b[1],m=c.a.useContext(V).user.uid,O=c.a.useMemo((function(){return{fieldName:"members",operator:"array-contains",compareValue:m}}),[m]),f=_("rooms",O),x=c.a.useMemo((function(){return f.find((function(e){return e.id===h}))||{}}),[f,h]),v=c.a.useMemo((function(){return{fieldName:"uid",operator:"in",compareValue:x.members}}),[x.members]),g=_("users",v);return Object(y.jsx)(z.Provider,{value:{rooms:f,members:g,selectedRoom:x,isAddRoomVisible:r,setIsAddRoomVisible:o,selectedRoomId:h,setSelectedRoomId:p,isInviteMemberVisible:d,setIsInviteMemberVisible:u,clearState:function(){p(""),o(!1),u(!1)}},children:t})}var B=L.a.div(M||(M=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(82, 38, 83);\n\n  .username {\n    color: white;\n    margin-left: 5px;\n  }\n"])));function E(){var e,t=c.a.useContext(V).user,n=t.displayName,a=t.photoURL,i=c.a.useContext(z).clearState;return Object(y.jsxs)(B,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(k.a,{src:a,children:a?"":null===n||void 0===n||null===(e=n.charAt(0))||void 0===e?void 0:e.toUpperCase()}),Object(y.jsx)(d.a.Text,{className:"username",children:n})]}),Object(y.jsx)(b.a,{ghost:!0,onClick:function(){i(),p.signOut()},children:"\u0110\u0103ng xu\u1ea5t"})]})}var G,D,H,J=n(285),K=n(291),Y=J.a.Panel,Q=Object(L.a)(Y)(G||(G=Object(A.a)(["\n  &&& {\n    .ant-collapse-header,\n    p {\n      color: white;\n    }\n\n    .ant-collapse-content-box {\n      padding: 0 40px;\n    }\n\n    .add-room {\n      color: white;\n      padding: 0;\n    }\n  }\n"]))),W=Object(L.a)(d.a.Link)(D||(D=Object(A.a)(["\n  display: block;\n  margin-bottom: 5px;\n  color: white;\n"])));function q(){var e=c.a.useContext(z),t=e.rooms,n=e.setIsAddRoomVisible,a=e.setSelectedRoomId;return Object(y.jsx)(J.a,{ghost:!0,defaultActiveKey:["1"],children:Object(y.jsxs)(Q,{header:"Danh s\xe1ch c\xe1c ph\xf2ng",children:[t.map((function(e){return Object(y.jsx)(W,{onClick:function(){return a(e.id)},children:e.name},e.id)})),Object(y.jsx)(b.a,{type:"text",icon:Object(y.jsx)(K.a,{}),className:"add-room",onClick:function(){n(!0)},children:"Th\xeam ph\xf2ng"})]},"1")})}var X=L.a.div(H||(H=Object(A.a)(["\n  background: #3f0e40;\n  color: white;\n  height: 100vh;\n"])));function Z(){return Object(y.jsx)(X,{children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(j.a,{span:24,children:Object(y.jsx)(E,{})}),Object(y.jsx)(j.a,{span:24,children:Object(y.jsx)(q,{})})]})})}var $,ee,te,ne,ae,ce,ie,re=n(292),oe=n(284),se=n(75),le=n(288),de=n(290),ue=n(282),je=L.a.div($||($=Object(A.a)(["\n  margin-bottom: 10px;\n\n  .author {\n    margin-left: 5px;\n    font-weight: bold;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: #a7a7a7;\n  }\n\n  .content {\n    margin-left: 30px;\n  }\n"])));function be(e){var t="";return e&&(t=(t=Object(ue.a)(new Date(1e3*e),new Date)).charAt(0).toUpperCase()+t.slice(1)),t}function he(e){var t,n=e.text,a=e.displayName,c=e.createdAt,i=e.photoURL;return Object(y.jsxs)(je,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(k.a,{size:"small",src:i,children:i?"":null===a||void 0===a||null===(t=a.charAt(0))||void 0===t?void 0:t.toUpperCase()}),Object(y.jsx)(d.a.Text,{className:"author",children:a}),Object(y.jsx)(d.a.Text,{className:"date",children:be(null===c||void 0===c?void 0:c.seconds)})]}),Object(y.jsx)("div",{children:Object(y.jsx)(d.a.Text,{className:"content",children:n})})]})}var pe=L.a.div(ee||(ee=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 56px;\n  padding: 0 16px;\n  align-items: center;\n  border-bottom: 1px solid rgb(230, 230, 230);\n\n  .header {\n    &__info {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n\n    &__title {\n      margin: 0;\n      font-weight: bold;\n    }\n\n    &__description {\n      font-size: 12px;\n    }\n  }\n"]))),me=L.a.div(te||(te=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]))),Oe=L.a.div(ne||(ne=Object(A.a)(["\n  height: 100vh;\n"]))),fe=L.a.div(ae||(ae=Object(A.a)(["\n  height: calc(100% - 56px);\n  display: flex;\n  flex-direction: column;\n  padding: 11px;\n  justify-content: flex-end;\n"]))),xe=Object(L.a)(oe.a)(ce||(ce=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 2px 2px 0;\n  border: 1px solid rgb(230, 230, 230);\n  border-radius: 2px;\n\n  .ant-form-item {\n    flex: 1;\n    margin-bottom: 0;\n  }\n"]))),ve=L.a.div(ie||(ie=Object(A.a)(["\n  max-height: 100%;\n  overflow-y: auto;\n"])));function ge(){var e=Object(a.useContext)(z),t=e.selectedRoom,n=e.members,i=e.setIsInviteMemberVisible,r=Object(a.useContext)(V).user,o=r.uid,s=r.photoURL,l=r.displayName,d=Object(a.useState)(""),u=Object(S.a)(d,2),j=u[0],h=u[1],p=oe.a.useForm(),m=Object(S.a)(p,1)[0],O=Object(a.useRef)(null),f=Object(a.useRef)(null),x=function(){v("messages",{text:j,uid:o,photoURL:s,roomId:t.id,displayName:l}),m.resetFields(["message"]),(null===O||void 0===O?void 0:O.current)&&setTimeout((function(){O.current.focus()}))},g=c.a.useMemo((function(){return{fieldName:"roomId",operator:"==",compareValue:t.id}}),[t.id]),C=_("messages",g);return Object(a.useEffect)((function(){(null===f||void 0===f?void 0:f.current)&&(f.current.scrollTop=f.current.scrollHeight+50)}),[C]),Object(y.jsx)(Oe,{children:t.id?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(pe,{children:[Object(y.jsxs)("div",{className:"header__info",children:[Object(y.jsx)("p",{className:"header__title",children:t.name}),Object(y.jsx)("span",{className:"header__description",children:t.description})]}),Object(y.jsxs)(me,{children:[Object(y.jsx)(b.a,{icon:Object(y.jsx)(re.a,{}),type:"text",onClick:function(){return i(!0)},children:"M\u1eddi"}),Object(y.jsx)(k.a.Group,{size:"small",maxCount:2,children:n.map((function(e){var t,n;return Object(y.jsx)(se.a,{title:e.displayName,children:Object(y.jsx)(k.a,{src:e.photoURL,children:e.photoURL?"":null===(t=e.displayName)||void 0===t||null===(n=t.charAt(0))||void 0===n?void 0:n.toUpperCase()})},e.id)}))})]})]}),Object(y.jsxs)(fe,{children:[Object(y.jsx)(ve,{ref:f,children:C.map((function(e){return Object(y.jsx)(he,{text:e.text,photoURL:e.photoURL,displayName:e.displayName,createdAt:e.createdAt},e.id)}))}),Object(y.jsxs)(xe,{form:m,children:[Object(y.jsx)(oe.a.Item,{name:"message",children:Object(y.jsx)(le.a,{ref:O,onChange:function(e){h(e.target.value)},onPressEnter:x,placeholder:"Nh\u1eadp tin nh\u1eafn...",bordered:!1,autoComplete:"off"})}),Object(y.jsx)(b.a,{type:"primary",onClick:x,children:"G\u1eedi"})]})]})]}):Object(y.jsx)(de.a,{message:"H\xe3y ch\u1ecdn ph\xf2ng",type:"info",showIcon:!0,style:{margin:5},closable:!0})})}function ye(){return Object(y.jsx)("div",{children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(j.a,{span:6,children:Object(y.jsx)(Z,{})}),Object(y.jsx)(j.a,{span:18,children:Object(y.jsx)(ge,{})})]})})}var Ce=n(286);function we(){var e=Object(a.useContext)(z),t=e.isAddRoomVisible,n=e.setIsAddRoomVisible,c=Object(a.useContext)(V).user.uid,i=oe.a.useForm(),r=Object(S.a)(i,1)[0];return Object(y.jsx)("div",{children:Object(y.jsx)(Ce.a,{title:"T\u1ea1o ph\xf2ng",visible:t,onOk:function(){v("rooms",Object(x.a)(Object(x.a)({},r.getFieldsValue()),{},{members:[c]})),r.resetFields(),n(!1)},onCancel:function(){r.resetFields(),n(!1)},children:Object(y.jsxs)(oe.a,{form:r,layout:"vertical",children:[Object(y.jsx)(oe.a.Item,{label:"T\xean ph\xf2ng",name:"name",children:Object(y.jsx)(le.a,{placeholder:"Nh\u1eadp t\xean ph\xf2ng"})}),Object(y.jsx)(oe.a.Item,{label:"M\xf4 t\u1ea3",name:"description",children:Object(y.jsx)(le.a.TextArea,{placeholder:"Nh\u1eadp m\xf4 t\u1ea3"})})]})})})}var Ie=n(185),Ne=n(289),Re=n(178);function Ue(e){var t=e.fetchOptions,n=e.debounceTimeout,i=void 0===n?300:n,r=e.curMembers,o=Object(Ie.a)(e,["fetchOptions","debounceTimeout","curMembers"]),s=Object(a.useState)(!1),l=Object(S.a)(s,2),d=l[0],u=l[1],j=Object(a.useState)([]),b=Object(S.a)(j,2),h=b[0],p=b[1],m=c.a.useMemo((function(){return Object(Re.debounce)((function(e){p([]),u(!0),t(e,r).then((function(e){p(e),u(!1)}))}),i)}),[i,t,r]);return c.a.useEffect((function(){return function(){p([])}}),[]),Object(y.jsx)(Ne.a,Object(x.a)(Object(x.a)({labelInValue:!0,filterOption:!1,onSearch:m,notFoundContent:d?Object(y.jsx)(F.a,{size:"small"}):null},o),{},{children:h.map((function(e){var t,n;return Object(y.jsxs)(Ne.a.Option,{value:e.value,title:e.label,children:[Object(y.jsx)(k.a,{size:"small",src:e.photoURL,children:e.photoURL?"":null===(t=e.label)||void 0===t||null===(n=t.charAt(0))||void 0===n?void 0:n.toUpperCase()})," ".concat(e.label)]},e.value)}))}))}function Ae(e,t){return ke.apply(this,arguments)}function ke(){return(ke=Object(l.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.collection("users").where("keywords","array-contains",null===t||void 0===t?void 0:t.toLowerCase()).orderBy("displayName").limit(20).get().then((function(e){return e.docs.map((function(e){return{label:e.data().displayName,value:e.data().uid,photoURL:e.data().photoURL}})).filter((function(e){return!n.includes(e.value)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Le(){var e=Object(a.useContext)(z),t=e.isInviteMemberVisible,n=e.setIsInviteMemberVisible,c=e.selectedRoomId,i=e.selectedRoom,r=Object(a.useState)([]),o=Object(S.a)(r,2),s=o[0],l=o[1],d=oe.a.useForm(),u=Object(S.a)(d,1)[0];return Object(y.jsx)("div",{children:Object(y.jsx)(Ce.a,{title:"M\u1eddi th\xeam th\xe0nh vi\xean",visible:t,onOk:function(){u.resetFields(),l([]),m.collection("rooms").doc(c).update({members:[].concat(Object(f.a)(i.members),Object(f.a)(s.map((function(e){return e.value}))))}),n(!1)},onCancel:function(){u.resetFields(),l([]),n(!1)},destroyOnClose:!0,children:Object(y.jsx)(oe.a,{form:u,layout:"vertical",children:Object(y.jsx)(Ue,{mode:"multiple",name:"search-user",label:"T\xean c\xe1c th\xe0nh vi\xean",value:s,placeholder:"Nh\u1eadp t\xean th\xe0nh vi\xean",fetchOptions:Ae,onChange:function(e){return l(e)},style:{width:"100%"},curMembers:i.members})})})})}var Se=function(){return Object(y.jsx)(R.a,{children:Object(y.jsx)(T,{children:Object(y.jsxs)(P,{children:[Object(y.jsxs)(U.c,{children:[Object(y.jsx)(U.a,{component:N,path:"/login"}),Object(y.jsx)(U.a,{component:ye,path:"/"})]}),Object(y.jsx)(we,{}),Object(y.jsx)(Le,{})]})})})},Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,293)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(y.jsx)(Se,{}),document.getElementById("root")),Fe()}},[[276,1,2]]]);
//# sourceMappingURL=main.6b4563ee.chunk.js.map