(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{53:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(2),r=c.n(a),s=c(25),i=c.n(s),o=(c(53),c(20)),l=c.n(o),j=c(23),d=c(13),u=c(12),b=c(19),O=c(71),p=c(69),h=c(70),x=c(67),m=c(31),f=(c(55),m.a.initializeApp({apiKey:"AIzaSyCAiTlhY07VwJ2RBtNn5TbUtRa0ttZTf0E",authDomain:"auth-development-7dddc.firebaseapp.com",databaseURL:"https://auth-development-7dddc-default-rtdb.firebaseio.com",projectId:"auth-development-7dddc",storageBucket:"auth-development-7dddc.appspot.com",messagingSenderId:"327161568505",appId:"1:327161568505:web:e1ed3d4a7af45712329628"})),v=f.auth(),g=Object(a.createContext)();function w(){return Object(a.useContext)(g)}function y(e){var t=e.children,c=Object(a.useState)(),r=Object(d.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(!0),l=Object(d.a)(o,2),j=l[0],u=l[1];Object(a.useEffect)((function(){return v.onAuthStateChanged((function(e){i(e),u(!1)}))}),[]);var b={currentUser:s,signup:function(e,t){return v.createUserWithEmailAndPassword(e,t)},login:function(e,t){return v.signInWithEmailAndPassword(e,t)},logout:function(){return v.signOut()},forgot:function(e){return v.sendPasswordResetEmail(e)}};return Object(n.jsx)(g.Provider,{value:b,children:!j&&t})}c(65);function N(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),r=(Object(a.useRef)(),Object(a.useRef)(),w().signup),s=Object(a.useState)(""),i=Object(d.a)(s,2),o=i[0],m=i[1],f=Object(a.useState)(!1),v=Object(d.a)(f,2),g=v[0],y=v[1],N=Object(u.g)();function S(){return(S=Object(j.a)(l.a.mark((function n(a){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),t.current.value===c.current.value){n.next=3;break}return n.abrupt("return",m("Password should match"));case 3:return n.prev=3,m(""),y(!0),n.next=8,r(e.current.value,t.current.value);case 8:N.push("/"),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(3),console.log(n.t0),m("Email Already in use");case 15:y(!1);case 16:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{children:Object(n.jsxs)(O.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),o&&Object(n.jsx)(p.a,{variant:"danger",children:o}),Object(n.jsxs)(h.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(n.jsxs)(h.a.Group,{id:"email",children:[Object(n.jsx)(h.a.Label,{children:"Email"}),Object(n.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(n.jsxs)(h.a.Group,{id:"password",children:[Object(n.jsx)(h.a.Label,{children:"Password"}),Object(n.jsx)(h.a.Control,{type:"password",ref:t,required:!0})]}),Object(n.jsxs)(h.a.Group,{id:"password-confirm",children:[Object(n.jsx)(h.a.Label,{children:"Re-Enter Password"}),Object(n.jsx)(h.a.Control,{type:"password",ref:c,required:!0})]}),Object(n.jsx)(x.a,{className:"w-100",type:"submit",disabled:g,children:"Sign Up"})]})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(n.jsx)(b.b,{to:"/login",children:"Log In"})]})]})}function S(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=w().login,r=Object(a.useState)(""),s=Object(d.a)(r,2),i=s[0],o=s[1],m=Object(a.useState)(!1),f=Object(d.a)(m,2),v=f[0],g=f[1],y=Object(u.g)();function N(){return(N=Object(j.a)(l.a.mark((function n(a){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,o(""),g(!0),n.next=6,c(e.current.value,t.current.value);case 6:y.push("/"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0),o("Failed to sing in");case 13:g(!1);case 14:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{children:Object(n.jsxs)(O.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),i&&Object(n.jsx)(p.a,{variant:"danger",children:i}),Object(n.jsxs)(h.a,{onSubmit:function(e){return N.apply(this,arguments)},children:[Object(n.jsxs)(h.a.Group,{id:"email",children:[Object(n.jsx)(h.a.Label,{children:"Email"}),Object(n.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(n.jsxs)(h.a.Group,{id:"password",children:[Object(n.jsx)(h.a.Label,{children:"Password"}),Object(n.jsx)(h.a.Control,{type:"password",ref:t,required:!0})]}),Object(n.jsx)(x.a,{className:"w-100",type:"submit",disabled:v,children:"Log In"})]}),Object(n.jsx)("div",{className:"w-100 text-center mt-3",children:Object(n.jsx)(b.b,{to:"/forgot-password",children:" Forgot Password"})})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["Don't have an account? ",Object(n.jsx)(b.b,{to:"/signup",children:"Sign Up"})]})]})}var k=c(68);function C(){return Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){var e=m.a.firestore().collection("Users");e&&console.log(e)},children:"Click"})})}var L=c(39),R=c(22);function U(e){var t=e.item,c=e.setTodos,a=e.todos,r=e.filterTodo,s=e.setFilterTodo;return Object(n.jsxs)("div",{className:"todo-item",children:[Object(n.jsx)("li",{className:"".concat(t.completed?"completed":""),children:t.text}),Object(n.jsx)("button",{className:"check",onClick:function(){c(a.map((function(e){return e.id===t.id?Object(R.a)(Object(R.a)({},e),{},{completed:!t.completed}):Object(R.a)({},e)}))),s(r.map((function(e){return e.id===t.id?Object(R.a)(Object(R.a)({},e),{},{completed:!t.completed}):Object(R.a)({},e)})))},children:Object(n.jsx)("i",{className:"fas fa-check"})}),Object(n.jsx)("button",{className:"trash",onClick:function(){c(a.filter((function(e){return e.id!==t.id}))),s(r.filter((function(e){return e.id!==t.id})))},children:Object(n.jsx)("i",{className:"fas fa-trash "})})]})}function E(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(""),i=Object(d.a)(s,2),o=i[0],b=i[1],O=Object(a.useState)([]),p=Object(d.a)(O,2),h=p[0],m=p[1],f=w(),v=f.currentUser,g=f.logout,y=Object(a.useState)(""),N=Object(d.a)(y,2),S=(N[0],N[1]),k=Object(u.g)();function C(){return(C=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(""),e.prev=1,e.next=4,g();case 4:k.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),S("Unable to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"box",children:[Object(n.jsxs)("h1",{children:[v.email," TodDo List"]}),Object(n.jsxs)("div",{className:"form",children:[Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{onChange:function(e){b(e.target.value)},value:o,type:"text",placeholder:"Add Task"}),Object(n.jsx)("button",{onClick:function(e){if(e.preventDefault(),""!==o){var t=1e3*Math.random();m([].concat(Object(L.a)(h),[{completed:!1,text:o,id:t}])),r([].concat(Object(L.a)(c),[{completed:!1,text:o,id:t}])),b("")}},children:Object(n.jsx)("i",{className:"fas fa-plus"})})]}),Object(n.jsx)("form",{children:Object(n.jsxs)("select",{defaultValue:"all",onChange:function(e){"all"===e.target.value&&m(c.filter((function(e){return e}))),"completed"===e.target.value&&m(c.filter((function(e){return e.completed?e:""}))),"remaining"===e.target.value&&m(c.filter((function(e){return e.completed?"":e})))},children:[Object(n.jsx)("option",{value:"all",children:"All"}),Object(n.jsx)("option",{value:"completed",children:"Completed"}),Object(n.jsx)("option",{value:"remaining",children:"Remaining"})]})})]}),Object(n.jsx)("div",{className:"todolist",children:Object(n.jsx)("ul",{children:h.map((function(e){return Object(n.jsx)(U,{item:e,setTodos:r,todos:c,setFilterTodo:m,filterTodo:h},e.id)}))})}),Object(n.jsx)("div",{className:"w-100 text-center mt-2",children:Object(n.jsx)(x.a,{variant:"Link",onClick:function(){return C.apply(this,arguments)},className:"btn btn-primary w-50  align-text-top h-100",children:"Log Out"})})]})})})}var I=c(47);function T(e){var t=e.component,c=Object(I.a)(e,["component"]),a=w().currentUser;return Object(n.jsx)(u.b,Object(R.a)(Object(R.a)({},c),{},{render:function(e){return a?Object(n.jsx)(t,Object(R.a)({},c)):Object(n.jsx)(u.a,{to:"/login"})}}))}function A(){var e=Object(a.useRef)(),t=w().forgot,c=Object(a.useState)(""),r=Object(d.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),u=Object(d.a)(o,2),m=u[0],f=u[1],v=Object(a.useState)(!1),g=Object(d.a)(v,2),y=g[0],N=g[1];function S(){return(S=Object(j.a)(l.a.mark((function c(n){return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,i(""),N(!0),c.next=6,t(e.current.value);case 6:f("Check your Inbox"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),i("User does not exist");case 12:N(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{children:Object(n.jsxs)(O.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Rest Password"}),s&&Object(n.jsx)(p.a,{variant:"danger",children:s}),m&&Object(n.jsx)(p.a,{variant:"danger",children:m}),Object(n.jsxs)(h.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(n.jsxs)(h.a.Group,{id:"email",children:[Object(n.jsx)(h.a.Label,{children:"Email"}),Object(n.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(n.jsx)(x.a,{className:"w-100",type:"submit",disabled:y,children:"Send Link"})]}),Object(n.jsx)("div",{className:"w-100 text-center mt-3",children:Object(n.jsx)(b.b,{to:"/login",children:"Log In"})})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["Don't have an account? ",Object(n.jsx)(b.b,{to:"/signup",children:"Sign Up"})]})]})}function P(){return Object(n.jsx)("div",{children:"profile"})}var D=function(){return Object(n.jsx)(b.a,{children:Object(n.jsx)(k.a,{className:"d-flex align-items-center justify-content-center ",style:{minHeight:"100vh"},children:Object(n.jsx)(y,{children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(T,{exact:!0,path:"/",component:E}),Object(n.jsx)(u.b,{path:"/signup",component:N}),Object(n.jsx)(u.b,{path:"/login",component:S}),Object(n.jsx)(u.b,{path:"/forgot-password",component:A}),Object(n.jsx)(u.b,{path:"/test",component:C}),Object(n.jsx)(u.b,{path:"/profile",component:P})]})})})})};c(63);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.f65c60d3.chunk.js.map