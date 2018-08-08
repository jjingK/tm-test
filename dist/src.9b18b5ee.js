parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({4:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function n(){t(this,n),this._key="EmailList"}return e(n,[{key:"getItem",value:function(){return JSON.parse(localStorage.getItem(this._key))}},{key:"setItem",value:function(e){localStorage.setItem(this._key,JSON.stringify(e))}},{key:"updateItem",value:function(e,t,n){var r=this.getItem().map(function(r){return r.uuid===e&&(r[t]=n),r});this.setItem(r)}},{key:"removeItem",value:function(e){var t=this.getItem();this.setItem(t.filter(function(t){return t.uuid!==e}))}},{key:"size",get:function(){return this.getItem()?this.getItem().length:0}}]),n}();exports.default=n;
},{}],7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,r){var e=[],n=!0,o=!1,f=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(e.push(u.value),!r||e.length!==r);n=!0);}catch(t){o=!0,f=t}finally{try{!n&&a.return&&a.return()}finally{if(o)throw f}}return e}(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=16*Math.random()|0;return("x"==t?r:3&r|8).toString(16)})}function e(r){var e=r.split("."),n=t(e,3),o=n[0],f=n[1],u=n[2];return new Date(o,f-1,u)}function n(t){for(var r=0,e=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)r+=t.offsetLeft-t.scrollLeft,e+=t.offsetTop-t.scrollTop,t=t.offsetParent;return{top:e,left:r}}exports.uuid=r,exports.dateToStr=e,exports.getOffsetParent=n;var o=exports.domHelper={find:function(t,r){return(r||document).querySelector(t)},findAll:function(t,r){return(r||document).querySelectorAll(t)},parent:function(t,r){if(t.nodeName===r)return t;for(;t.nodeName!==r;)t=t.parentNode;return t},attachEvent:function(t,r,e){return t.removeEventListener(r,e),t.addEventListener(r,e),t},_toArray:function(t){return Array.from(t)}};
},{}],10:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),e=require("./helpers");function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function n(t,e){i(this,n),this._storage=e,this._storage.size?this._list=this._storage.getItem():this._initialize(t)}return t(n,[{key:"_initialize",value:function(t){this._list=t.sort(function(t,i){return(0,e.dateToStr)(i.date).getTime()-(0,e.dateToStr)(t.date).getTime()}).map(function(t){return Object.assign({uuid:(0,e.uuid)(),select:!1},t)},[]),this._storage.setItem(this._list)}},{key:"_findIdxById",value:function(t){return this._list.findIndex(function(e){return e.uuid===t})}},{key:"getItemById",value:function(t){return this._list.find(function(e){return e.uuid===t})}},{key:"removeItemById",value:function(t){var e=this._findIdxById(t);this._storage.removeItem(t),this._list.splice(e,1)}},{key:"selectedById",value:function(t){var e=this.getItemById(t);e.select=!0,this._storage.updateItem(t,"select",e.select)}},{key:"list",get:function(){return this._list},set:function(t){this._list=t}}]),n}();exports.default=n;
},{"./helpers":7}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),t=require("./EmailList"),a=l(t),n=require("./helpers");function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(e){if(i(this,t),!e instanceof a.default)throw new Error("This must be an instance of the EmailList");this._data=e,this._list=e.list,this._listWrap=n.domHelper.find(".list_wrap"),this._contentWrap=n.domHelper.find(".wrap_right"),this._handleClick=this._handleClick.bind(this),this._handleDragStart=this._handleDragStart.bind(this),this._handleDragOver=this._handleDragOver.bind(this),this._handleDragEnd=this._handleDragEnd.bind(this),this._handleDelete=this._handleDelete.bind(this)}return e(t,[{key:"_handleClick",value:function(e){var t=n.domHelper.parent(e.target,"LI"),a=t.dataset.uuid,l=this._data.getItemById(a);this._data.selectedById(a),t.classList.add("select"),this._contentWrap.innerHTML=this._makeTemplate("content",l)}},{key:"_handleDragStart",value:function(e){var t=e.target;e.effectAllowed="move",this._dragItem=t,this._clone(this._dragItem)}},{key:"_handleDragOver",value:function(e){var t=e.target,a=n.domHelper.parent(t,"LI"),l=(0,n.getOffsetParent)(a).top-e.clientY;this._dropPlace=l<0?a:a.nextElementSibling,this._dragItem.style.display="none",this._listWrap.insertBefore(this._cloneItem,this._dropPlace),this._cloneItem.style.display="block"}},{key:"_handleDragEnd",value:function(){this._dragItem.remove(),this._cloneItem.classList.remove("dragging"),this._cloneItem.draggable="true",this._cloneAttachEvents()}},{key:"_handleDelete",value:function(e){e.stopPropagation();var t=n.domHelper.parent(e.target,"LI"),a=t.dataset.uuid;this._data.removeItemById(a),t.style.display="none",this._contentWrap.innerHTML=""}},{key:"_clone",value:function(e){this._cloneItem=e.cloneNode(!0),this._cloneItem.draggable=!1,this._cloneItem.style.display="none",this._cloneItem.classList.add("dragging")}},{key:"_cloneAttachEvents",value:function(){var e=this._cloneItem,t=n.domHelper.find(".btn_mail_delete",e);n.domHelper.attachEvent(e,"click",this._handleClick),n.domHelper.attachEvent(e,"dragstart",this._handleDragStart),n.domHelper.attachEvent(e,"dragover",this._handleDragOver),n.domHelper.attachEvent(e,"dragend",this._handleDragEnd),n.domHelper.attachEvent(t,"click",this._handleDelete)}},{key:"render",value:function(){var e=this;this._listWrap.innerHTML="",this._contentWrap.innerHTML="",this._list.reduce(function(t,a){return t.innerHTML+=e._makeTemplate("list",a),t},this._listWrap),this._attachEvents()}},{key:"_attachEvents",value:function(){var e=this;Array.from(n.domHelper.findAll("li",this._listWrap)).forEach(function(t){var a=n.domHelper.find(".btn_mail_delete",t);n.domHelper.attachEvent(t,"click",e._handleClick),n.domHelper.attachEvent(t,"dragstart",e._handleDragStart),n.domHelper.attachEvent(t,"dragover",e._handleDragOver),n.domHelper.attachEvent(t,"dragend",e._handleDragEnd),n.domHelper.attachEvent(a,"click",e._handleDelete)})}},{key:"_makeTemplate",value:function(e,t){var a=t.uuid,n=t.sender,l=t.date,i=t.title,r=t.content,s=t.select,d="";return"list"===e?d='\n        <li class="list_article '+(s?"select":"")+'" data-uuid="'+a+'" draggable="true">\n          <a href="'+a+'"></a>\n          <div class="list_article_top">\n              <p class="user_name ellipse">'+n+'</p>\n              <p class="send_date">'+l+'</p>\n              <button class="btn_mail_delete"><span class="blind">삭제</span></button>\n          </div>\n          <div class="list_article_bottom">\n              <p class="mail_title ellipse">'+r+'</p>\n          </div>\n          <button type="button" class="btn_list_move"><span class="blind">이동버튼</span></button>\n        </li>\n      ':"content"===e&&(d='\n        <div class="content_top">\n          <p class="user_name ellipse">'+n+'</p>\n          <p class="send_date">'+l+'</p>\n          <p class="mail_title ellipse">'+i+'</p>\n        </div>\n        <div class="content_bottom">\n          '+r.replace(/\n/g,"<br>")+"\n        </div>\n      "),d}}]),t}();exports.default=r;
},{"./EmailList":10,"./helpers":7}],6:[function(require,module,exports) {
"use strict";var e=require("./DataStorage"),t=d(e),r=require("./EmailList"),a=d(r),n=require("./View"),u=d(n),i=require("./helpers");function d(e){return e&&e.__esModule?e:{default:e}}i.domHelper.attachEvent(window.document,"DOMContentLoaded",function(){var e=new t.default,r=new a.default(window.aEmailData,e);new u.default(r).render()});
},{"./DataStorage":4,"./EmailList":10,"./View":6,"./helpers":7}]},{},[6], null)
//# sourceMappingURL=../dist/src.9b18b5ee.map