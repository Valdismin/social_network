(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{123:function(e,t,n){e.exports={item:"Post_item__2iIsQ"}},133:function(e,t,n){},230:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var s,r=n(0),a=n.n(r),i=(n(133),n(21)),c=n(18),o=n.n(c),u=n(26),l=n(44),d=n(7),j=n(112),p=n.n(j).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"bc385949-3d41-41a5-85e6-7ba062998611"}}),b=function(e,t){return p.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},f=function(e){return p.delete("follow/".concat(e)).then((function(e){return e.data}))},g=function(e){return p.post("follow/".concat(e),{}).then((function(e){return e.data}))};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(s||(s={}));var h=function(){return p.get("auth/me").then((function(e){return e.data}))},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return p.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},m=function(){return p.delete("auth/login")},x=function(e){return p.get("profile/".concat(e)).then((function(e){return e.data}))},v=function(e){return p.get("profile/status/".concat(e))},_=function(e){return p.put("profile/status",{status:e})},P={postsData:[{id:1,message:"Hi,how are you?",likesCount:12},{id:2,message:"It is my first post",likesCount:11},{id:3,message:"Bonjour",likesCount:3}],profile:null,status:""},w=function(e){return{type:"ADD-POST",newPost:e}},S=function(e){return{type:"SET-STATUS",status:e}},y={dialogsData:[{id:"1",name:"Vlad"},{id:"2",name:"Dasha"},{id:"3",name:"Anton"},{id:"4",name:"Pasha"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"Hello"},{id:3,message:"Bonjour"}]},A="FOLLOW",I="UNFOLLOW",C="SET_USERS",E="SET_CURRENT_PAGE",N="SET_TOTAL_USERS_COUNT",k="TOGGLE_IS_FETCHING",F="TOGGLE_IS_FOLLOWING_PROGRESS",U=function(e){return{type:A,userId:e}},T=function(e){return{type:I,userId:e}},D=function(e){return{type:k,isFetching:e}},M=function(e,t){return{type:F,isFetching:e,userId:t}},z={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},B="SET_USER_DATA",R="SET_ERROR",L={id:null,email:null,login:null,isAuth:!1,serverError:null},G=function(e,t){return{type:B,data:e,isAuth:t}},Z=n(276),H=n(113),q="SET_INITIALIZED",V={initialized:!1},W=Object(i.c)({postsPropsAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPost,likesCount:0};return Object(d.a)(Object(d.a)({},e),{},{postsData:[].concat(Object(l.a)(e.postsData),[n])});case"SET-USER-PROFILE":return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(d.a)(Object(d.a)({},e),{},{status:t.status});default:return e}},dialogsPropsAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MASSAGE":var n={id:4,message:t.newMessageText};return Object(d.a)(Object(d.a)({},e),{},{messagesData:[].concat(Object(l.a)(e.messagesData),[n])});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e}))});case I:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e}))});case C:return Object(d.a)(Object(d.a)({},e),{},{users:t.users});case E:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case N:return Object(d.a)(Object(d.a)({},e),{},{totalUsersCount:t.totalUsersCount});case k:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case F:return Object(d.a)(Object(d.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(l.a)(e.followingInProgress),[t.userId]):Object(l.a)(e.followingInProgress.filter((function(e){return e!=t.userId})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.data),{},{isAuth:t.isAuth,serverError:null});case R:return Object(d.a)(Object(d.a)({},e),{},{serverError:t.error});default:return e}},form:Z.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}}}),J=Object(i.e)(W,Object(i.a)(H.a)),K=n(10),Q=n.n(K),Y=n(20),X=n(46),$=n(47),ee=n(50),te=n(49),ne=(n(230),n(39)),se=n.n(ne),re=n(2),ae=function(){return Object(re.jsxs)("nav",{className:se.a.nav,children:[Object(re.jsx)("div",{className:se.a.item,children:Object(re.jsx)(Y.b,{to:"/profile",activeClassName:se.a.active,children:"Profile"})}),Object(re.jsx)("div",{className:se.a.item,children:Object(re.jsx)(Y.b,{to:"/dialogs",activeClassName:se.a.active,children:"Message"})}),Object(re.jsx)("div",{className:se.a.itemSettings,children:Object(re.jsx)(Y.b,{to:"/users",activeClassName:se.a.active,children:"Find Users"})})]})},ie=n(14),ce=n(27),oe=n.n(ce),ue=function(e){return Object(re.jsx)("div",{className:oe.a.dialog+" "+oe.a.active,children:Object(re.jsx)(Y.b,{to:"/dialogs/"+e.id,activeClassName:oe.a.active,children:e.name})})},le=function(e){return Object(re.jsx)("div",{className:oe.a.message,children:e.message})},de=n(48),je=n(275),pe=n(271),be=n(15),fe=n(124),ge=function(e){return{isAuth:e.auth.isAuth}};function he(e){return Object(be.b)(ge,{})((function(t){t.isAuth;var n=Object(fe.a)(t,["isAuth"]);return t.isAuth?Object(re.jsx)(e,Object(d.a)({},n)):Object(re.jsx)(ie.a,{to:"/login"})}))}var Oe=Object(i.d)(Object(be.b)((function(e){return{dialogsPropsAll:e.dialogsPropsAll,isAuth:e.auth.isAuth}}),(function(e){return{addMessage:function(t){e(function(e){return{type:"ADD-MASSAGE",newMessageText:e}}(t))}}})),he)((function(e){var t=e.dialogsPropsAll.dialogsData.map((function(e){return Object(re.jsx)(ue,{name:e.name,id:e.id})})),n=e.dialogsPropsAll.messagesData.map((function(e){return Object(re.jsx)(le,{message:e.message})})),s=Object(de.a)({initialValues:{message:""},validate:function(e){var t={};return e.message.length>30&&(t.message=""),t},onSubmit:function(t){e.addMessage(t.message),s.resetForm()}});return Object(re.jsxs)("div",{className:oe.a.dialogs,children:[Object(re.jsx)("div",{className:oe.a.dialogsItem,children:t}),Object(re.jsxs)("div",{className:oe.a.messages,children:[Object(re.jsx)("div",{children:n}),Object(re.jsx)("div",{children:Object(re.jsx)("div",{children:Object(re.jsx)("form",{onSubmit:s.handleSubmit,children:Object(re.jsxs)("div",{className:oe.a.textArea_Button,children:[Object(re.jsx)(je.a,Object(d.a)({label:"Add message",margin:"normal",name:"message"},s.getFieldProps("message"))),Object(re.jsx)(pe.a,{variant:"outlined",type:"submit",color:"primary",children:"Add message"})]})})})})]})]})})),me=n(88),xe=n.n(me),ve=n.p+"static/media/user.a70779f1.png",_e=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;++s)n.push(s);return Object(re.jsxs)("div",{children:[Object(re.jsx)("div",{children:n.map((function(t){return Object(re.jsx)("span",{className:e.currentPage===t&&xe.a.selectedPage,onClick:function(n){e.onPageChanged(t)},children:t})}))}),e.users.map((function(t){return Object(re.jsxs)("div",{children:[Object(re.jsxs)("span",{children:[Object(re.jsx)("div",{children:Object(re.jsx)(Y.b,{to:"profile/"+t.id,children:Object(re.jsx)("img",{src:null!=t.photos.small?t.photos.small:ve,className:xe.a.userPhoto})})}),Object(re.jsx)("div",{children:t.followed?Object(re.jsx)(pe.a,{variant:"contained",size:"small",color:"primary",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(re.jsx)(pe.a,{variant:"contained",size:"small",color:"primary",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(re.jsxs)("span",{children:[Object(re.jsxs)("span",{children:[Object(re.jsx)("div",{children:t.name}),Object(re.jsx)("div",{children:t.status})]}),Object(re.jsxs)("span",{children:[Object(re.jsx)("div",{children:"u.location.country"}),Object(re.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},Pe=n.p+"static/media/preloader_users.aed4c9cc.svg",we=function(e){return Object(re.jsx)("div",{style:{backgroundColor:"white"},children:Object(re.jsx)("img",{src:Pe})})},Se=function(e){return e.usersPage.users},ye=function(e){return e.usersPage.pageSize},Ae=function(e){return e.usersPage.totalUsersCount},Ie=function(e){return e.usersPage.currentPage},Ce=function(e){return e.usersPage.followingInProgress},Ee=function(e){return e.usersPage.isFetching},Ne=function(e){Object(ee.a)(n,e);var t=Object(te.a)(n);function n(){var e;Object(X.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.getUsers(t,e.props.pageSize)},e}return Object($.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(re.jsx)(re.Fragment,{children:this.props.isFetching?Object(re.jsx)(we,{}):Object(re.jsx)(_e,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.getFollow,unfollow:this.props.getUnfollow,followingInProgress:this.props.followingInProgress,toggleIsFollowingProgress:this.props.toggleIsFollowingProgress})})}}]),n}(a.a.Component),ke=Object(i.d)(Object(be.b)((function(e){return{users:Se(e),pageSize:ye(e),totalUsersCount:Ae(e),currentPage:Ie(e),isFetching:Ee(e),followingInProgress:Ce(e)}}),{getFollow:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(M(!0,e)),t.next=3,g(e);case 3:0===t.sent.resultCode&&n(U(e)),n(M(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUnfollow:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(M(!0,e)),t.next=3,f(e);case 3:0===t.sent.resultCode&&n(T(e)),n(M(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:E,currentPage:e}},toggleIsFollowingProgress:M,getUsers:function(e,t){return function(){var n=Object(u.a)(o.a.mark((function n(s){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(D(!0)),n.next=3,b(e,t);case 3:r=n.sent,s(D(!1)),s((i=r.items,{type:C,users:i})),s((a=r.totalCount,{type:N,totalUsersCount:a}));case 7:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}),he)(Ne),Fe=n(89),Ue=n.n(Fe),Te=n(90),De=function(e){var t=Object(r.useState)(!1),n=Object(Te.a)(t,2),s=n[0],a=n[1],i=Object(r.useState)(e.status),c=Object(Te.a)(i,2),o=c[0],u=c[1];Object(r.useEffect)((function(){e.status&&u(e.status.toString())}),[e.status]);return Object(re.jsxs)("div",{children:[!s&&Object(re.jsx)("div",{children:Object(re.jsx)("span",{onDoubleClick:function(){a(!0)},children:e.status?e.status:o})}),s&&Object(re.jsx)("div",{children:Object(re.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),o&&e.updateStatus(o)},value:o||"----"})})]})},Me=n(272),ze=function(e){return e.profile&&e.status?Object(re.jsxs)("div",{children:[Object(re.jsx)("div",{className:Ue.a.img}),Object(re.jsxs)("div",{className:Ue.a.description,children:[Object(re.jsx)("img",{src:e.profile.photos.large}),Object(re.jsx)(De,{status:e.status,updateStatus:e.updateStatus})]})]}):Object(re.jsx)(Me.a,{})},Be=n(78),Re=n.n(Be),Le=n(123),Ge=n.n(Le),Ze=function(e){return Object(re.jsxs)("div",{className:Ge.a.item,children:[Object(re.jsx)("img",{src:"https://www.interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg"}),e.message,Object(re.jsx)("div",{children:Object(re.jsxs)("span",{children:[e.count_likes," Like"]})})]})},He=Object(be.b)((function(e){return{postsPropsAll:e.postsPropsAll}}),(function(e){return{addPost:function(t){e(w(t))}}}))((function(e){var t=Object(be.c)(),n=Object(de.a)({initialValues:{post:""},validate:function(e){var t={};return e.post.length>50&&(t.post=""),t},onSubmit:function(e){t(w(e.post)),n.resetForm()}}),s=e.postsPropsAll.postsData.map((function(e){return Object(re.jsx)(Ze,{message:e.message,count_likes:e.likesCount})}));return Object(re.jsxs)("div",{className:Re.a.postBlock,children:[Object(re.jsx)("h3",{children:"My posts"}),Object(re.jsx)("form",{onSubmit:n.handleSubmit,children:Object(re.jsxs)("div",{className:Re.a.textArea_Button,children:[Object(re.jsx)(je.a,Object(d.a)({label:"Create Post",margin:"normal",name:"post"},n.getFieldProps("post"))),Object(re.jsx)(pe.a,{type:"submit",variant:"outlined",color:"primary",children:"Add post"})]})}),Object(re.jsx)("div",{className:Re.a.content,children:s})]})})),qe=function(e){return Object(re.jsxs)("div",{children:[Object(re.jsx)(ze,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(re.jsx)(He,{})]})},Ve=Object(i.d)(Object(be.b)((function(e){return{profile:e.postsPropsAll.profile,status:e.postsPropsAll.status,autorisedUserId:e.auth.id}}),{getUserProfile:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:s=t.sent,n({type:"SET-USER-PROFILE",profile:s});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e).then((function(e){return n(S(e.data))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e).then((function(t){0===t.data.resultCode&&n(S(e))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),ie.f,he)((function(e){var t=e.match.params.userId;return Object(r.useEffect)((function(){t||(t=String(e.autorisedUserId)),e.getUserProfile(t)}),[]),e.profile&&e.getStatus(e.profile.userId),Object(re.jsx)(qe,{profile:e.profile,status:e.status,updateStatus:e.updateStatus})})),We=n(61),Je=n.n(We),Ke=function(e){return Object(re.jsx)("header",{className:Je.a.header,children:Object(re.jsx)("div",{className:Je.a.loginBlock,children:e.isAuth?Object(re.jsxs)("div",{children:[e.login," - ",Object(re.jsx)(pe.a,{className:Je.a.button,onClick:e.logout,children:"Log out"})]}):Object(re.jsx)("button",{children:Object(re.jsx)(Y.b,{className:Je.a.logButton,to:"/login",children:"Login"})})})})},Qe=function(e){Object(ee.a)(n,e);var t=Object(te.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object($.a)(n,[{key:"render",value:function(){return Object(re.jsx)(Ke,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(a.a.Component),Ye=Object(be.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:0===e.sent.data.resultCode&&t(G({email:null,id:null,login:null},!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Qe),Xe=n(273),$e=n(278),et=n(274),tt=n(279),nt=n(277),st=function(){var e=Object(be.d)((function(e){return e.auth.isAuth})),t=Object(be.c)(),n=Object(de.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email Required!",e.password?e.password.length<3&&(t.password="Password must be more than 2 symbols!"):t.password="Password Required!",t},onSubmit:function(e){var r;t((r=e,function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(r.email,r.password,r.rememberMe);case 2:(n=e.sent).resultCode===s.Success?(h(),t(G(n.data.data,!0))):(a=n.messages.length>0?n.messages[0]:"Some error",t({type:"SET_ERROR",error:a}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),n.resetForm()}});return e?Object(re.jsx)(ie.a,{to:"/profile"}):Object(re.jsx)(Xe.a,{container:!0,justify:"center",children:Object(re.jsx)(Xe.a,{item:!0,xs:4,children:Object(re.jsx)("form",{onSubmit:n.handleSubmit,children:Object(re.jsx)($e.a,{children:Object(re.jsxs)(et.a,{children:[Object(re.jsx)(je.a,Object(d.a)({label:"Email",margin:"normal",name:"email"},n.getFieldProps("email"))),n.touched.email&&n.errors.email?Object(re.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(re.jsx)(je.a,Object(d.a)({type:"password",label:"Password",margin:"normal",name:"password"},n.getFieldProps("password"))),n.touched.password&&n.errors.password?Object(re.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(re.jsx)(tt.a,Object(d.a)(Object(d.a)({name:"rememberMe",label:"Remember me"},n.getFieldProps("rememberMe")),{},{control:Object(re.jsx)(nt.a,{})})),Object(re.jsx)(pe.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})})})})},rt=function(e){Object(ee.a)(n,e);var t=Object(te.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object($.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(re.jsxs)("div",{className:"app-wrapper",children:[Object(re.jsx)(Ye,{}),Object(re.jsx)(ae,{}),Object(re.jsxs)("div",{className:"app-wrapper-content",children:[Object(re.jsx)(ie.b,{exact:!0,path:"/",render:function(){return Object(re.jsx)(Ve,{})}}),Object(re.jsx)(ie.b,{path:"/dialogs",render:function(){return Object(re.jsx)(Oe,{})}}),Object(re.jsx)(ie.b,{path:"/profile/:userId?",render:function(){return Object(re.jsx)(Ve,{})}}),Object(re.jsx)(ie.b,{path:"/users",render:function(){return Object(re.jsx)(ke,{})}}),Object(re.jsx)(ie.b,{path:"/login",render:function(){return Object(re.jsx)(st,{})}})]})]}):Object(re.jsx)(we,{})}}]),n}(a.a.Component),at=Object(i.d)(ie.f,Object(be.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e((function(e){return h().then((function(t){t.resultCode===s.Success&&e(G(t.data,!0))}))})).then((function(){e({type:q})}))}}}))(rt);Q.a.render(Object(re.jsx)(Y.a,{children:Object(re.jsx)(be.a,{store:J,children:Object(re.jsx)(at,{})})}),document.getElementById("root"))},27:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2yaZY",dialogsItem:"Dialogs_dialogsItem__41GdX",active:"Dialogs_active__i8E9B",messages:"Dialogs_messages__1nWHq",textArea_Button:"Dialogs_textArea_Button__29UBz"}},39:function(e,t,n){e.exports={nav:"Navigation_nav__2PkAl",item:"Navigation_item__2Gs4w",itemSettings:"Navigation_itemSettings__3EItE",friends:"Navigation_friends__kI6O8",active:"Navigation_active__3MhZN"}},61:function(e,t,n){e.exports={header:"Header_header__39c1E",loginBlock:"Header_loginBlock__qiKS_",button:"Header_button__jLhxs",logButton:"Header_logButton__QZ-io"}},78:function(e,t,n){e.exports={textArea_Button:"MyPosts_textArea_Button__3ZlzN",item:"MyPosts_item__1q-8z",postBlock:"MyPosts_postBlock__1oaMi",content:"MyPosts_content__Z9JiK"}},88:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1Zlhn",selectedPage:"users_selectedPage__3I3eN"}},89:function(e,t,n){e.exports={content:"ProfileInfo_content__2ztCb",description:"ProfileInfo_description__fTi3M"}}},[[237,1,2]]]);
//# sourceMappingURL=main.ff3845f4.chunk.js.map