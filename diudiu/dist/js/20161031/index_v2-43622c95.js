!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var i=n(1),r=n(7);!function(t,e,n){function i(){o(),u()}function o(){a(),s()}function c(){var t="";n(".j_img img").each(function(e,n){var i=f(n);i.url=n.src,i.index=e,t+=l(i,v.detail)}),n("#img_detail").html(t)}function a(){var t=["../icon/nav.png","../icon/text_2.png","../icon/logo_2.png","../icon/h_1.jpg","../icon/h_2.jpg","../icon/h_3.jpg"],e=0,i=0;e=t.length,t.forEach(function(t,r){function o(){i++,n("#load-progress").css("transform","scaleX("+i/e+")"),i===e&&(n("#loader-view").removeClass("open"),h())}var c=new Image;c.onload=o,c.onerror=o,c.src=t})}function s(){var t=document.documentElement.clientHeight||window.innerHeight;n(".section-one,.section-two,.section-three").each(function(e,n){n.style.height=t+"px"})}function h(){}function u(){n(t).on("click","#me_btn,.j_close",function(t){n("#introduction").addClass("animated").toggleClass("open")}).on("click",".j_nav",function(t){var e=+n(this).attr("data-index"),i=w[e],o="";document.body.scrollTop=0,["section-one","section-two","section-three"].forEach(function(t){n("."+t).hide()}),n("#collection-header").html(l(y[e],v.collectionHeader)),n("#collection").show(),i.forEach(function(t,e){t.index=e,o+=l(t,v.img)}),n("#imgs").html(o);var a=r("imgs","j_img");n("#imgs").css("height",a+"px"),c()}).on("click",".j_collection_back",function(t){document.body.scrollTop=0,n("#collection").hide(),["section-one","section-two","section-three"].forEach(function(t){n("."+t).show()})}).on("click",".j_img",function(t){var e=n(this).attr("data-index"),i=n("#img_detail").find(".section-float__img").eq(e),r=(document.body.scrollTop||0)+50;i.addClass("select"),n(this).css("opacity",0),n("#img_detail").show(),setTimeout(function(){i.css({opacity:1,width:"80%",top:r+"px",height:"auto",left:"10%"}),setTimeout(function(){var t=g(i,r);if(t>0){var e=document.getElementById("imgs").offsetHeight;n("#imgs").css("height",e+t+"px"),n("#imgs").attr("data-intheight",e)}},400)},20)}).on("click","#img_detail",function(t){var e=n(this).find(".select"),i=e.attr("data-index"),r=n(".j_img img")[i],o=f(r),c=n("#imgs").attr("data-intheight")||n("#imgs")[0].offsetHeight;p(e[0],o),r.parentNode.parentNode.style.opacity=1,r.style.opacity=1,n("#imgs").css("height",c+"px"),n("#img_detail").hide(),e.removeClass("select")})}function l(t,e){for(var n in t)e=e.replace("{"+n+"}",t[n]);return e}function f(t){for(var e=0,n=0,i=t;i&&"body"!=i.nodeName.toLowerCase();)e+=i.offsetTop,n+=i.offsetLeft,i=i.offsetParent;return{top:e,left:n,width:t.offsetWidth||t.clientWidth,height:t.offsetHeight||t.clientHeight}}function p(t,e){n(t).css({width:e.width+"px",height:e.height+"px",top:e.top+"px",left:e.left+"px",opacity:0})}function g(t,e){var i=document.body.clientHeight||window.innerHeight,r=t[0].offsetHeight+e+50;return n("#img_detail").css("height",Math.max(i,r)+"px"),r-i}function d(){clearTimeout(m),m=null}var m,v={img:'<div class="collection-page__section_img j_img" data-index="{index}"><div style="box-shadow: 0 1px 3px rgba(0,0,0,.3);"><img style="height: {height}px;" src="{content}"></div></div>',detail:' <img class="section-float__img" data-index="{index}" src="{url}" style="left: {left}px;top: {top}px;width: {width}px;height: {height}px;">',collectionHeader:'<div class="collection-page__header_title">{title}</div> <div class="collection-page__header_line"></div> <div class="collection-page__header_subtitle">{subtitle}</div> </div>'},w=[[{content:"../work/freehand/0.png",height:250},{content:"../work/freehand/1.jpg",height:333},{content:"../work/freehand/2.jpg",height:360},{content:"../work/freehand/3.jpg",height:250},{content:"../work/freehand/4.jpg",height:332},{content:"../work/freehand/5.jpg",height:233},{content:"../work/freehand/6.jpg",height:333},{content:"../work/freehand/7.jpg",height:187},{content:"../work/freehand/8.jpg",height:333},{content:"../work/freehand/9.jpg",height:312},{content:"../work/freehand/10.jpg",height:187},{content:"../work/freehand/11.jpg",height:187},{content:"../work/freehand/12.jpg",height:187},{content:"../work/freehand/13.jpg",height:187},{content:"../work/freehand/14.jpg",height:333},{content:"../work/freehand/15.jpg",height:187},{content:"../work/freehand/16.jpg",height:333}],[{content:"../work/plane/0.png",height:250},{content:"../work/plane/1.jpg",height:400},{content:"../work/plane/2.jpg",height:252},{content:"../work/plane/3.jpg",height:402},{content:"../work/plane/4.jpg",height:625},{content:"../work/plane/5.jpg",height:625},{content:"../work/plane/6.jpg",height:167},{content:"../work/plane/7.jpg",height:176},{content:"../work/plane/8.jpg",height:174},{content:"../work/plane/9.jpg",height:354},{content:"../work/plane/10.jpg",height:327},{content:"../work/plane/11.jpg",height:177},{content:"../work/plane/12.jpg",height:177},{content:"../work/plane/13.jpg",height:188},{content:"../work/plane/14.jpg",height:188},{content:"../work/plane/15.png",height:250},{content:"../work/plane/16.png",height:250},{content:"../work/plane/17.jpg",height:140},{content:"../work/plane/18.jpg",height:311},{content:"../work/plane/19.jpg",height:247},{content:"../work/plane/20.jpg",height:290}],[{content:"../work/interface/000.png",height:250},{content:"../work/interface/001.jpg",height:215},{content:"../work/interface/002.jpg",height:505},{content:"../work/interface/003.jpg",height:250},{content:"../work/interface/004.jpg",height:764},{content:"../work/interface/005.jpg",height:506},{content:"../work/interface/006.jpg",height:781},{content:"../work/interface/007.jpg",height:250},{content:"../work/interface/008.jpg",height:444},{content:"../work/interface/009.jpg",height:444},{content:"../work/interface/010.jpg",height:444},{content:"../work/interface/011.jpg",height:444},{content:"../work/interface/012.jpg",height:444},{content:"../work/interface/013.jpg",height:444},{content:"../work/interface/014.jpg",height:444},{content:"../work/interface/015.jpg",height:444},{content:"../work/interface/016.jpg",height:444},{content:"../work/interface/017.jpg",height:444},{content:"../work/interface/018.jpg",height:445},{content:"../work/interface/019.jpg",height:445},{content:"../work/interface/020.jpg",height:445},{content:"../work/interface/021.png",height:445},{content:"../work/interface/022.png",height:445},{content:"../work/interface/023.png",height:445},{content:"../work/interface/024.jpg",height:447},{content:"../work/interface/025.jpg",height:266},{content:"../work/interface/026.jpg",height:391},{content:"../work/interface/027.jpg",height:396},{content:"../work/interface/028.jpg",height:203},{content:"../work/interface/029.jpg",height:302},{content:"../work/interface/030.jpg",height:1242},{content:"../work/interface/031.jpg",height:188},{content:"../work/interface/032.jpg",height:233},{content:"../work/interface/033.jpg",height:215},{content:"../work/interface/034.jpg",height:215},{content:"../work/interface/035.jpg",height:380},{content:"../work/interface/036.jpg",height:188},{content:"../work/interface/037.jpg",height:188},{content:"../work/interface/038.jpg",height:188},{content:"../work/interface/039.jpg",height:188},{content:"../work/interface/040.jpg",height:188},{content:"../work/interface/041.jpg",height:400},{content:"../work/interface/042.jpg",height:405},{content:"../work/interface/043.jpg",height:405},{content:"../work/interface/044.jpg",height:481},{content:"../work/interface/045.jpg",height:2513},{content:"../work/interface/046.jpg",height:405},{content:"../work/interface/047.jpg",height:405},{content:"../work/interface/048.jpg",height:405},{content:"../work/interface/049.jpg",height:405},{content:"../work/interface/050.jpg",height:250},{content:"../work/interface/051.jpg",height:125},{content:"../work/interface/052.jpg",height:250},{content:"../work/interface/053.jpg",height:192},{content:"../work/interface/054.jpg",height:250},{content:"../work/interface/055.jpg",height:405},{content:"../work/interface/056.jpg",height:405},{content:"../work/interface/057.jpg",height:405},{content:"../work/interface/058.jpg",height:405},{content:"../work/interface/059.jpg",height:405},{content:"../work/interface/060.jpg",height:405},{content:"../work/interface/061.jpg",height:405},{content:"../work/interface/062.jpg",height:405},{content:"../work/interface/063.jpg",height:405},{content:"../work/interface/064.jpg",height:405},{content:"../work/interface/065.jpg",height:606},{content:"../work/interface/066.jpg",height:555},{content:"../work/interface/067.jpg",height:405},{content:"../work/interface/068.jpg",height:405},{content:"../work/interface/069.jpg",height:405},{content:"../work/interface/070.jpg",height:405},{content:"../work/interface/071.jpg",height:405}]],y=[{title:"PAINTING",subtitle:"A growing history about my painting"},{title:"The plane design",subtitle:"Some of the things I tried"},{title:"Interface design",subtitle:"I want to do a good job"}];(function(){var t=navigator.userAgent,e=/(?:Windows Phone)/.test(t),n=/(?:SymbianOS)/.test(t)||e,i=/(?:Android)/.test(t),r=/(?:Firefox)/.test(t),o=(/(?:Chrome|CriOS)/.test(t),/(?:iPad|PlayBook)/.test(t)||i&&!/(?:Mobile)/.test(t)||r&&/(?:Tablet)/.test(t)),c=/(?:iPhone)/.test(t)&&!o,a=!c&&!i&&!n;return{isTablet:o,isPhone:c,isAndroid:i,isPc:a}})();window.addEventListener("scroll",d),i()}(document,window,i)},function(t,e){var n=t.exports=function(){function t(t){return null==t?String(t):W[U.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function c(t){return"number"==typeof t.length}function a(t){return N.call(t,function(t){return null!=t})}function s(t){return t.length>0?b.fn.concat.apply([],t):t}function h(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function u(t){return t in A?A[t]:A[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function l(t,e){return"number"!=typeof e||L[h(t)]?e:e+"px"}function f(t){var e,n;return O[t]||(e=P.createElement(t),P.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),O[t]=n),O[t]}function p(t){return"children"in t?S.call(t.children):b.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function g(t,e,n){for(k in e)n&&(o(e[k])||Y(e[k]))?(o(e[k])&&!o(t[k])&&(t[k]={}),Y(e[k])&&!Y(t[k])&&(t[k]=[]),g(t[k],e[k],n)):e[k]!==x&&(t[k]=e[k])}function d(t,e){return null==e?b(t):b(t).filter(e)}function m(t,n,i,r){return e(n)?n.call(t,i,r):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function w(t,e){var n=t.className||"",i=n&&n.baseVal!==x;return e===x?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function y(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?b.parseJSON(t):t):t}catch(e){return t}}function j(t,e){e(t);for(var n=0,i=t.childNodes.length;n<i;n++)j(t.childNodes[n],e)}var x,k,b,E,T,_,C=[],S=C.slice,N=C.filter,P=window.document,O={},A={},L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},H=/^\s*<(\w+|!)[^>]*>/,M=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,D=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,$=/^(?:body|html)$/i,I=/([A-Z])/g,R=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],z=P.createElement("table"),q=P.createElement("tr"),Z={tr:P.createElement("tbody"),tbody:z,thead:z,tfoot:z,td:q,th:q,"*":P.createElement("div")},B=/complete|loaded|interactive/,V=/^[\w-]*$/,W={},U=W.toString,X={},J=P.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return X.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=J).appendChild(t),i=~X.qsa(r,e).indexOf(t),o&&J.removeChild(t),i},T=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},_=function(t){return N.call(t,function(e,n){return t.indexOf(e)==n})},X.fragment=function(t,e,n){var i,r,c;return M.test(t)&&(i=b(P.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(D,"<$1></$2>")),e===x&&(e=H.test(t)&&RegExp.$1),e in Z||(e="*"),c=Z[e],c.innerHTML=""+t,i=b.each(S.call(c.childNodes),function(){c.removeChild(this)})),o(n)&&(r=b(i),b.each(n,function(t,e){R.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},X.Z=function(t,e){return t=t||[],t.__proto__=b.fn,t.selector=e||"",t},X.isZ=function(t){return t instanceof X.Z},X.init=function(t,n){var i;if(!t)return X.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&H.test(t))i=X.fragment(t,RegExp.$1,n),t=null;else{if(n!==x)return b(n).find(t);i=X.qsa(P,t)}else{if(e(t))return b(P).ready(t);if(X.isZ(t))return t;if(Y(t))i=a(t);else if(r(t))i=[t],t=null;else if(H.test(t))i=X.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==x)return b(n).find(t);i=X.qsa(P,t)}}return X.Z(i,t)},b=function(t,e){return X.init(t,e)},b.extend=function(t){var e,n=S.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){g(t,n,e)}),t},X.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],c=r||o?e.slice(1):e,a=V.test(c);return i(t)&&a&&r?(n=t.getElementById(c))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:S.call(a&&!r?o?t.getElementsByClassName(c):t.getElementsByTagName(e):t.querySelectorAll(e))},b.contains=P.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},b.type=t,b.isFunction=e,b.isWindow=n,b.isArray=Y,b.isPlainObject=o,b.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},b.inArray=function(t,e,n){return C.indexOf.call(e,t,n)},b.camelCase=T,b.trim=function(t){return null==t?"":String.prototype.trim.call(t)},b.uuid=0,b.support={},b.expr={},b.map=function(t,e){var n,i,r,o=[];if(c(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return s(o)},b.each=function(t,e){var n,i;if(c(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},b.grep=function(t,e){return N.call(t,e)},window.JSON&&(b.parseJSON=JSON.parse),b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){W["[object "+e+"]"]=e.toLowerCase()}),b.fn={forEach:C.forEach,reduce:C.reduce,push:C.push,sort:C.sort,indexOf:C.indexOf,concat:C.concat,map:function(t){return b(b.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return b(S.apply(this,arguments))},ready:function(t){return B.test(P.readyState)&&P.body?t(b):P.addEventListener("DOMContentLoaded",function(){t(b)},!1),this},get:function(t){return t===x?S.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return C.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):b(N.call(this,function(e){return X.matches(e,t)}))},add:function(t,e){return b(_(this.concat(b(t,e))))},is:function(t){return this.length>0&&X.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==x)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):c(t)&&e(t.item)?S.call(t):b(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return b(n)},has:function(t){return this.filter(function(){return r(t)?b.contains(this,t):b(this).find(t).size()})},eq:function(t){return t===-1?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:b(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:b(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?b(t).filter(function(){var t=this;return C.some.call(n,function(e){return b.contains(e,t)})}):1==this.length?b(X.qsa(this[0],t)):this.map(function(){return X.qsa(this,t)}):b()},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=b(t));n&&!(r?r.indexOf(n)>=0:X.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return b(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=b.map(n,function(t){if((t=t.parentNode)&&!i(t)&&e.indexOf(t)<0)return e.push(t),t});return d(e,t)},parent:function(t){return d(_(this.pluck("parentNode")),t)},children:function(t){return d(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return S.call(this.childNodes)})},siblings:function(t){return d(this.map(function(t,e){return N.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return b.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=f(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=b(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){b(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){b(this[0]).before(t=b(t));for(var e;(e=t.children()).length;)t=e.first();b(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=b(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){b(this).replaceWith(b(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=b(this);(t===x?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return b(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return b(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;b(this).empty().append(m(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=m(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(k in t)v(this,k,t[k]);else v(this,t,m(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:x},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){v(this,t)},this)})},prop:function(t,e){return t=G[t]||t,1 in arguments?this.each(function(n){this[t]=m(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(I,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?y(i):x},val:function(t){return 0 in arguments?this.each(function(e){this.value=m(this,t,e,this.value)}):this[0]&&(this[0].multiple?b(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=b(this),i=m(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i,r=this[0];if(!r)return;if(i=getComputedStyle(r,""),"string"==typeof e)return r.style[T(e)]||i.getPropertyValue(e);if(Y(e)){var o={};return b.each(e,function(t,e){o[e]=r.style[T(e)]||i.getPropertyValue(e)}),o}}var c="";if("string"==t(e))n||0===n?c=h(e)+":"+l(e,n):this.each(function(){this.style.removeProperty(h(e))});else for(k in e)e[k]||0===e[k]?c+=h(k)+":"+l(k,e[k])+";":this.each(function(){this.style.removeProperty(h(k))});return this.each(function(){this.style.cssText+=";"+c})},index:function(t){return t?this.indexOf(b(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&C.some.call(this,function(t){return this.test(w(t))},u(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){E=[];var n=w(this),i=m(this,t,e,n);i.split(/\s+/g).forEach(function(t){b(this).hasClass(t)||E.push(t)},this),E.length&&w(this,n+(n?" ":"")+E.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===x)return w(this,"");E=w(this),m(this,t,e,E).split(/\s+/g).forEach(function(t){E=E.replace(u(t)," ")}),w(this,E.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=b(this),r=m(this,t,n,w(this));r.split(/\s+/g).forEach(function(t){(e===x?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===x?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===x?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=$.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(b(t).css("margin-top"))||0,n.left-=parseFloat(b(t).css("margin-left"))||0,i.top+=parseFloat(b(e[0]).css("border-top-width"))||0,i.left+=parseFloat(b(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||P.body;t&&!$.test(t.nodeName)&&"static"==b(t).css("position");)t=t.offsetParent;return t})}},b.fn.detach=b.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});b.fn[t]=function(r){var o,c=this[0];return r===x?n(c)?c["inner"+e]:i(c)?c.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){c=b(this),c.css(t,m(this,r,e,c[t]()))})}}),F.forEach(function(e,n){var i=n%2;b.fn[e]=function(){var e,r,o=b.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:X.fragment(n)}),c=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=b.contains(P.documentElement,r);o.forEach(function(t){if(c)t=t.cloneNode(!0);else if(!r)return b(t).remove();r.insertBefore(t,e),a&&j(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},b.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return b(t)[e](this),this}}),X.Z.prototype=b.fn,X.uniq=_,X.deserializeValue=y,b.zepto=X,b}();!function(t){function e(t){return t._zid||(t._zid=f++)}function n(t,n,o,c){if(n=i(n),n.ns)var a=r(n.ns);return(m[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||a.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!c||t.sel==c)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!w&&t.e in y||!!e}function c(t){return j[t]||w&&y[t]||t}function a(n,r,a,s,u,f,p){var g=e(n),d=m[g]||(m[g]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var r=i(e);r.fn=a,r.sel=u,r.e in j&&(a=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return r.fn.apply(this,arguments)}),r.del=f;var g=f||a;r.proxy=function(t){if(t=h(t),!t.isImmediatePropagationStopped()){t.data=s;var e=g.apply(n,t._args==l?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=d.length,d.push(r),"addEventListener"in n&&n.addEventListener(c(r.e),r.proxy,o(r,p))})}function s(t,i,r,a,s){var h=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,a).forEach(function(e){delete m[h][e.i],"removeEventListener"in t&&t.removeEventListener(c(e.e),e.proxy,o(e,s))})})}function h(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(E,function(t,i){var r=n[t];e[t]=function(){return this[i]=x,r&&r.apply(n,arguments)},e[i]=k}),(n.defaultPrevented!==l?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function u(t){var e,n={originalEvent:t};for(e in t)b.test(e)||t[e]===l||(n[e]=t[e]);return h(n,t)}var l,f=1,p=Array.prototype.slice,g=t.isFunction,d=function(t){return"string"==typeof t},m={},v={},w="onfocusin"in window,y={focus:"focusin",blur:"focusout"},j={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:a,remove:s},t.proxy=function(n,i){var r=2 in arguments&&p.call(arguments,2);if(g(n)){var o=function(){return n.apply(i,r?r.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(d(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},k=function(){return!1},b=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var c,h,f=this;return e&&!d(e)?(t.each(e,function(t,e){f.on(t,n,i,e,o)}),f):(d(n)||g(r)||r===!1||(r=i,i=n,n=l),(g(i)||i===!1)&&(r=i,i=l),r===!1&&(r=k),f.each(function(l,f){o&&(c=function(t){return s(f,t.type,r),r.apply(this,arguments)}),n&&(h=function(e){var i,o=t(e.target).closest(n,f).get(0);if(o&&o!==f)return i=t.extend(u(e),{currentTarget:o,liveFired:f}),(c||r).apply(o,[i].concat(p.call(arguments,1)))}),a(f,e,r,i,n,h||c)}))},t.fn.off=function(e,n,i){var r=this;return e&&!d(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(d(n)||g(i)||i===!1||(i=n,n=l),i===!1&&(i=k),r.each(function(){s(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=d(e)||t.isPlainObject(e)?t.Event(e):h(e),e._args=n,this.each(function(){e.type in y&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(c,a){r=u(d(e)?t.Event(e):e),r._args=i,r.target=a,t.each(n(a,e.type||e),function(t,e){if(o=e.proxy(r),r.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){d(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),h(n)}}(n),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){if(t.global)return e(n||w,i,r)}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)!==!1&&n(e,i,"ajaxBeforeSend",[t,e])!==!1&&void n(e,i,"ajaxSend",[t,e])}function c(t,e,i,r){var o=i.context,c="success";i.success.call(o,t,c,e),r&&r.resolveWith(o,[t,c,e]),n(i,o,"ajaxSuccess",[e,i,t]),s(c,e,i)}function a(t,e,i,r,o){var c=r.context;r.error.call(c,i,e,t),o&&o.rejectWith(c,[i,e,t]),n(r,c,"ajaxError",[i,r,t||e]),s(e,i,r)}function s(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function h(){}function u(t){return t&&(t=t.split(";",2)[0]),t&&(t==b?"html":t==k?"json":j.test(t)?"script":x.test(t)&&"xml")||"text"}function l(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function f(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=l(e.url,e.data),e.data=void 0)}function p(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function g(e,n,i,r){var o,c=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,s){o=t.type(s),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&c?e.add(s.name,s.value):"array"==o||!i&&"object"==o?g(e,s,i,n):e.add(n,s)})}var d,m,v=0,w=window.document,y=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,j=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,k="application/json",b="text/html",E=/^\s*$/,T=w.createElement("a");T.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,s=e.jsonpCallback,h=(t.isFunction(s)?s():s)||"jsonp"+ ++v,u=w.createElement("script"),l=window[h],f=function(e){t(u).triggerHandler("error",e||"abort")},p={abort:f};return n&&n.promise(p),t(u).on("load error",function(o,s){clearTimeout(r),t(u).off().remove(),"error"!=o.type&&i?c(i[0],p,e,n):a(null,s||"error",p,e,n),window[h]=l,i&&t.isFunction(l)&&l(i[0]),l=i=void 0}),o(p,e)===!1?(f("abort"),p):(window[h]=function(){i=arguments},u.src=e.url.replace(/\?(.+)=\?/,"?$1="+h),w.head.appendChild(u),e.timeout>0&&(r=setTimeout(function(){f("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:h,success:h,error:h,complete:h,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:k,xml:"application/xml, text/xml",html:b,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,r=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(d in t.ajaxSettings)void 0===r[d]&&(r[d]=t.ajaxSettings[d]);i(r),r.crossDomain||(n=w.createElement("a"),n.href=r.url,n.href=n.href,r.crossDomain=T.protocol+"//"+T.host!=n.protocol+"//"+n.host),r.url||(r.url=window.location.toString()),f(r);var p=r.dataType,g=/\?.+=\?/.test(r.url);if(g&&(p="jsonp"),r.cache!==!1&&(e&&e.cache===!0||"script"!=p&&"jsonp"!=p)||(r.url=l(r.url,"_="+Date.now())),"jsonp"==p)return g||(r.url=l(r.url,r.jsonp?r.jsonp+"=?":r.jsonp===!1?"":"callback=?")),t.ajaxJSONP(r,s);var v,y=r.accepts[p],j={},x=function(t,e){j[t.toLowerCase()]=[t,e]},k=/^([\w-]+:)\/\//.test(r.url)?RegExp.$1:window.location.protocol,b=r.xhr(),_=b.setRequestHeader;if(s&&s.promise(b),r.crossDomain||x("X-Requested-With","XMLHttpRequest"),x("Accept",y||"*/*"),(y=r.mimeType||y)&&(y.indexOf(",")>-1&&(y=y.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(y)),(r.contentType||r.contentType!==!1&&r.data&&"GET"!=r.type.toUpperCase())&&x("Content-Type",r.contentType||"application/x-www-form-urlencoded"),r.headers)for(m in r.headers)x(m,r.headers[m]);if(b.setRequestHeader=x,b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=h,clearTimeout(v);var e,n=!1;
if(b.status>=200&&b.status<300||304==b.status||0==b.status&&"file:"==k){p=p||u(r.mimeType||b.getResponseHeader("content-type")),e=b.responseText;try{"script"==p?(0,eval)(e):"xml"==p?e=b.responseXML:"json"==p&&(e=E.test(e)?null:t.parseJSON(e))}catch(t){n=t}n?a(n,"parsererror",b,r,s):c(e,b,r,s)}else a(b.statusText||null,b.status?"error":"abort",b,r,s)}},o(b,r)===!1)return b.abort(),a(null,"abort",b,r,s),b;if(r.xhrFields)for(m in r.xhrFields)b[m]=r.xhrFields[m];var C=!("async"in r)||r.async;b.open(r.type,r.url,C,r.username,r.password);for(m in j)_.apply(b,j[m]);return r.timeout>0&&(v=setTimeout(function(){b.onreadystatechange=h,b.abort(),a(null,"timeout",b,r,s)},r.timeout)),b.send(r.data?r.data:null),b},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,c=e.split(/\s/),a=p(e,n,i),s=a.success;return c.length>1&&(a.url=c[0],r=c[1]),a.success=function(e){o.html(r?t("<div>").html(e.replace(y,"")).find(r):e),s&&s.apply(o,arguments)},t.ajax(a),this};var _=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(_(e)+"="+_(n))},g(i,e,n),i.join("&").replace(/%20/g,"+")}}(n),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(n),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(t){return null}}}}(n)},,,,,,function(t,e){function n(t,e){var n=document.getElementById(t),o=r(n,e),c=o[0].offsetWidth,a=Math.floor(document.documentElement.clientWidth/c);n.style.cssText="width : "+c*a+"px;margin:0 auto;";for(var s=[],h=0;h<o.length;h++)if(h<a)s[h]=o[h].offsetHeight;else{var u=Math.min.apply(null,s),l=i(s,u);o[h].style.position="absolute",o[h].style.top=u+"px",o[h].style.left=o[l].offsetLeft+"px",s[l]=s[l]+o[h].offsetHeight}return s.sort(function(t,e){return t-e})[a-1]}function i(t,e){for(var n=0;n<t.length;n++)if(t[n]==e)return n}function r(t,e){for(var n=[],i=t.getElementsByTagName("*"),r=0;r<i.length;r++)i[r].className.indexOf(e)>-1&&n.push(i[r]);return n}t.exports=n}]);