"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[890],{8890:function(e,s,a){a.r(s),a.d(s,{default:function(){return Z}});var n=a(2791),t="Dialogs_dialogs__oe96H",r="Dialogs_dialogsList__x-Ogl",i="Dialogs_messagesList__gG7Cl",u=a(2807),c=a(9101),o=a(8683),d=a(5671),l=a(3144),g=a(136),h=a(7277),m=a(7689),_=a(184),f=function(e){return{isAuth:e.auth.isAuth}},x=a(1087),p="Dialog_dialog__5HDuH",j="Dialog_active__RnDaX",v=function(e){var s="".concat(e.id);return(0,_.jsx)("div",{className:"".concat(p," ").concat(j),children:(0,_.jsx)(x.OL,{to:s,children:e.name})})},b="Message_message__rjHQQ",M=function(e){return(0,_.jsx)("div",{className:b,children:e.message})},y=a(5705),D=a(7103),Z=(D.Ry().shape({name:D.Z_().min(2,"Must be longer than 2 characters").max(30,"Must be shorter than 30 characters").required("Required 2")}),D.Ry().shape({message:D.Z_().min(2,"Must be longer than 2 characters").max(30,"Must be shorter than 30 characters").required("Required 2"),postText:D.Z_().min(2,"Must be longer than 2 characters").max(30,"Must be shorter than 30 characters").required("Required 2")}),(0,a(7781).qC)((0,c.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e((0,u.g)(s))}}})),(function(e){var s=function(s){(0,g.Z)(n,s);var a=(0,h.Z)(n);function n(){return(0,d.Z)(this,n),a.apply(this,arguments)}return(0,l.Z)(n,[{key:"render",value:function(){return this.props.isAuth?(0,_.jsx)(e,(0,o.Z)({},this.props)):(0,_.jsx)(m.Fg,{to:"/Login"})}}]),n}(n.Component);return(0,c.$j)(f)(s)}))((function(e){var s=e.dialogsPage,a=s.Dialogs.map((function(e){return(0,_.jsx)(v,{name:e.name,id:e.id},e.id)})),n=s.Messages.map((function(s){return(0,_.jsx)(M,{message:s.message,dispatch:e.dispatch},s.id)}));return(0,_.jsxs)("div",{className:t,children:[(0,_.jsx)("div",{className:r,children:a}),(0,_.jsxs)("div",{className:i,children:[n,(0,_.jsx)(y.J9,{initialValues:{message:""},validateOnBlur:!0,onSubmit:function(s,a){var n=a.resetForm;e.sendMessage(s.message),n()},children:(0,_.jsxs)(y.l0,{children:[(0,_.jsx)(y.gN,{name:"message",type:"text"}),(0,_.jsx)(y.Bc,{name:"message",component:"div"}),(0,_.jsx)("button",{type:"submit",children:"Send message"})]})})]})]})})))}}]);
//# sourceMappingURL=890.a75b16c7.chunk.js.map