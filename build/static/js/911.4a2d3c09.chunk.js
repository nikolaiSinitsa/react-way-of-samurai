"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[911],{911:function(t,s,e){e.r(s),e.d(s,{default:function(){return b}});var n=e(8683),u=e(5671),r=e(3144),i=e(136),a=e(7277),o=e(2791),p="ProfileInfo_description__u7GZ5",c=e(814),l=e(885),d=e(184),f=function(t){var s=(0,o.useState)(!1),e=(0,l.Z)(s,2),n=e[0],u=e[1],r=(0,o.useState)(t.status),i=(0,l.Z)(r,2),a=i[0],p=i[1];(0,o.useEffect)((function(){p(t.status)}),[t.status]);return(0,d.jsxs)("div",{children:[!n&&(0,d.jsx)("div",{children:(0,d.jsx)("span",{onDoubleClick:function(){u(!0)},children:t.status||"----"})}),n&&(0,d.jsx)("div",{children:(0,d.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},onBlur:function(){u(!1),t.updateStatus(a)},autoFocus:!0,value:a})})]})},h=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return s?(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)("img",{src:s.photos.large}),(0,d.jsx)(f,{status:e,updateStatus:n})]})}):(0,d.jsx)(c.Z,{})},x=e(6070),j=e(2982),v="MyPosts_postsBlock__l4iSa",m="MyPosts_post__KmdzL",g=function(t){return(0,d.jsxs)("div",{children:[t.message,(0,d.jsxs)("span",{children:[t.likesCount," like"]})]})},S=e(5705),_=e(9101),Z=(0,_.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(s){t((0,x.t2)(s))}}}))((function(t){var s=(0,j.Z)(t.posts).reverse().map((function(t){return(0,d.jsx)(g,{message:t.message,likesCount:t.likesCount},t.id)}));return(0,d.jsxs)("div",{className:v,children:[(0,d.jsx)("h3",{children:"My Posts"}),(0,d.jsx)("div",{children:(0,d.jsx)(S.J9,{initialValues:{postText:""},validateOnBlur:!0,onSubmit:function(s){t.addPost(s.postText),s.postText=""},children:function(){return(0,d.jsxs)(S.l0,{children:[(0,d.jsx)(S.gN,{name:"postText",type:"text"}),(0,d.jsx)(S.Bc,{name:"postText",component:"div"}),(0,d.jsx)("button",{type:"submit",children:"Send"})]})}})}),(0,d.jsx)("div",{className:m,children:s})]})})),k=function(t){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,d.jsx)(Z,{})]})},P=e(7689),y=e(7781),C=function(t){(0,i.Z)(e,t);var s=(0,a.Z)(e);function e(){return(0,u.Z)(this,e),s.apply(this,arguments)}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return this.props.isMain&&!this.props.isAuth?(0,d.jsx)(P.Fg,{to:"/login"}):(0,d.jsx)(k,(0,n.Z)((0,n.Z)({},this.props),{},{status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(o.Component);var b=(0,y.qC)((0,_.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:x.et,getStatus:x.lR,updateStatus:x.Nf}),(function(t){return function(s){var e={params:(0,P.UO)()};return(0,d.jsx)(t,(0,n.Z)((0,n.Z)({},s),{},{match:e}))}}))(C)}}]);
//# sourceMappingURL=911.4a2d3c09.chunk.js.map