(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(e,t,a){"use strict";(function(e){var n=a(43),c=a.n(n),r=a(44),o=a.n(r),l=a(67),s=a.n(l),i=a(15),u=a.n(i),m=a(16),h=a.n(m),d=a(17),p=a.n(d),v=a(18),f=a.n(v),g=a(13),b=a.n(g),E=a(19),y=a.n(E),x=a(0),w=a.n(x),N=a(9),k=a(47),C=a(163),O=(a(146),a(157)),j=a(158);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H=e.env.SITE_RECAPTCHA_KEY,z=function(e){function t(e){var a;return u()(this,t),(a=p()(this,f()(t).call(this,e))).state={},a.boundHandleChange=a.handleChange.bind(b()(a)),a.boundHandleSubmit=a.handleSubmit.bind(b()(a)),a.boundHandleRecaptcha=a.handleRecaptcha.bind(b()(a)),a}var a;return y()(t,e),h()(t,[{key:"encode",value:function(e){return Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")}},{key:"handleChange",value:function(e){this.setState(s()({},e.target.name,e.target.value))}},{key:"handleRecaptcha",value:function(e){this.setState({"g-recaptcha-response":e})}},{key:"handleSubmit",value:(a=o()(c.a.mark((function e(t){var a,n,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={background:"#F7F7F7",text:"#222222"},n={background:"rgb(254, 130, 34)",text:"#F7F7F7"},r=function(){k.notify.show("Could not submit form, please try again or refresh page.","custom",1e4,n)},o=function(){k.notify.show("Thanks for your message, we will be in touch!","custom",1e4,a)},e.prev=5,e.next=8,fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:this.encode(R({"form-name":"contact"},this.state))});case 8:e.sent.ok?(o(),this.setState({name:void 0,email:void 0,message:void 0,subject:void 0}),this.props.history.push("/")):r(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),r();case 15:case"end":return e.stop()}}),e,this,[[5,12]])}))),function(e){return a.apply(this,arguments)})},{key:"isValidForm",value:function(){var e=this;return["name","email","message","g-recaptcha-response"].every((function(t){return e.state[t]&&e.state[t].trim().length>0}))}},{key:"render",value:function(){return w.a.createElement("div",{className:"contact-form-container row center-xs middle-xs around-xs"},w.a.createElement("div",{className:"contact-form col-md-7 col-sm-10 col-xs-12 row center-xs"},w.a.createElement("h5",{className:"col-xs-12 phone-cta"},"Give us a call"),w.a.createElement("address",null,w.a.createElement("h2",{className:"col-xs-12 phone-number"},w.a.createElement("span",null,w.a.createElement(O.a,null)),w.a.createElement("span",{className:"number-text"},"+91 948742654")),w.a.createElement("a",{className:"col-xs-12 email-address",href:"mailto:drona.buildingnation@gmail.com"},w.a.createElement("span",null,w.a.createElement(j.a,{color:"#8d8d8d"})),w.a.createElement("span",{className:"email-text"},"drona.buildingnation@gmail.com"))),w.a.createElement("form",{className:"row col-xs-12 center-xs between-xs",name:"contact",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field","data-netlify-recaptcha":"true",onSubmit:this.boundHandleSubmit},w.a.createElement("input",{hidden:!0,name:"bot-field"}),w.a.createElement("input",{onChange:this.boundHandleChange,placeholder:"Your name *",name:"name",type:"text",className:"text-input col-sm-4 col-xs-12"}),w.a.createElement("input",{onChange:this.boundHandleChange,placeholder:"Your email *",name:"email",type:"text",className:"text-input col-sm-7 col-xs-12"}),w.a.createElement("input",{onChange:this.boundHandleChange,placeholder:"Subject",name:"subject",type:"text",className:"text-input col-xs-12"}),w.a.createElement("textarea",{onChange:this.boundHandleChange,cols:"40",rows:"12",name:"message",placeholder:"Your message *",type:"text",className:"multiline-input col-xs-12"}),H&&w.a.createElement(C.a,{ref:"recaptcha",sitekey:H,onChange:this.boundHandleRecaptcha}),w.a.createElement("div",{className:"btn-container row center-xs middle-xs around-xs col-xs-12"},w.a.createElement("input",{disabled:!this.isValidForm(),value:"submit",type:"submit",className:"contact-submit-btn"})))))}}]),t}(w.a.Component);t.a=Object(N.o)(z)}).call(this,a(45))},157:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(){return c.a.createElement("svg",{width:"50",height:"50",viewBox:"0 0 32 32"},c.a.createElement("path",{d:"M23 0h-14c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 1.5h8v1h-8v-1zM16 30c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM24 24h-16v-20h16v20z"}))}},158:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){var t=e.color;return c.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 28 28"},c.a.createElement("path",{stroke:t,d:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z"}))}},72:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),o=(a(147),function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-hero",style:{backgroundImage:"url(../../images/logo.png)"}}))}),l=(a(148),function(){return c.a.createElement("div",{className:"tagline-container"},c.a.createElement("h3",{className:"tagline-text"},"Building Nation"))}),s=a(15),i=a.n(s),u=a(16),m=a.n(u),h=a(17),d=a.n(h),p=a(18),v=a.n(p),f=a(13),g=a.n(f),b=a(19),E=a.n(b),y=a(49),x=a.n(y),w=a(6),N=(a(149),function(e){function t(e){var a;return i()(this,t),(a=d()(this,v()(t).call(this,e))).boundSetRef=a.setRef.bind(g()(a)),a.boundSetHeight=x()(a.setHeight.bind(g()(a)),30,{leading:!0}),a.state={height:230},a}return E()(t,e),m()(t,[{key:"componentDidMount",value:function(){this.resizeListener=window.addEventListener("resize",this.boundSetHeight)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeListener)}},{key:"setRef",value:function(e){this.elRef=e,this.setHeight()}},{key:"setHeight",value:function(){if(this.elRef){var e=this.elRef.getBoundingClientRect().width;this.setState({height:.575*e})}}},{key:"render",value:function(){var e=this.props.item;return c.a.createElement("div",{ref:this.boundSetRef,className:"service-item-container col-md-4 col-sm-9 col-xs-12"},c.a.createElement(w.Link,{to:"/services/".concat(e.slug),className:"service-item",style:{height:this.state.height,background:"url('./images/".concat(e.thumbnail,"')")}},c.a.createElement("div",{className:"overlay"}),c.a.createElement("div",{className:"service-title"},c.a.createElement("h3",null,e.title))))}}]),t}(c.a.Component)),k=(a(150),function(e){var t=e.portfolio;return c.a.createElement("div",{className:"services-container"},c.a.createElement("div",{className:"services row full-width center-xs"},t.map((function(e,t){return c.a.createElement(N,{item:e,index:t,key:e.slug})}))))}),C=a(171),O=(a(151),function(e){var t=e.items,a=e.color,n=e.headerText,r=e.alignItems,o=void 0===r?"center":r,l=e.height,s=void 0===l?285:l,i=e.id;return c.a.createElement("div",{id:i,className:"carousel row full-width center-xs",style:{backgroundColor:a}},n?c.a.createElement("h2",{className:"carousel-header"},n):null,c.a.createElement(C.a,{autoplay:!0,autoplayInterval:5e3,wrapAround:!0,speed:1e3},t.map((function(e){var t=e.__content.replace("\n","").trim();return c.a.createElement("div",{key:e.__content,className:"carousel-item",style:{height:s,alignItems:o}},n?c.a.createElement("h5",{className:"carousel-quote"},"“",t,"“"):c.a.createElement("h2",{className:"carousel-quote"},"“",t,"”"),n&&e.author?c.a.createElement("p",{className:"quote-author"},e.author):null,c.a.createElement("h6",{className:"carousel-client"},e.client))}))))}),j=(a(152),function(e){var t=e.headerText,a=e.buttonMsg,n=e.color;return c.a.createElement("div",{className:"call-to-action",style:{backgroundColor:n}},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"cta-btn-container"},c.a.createElement(w.Link,{to:"/contact",className:"cta-btn"},a)))}),S=a(156);t.default=Object(r.withRouteData)((function(e){var t=e.portfolio,a=e.quotes,n=e.testimonials;return c.a.createElement("div",null,c.a.createElement(o,null),c.a.createElement(l,null),c.a.createElement(k,{portfolio:t}),c.a.createElement(O,{items:a,color:"#159C92"}),c.a.createElement(j,{headerText:"Get In Touch",buttonMsg:"Contact Drona",color:"rgb(254, 130, 34)"}),c.a.createElement(O,{id:"testimonials",headerText:"Gratitude",items:n,color:"#A6A6A6",height:180,alignItems:"top"}),c.a.createElement(S.a,null))}))}}]);