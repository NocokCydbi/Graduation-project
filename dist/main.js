!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e,t="+7 (___) ___-__-__"){const n=e;function r(e){const n=e.keyCode,r=t,o=r.replace(/\D/g,""),l=this.value.replace(/\D/g,"");let c=0,u=r.replace(/[_\d]/g,(function(e){return c<l.length?l.charAt(c++)||o.charAt(c):e}));c=u.indexOf("_"),-1!==c&&(u=u.slice(0,c));let a=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=u),"blur"===e.type&&this.value.length<5&&(this.value="")}n.addEventListener("input",r),n.addEventListener("focus",r),n.addEventListener("blur",r)};var o=()=>{const e=document.querySelector(".main-form"),t=document.querySelector(".capture-form"),n=document.querySelector(".popup-call .capture-form"),o=document.getElementsByName("user_phone"),l=document.getElementsByName("user_name"),c=document.createElement("div");c.style.cssText="font-size: 2rem; color: black";o.forEach(e=>{r(e)}),l.forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-яё\s]/gi,"")})});const u=[];u.push(e,t,n),u.forEach(e=>{e.addEventListener("submit",t=>{t.preventDefault();t.target;e.appendChild(c),c.textContent="Загрузка...";const n=new FormData(e),r={};var o;n.forEach((e,t)=>{r[t]=e}),a(r).then(e=>{if(200!==e.status)throw new Error("status network is not 200");c.textContent="Спасибо! Мы скоро с вами свяжемся."}).catch(()=>{c.textContent="Что-то пошло не так"}),(e=>{e.querySelectorAll("input").forEach(e=>{e.value=""})})(e),o=c,setTimeout(()=>{o.textContent=""},5e3)})});const a=e=>fetch("server.php",{method:"POST",headers:{"Content-Type":"text"},body:JSON.stringify(e)});alert(1)};((e,t)=>{const n=document.querySelectorAll(e),r=document.querySelector(t);n.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),r.style.display="block",document.body.classList.add("modal-open")})}),r.addEventListener("click",e=>{let t=e.target;t.classList.contains("popup-close")?(r.style.display="none",document.body.classList.remove("modal-open")):(t=t.closest(".popup-content"),t||(r.style.display="none",document.body.classList.remove("modal-open")))})})("header .call-btn",".popup"),o()}]);