(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{156:function(e,t,n){"use strict";(function(e){var a=n(43),c=n.n(a),r=n(44),o=n.n(r),s=n(67),l=n.n(s),i=n(15),u=n.n(i),m=n(16),h=n.n(m),d=n(17),p=n.n(d),b=n(18),f=n.n(b),v=n(13),g=n.n(v),x=n(19),y=n.n(x),E=n(0),w=n.n(E),O=n(9),C=n(47),k=n(163),j=(n(146),n(157)),N=n(158);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=e.env.SITE_RECAPTCHA_KEY,F=function(e){function t(e){var n;return u()(this,t),(n=p()(this,f()(t).call(this,e))).state={},n.boundHandleChange=n.handleChange.bind(g()(n)),n.boundHandleSubmit=n.handleSubmit.bind(g()(n)),n.boundHandleRecaptcha=n.handleRecaptcha.bind(g()(n)),n}var n;return y()(t,e),h()(t,[{key:"encode",value:function(e){return Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")}},{key:"handleChange",value:function(e){this.setState(l()({},e.target.name,e.target.value))}},{key:"handleRecaptcha",value:function(e){this.setState({"g-recaptcha-response":e})}},{key:"handleSubmit",value:(n=o()(c.a.mark((function e(t){var n,a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={background:"#F7F7F7",text:"#222222"},a={background:"rgb(254, 130, 34)",text:"#F7F7F7"},r=function(){C.notify.show("Could not submit form, please try again or refresh page.","custom",1e4,a)},o=function(){C.notify.show("Thanks for your message, we will be in touch!","custom",1e4,n)},e.prev=5,e.next=8,fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:this.encode(H({"form-name":"contact"},this.state))});case 8:e.sent.ok?(o(),this.setState({name:void 0,email:void 0,message:void 0,subject:void 0}),this.props.history.push("/")):r(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),r();case 15:case"end":return e.stop()}}),e,this,[[5,12]])}))),function(e){return n.apply(this,arguments)})},{key:"isValidForm",value:function(){var e=this;return["name","email","message","g-recaptcha-response"].every((function(t){return e.state[t]&&e.state[t].trim().length>0}))}},{key:"render",value:function(){return w.a.createElement("div",{className:"contact-form-container row center-xs middle-xs around-xs"},w.a.createElement("div",{className:"contact-form col-md-7 col-sm-10 col-xs-12 row center-xs"},w.a.createElement("h5",{className:"col-xs-12 phone-cta"},"Give us a call"),w.a.createElement("address",null,w.a.createElement("h2",{className:"col-xs-12 phone-number"},w.a.createElement("span",null,w.a.createElement(j.a,null)),w.a.createElement("span",{className:"number-text"},"+91 948742654")),w.a.createElement("a",{className:"col-xs-12 email-address",href:"mailto:drona.buildingnation@gmail.com"},w.a.createElement("span",null,w.a.createElement(N.a,{color:"#8d8d8d"})),w.a.createElement("span",{className:"email-text"},"drona.buildingnation@gmail.com"))),w.a.createElement("form",{className:"row col-xs-12 center-xs between-xs",name:"contact",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field","data-netlify-recaptcha":"true",onSubmit:this.boundHandleSubmit},w.a.createElement("input",{hidden:!0,name:"bot-field"}),w.a.createElement("input",{onChange:this.boundHandleChange,placeholder:"Your name *",name:"name",type:"text",className:"text-input col-sm-4 col-xs-12"}),w.a.createElement("input",{onChange:this.boundHandleChange,placeholder:"Your email *",name:"email",type:"text",className:"text-input col-sm-7 col-xs-12"}),w.a.createElement("input",{onChange:this.boundHandleChange,placeholder:"Subject",name:"subject",type:"text",className:"text-input col-xs-12"}),w.a.createElement("textarea",{onChange:this.boundHandleChange,cols:"40",rows:"12",name:"message",placeholder:"Your message *",type:"text",className:"multiline-input col-xs-12"}),P&&w.a.createElement(k.a,{ref:"recaptcha",sitekey:P,onChange:this.boundHandleRecaptcha}),w.a.createElement("div",{className:"btn-container row center-xs middle-xs around-xs col-xs-12"},w.a.createElement("input",{disabled:!this.isValidForm(),value:"submit",type:"submit",className:"contact-submit-btn"})))))}}]),t}(w.a.Component);t.a=Object(O.o)(F)}).call(this,n(45))},157:function(e,t,n){"use strict";var a=n(0),c=n.n(a);t.a=function(){return c.a.createElement("svg",{width:"50",height:"50",viewBox:"0 0 32 32"},c.a.createElement("path",{d:"M23 0h-14c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 1.5h8v1h-8v-1zM16 30c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM24 24h-16v-20h16v20z"}))}},158:function(e,t,n){"use strict";var a=n(0),c=n.n(a);t.a=function(e){var t=e.color;return c.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 28 28"},c.a.createElement("path",{stroke:t,d:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z"}))}},70:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(156);t.default=function(){return c.a.createElement("div",{className:"contact-standalone"},c.a.createElement(r.a,null))}}}]);