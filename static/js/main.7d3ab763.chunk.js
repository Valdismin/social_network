(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{120:function(e,t,a){e.exports={item:"Post_item__2iIsQ"}},130:function(e,t,a){},227:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),o=(a(130),a(20)),i=a(16),u=a.n(i),c=a(25),l=a(44),m=a(7),p=a(110),d=a.n(p).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"bc385949-3d41-41a5-85e6-7ba062998611"}}),f=function(e,t){return d.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},g=function(e){return d.delete("follow/".concat(e)).then((function(e){return e.data}))},E=function(e){return d.post("follow/".concat(e),{}).then((function(e){return e.data}))};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(n||(n={}));var h=function(){return d.get("auth/me").then((function(e){return e.data}))},b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return d.post("auth/login",{email:e,password:t,rememberMe:a}).then((function(e){return e.data}))},v=function(){return d.delete("auth/login")},O=function(e){return d.get("profile/".concat(e)).then((function(e){return e.data}))},_=function(e){return d.get("profile/status/".concat(e))},j=function(e){return d.put("profile/status",{status:e})},P={postsData:[{id:1,message:"Hi,how are you?",likesCount:12},{id:2,message:"It is my first post",likesCount:11},{id:3,message:"Bonjour",likesCount:3}],profile:null,status:""},w=function(e){return{type:"ADD-POST",newPost:e}},S=function(e){return{type:"SET-STATUS",status:e}},y={dialogsData:[{id:"1",name:"Vlad"},{id:"2",name:"Dasha"},{id:"3",name:"Anton"},{id:"4",name:"Pasha"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"Hello"},{id:3,message:"Bonjour"}]},A="FOLLOW",I="UNFOLLOW",C="SET_USERS",N="SET_CURRENT_PAGE",k="SET_TOTAL_USERS_COUNT",x="TOGGLE_IS_FETCHING",F="TOGGLE_IS_FOLLOWING_PROGRESS",U=function(e){return{type:A,userId:e}},T=function(e){return{type:I,userId:e}},D=function(e){return{type:x,isFetching:e}},M=function(e,t){return{type:F,isFetching:e,userId:t}},z={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},B="SET_USER_DATA",R="SET_ERROR",L={id:null,email:null,login:null,isAuth:!1,serverError:null},G=function(e,t){return{type:B,data:e,isAuth:t}},Z=a(271),H=a(111),q="SET_INITIALIZED",V={initialized:!1},W=Object(o.c)({postsPropsAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5,message:t.newPost,likesCount:0};return Object(m.a)(Object(m.a)({},e),{},{postsData:[].concat(Object(l.a)(e.postsData),[a])});case"SET-USER-PROFILE":return Object(m.a)(Object(m.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(m.a)(Object(m.a)({},e),{},{status:t.status});default:return e}},dialogsPropsAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MASSAGE":var a={id:4,message:t.newMessageText};return Object(m.a)(Object(m.a)({},e),{},{messagesData:[].concat(Object(l.a)(e.messagesData),[a])});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(m.a)(Object(m.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(m.a)(Object(m.a)({},e),{},{followed:!0}):e}))});case I:return Object(m.a)(Object(m.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(m.a)(Object(m.a)({},e),{},{followed:!1}):e}))});case C:return Object(m.a)(Object(m.a)({},e),{},{users:t.users});case N:return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case k:return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.totalUsersCount});case x:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});case F:return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(l.a)(e.followingInProgress),[t.userId]):Object(l.a)(e.followingInProgress.filter((function(e){return e!=t.userId})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(m.a)(Object(m.a)(Object(m.a)({},e),t.data),{},{isAuth:t.isAuth,serverError:null});case R:return Object(m.a)(Object(m.a)({},e),{},{serverError:t.error});default:return e}},form:Z.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(m.a)(Object(m.a)({},e),{},{initialized:!0});default:return e}}}),J=Object(o.e)(W,Object(o.a)(H.a)),K=a(9),Q=a.n(K),Y=a(18),X=a(46),$=a(47),ee=a(50),te=a(49),ae=(a(227),a(38)),ne=a.n(ae),re=function(){return s.a.createElement("nav",{className:ne.a.nav},s.a.createElement("div",{className:ne.a.item},s.a.createElement(Y.b,{to:"/profile",activeClassName:ne.a.active},"Profile")),s.a.createElement("div",{className:ne.a.item},s.a.createElement(Y.b,{to:"/dialogs",activeClassName:ne.a.active},"Message")),s.a.createElement("div",{className:ne.a.itemSettings},s.a.createElement(Y.b,{to:"/users",activeClassName:ne.a.active},"Find Users")))},se=a(12),oe=a(26),ie=a.n(oe),ue=function(e){return s.a.createElement("div",{className:ie.a.dialog+" "+ie.a.active},s.a.createElement(Y.b,{to:"/dialogs/"+e.id,activeClassName:ie.a.active},e.name))},ce=function(e){return s.a.createElement("div",{className:ie.a.message},e.message)},le=a(48),me=a(270),pe=a(266),de=a(13),fe=a(121),ge=function(e){return{isAuth:e.auth.isAuth}};function Ee(e){return Object(de.b)(ge,{})((function(t){t.isAuth;var a=Object(fe.a)(t,["isAuth"]);return t.isAuth?s.a.createElement(e,a):s.a.createElement(se.a,{to:"/login"})}))}var he=Object(o.d)(Object(de.b)((function(e){return{dialogsPropsAll:e.dialogsPropsAll,isAuth:e.auth.isAuth}}),(function(e){return{addMessage:function(t){e(function(e){return{type:"ADD-MASSAGE",newMessageText:e}}(t))}}})),Ee)((function(e){var t=e.dialogsPropsAll.dialogsData.map((function(e){return s.a.createElement(ue,{name:e.name,id:e.id})})),a=e.dialogsPropsAll.messagesData.map((function(e){return s.a.createElement(ce,{message:e.message})})),n=Object(le.a)({initialValues:{message:""},validate:function(e){var t={};return e.message.length>30&&(t.message=""),t},onSubmit:function(t){e.addMessage(t.message),n.resetForm()}});return s.a.createElement("div",{className:ie.a.dialogs},s.a.createElement("div",{className:ie.a.dialogsItem},t),s.a.createElement("div",{className:ie.a.messages},s.a.createElement("div",null,a),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("form",{onSubmit:n.handleSubmit},s.a.createElement("div",{className:ie.a.textArea_Button},s.a.createElement(me.a,Object.assign({label:"Add message",margin:"normal",name:"message"},n.getFieldProps("message"))),s.a.createElement(pe.a,{variant:"outlined",type:"submit",color:"primary"},"Add message")))))))})),be=a(86),ve=a.n(be),Oe=a.p+"static/media/user.a70779f1.png",_e=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],n=1;n<=t;++n)a.push(n);return s.a.createElement("div",null,s.a.createElement("div",null,a.map((function(t){return s.a.createElement("span",{className:e.currentPage===t&&ve.a.selectedPage,onClick:function(a){e.onPageChanged(t)}},t)}))),e.users.map((function(t){return s.a.createElement("div",{key:t.id},s.a.createElement("span",null,s.a.createElement("div",null,s.a.createElement(Y.b,{to:"profile/"+t.id},s.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Oe,className:ve.a.userPhoto}))),s.a.createElement("div",null,t.followed?s.a.createElement(pe.a,{variant:"contained",size:"small",color:"primary",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow"):s.a.createElement(pe.a,{variant:"contained",size:"small",color:"primary",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))),s.a.createElement("span",null,s.a.createElement("span",null,s.a.createElement("div",null,t.name),s.a.createElement("div",null,t.status)),s.a.createElement("span",null,s.a.createElement("div",null,"u.location.country"),s.a.createElement("div",null,"u.location.city"))))})))},je=a.p+"static/media/preloader_users.aed4c9cc.svg",Pe=function(e){return s.a.createElement("div",{style:{backgroundColor:"white"}},s.a.createElement("img",{src:je}))},we=function(e){return e.usersPage.users},Se=function(e){return e.usersPage.pageSize},ye=function(e){return e.usersPage.totalUsersCount},Ae=function(e){return e.usersPage.currentPage},Ie=function(e){return e.usersPage.followingInProgress},Ce=function(e){return e.usersPage.isFetching},Ne=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(){var e;Object(X.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.getUsers(t,e.props.pageSize)},e}return Object($.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.isFetching?s.a.createElement(Pe,null):s.a.createElement(_e,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.getFollow,unfollow:this.props.getUnfollow,followingInProgress:this.props.followingInProgress,toggleIsFollowingProgress:this.props.toggleIsFollowingProgress}))}}]),a}(s.a.Component),ke=Object(o.d)(Object(de.b)((function(e){return{users:we(e),pageSize:Se(e),totalUsersCount:ye(e),currentPage:Ae(e),isFetching:Ce(e),followingInProgress:Ie(e)}}),{getFollow:function(e){return function(){var t=Object(c.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(M(!0,e)),t.next=3,E(e);case 3:0===t.sent.resultCode&&a(U(e)),a(M(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUnfollow:function(e){return function(){var t=Object(c.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(M(!0,e)),t.next=3,g(e);case 3:0===t.sent.resultCode&&a(T(e)),a(M(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:N,currentPage:e}},toggleIsFollowingProgress:M,getUsers:function(e,t){return function(){var a=Object(c.a)(u.a.mark((function a(n){var r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(D(!0)),a.next=3,f(e,t);case 3:r=a.sent,n(D(!1)),n((o=r.items,{type:C,users:o})),n((s=r.totalCount,{type:k,totalUsersCount:s}));case 7:case"end":return a.stop()}var s,o}),a)})));return function(e){return a.apply(this,arguments)}}()}}),Ee)(Ne),xe=a(87),Fe=a.n(xe),Ue=a(88),Te=function(e){var t=Object(r.useState)(!1),a=Object(Ue.a)(t,2),n=a[0],o=a[1],i=Object(r.useState)(e.status),u=Object(Ue.a)(i,2),c=u[0],l=u[1];Object(r.useEffect)((function(){e.status&&l(e.status.toString())}),[e.status]);return s.a.createElement("div",null,!n&&s.a.createElement("div",null,s.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status?e.status:c)),n&&s.a.createElement("div",null,s.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),c&&e.updateStatus(c)},value:c||"----"})))},De=a(267),Me=function(e){return e.profile&&e.status?s.a.createElement("div",null,s.a.createElement("div",{className:Fe.a.img}),s.a.createElement("div",{className:Fe.a.description},s.a.createElement("img",{src:e.profile.photos.large}),s.a.createElement(Te,{status:e.status,updateStatus:e.updateStatus}))):s.a.createElement(De.a,null)},ze=a(77),Be=a.n(ze),Re=a(120),Le=a.n(Re),Ge=function(e){return s.a.createElement("div",{className:Le.a.item},s.a.createElement("img",{src:"https://www.interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg"}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,e.count_likes," Like")))},Ze=Object(de.b)((function(e){return{postsPropsAll:e.postsPropsAll}}),(function(e){return{addPost:function(t){e(w(t))}}}))((function(e){var t=Object(de.c)(),a=Object(le.a)({initialValues:{post:""},validate:function(e){var t={};return e.post.length>50&&(t.post=""),t},onSubmit:function(e){t(w(e.post)),a.resetForm()}}),n=e.postsPropsAll.postsData.map((function(e){return s.a.createElement(Ge,{message:e.message,count_likes:e.likesCount})}));return s.a.createElement("div",{className:Be.a.postBlock},s.a.createElement("h3",null,"My posts"),s.a.createElement("form",{onSubmit:a.handleSubmit},s.a.createElement("div",{className:Be.a.textArea_Button},s.a.createElement(me.a,Object.assign({label:"Create Post",margin:"normal",name:"post"},a.getFieldProps("post"))),s.a.createElement(pe.a,{type:"submit",variant:"outlined",color:"primary"},"Add post"))),s.a.createElement("div",{className:Be.a.content},n))})),He=function(e){return s.a.createElement("div",null,s.a.createElement(Me,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),s.a.createElement(Ze,null))},qe=Object(o.d)(Object(de.b)((function(e){return{profile:e.postsPropsAll.profile,status:e.postsPropsAll.status,autorisedUserId:e.auth.id}}),{getUserProfile:function(e){return function(){var t=Object(c.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:n=t.sent,a({type:"SET-USER-PROFILE",profile:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(c.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e).then((function(e){return a(S(e.data))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(c.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e).then((function(t){0===t.data.resultCode&&a(S(e))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),se.f,Ee)((function(e){var t=e.match.params.userId;return Object(r.useEffect)((function(){t||(t=String(e.autorisedUserId)),e.getUserProfile(t)}),[]),e.profile&&e.getStatus(e.profile.userId),s.a.createElement(He,{profile:e.profile,status:e.status,updateStatus:e.updateStatus})})),Ve=a(61),We=a.n(Ve),Je=function(e){return s.a.createElement("header",{className:We.a.header},s.a.createElement("div",{className:We.a.loginBlock},e.isAuth?s.a.createElement("div",null,e.login," - ",s.a.createElement(pe.a,{className:We.a.button,onClick:e.logout},"Log out")):s.a.createElement("button",null,s.a.createElement(Y.b,{className:We.a.logButton,to:"/login"},"Login"))))},Ke=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(){return Object(X.a)(this,a),t.apply(this,arguments)}return Object($.a)(a,[{key:"render",value:function(){return s.a.createElement(Je,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),a}(s.a.Component),Qe=Object(de.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(c.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:0===e.sent.data.resultCode&&t(G({email:null,id:null,login:null},!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ke),Ye=a(268),Xe=a(273),$e=a(269),et=a(274),tt=a(272),at=function(){var e=Object(de.d)((function(e){return e.auth.isAuth})),t=Object(de.c)(),a=Object(le.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email Required!",e.password?e.password.length<3&&(t.password="Password must be more than 2 symbols!"):t.password="Password Required!",t},onSubmit:function(e){var r;t((r=e,function(){var e=Object(c.a)(u.a.mark((function e(t){var a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(r.email,r.password,r.rememberMe);case 2:(a=e.sent).resultCode===n.Success?(h(),t(G(a.data.data,!0))):(s=a.messages.length>0?a.messages[0]:"Some error",t({type:"SET_ERROR",error:s}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),a.resetForm()}});return e?s.a.createElement(se.a,{to:"/profile"}):s.a.createElement(Ye.a,{container:!0,justify:"center"},s.a.createElement(Ye.a,{item:!0,xs:4},s.a.createElement("form",{onSubmit:a.handleSubmit},s.a.createElement(Xe.a,null,s.a.createElement($e.a,null,s.a.createElement(me.a,Object.assign({label:"Email",margin:"normal",name:"email"},a.getFieldProps("email"))),a.touched.email&&a.errors.email?s.a.createElement("div",{style:{color:"red"}},a.errors.email):null,s.a.createElement(me.a,Object.assign({type:"password",label:"Password",margin:"normal",name:"password"},a.getFieldProps("password"))),a.touched.password&&a.errors.password?s.a.createElement("div",{style:{color:"red"}},a.errors.password):null,s.a.createElement(et.a,Object.assign({name:"rememberMe",label:"Remember me"},a.getFieldProps("rememberMe"),{control:s.a.createElement(tt.a,null)})),s.a.createElement(pe.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))},nt=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(){return Object(X.a)(this,a),t.apply(this,arguments)}return Object($.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(Qe,null),s.a.createElement(re,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(se.b,{exact:!0,path:"/",render:function(){return s.a.createElement(qe,null)}}),s.a.createElement(se.b,{path:"/dialogs",render:function(){return s.a.createElement(he,null)}}),s.a.createElement(se.b,{path:"/profile/:userId?",render:function(){return s.a.createElement(qe,null)}}),s.a.createElement(se.b,{path:"/users",render:function(){return s.a.createElement(ke,null)}}),s.a.createElement(se.b,{path:"/login",render:function(){return s.a.createElement(at,null)}}))):s.a.createElement(Pe,null)}}]),a}(s.a.Component),rt=Object(o.d)(se.f,Object(de.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e((function(e){return h().then((function(t){t.resultCode===n.Success&&e(G(t.data,!0))}))})).then((function(){e({type:q})}))}}}))(nt);Q.a.render(s.a.createElement(Y.a,null,s.a.createElement(de.a,{store:J},s.a.createElement(rt,null))),document.getElementById("root"))},26:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2yaZY",dialogsItem:"Dialogs_dialogsItem__41GdX",active:"Dialogs_active__i8E9B",messages:"Dialogs_messages__1nWHq",textArea_Button:"Dialogs_textArea_Button__29UBz"}},38:function(e,t,a){e.exports={nav:"Navigation_nav__2PkAl",item:"Navigation_item__2Gs4w",itemSettings:"Navigation_itemSettings__3EItE",friends:"Navigation_friends__kI6O8",active:"Navigation_active__3MhZN"}},61:function(e,t,a){e.exports={header:"Header_header__39c1E",loginBlock:"Header_loginBlock__qiKS_",button:"Header_button__jLhxs",logButton:"Header_logButton__QZ-io"}},77:function(e,t,a){e.exports={textArea_Button:"MyPosts_textArea_Button__3ZlzN",item:"MyPosts_item__1q-8z",postBlock:"MyPosts_postBlock__1oaMi",content:"MyPosts_content__Z9JiK"}},86:function(e,t,a){e.exports={userPhoto:"users_userPhoto__1Zlhn",selectedPage:"users_selectedPage__3I3eN"}},87:function(e,t,a){e.exports={content:"ProfileInfo_content__2ztCb",description:"ProfileInfo_description__fTi3M"}}},[[232,1,2]]]);
//# sourceMappingURL=main.7d3ab763.chunk.js.map