(function(){"use strict";var e={911:function(e,t,s){var o=s(963),a=s(252),n=s(577);const r={class:"app"};function c(e,t,s,o,c,d){const i=(0,a.up)("password-generator"),l=(0,a.up)("password-history");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",r,[(0,a.Wm)(i),(0,a.Wm)(l)]),(0,a._)("span",null,(0,n.zw)(e.$store.getters.setPassword),1)],64)}const d={class:"generator"},i={class:"generator__container"},l={class:"generator__content"},A=(0,a._)("h1",{class:"generator__title"},[(0,a.Uk)("Password"),(0,a._)("br"),(0,a.Uk)("Generator")],-1);function u(e,t,s,o,n,r){const c=(0,a.up)("password-input"),u=(0,a.up)("password-button"),p=(0,a.up)("password-slider"),h=(0,a.up)("password-checkbox");return(0,a.wg)(),(0,a.iD)("section",d,[(0,a._)("div",i,[(0,a._)("div",l,[A,(0,a.Wm)(c),(0,a.Wm)(u),(0,a.Wm)(p),(0,a.Wm)(h)])])])}var p={mounted(){this.$store.commit("password/generatePassword")}},h=s(744);const w=(0,h.Z)(p,[["render",u]]);var m=w;const g=e=>((0,a.dD)("data-v-874f90ce"),e=e(),(0,a.Cn)(),e),_={class:"history"},v={class:"history__container"},b={class:"history__content"},f=g((()=>(0,a._)("h2",{class:"history__title"},"Password history",-1))),y={class:"history__blocks"},C={class:"block__data"},k={class:"password"},x=g((()=>(0,a._)("br",null,null,-1))),B={class:"date"},S={class:"block__icon"};function V(e,t,s,o,r,c){return(0,a.wg)(),(0,a.iD)("section",_,[(0,a._)("div",v,[(0,a._)("div",b,[f,(0,a._)("div",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.$store.state.password.history,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"block",key:e.id},[(0,a._)("div",C,[(0,a._)("span",k,(0,n.zw)(e.password),1),x,(0,a._)("span",B,(0,n.zw)(e.date),1)]),(0,a._)("div",S,[(0,a._)("a",{onClick:t[0]||(t[0]=(...e)=>c.copyPassword&&c.copyPassword(...e)),class:"icon-copy"})])])))),128))]),(0,a._)("span",{onClick:t[1]||(t[1]=(...e)=>c.clearHistory&&c.clearHistory(...e)),class:"clear"},"Clear history")])])])}var R={methods:{clearHistory(){this.$store.state.password.history=[],localStorage.clear()},copyPassword(e){const t=e.target.parentNode.parentNode.querySelector(".password").textContent,s=e.target;s.classList.add("copied"),setTimeout((()=>{s.classList.remove("copied")}),500);let o=document.createElement("textarea");o.id="temp",o.style.height=0,document.body.appendChild(o),o.value=t;let a=document.querySelector("#temp");a.select(),document.execCommand("copy"),document.body.removeChild(o)}},mounted(){let e=Object.keys(localStorage);for(let t of e)this.$store.state.password.history.push({password:t,date:localStorage.getItem(t)})}};const D=(0,h.Z)(R,[["render",V],["__scopeId","data-v-874f90ce"]]);var U=D,Q={components:{passwordGenerator:m,passwordHistory:U}};const P=(0,h.Z)(Q,[["render",c]]);var E=P,Y=s(907);const I={state:()=>({history:[],inputValue:0,sliderValue:0,checked:{upperCase:!1,lowerCase:!0,number:!0,symbol:!1}}),mutations:{generatePassword(e){function*t(e,t){for(let s=e;s<t;s++)yield s}function*s(){e.checked.number&&(yield*t(48,58)),e.checked.upperCase&&(yield*t(65,90)),e.checked.lowerCase&&(yield*t(97,123)),e.checked.symbol&&(yield*t(35,38),yield*t(61,62),yield*t(64,65))}let o="";for(let a of s())o+=String.fromCodePoint(a);e.inputValue="";for(let a=0;a<e.sliderValue;a++){let t=Math.floor(Math.random()*o.length);void 0!==o[t]&&(e.inputValue+=o[t])}},updateIcon(e){let t=document.querySelector(".complexity");0===e.inputValue.length?t.src=s(924):e.inputValue.length<5?t.src=s(808):e.inputValue.length>=5&&e.inputValue.length<8&&0==e.checked.symbol?(console.log("тут"),t.src=s(323)):e.inputValue.length>=5&&e.inputValue.length<8&&1==e.checked.symbol?(console.log("тут"),t.src=s(9)):e.inputValue.length>=8&&e.inputValue.length<=10&&0==e.checked.symbol?t.src=s(9):e.inputValue.length>10&&(t.src=s(101))}},namespaced:!0};var O=(0,Y.MT)({modules:{password:I}});const $=e=>((0,a.dD)("data-v-5ebd6a7e"),e=e(),(0,a.Cn)(),e),q={class:"button__content"},N=$((()=>(0,a._)("span",{class:"button__text"},"Copy Password_",-1))),X={class:"button__icon"},j=$((()=>(0,a._)("hr",{class:"button__line"},null,-1))),F=$((()=>(0,a._)("div",{class:"button__triangle"},null,-1)));function T(e,t,s,o,n,r){return(0,a.wg)(),(0,a.iD)("button",{onClick:t[1]||(t[1]=(...e)=>r.copyAndPushPassword&&r.copyAndPushPassword(...e))},[(0,a._)("div",q,[N,(0,a._)("div",X,[(0,a._)("a",{onClick:t[0]||(t[0]=(...t)=>e.ddd&&e.ddd(...t)),class:"icon-arrow"})])]),j,F])}var W={name:"password-button",methods:{copyAndPushPassword(){if(!this.$store.state.password.inputValue)return;let e=new Date;const t=String(e).match(/(\w+ )\d+ \d+ \w+\:\d{2}/gi).join(" ");for(let r of Object.values(this.$store.state.password.history))if(r.password==this.$store.state.password.inputValue)return;localStorage.length<7&&(this.$store.state.password.history.push({password:this.$store.state.password.inputValue,date:t,id:t}),localStorage.setItem(this.$store.state.password.inputValue,t));const s=document.querySelector("button"),o=document.querySelector(".button__line");s.classList.add("copied"),o.classList.add("copied"),setTimeout((()=>{s.classList.remove("copied"),o.classList.remove("copied")}),500);let a=document.createElement("textarea");a.id="temp",a.style.height=0,document.body.appendChild(a),a.value=this.$store.state.password.inputValue;let n=document.querySelector("#temp");n.select(),document.execCommand("copy"),document.body.removeChild(a)}}};const Z=(0,h.Z)(W,[["render",T],["__scopeId","data-v-5ebd6a7e"]]);var G=Z;const L=e=>((0,a.dD)("data-v-03ffe07d"),e=e(),(0,a.Cn)(),e),z={class:"checkboxes"},H={class:"checkboxes__container"},M={class:"checkboxes__content"},K={class:"checkboxes__upper"},J={class:"checkbox"},ee=L((()=>(0,a._)("label",{for:"upperCase"},"Uppercase letters",-1))),te={class:"checkbox"},se=L((()=>(0,a._)("label",{for:"lowerCase"},"Lowercase letters",-1))),oe={class:"checkboxes__lower"},ae={class:"checkbox"},ne=L((()=>(0,a._)("label",{for:"number"},"Numbers",-1))),re={class:"checkbox last"},ce=L((()=>(0,a._)("label",{for:"symbol"},"Symbols",-1)));function de(e,t,s,o,n,r){return(0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("div",H,[(0,a._)("div",M,[(0,a._)("div",K,[(0,a._)("div",J,[(0,a._)("input",{onChange:t[0]||(t[0]=(...e)=>r.updateCheckbox&&r.updateCheckbox(...e)),id:"upperCase",type:"checkbox"},null,32),ee]),(0,a._)("div",te,[(0,a._)("input",{onChange:t[1]||(t[1]=(...e)=>r.updateCheckbox&&r.updateCheckbox(...e)),checked:"",id:"lowerCase",type:"checkbox"},null,32),se])]),(0,a._)("div",oe,[(0,a._)("div",ae,[(0,a._)("input",{onChange:t[2]||(t[2]=(...e)=>r.updateCheckbox&&r.updateCheckbox(...e)),checked:"",id:"number",type:"checkbox"},null,32),ne]),(0,a._)("div",re,[(0,a._)("input",{onChange:t[3]||(t[3]=(...e)=>r.updateCheckbox&&r.updateCheckbox(...e)),id:"symbol",type:"checkbox"},null,32),ce])])])])])}var ie={name:"password-checkbox",methods:{updateCheckbox(e){let t=e.target;t.checked?this.$store.state.password.checked[t.id]=!0:this.$store.state.password.checked[t.id]=!1}}};const le=(0,h.Z)(ie,[["render",de],["__scopeId","data-v-03ffe07d"]]);var Ae=le,ue=s(9);const pe=e=>((0,a.dD)("data-v-4ffb23b4"),e=e(),(0,a.Cn)(),e),he={class:"input"},we=["value"],me={class:"input__icons"},ge=pe((()=>(0,a._)("img",{src:ue,class:"complexity"},null,-1)));function _e(e,t,s,o,n,r){return(0,a.wg)(),(0,a.iD)("div",he,[(0,a._)("input",{readonly:"",maxlength:"30",value:this.$store.state.password.inputValue,type:"text"},null,8,we),(0,a._)("div",me,[ge,(0,a._)("a",{onClick:t[0]||(t[0]=t=>e.$store.commit("password/generatePassword")),class:"icon-update second-icon"})])])}var ve={name:"password-input",methods:{}};const be=(0,h.Z)(ve,[["render",_e],["__scopeId","data-v-4ffb23b4"]]);var fe=be;const ye=e=>((0,a.dD)("data-v-b1509fba"),e=e(),(0,a.Cn)(),e),Ce=ye((()=>(0,a._)("span",{class:"slider-value"},null,-1)));function ke(e,t,s,o,n,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[Ce,(0,a._)("input",{onInput:t[0]||(t[0]=(...e)=>r.updatePassword&&r.updatePassword(...e)),class:"slider",type:"range",min:"0",max:"30",value:"10",step:"1"},null,32)],64)}var xe={name:"password-slider",mounted(){const e=document.querySelector(".slider"),t=document.querySelector(".slider-value");this.$store.state.password.inputValue=this.$store.state.password.sliderValue=t.textContent=e.value},methods:{updatePassword(e){const t=document.querySelector(".slider"),s=document.querySelector(".slider-value");this.$store.state.password.sliderValue=s.textContent=t.value,this.$store.commit("password/generatePassword"),this.$store.commit("password/updateIcon")}}};const Be=(0,h.Z)(xe,[["render",ke],["__scopeId","data-v-b1509fba"]]);var Se=Be,Ve=[G,Ae,fe,Se];const Re=(0,o.ri)(E);Ve.forEach((e=>Re.component(e.name,e))),Re.use(O).mount("#app")},924:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA6SURBVHgB7dGxEQAgCATBxwrsv0o7wBkDUwMhYLiNiPjgJDzYvZa7Ik07v4eSpQ/UR+QGiNwAkfFvAzFhDBVSRUPxAAAAAElFTkSuQmCC"},808:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABCSURBVHgB7dGxEQAgCEPR4AQO5PgO5AZ4Z0FrAwWXvIqKFB+QD4vruCPTtPd7oFj5QH+KTECRCURkx0qNbNiKzOIC+hIMFbRqXh8AAAAASUVORK5CYII="},323:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABDSURBVHgB7dGxDQAgDANBhwkYiPEZiA2MRJGWgkQC4atSxcUDsmF+DRKRqq3fBcnSB96nyB/wyEQLjWzoinwJRZZzE8LSDBXoP5kCAAAAAElFTkSuQmCC"},9:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABDSURBVHgB7dGxDQAgDANBhwkYiPEZiA2MRJGWgkQC4atSxcUDsmF+DRKRqq3fBcnSB97nkYkWGtnQFfkSivwBRZZzE4uSDBVR6Qa2AAAAAElFTkSuQmCC"},101:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA5SURBVHgB7dExDgAgCATBxXf5fP+FiYm1hVAQbioqrliQB7uHM51Axjq/B8nSB+pT5AYUuQFFln8bVFIMFRkv+VsAAAAASUVORK5CYII="}},t={};function s(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,o,a,n){if(!o){var r=1/0;for(l=0;l<e.length;l++){o=e[l][0],a=e[l][1],n=e[l][2];for(var c=!0,d=0;d<o.length;d++)(!1&n||r>=n)&&Object.keys(s.O).every((function(e){return s.O[e](o[d])}))?o.splice(d--,1):(c=!1,n<r&&(r=n));if(c){e.splice(l--,1);var i=a();void 0!==i&&(t=i)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[o,a,n]}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,n,r=o[0],c=o[1],d=o[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(a in c)s.o(c,a)&&(s.m[a]=c[a]);if(d)var l=d(s)}for(t&&t(o);i<r.length;i++)n=r[i],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(l)},o=self["webpackChunkpassword_generator"]=self["webpackChunkpassword_generator"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(911)}));o=s.O(o)})();
//# sourceMappingURL=app.c769f906.js.map