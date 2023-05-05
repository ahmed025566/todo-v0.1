(()=>{"use strict";var r={756:(r,n,e)=>{e.d(n,{Z:()=>i});var t=e(537),o=e.n(t),a=e(645),s=e.n(a)()(o());s.push([r.id,":root {\r\n  --clr-primary-color: #530b83;\r\n  --clr-secondary-color: #f4f4f4;\r\n  --clr-box-shadow: 0 15px 25px rgba(0, 0, 0, 0.151), 0 6px 6px rgba(32, 32, 32, 0.24);\r\n  --clr-task-completed: rgba(143, 143, 143, 0.76);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: var(--clr-secondary-color);\r\n}\r\n\r\nh1 {\r\n  text-align: start;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.pos-center {\r\n  position: relative;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, 50%);\r\n}\r\n\r\n.dflex {\r\n  display: flex;\r\n}\r\n\r\n.f-col {\r\n  flex-direction: column;\r\n}\r\n\r\n.self-center {\r\n  align-self: center;\r\n}\r\n\r\n.nobor {\r\n  border-color: transparent;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.crossed-out {\r\n  text-decoration: line-through;\r\n  color: var(--clr-task-completed);\r\n}\r\n\r\n.wrapper {\r\n  box-sizing: border-box;\r\n  width: 70%;\r\n  max-width: 1200px;\r\n  margin: 5% 15% auto;\r\n  padding: 0 1%;\r\n  border-radius: 10px;\r\n  border: 1px solid slategray;\r\n  box-shadow: var(--clr-box-shadow);\r\n}\r\n\r\nhr {\r\n  background-color: whitesmoke;\r\n  background-blend-mode: lighten;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.header {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.fa {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.tasks-container {\r\n  list-style-type: none;\r\n  justify-content: flex-start;\r\n  padding-left: 0;\r\n}\r\n\r\n.tasklist-body h2 {\r\n  text-align: center;\r\n}\r\n\r\n.inputField {\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.task-entry {\r\n  font-style: italic;\r\n  font-size: 1rem;\r\n  width: 90%;\r\n  height: 100%;\r\n  padding: 1.2rem;\r\n  background-color: transparent;\r\n}\r\n\r\n.task {\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n  border-bottom: 1px solid rgba(143, 143, 143, 0.76);\r\n  font-size: 1.3rem;\r\n  padding: 0.8rem;\r\n}\r\n\r\n.refresh,\r\n.icon-swapper,\r\n.btn.submit {\r\n  margin-left: auto;\r\n  margin-right: 0.75rem;\r\n}\r\n\r\n.refresh {\r\n  cursor: pointer;\r\n}\r\n\r\n.icon-swapper {\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.task-more {\r\n  display: initial;\r\n}\r\n\r\n.icon-swapper:hover .task-more {\r\n  display: none;\r\n}\r\n\r\n.task-delete {\r\n  display: none;\r\n}\r\n\r\n.icon-swapper:hover .task-delete {\r\n  display: initial;\r\n}\r\n\r\n.btn {\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.clear-all-completed {\r\n  padding: 0.63rem 1.25rem;\r\n  border: none;\r\n  border-radius: 0.3rem;\r\n  font-size: 1.13rem;\r\n  cursor: pointer;\r\n  margin-top: 1.9rem;\r\n  width: 100%;\r\n}\r\n\r\n.task-desc {\r\n  width: 100%;\r\n}\r\n\r\n.newdesc-entry {\r\n  border-color: transparent;\r\n  width: 100%;\r\n}\r\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,8BAA8B;EAC9B,oFAAoF;EACpF,+CAA+C;AACjD;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,4CAA4C;AAC9C;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;AACjC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA;EACE,4BAA4B;EAC5B,8BAA8B;EAC9B,WAAW;EACX,SAAS;AACX;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,UAAU;EACV,YAAY;EACZ,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;EACX,kDAAkD;EAClD,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;;EAGE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb",sourcesContent:[":root {\r\n  --clr-primary-color: #530b83;\r\n  --clr-secondary-color: #f4f4f4;\r\n  --clr-box-shadow: 0 15px 25px rgba(0, 0, 0, 0.151), 0 6px 6px rgba(32, 32, 32, 0.24);\r\n  --clr-task-completed: rgba(143, 143, 143, 0.76);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: var(--clr-secondary-color);\r\n}\r\n\r\nh1 {\r\n  text-align: start;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.pos-center {\r\n  position: relative;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, 50%);\r\n}\r\n\r\n.dflex {\r\n  display: flex;\r\n}\r\n\r\n.f-col {\r\n  flex-direction: column;\r\n}\r\n\r\n.self-center {\r\n  align-self: center;\r\n}\r\n\r\n.nobor {\r\n  border-color: transparent;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.crossed-out {\r\n  text-decoration: line-through;\r\n  color: var(--clr-task-completed);\r\n}\r\n\r\n.wrapper {\r\n  box-sizing: border-box;\r\n  width: 70%;\r\n  max-width: 1200px;\r\n  margin: 5% 15% auto;\r\n  padding: 0 1%;\r\n  border-radius: 10px;\r\n  border: 1px solid slategray;\r\n  box-shadow: var(--clr-box-shadow);\r\n}\r\n\r\nhr {\r\n  background-color: whitesmoke;\r\n  background-blend-mode: lighten;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.header {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.fa {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.tasks-container {\r\n  list-style-type: none;\r\n  justify-content: flex-start;\r\n  padding-left: 0;\r\n}\r\n\r\n.tasklist-body h2 {\r\n  text-align: center;\r\n}\r\n\r\n.inputField {\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.task-entry {\r\n  font-style: italic;\r\n  font-size: 1rem;\r\n  width: 90%;\r\n  height: 100%;\r\n  padding: 1.2rem;\r\n  background-color: transparent;\r\n}\r\n\r\n.task {\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n  border-bottom: 1px solid rgba(143, 143, 143, 0.76);\r\n  font-size: 1.3rem;\r\n  padding: 0.8rem;\r\n}\r\n\r\n.refresh,\r\n.icon-swapper,\r\n.btn.submit {\r\n  margin-left: auto;\r\n  margin-right: 0.75rem;\r\n}\r\n\r\n.refresh {\r\n  cursor: pointer;\r\n}\r\n\r\n.icon-swapper {\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.task-more {\r\n  display: initial;\r\n}\r\n\r\n.icon-swapper:hover .task-more {\r\n  display: none;\r\n}\r\n\r\n.task-delete {\r\n  display: none;\r\n}\r\n\r\n.icon-swapper:hover .task-delete {\r\n  display: initial;\r\n}\r\n\r\n.btn {\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.clear-all-completed {\r\n  padding: 0.63rem 1.25rem;\r\n  border: none;\r\n  border-radius: 0.3rem;\r\n  font-size: 1.13rem;\r\n  cursor: pointer;\r\n  margin-top: 1.9rem;\r\n  width: 100%;\r\n}\r\n\r\n.task-desc {\r\n  width: 100%;\r\n}\r\n\r\n.newdesc-entry {\r\n  border-color: transparent;\r\n  width: 100%;\r\n}\r\n"],sourceRoot:""}]);const i=s},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var s={};if(t)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var A=0;A<r.length;A++){var l=[].concat(r[A]);t&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},s=[],i=0;i<r.length;i++){var c=r[i],A=t.base?c[0]+t.base:c[0],l=a[A]||0,d="".concat(A," ").concat(l);a[A]=l+1;var u=e(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=o(p,t);t.byIndex=i,n.splice(i,0,{identifier:d,updater:f,references:1})}s.push(d)}return s}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var s=0;s<a.length;s++){var i=e(a[s]);n[i].references--}for(var c=t(r,o),A=0;A<a.length;A++){var l=e(a[A]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),a=e(569),s=e.n(a),i=e(565),c=e.n(i),A=e(216),l=e.n(A),d=e(589),u=e.n(d),p=e(756),f={};function m(r){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},m(r)}function E(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,(void 0,o=function(r,n){if("object"!==m(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var t=e.call(r,"string");if("object"!==m(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(t.key),"symbol"===m(o)?o:String(o)),t)}var o}f.styleTagTransform=u(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var B=new(function(){function r(){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),this.tasksList=JSON.parse(localStorage.getItem("tasksList"))||[],this.currentId=this.tasksList.length+1}var n,e;return n=r,e=[{key:"sortTasks",value:function(){this.tasksList.sort((function(r,n){return r.id-n.id}))}},{key:"saveTasks",value:function(){localStorage.setItem("tasksList",JSON.stringify(this.tasksList))}},{key:"addTask",value:function(r){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e={id:this.currentId,description:r,completed:n};this.tasksList.push(e),this.currentId+=1,this.saveTasks()}},{key:"removeTask",value:function(r){if(this.tasksList.length>1){var n=r;this.tasksList.splice(r-1,1),this.tasksList.forEach((function(r){r.id>n&&(r.id-=1)}))}else this.tasksList=[];this.currentId-=1,this.saveTasks()}},{key:"editTask",value:function(r,n){var e=this.tasksList.splice(r-1,1)[0];this.tasksList.push({id:e.id,description:n,completed:!1}),this.sortTasks(),this.saveTasks()}},{key:"updateStatus",value:function(r,n){this.tasksList[r-1].completed=n,this.saveTasks()}},{key:"clearCompleted",value:function(){this.tasksList=this.tasksList.filter((function(r){return!r.completed}));var r=1;this.tasksList.forEach((function(n){n.id=r,r+=1})),this.currentId=r,this.saveTasks()}},{key:"getTasks",value:function(){return this.tasksList}}],e&&E(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),r}()),h=document.querySelector(".tasks-container"),v=function r(n){h.innerHTML="\n    ".concat(n.map((function(r){return'\n      <li class="task dflex"  id="task-'.concat(r.id,'">\n        <input class="task-complete" type="checkbox" name="task-status" ').concat(r.completed?"checked":"unchecked",'>\n        <span class="task-desc').concat(r.completed?" crossed-out":"",'">').concat(r.description,'</span>\n        <div class="icon-swapper dflex">\n          <i class="fa-solid fa-ellipsis-vertical task-more"></i>\n          <i class="fa-solid fa-eraser task-delete"></i>\n      </li>\n      ')})).join("")),document.querySelector(".refresh").addEventListener("click",(function(){window.location.reload()})),document.querySelectorAll(".task-desc").forEach((function(n){n.addEventListener("dblclick",(function(n){n.preventDefault();var e=n.target;e.classList.add("hidden");var t=e.parentNode.id.replace("task-",""),o=e.innerText,a=document.createElement("input"),s=e.parentNode.querySelector(".icon-swapper");a.value=o,a.classList.add("newdesc-entry"),e.parentNode.insertBefore(a,s),a.addEventListener("focus",(function(){a.select()})),a.focus(),a.addEventListener("input",(function(){localStorage.setItem("newDesc",JSON.stringify(a.value))})),a.addEventListener("blur",(function(){var n=JSON.parse(localStorage.getItem("newDesc"));localStorage.removeItem("newDesc"),n&&B.editTask(t,n),a.remove(),e.classList.remove("hidden"),r(B.getTasks())})),a.addEventListener("keyup",(function(n){if("Enter"===n.key){var o=JSON.parse(localStorage.getItem("newDesc"));localStorage.removeItem("newDesc"),o&&B.editTask(t,o),a.remove(),e.classList.remove("hidden"),r(B.getTasks())}}))}))})),document.querySelectorAll(".task-delete").forEach((function(n){n.addEventListener("click",(function(n){n.preventDefault();var e=n.target.parentNode.parentNode.id.replace("task-","");B.removeTask(e),r(B.getTasks())}))})),document.querySelectorAll(".task-complete").forEach((function(n){n.addEventListener("click",(function(e){var t=e.target.parentNode.id.replace("task-","");B.updateStatus(t,n.checked),r(B.getTasks())}))}))};document.querySelector(".inputField").addEventListener("submit",(function(r){r.preventDefault();var n=document.querySelector(".task-entry");B.addTask(n.value),n.value="",v(B.getTasks())})),document.querySelector(".clear-all-completed").addEventListener("click",(function(){B.clearCompleted(),v(B.getTasks())})),v(B.getTasks())})()})();
//# sourceMappingURL=index.js.map