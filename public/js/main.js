!function(){var e={243:function(){const e=document.querySelectorAll(".password-item__list-item");e.forEach((t=>{t.addEventListener("click",(function(){e.forEach((e=>{e.classList.remove("password-item__list-item--active")})),this.classList.add("password-item__list-item--active")}))}))},222:function(){const e=document.querySelectorAll(".password-generator__copy");document.querySelector(".password-generator__copy-popup"),e.forEach((function(e){e.addEventListener("click",(function(){const e=this.closest(".password-generator__copy").closest(".password-generator__password-item"),t=e.querySelector(".password-generator__password");if(async function(){try{await navigator.clipboard.writeText(t.value)}catch(e){console.error("Ошибка копирования в буфер: ",e)}}(),t.value){const t=e.querySelector(".password-generator__copy-popup");t.classList.add("password-generator__copy-popup--active"),setTimeout((()=>{t.classList.remove("password-generator__copy-popup--active")}),2e3)}}))}))},5:function(){const e=document.querySelector(".password-generator__btn"),t=document.querySelectorAll(".password-item__list-item"),s=document.querySelectorAll(".password-generator__pass-item"),o=document.querySelector(".password-generator__reset-btn"),r=document.querySelector(".password-generator__popup"),a=document.querySelectorAll(".password-generator__password"),c=document.querySelector(".password-generator__passwords"),n=document.querySelector(".password-item__default-checkbox--specials");let i=["a","b","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];const l=i.length;let d=["!","@","#","$","%","^","&","*"];const p=[],u=[],_=[];let h=[];const m=function(e,t){n.checked?i.length<=36&&(i=i.concat(d)):function(){const e=d.length;i.splice(l,e)}();for(let s=0;s<t;s++){let t=Math.floor(Math.random()*i.length);e[s]=i[t]}for(let s=0;s<t;s++){let t=Math.floor(Math.random()*e.length);"string"==typeof e[t]&&(e[t]=e[t].toUpperCase())}h.push(e.join(""))},f=function(e,t,o){for(let r=0;r<o&&!(h.length>s.length-1);r++)m(e,t)};t.forEach((e=>{e.addEventListener("click",(function(){"eight"===this.dataset.char?(h=[],t.forEach((e=>{e.classList.remove("password-item--active")})),this.classList.add("password-item--active"),f(p,8,s.length)):"twelve"===this.dataset.char?(h=[],t.forEach((e=>{e.classList.remove("password-item--active")})),this.classList.add("password-item--active"),f(u,12,s.length)):"fifteen"===this.dataset.char&&(h=[],t.forEach((e=>{e.classList.remove("password-item--active")})),this.classList.add("password-item--active"),f(_,15,s.length))}))})),e.addEventListener("click",(function(){for(let e=0;e<s.length;e++)h.length>0?(a.forEach((e=>{e.classList.add("password-generator__password--active")})),t.forEach((e=>{if(e.classList.contains("password-item--active")){let t=e.dataset.char;"eight"===t?(h=[],f(p,8,s.length)):"twelve"===t?(h=[],f(u,12,s.length)):"fifteen"===t&&(h=[],f(_,15,s.length))}})),s[e].value=h[e],c.classList.add("password-generator__passwords--active")):(a.forEach((e=>{e.classList.remove("password-generator__password--active")})),r.classList.add("password-generator__popup--active"),setTimeout((()=>{r.classList.remove("password-generator__popup--active")}),2e3))})),o.addEventListener("click",(function(){h=[],s.forEach((e=>{e.value=""})),t.forEach((e=>{e.classList.remove("password-item--active")})),a.forEach((e=>{e.classList.remove("password-generator__password--active")})),c.classList.remove("password-generator__passwords--active")}))},765:function(){const e=document.querySelectorAll(".password-item__list-item"),t=document.querySelector(".password-generator__reset-btn"),s=document.querySelector("#special"),o=document.querySelector(".custom-checkbox--specials");document.querySelector(".password-item__label-special"),o.addEventListener("click",(function(){s.checked?s.checked=!1:s.checked=!0})),t.addEventListener("click",(function(){e.forEach((e=>{e.classList.remove("password-item__list-item--active")})),s.checked=!1}))}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,s),a.exports}s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";s(222),s(5),s(765),s(243)}()}();