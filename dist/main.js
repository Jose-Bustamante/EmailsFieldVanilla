!function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var i=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);n.exports=r.locals||{}},function(n,e,t){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function l(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},i=[],r=0;r<n.length;r++){var o=n[r],u=e.base?o[0]+e.base:o[0],c=t[u]||0,s="".concat(u," ").concat(c);t[u]=c+1;var d=l(s),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:s,updater:h(f,e),references:1}),i.push(s)}return i}function c(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,d=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function f(n,e,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var o=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function p(n,e,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var m=null,b=0;function h(n,e){var t,i,r;if(e.singleton){var o=b++;t=m||(m=c(e)),i=f.bind(null,t,o,!1),r=f.bind(null,t,o,!0)}else t=c(e),i=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var r=l(t[i]);a[r].references--}for(var o=u(n,e),c=0;c<t.length;c++){var s=l(t[c]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=o}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,'.multiple_emails-container {\n  border: 1px #00ff00 solid;\n  border-radius: 1px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  padding: 0;\n  margin: 0;\n  cursor: text;\n  width: 100%;\n}\n\n.multiple_emails-container input {\n  width: 100%;\n  border: 0;\n  outline: none;\n  margin-bottom: 30px;\n  padding-left: 5px;\n}\n\n.multiple_emails-container input {\n  border: 0 !important;\n}\n\n.multiple_emails-container input.multiple_emails-error {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px red !important;\n  outline: thin auto red !important;\n}\n\n.multiple_emails-container ul {\n  list-style-type: none;\n  padding-left: 0;\n}\n\n.multiple_emails-email {\n  margin: 3px 5px 3px 5px;\n  padding: 3px 5px 3px 5px;\n  border: 1px #bbd8fb solid;\n  border-radius: 3px;\n  background: #f3f7fd;\n}\n\n.multiple_emails-close {\n  float: left;\n  margin: 0 3px;\n}\n\n.mainWrapper {\n  background: #ffffff;\n  border: 1px solid #c3c2cf;\n  box-sizing: border-box;\n  border-radius: 8px;\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);\n}\n\n.emailContainer {\n  border-radius: 8px 8px 0px 0px;\n  background: #f8f8f7;\n  padding: 24px 50px;\n}\n\n.emailBox {\n  background: #ffffff;\n  border: 1px solid #c3c2cf;\n  box-sizing: border-box;\n  border-radius: 4px;\n  min-width: 440px;\n  min-height: 96px;\n  padding: 8px;\n  max-height: 200px;\n  overflow: scroll;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n\n.emailBox::-webkit-scrollbar {\n  display: none;\n}\n\n.emailBubles {\n  border-radius: 100px;\n  font-family: "Open Sans";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 24px;\n  width: auto;\n  display: inline-block;\n  text-align: right;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\n.emailBublesInvalid {\n  background: white;\n}\n\n.emailBublesValid {\n  background: rgba(102, 153, 255, 0.2);\n}\n\n.emailBubles:after {\n  content: "X";\n  width: 100%;\n  height: 100%;\n  font-size: 10px;\n  text-align: center;\n  line-height: 100%;\n  overflow: hidden;\n  font-weight: 900;\n  padding-left: 8px;\n}\n\n.buttons {\n  background: #4262ff;\n  border-radius: 6px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: center;\n\n  color: #ffffff;\n}\n\n.buttons:hover {\n  background: #fff;\n  color: #00f;\n}\n\n.headerText {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 27px;\n  color: #050038;\n  padding-bottom: 24px;\n}\n\n.emailsInput,\n.emailsInput:focus {\n  border: transparent;\n  outline: none;\n  width: 90%;\n}\n',""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var r=(a=i,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),o=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[t].concat(o).concat([r]).join("\n")}var a,l,u;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);i&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},function(n,e,t){"use strict";t.r(e);t(0);function i(n,e,t){var i=document.createElement("button");i.id=n,i.setAttribute("content",e),i.onclick=function(){return t(),!1},i.setAttribute("class","buttons"),i.innerHTML=e,document.getElementById("mainWrapperEmails").appendChild(i)}var r={default:{emailList:[]},initComponent:()=>console.log("TODO")};function o(){console.log("On click")}function a(n){var e,t=document.getElementById("emailTextField"),i=t.value;window.event?e=n.keyCode:n.which&&(e=n.which),9!=e&&32!=e&&188!=e&&13!=e||(!function(n){var e=new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(n),t=document.createElement("div");e?t.setAttribute("class","emailBubles emailBublesValid"):t.setAttribute("class","emailBubles emailBublesInvalid"),t.innerHTML=n,t.onclick=function(){return r.default.emailList=r.default.emailList.filter(e=>e!==n),console.log(r.default.emailList),t.remove(),!1},document.getElementById("emailsField").prepend(t),r.default.emailList.push(n)}(i),t.value=""),n.preventDefault()}document.addEventListener("DOMContentLoaded",(function(){var n,e;document.body.innerHTML+='<div class="mainWrapper" id="mainWrapperEmails" onclick="click()"><div class="emailContainer" id="emailContainer"><span class="headerText">Share <b>Board name</b> with others</span></div></div>',n=document.createElement("div"),e=document.createElement("input"),n.setAttribute("class","emailBox"),n.setAttribute("id","emailsField"),n.onclick=function(){return e.focus(),!1},e.setAttribute("class","emailsInput"),e.setAttribute("type","email"),e.setAttribute("id","emailTextField"),e.onkeyup=function(n){return a(n),!1},e.setAttribute("multiple","true"),n.appendChild(e),document.getElementById("emailContainer").appendChild(n),i("button1","Add Email",o),i("button2","Get Emails Count",o)}))}]);