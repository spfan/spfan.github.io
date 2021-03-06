/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var $ = __webpack_require__(1);
	var iSlider = __webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(6);


	(function (doc, win, $) {
	    var _Tpl = {
	            collection :    
	                    '<div class="profile-collection" style="height:' + (document.documentElement.clientHeight || 675) + 'px" data-zhdesc="{zh_desc}" data-endesc="{en_desc}">'+
	                    '    <div class="profile-collection-contect">'+
	                    '        <div class="profile-collection-contect-imgs j_iSlider-wrapper">'+
	                    '        </div>'+
	                    '    </div>'+
	                    '</div>',
	            alertTpl : 
	                '<div class="dialog-back">'+
	                '    <div class="dialog-wrap">'+
	                '        <div class="dialog-wrap-img"><div style="display:block;height:100%;width:100%;background-image:url({url});background-repeat:no-repeat;background-size:contain;background-position:center center;"></div>'+
	                '        <div class="dialog-wrap-close"></div>'+
	                '        <div class="dialog-wrap-info"><div class="dialog-wrap-info-page"><span class="dialog-wrap-info-index">{index}</span> / {total}</div><div class="dialog-wrap-info-desc">{zh_desc}</div><div class="dialog-wrap-info-en-desc">{en_desc}</div><div class="dialog-wrap-info-line"></div></div>'+
	                '    </div>'+
	                '</div>'
	        },
	        _Images = [
	            [
	                {
	                    content: '../work/freehand/0.png'
	                },
	                {
	                    content: '../work/freehand/1.png'
	                },
	                {
	                    content: '../work/freehand/ollllllllllllllppppppplzÅ.png'
	                },
	                {
	                    content: '../work/freehand/3.png'
	                },
	                {
	                    content: '../work/freehand/4.png'
	                },
	                {
	                    content: '../work/freehand/5.png'
	                },
	                {
	                    content: '../work/freehand/6.png'
	                },
	                {
	                    content: '../work/freehand/7.png'
	                },
	                {
	                    content: '../work/freehand/8.png'
	                },
	                {
	                    content: '../work/freehand/9.png'
	                },
	                {
	                    content: '../work/freehand/10.png'
	                }
	            ],[
	                {
	                    content: '../work/plane/0.png'
	                }
	            ],[
	                {
	                    content: '../work/interface/0.jpg'
	                },
	                {
	                    content: '../work/interface/1.jpg'
	                }
	            ]
	        ],
	        _Param = {};

	    function init() {
	        initElement();
	        initEvent();
	    }
	    function initElement() {
	        loadImg();
	        
	    }

	    function loadImg() {
	        var imgs = [
	            '../icon/first.png',
	            '../icon/last.png',
	            '../icon/left.png',
	            '../icon/profile.jpg',
	            '../icon/right.png',
	            '../icon/rong.png',
	            '../icon/diu.png'
	        ],
	            total = 0,
	            cur  = 0;

	        // 拉取作品图片
	        _Images.forEach(function(d, i) {
	            d.forEach(function(e, j){
	                imgs.push(e.content);
	            });
	        });
	        total = imgs.length;
	        imgs.forEach(function(e, i){
	            var img = new Image(); 
	            function load(){
	                cur++;
	                $('#load-progress').css('transform', 'scaleX(' + cur / total + ')');
	                if(cur === total){
	                    $('#loader-view').removeClass('open');
	                    renderImages();
	                }
	            } 
	            img.onload  = load;  
	            img.onerror = load;  
	            img.src=e;  
	        });
	    }

	    function renderImages() {
	        var _l, _i, _item,
	            map = [{
	                zh_desc: '手绘',
	                en_desc: 'FREEHAND'
	            },{
	                zh_desc: '平面设计',
	                en_desc: 'THE  PLANE DESIGN'
	            }];

	        for (_i = 0, _l = _Images.length; _i < _l; _i++) {
	            _item = $( mktpl(map[_i], _Tpl.collection) );

	            $('#container').append(_item);

	            var S = new iSlider({
	                dom: _item.find('.j_iSlider-wrapper')[0],
	                data: _Images[_i],
	                isLooping: 1,
	                isOverspread: 1,
	                animateTime: 800, // ms
	                plugins: ['nav', 'button'],
	                isTouchable : !os.isPc,
	                fixPage: false,
	                isOverspread: true,
	                fillSeam: true
	            });
	        }
	    }

	    function initEvent() {

	        function _alert(e) {
	            var data = {},
	                $container = $(e.target).parent().parent().parent().parent().parent();
	            data.zh_desc = $container.attr('data-zhdesc');
	            data.en_desc = $container.attr('data-endesc');
	            data.index   = $container.find('.islider-nav-index').html();
	            data.total   = $container.find('.islider-nav-total').html();
	            data.url     = $(e.target).attr('src');

	            $('footer').after( mktpl(data, _Tpl.alertTpl) );
	        }

	        if(os.isPc){
	            $(doc)
	            .on('click', '.j_iSlider-wrapper img', function(e) {
	                _alert(e);
	            });

	        }else{
	            fastClick($('#container')[0], function(e){
	                if(e.target.parentNode.className.indexOf('islider-sliding-focus') > -1){
	                    _alert(e);
	                }
	            });
	        }
	        $(doc).on('click touchend', '.dialog-wrap-close', function(e) {
	            $('.dialog-back').remove();
	        });
	    }
	    function mktpl(data, tpl){
	        for(var _k in data){
	            tpl = tpl.replace('{' + _k + '}', data[_k]);
	        }
	        return tpl;
	    }
	    function fastClick(target, clickEvtObj) {
	        var that = this;
	        var disY = 0,
	            disX = 0;
	        var prePageY = 0,
	            pageY = 0;
	        var prePageX = 0,
	            pageX = 0;
	        if (!target) {
	            return;
	        }
	        var handler = clickEvtObj instanceof Function ? clickEvtObj : false;

	        function stopPopEvents(e) {
	            e.stopPropagation();
	            e.preventDefault();
	        }
	        addEvent(target, "touchstart", function (evt) {
	            var elName = (evt.target || evt.srcElement);
	            disY = 0;
	            disX = 0;
	            prePageY = evt.touches[0].pageY;
	            prePageX = evt.touches[0].pageX;
	            clickEvtObj.touchstart && clickEvtObj.touchstart.call(that, evt, elName);
	        });
	        addEvent(target, "touchmove", function (evt) {
	            var elName = (evt.target || evt.srcElement);
	            pageY = evt.touches[0].pageY;
	            pageX = evt.touches[0].pageX;
	            disY += Math.abs(pageY - prePageY);
	            disX += Math.abs(pageX - prePageX);
	            prePageY = pageY;
	            prePageX = pageX;
	            clickEvtObj.touchmove && clickEvtObj.touchmove.call(that, evt, elName);
	        });
	        addEvent(target, "touchend", function (evt) {
	            if (Math.abs(disY) == 0 && Math.abs(disX) == 0) {
	                var elName = (evt.target || evt.srcElement);
	                clearAll();
	                touchTimeout = setTimeout(function () {
	                    handler ? handler.call(that, evt, elName) && stopPopEvents(evt) : clickEvtObj.touchend && clickEvtObj.touchend.call(that, evt, elName) && stopPopEvents(evt);
	                }, 10);
	            }
	            evt.stopPropagation();
	        });
	    }
	    function addEvent(target, type, callback) {
	        if (target.addEventListener) {
	            target.addEventListener(type, callback, false);
	        } else if (target.attachEvent) {
	            target.attachEvent("on" + type, callback);
	        } else {
	            target["on" + type] = callback;
	        }
	    }
	    var os = function() {  
	         var ua = navigator.userAgent,  
	         isWindowsPhone = /(?:Windows Phone)/.test(ua),  
	         isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,   
	         isAndroid = /(?:Android)/.test(ua),   
	         isFireFox = /(?:Firefox)/.test(ua),   
	         isChrome = /(?:Chrome|CriOS)/.test(ua),  
	         isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),  
	         isPhone = /(?:iPhone)/.test(ua) && !isTablet,  
	         isPc = !isPhone && !isAndroid && !isSymbian;  
	         return {  
	              isTablet: isTablet,  
	              isPhone: isPhone,  
	              isAndroid : isAndroid,  
	              isPc : isPc  
	         };  
	    }(); 
	    // 修复快速滑动后停止后容易跳转到帖子的体验问题
	    var touchTimeout;

	    function clearAll() {
	        clearTimeout(touchTimeout);
	        touchTimeout = null;
	    }
	    window.addEventListener('scroll', clearAll);
	    init();
	})(document, window, $)


/***/ },
/* 1 */
/***/ function(module, exports) {

	/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */

	var Zepto = module.exports = (function() {
	  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
	    document = window.document,
	    elementDisplay = {}, classCache = {},
	    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
	    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	    rootNodeRE = /^(?:body|html)$/i,
	    capitalRE = /([A-Z])/g,

	    // special attributes that should be get/set via method calls
	    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

	    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
	    table = document.createElement('table'),
	    tableRow = document.createElement('tr'),
	    containers = {
	      'tr': document.createElement('tbody'),
	      'tbody': table, 'thead': table, 'tfoot': table,
	      'td': tableRow, 'th': tableRow,
	      '*': document.createElement('div')
	    },
	    readyRE = /complete|loaded|interactive/,
	    simpleSelectorRE = /^[\w-]*$/,
	    class2type = {},
	    toString = class2type.toString,
	    zepto = {},
	    camelize, uniq,
	    tempParent = document.createElement('div'),
	    propMap = {
	      'tabindex': 'tabIndex',
	      'readonly': 'readOnly',
	      'for': 'htmlFor',
	      'class': 'className',
	      'maxlength': 'maxLength',
	      'cellspacing': 'cellSpacing',
	      'cellpadding': 'cellPadding',
	      'rowspan': 'rowSpan',
	      'colspan': 'colSpan',
	      'usemap': 'useMap',
	      'frameborder': 'frameBorder',
	      'contenteditable': 'contentEditable'
	    },
	    isArray = Array.isArray ||
	      function(object){ return object instanceof Array }

	  zepto.matches = function(element, selector) {
	    if (!selector || !element || element.nodeType !== 1) return false
	    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
	                          element.oMatchesSelector || element.matchesSelector
	    if (matchesSelector) return matchesSelector.call(element, selector)
	    // fall back to performing a selector:
	    var match, parent = element.parentNode, temp = !parent
	    if (temp) (parent = tempParent).appendChild(element)
	    match = ~zepto.qsa(parent, selector).indexOf(element)
	    temp && tempParent.removeChild(element)
	    return match
	  }

	  function type(obj) {
	    return obj == null ? String(obj) :
	      class2type[toString.call(obj)] || "object"
	  }

	  function isFunction(value) { return type(value) == "function" }
	  function isWindow(obj)     { return obj != null && obj == obj.window }
	  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
	  function isObject(obj)     { return type(obj) == "object" }
	  function isPlainObject(obj) {
	    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
	  }
	  function likeArray(obj) { return typeof obj.length == 'number' }

	  function compact(array) { return filter.call(array, function(item){ return item != null }) }
	  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
	  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
	  function dasherize(str) {
	    return str.replace(/::/g, '/')
	           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
	           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
	           .replace(/_/g, '-')
	           .toLowerCase()
	  }
	  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

	  function classRE(name) {
	    return name in classCache ?
	      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
	  }

	  function maybeAddPx(name, value) {
	    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
	  }

	  function defaultDisplay(nodeName) {
	    var element, display
	    if (!elementDisplay[nodeName]) {
	      element = document.createElement(nodeName)
	      document.body.appendChild(element)
	      display = getComputedStyle(element, '').getPropertyValue("display")
	      element.parentNode.removeChild(element)
	      display == "none" && (display = "block")
	      elementDisplay[nodeName] = display
	    }
	    return elementDisplay[nodeName]
	  }

	  function children(element) {
	    return 'children' in element ?
	      slice.call(element.children) :
	      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
	  }

	  // `$.zepto.fragment` takes a html string and an optional tag name
	  // to generate DOM nodes nodes from the given html string.
	  // The generated DOM nodes are returned as an array.
	  // This function can be overriden in plugins for example to make
	  // it compatible with browsers that don't support the DOM fully.
	  zepto.fragment = function(html, name, properties) {
	    var dom, nodes, container

	    // A special case optimization for a single tag
	    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

	    if (!dom) {
	      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
	      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
	      if (!(name in containers)) name = '*'

	      container = containers[name]
	      container.innerHTML = '' + html
	      dom = $.each(slice.call(container.childNodes), function(){
	        container.removeChild(this)
	      })
	    }

	    if (isPlainObject(properties)) {
	      nodes = $(dom)
	      $.each(properties, function(key, value) {
	        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
	        else nodes.attr(key, value)
	      })
	    }

	    return dom
	  }

	  // `$.zepto.Z` swaps out the prototype of the given `dom` array
	  // of nodes with `$.fn` and thus supplying all the Zepto functions
	  // to the array. Note that `__proto__` is not supported on Internet
	  // Explorer. This method can be overriden in plugins.
	  zepto.Z = function(dom, selector) {
	    dom = dom || []
	    dom.__proto__ = $.fn
	    dom.selector = selector || ''
	    return dom
	  }

	  // `$.zepto.isZ` should return `true` if the given object is a Zepto
	  // collection. This method can be overriden in plugins.
	  zepto.isZ = function(object) {
	    return object instanceof zepto.Z
	  }

	  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	  // takes a CSS selector and an optional context (and handles various
	  // special cases).
	  // This method can be overriden in plugins.
	  zepto.init = function(selector, context) {
	    var dom
	    // If nothing given, return an empty Zepto collection
	    if (!selector) return zepto.Z()
	    // Optimize for string selectors
	    else if (typeof selector == 'string') {
	      selector = selector.trim()
	      // If it's a html fragment, create nodes from it
	      // Note: In both Chrome 21 and Firefox 15, DOM error 12
	      // is thrown if the fragment doesn't begin with <
	      if (selector[0] == '<' && fragmentRE.test(selector))
	        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // If it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // If a function is given, call it when the DOM is ready
	    else if (isFunction(selector)) return $(document).ready(selector)
	    // If a Zepto collection is given, just return it
	    else if (zepto.isZ(selector)) return selector
	    else {
	      // normalize array if an array of nodes is given
	      if (isArray(selector)) dom = compact(selector)
	      // Wrap DOM nodes.
	      else if (isObject(selector))
	        dom = [selector], selector = null
	      // If it's a html fragment, create nodes from it
	      else if (fragmentRE.test(selector))
	        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // And last but no least, if it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // create a new Zepto collection from the nodes found
	    return zepto.Z(dom, selector)
	  }

	  // `$` will be the base `Zepto` object. When calling this
	  // function just call `$.zepto.init, which makes the implementation
	  // details of selecting nodes and creating Zepto collections
	  // patchable in plugins.
	  $ = function(selector, context){
	    return zepto.init(selector, context)
	  }

	  function extend(target, source, deep) {
	    for (key in source)
	      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
	          target[key] = {}
	        if (isArray(source[key]) && !isArray(target[key]))
	          target[key] = []
	        extend(target[key], source[key], deep)
	      }
	      else if (source[key] !== undefined) target[key] = source[key]
	  }

	  // Copy all but undefined properties from one or more
	  // objects to the `target` object.
	  $.extend = function(target){
	    var deep, args = slice.call(arguments, 1)
	    if (typeof target == 'boolean') {
	      deep = target
	      target = args.shift()
	    }
	    args.forEach(function(arg){ extend(target, arg, deep) })
	    return target
	  }

	  // `$.zepto.qsa` is Zepto's CSS selector implementation which
	  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	  // This method can be overriden in plugins.
	  zepto.qsa = function(element, selector){
	    var found,
	        maybeID = selector[0] == '#',
	        maybeClass = !maybeID && selector[0] == '.',
	        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
	        isSimple = simpleSelectorRE.test(nameOnly)
	    return (isDocument(element) && isSimple && maybeID) ?
	      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
	      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
	      slice.call(
	        isSimple && !maybeID ?
	          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	          element.getElementsByTagName(selector) : // Or a tag
	          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	      )
	  }

	  function filtered(nodes, selector) {
	    return selector == null ? $(nodes) : $(nodes).filter(selector)
	  }

	  $.contains = document.documentElement.contains ?
	    function(parent, node) {
	      return parent !== node && parent.contains(node)
	    } :
	    function(parent, node) {
	      while (node && (node = node.parentNode))
	        if (node === parent) return true
	      return false
	    }

	  function funcArg(context, arg, idx, payload) {
	    return isFunction(arg) ? arg.call(context, idx, payload) : arg
	  }

	  function setAttribute(node, name, value) {
	    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
	  }

	  // access className property while respecting SVGAnimatedString
	  function className(node, value){
	    var klass = node.className || '',
	        svg   = klass && klass.baseVal !== undefined

	    if (value === undefined) return svg ? klass.baseVal : klass
	    svg ? (klass.baseVal = value) : (node.className = value)
	  }

	  // "true"  => true
	  // "false" => false
	  // "null"  => null
	  // "42"    => 42
	  // "42.5"  => 42.5
	  // "08"    => "08"
	  // JSON    => parse if valid
	  // String  => self
	  function deserializeValue(value) {
	    try {
	      return value ?
	        value == "true" ||
	        ( value == "false" ? false :
	          value == "null" ? null :
	          +value + "" == value ? +value :
	          /^[\[\{]/.test(value) ? $.parseJSON(value) :
	          value )
	        : value
	    } catch(e) {
	      return value
	    }
	  }

	  $.type = type
	  $.isFunction = isFunction
	  $.isWindow = isWindow
	  $.isArray = isArray
	  $.isPlainObject = isPlainObject

	  $.isEmptyObject = function(obj) {
	    var name
	    for (name in obj) return false
	    return true
	  }

	  $.inArray = function(elem, array, i){
	    return emptyArray.indexOf.call(array, elem, i)
	  }

	  $.camelCase = camelize
	  $.trim = function(str) {
	    return str == null ? "" : String.prototype.trim.call(str)
	  }

	  // plugin compatibility
	  $.uuid = 0
	  $.support = { }
	  $.expr = { }

	  $.map = function(elements, callback){
	    var value, values = [], i, key
	    if (likeArray(elements))
	      for (i = 0; i < elements.length; i++) {
	        value = callback(elements[i], i)
	        if (value != null) values.push(value)
	      }
	    else
	      for (key in elements) {
	        value = callback(elements[key], key)
	        if (value != null) values.push(value)
	      }
	    return flatten(values)
	  }

	  $.each = function(elements, callback){
	    var i, key
	    if (likeArray(elements)) {
	      for (i = 0; i < elements.length; i++)
	        if (callback.call(elements[i], i, elements[i]) === false) return elements
	    } else {
	      for (key in elements)
	        if (callback.call(elements[key], key, elements[key]) === false) return elements
	    }

	    return elements
	  }

	  $.grep = function(elements, callback){
	    return filter.call(elements, callback)
	  }

	  if (window.JSON) $.parseJSON = JSON.parse

	  // Populate the class2type map
	  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	    class2type[ "[object " + name + "]" ] = name.toLowerCase()
	  })

	  // Define methods that will be available on all
	  // Zepto collections
	  $.fn = {
	    // Because a collection acts like an array
	    // copy over these useful array functions.
	    forEach: emptyArray.forEach,
	    reduce: emptyArray.reduce,
	    push: emptyArray.push,
	    sort: emptyArray.sort,
	    indexOf: emptyArray.indexOf,
	    concat: emptyArray.concat,

	    // `map` and `slice` in the jQuery API work differently
	    // from their array counterparts
	    map: function(fn){
	      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
	    },
	    slice: function(){
	      return $(slice.apply(this, arguments))
	    },

	    ready: function(callback){
	      // need to check if document.body exists for IE as that browser reports
	      // document ready when it hasn't yet created the body element
	      if (readyRE.test(document.readyState) && document.body) callback($)
	      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
	      return this
	    },
	    get: function(idx){
	      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
	    },
	    toArray: function(){ return this.get() },
	    size: function(){
	      return this.length
	    },
	    remove: function(){
	      return this.each(function(){
	        if (this.parentNode != null)
	          this.parentNode.removeChild(this)
	      })
	    },
	    each: function(callback){
	      emptyArray.every.call(this, function(el, idx){
	        return callback.call(el, idx, el) !== false
	      })
	      return this
	    },
	    filter: function(selector){
	      if (isFunction(selector)) return this.not(this.not(selector))
	      return $(filter.call(this, function(element){
	        return zepto.matches(element, selector)
	      }))
	    },
	    add: function(selector,context){
	      return $(uniq(this.concat($(selector,context))))
	    },
	    is: function(selector){
	      return this.length > 0 && zepto.matches(this[0], selector)
	    },
	    not: function(selector){
	      var nodes=[]
	      if (isFunction(selector) && selector.call !== undefined)
	        this.each(function(idx){
	          if (!selector.call(this,idx)) nodes.push(this)
	        })
	      else {
	        var excludes = typeof selector == 'string' ? this.filter(selector) :
	          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
	        this.forEach(function(el){
	          if (excludes.indexOf(el) < 0) nodes.push(el)
	        })
	      }
	      return $(nodes)
	    },
	    has: function(selector){
	      return this.filter(function(){
	        return isObject(selector) ?
	          $.contains(this, selector) :
	          $(this).find(selector).size()
	      })
	    },
	    eq: function(idx){
	      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
	    },
	    first: function(){
	      var el = this[0]
	      return el && !isObject(el) ? el : $(el)
	    },
	    last: function(){
	      var el = this[this.length - 1]
	      return el && !isObject(el) ? el : $(el)
	    },
	    find: function(selector){
	      var result, $this = this
	      if (!selector) result = $()
	      else if (typeof selector == 'object')
	        result = $(selector).filter(function(){
	          var node = this
	          return emptyArray.some.call($this, function(parent){
	            return $.contains(parent, node)
	          })
	        })
	      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
	      else result = this.map(function(){ return zepto.qsa(this, selector) })
	      return result
	    },
	    closest: function(selector, context){
	      var node = this[0], collection = false
	      if (typeof selector == 'object') collection = $(selector)
	      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
	        node = node !== context && !isDocument(node) && node.parentNode
	      return $(node)
	    },
	    parents: function(selector){
	      var ancestors = [], nodes = this
	      while (nodes.length > 0)
	        nodes = $.map(nodes, function(node){
	          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	            ancestors.push(node)
	            return node
	          }
	        })
	      return filtered(ancestors, selector)
	    },
	    parent: function(selector){
	      return filtered(uniq(this.pluck('parentNode')), selector)
	    },
	    children: function(selector){
	      return filtered(this.map(function(){ return children(this) }), selector)
	    },
	    contents: function() {
	      return this.map(function() { return slice.call(this.childNodes) })
	    },
	    siblings: function(selector){
	      return filtered(this.map(function(i, el){
	        return filter.call(children(el.parentNode), function(child){ return child!==el })
	      }), selector)
	    },
	    empty: function(){
	      return this.each(function(){ this.innerHTML = '' })
	    },
	    // `pluck` is borrowed from Prototype.js
	    pluck: function(property){
	      return $.map(this, function(el){ return el[property] })
	    },
	    show: function(){
	      return this.each(function(){
	        this.style.display == "none" && (this.style.display = '')
	        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
	          this.style.display = defaultDisplay(this.nodeName)
	      })
	    },
	    replaceWith: function(newContent){
	      return this.before(newContent).remove()
	    },
	    wrap: function(structure){
	      var func = isFunction(structure)
	      if (this[0] && !func)
	        var dom   = $(structure).get(0),
	            clone = dom.parentNode || this.length > 1

	      return this.each(function(index){
	        $(this).wrapAll(
	          func ? structure.call(this, index) :
	            clone ? dom.cloneNode(true) : dom
	        )
	      })
	    },
	    wrapAll: function(structure){
	      if (this[0]) {
	        $(this[0]).before(structure = $(structure))
	        var children
	        // drill down to the inmost element
	        while ((children = structure.children()).length) structure = children.first()
	        $(structure).append(this)
	      }
	      return this
	    },
	    wrapInner: function(structure){
	      var func = isFunction(structure)
	      return this.each(function(index){
	        var self = $(this), contents = self.contents(),
	            dom  = func ? structure.call(this, index) : structure
	        contents.length ? contents.wrapAll(dom) : self.append(dom)
	      })
	    },
	    unwrap: function(){
	      this.parent().each(function(){
	        $(this).replaceWith($(this).children())
	      })
	      return this
	    },
	    clone: function(){
	      return this.map(function(){ return this.cloneNode(true) })
	    },
	    hide: function(){
	      return this.css("display", "none")
	    },
	    toggle: function(setting){
	      return this.each(function(){
	        var el = $(this)
	        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
	      })
	    },
	    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
	    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
	    html: function(html){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var originHtml = this.innerHTML
	          $(this).empty().append( funcArg(this, html, idx, originHtml) )
	        }) :
	        (0 in this ? this[0].innerHTML : null)
	    },
	    text: function(text){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var newText = funcArg(this, text, idx, this.textContent)
	          this.textContent = newText == null ? '' : ''+newText
	        }) :
	        (0 in this ? this[0].textContent : null)
	    },
	    attr: function(name, value){
	      var result
	      return (typeof name == 'string' && !(1 in arguments)) ?
	        (!this.length || this[0].nodeType !== 1 ? undefined :
	          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
	        ) :
	        this.each(function(idx){
	          if (this.nodeType !== 1) return
	          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
	          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
	        })
	    },
	    removeAttr: function(name){
	      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
	        setAttribute(this, attribute)
	      }, this)})
	    },
	    prop: function(name, value){
	      name = propMap[name] || name
	      return (1 in arguments) ?
	        this.each(function(idx){
	          this[name] = funcArg(this, value, idx, this[name])
	        }) :
	        (this[0] && this[0][name])
	    },
	    data: function(name, value){
	      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

	      var data = (1 in arguments) ?
	        this.attr(attrName, value) :
	        this.attr(attrName)

	      return data !== null ? deserializeValue(data) : undefined
	    },
	    val: function(value){
	      return 0 in arguments ?
	        this.each(function(idx){
	          this.value = funcArg(this, value, idx, this.value)
	        }) :
	        (this[0] && (this[0].multiple ?
	           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
	           this[0].value)
	        )
	    },
	    offset: function(coordinates){
	      if (coordinates) return this.each(function(index){
	        var $this = $(this),
	            coords = funcArg(this, coordinates, index, $this.offset()),
	            parentOffset = $this.offsetParent().offset(),
	            props = {
	              top:  coords.top  - parentOffset.top,
	              left: coords.left - parentOffset.left
	            }

	        if ($this.css('position') == 'static') props['position'] = 'relative'
	        $this.css(props)
	      })
	      if (!this.length) return null
	      var obj = this[0].getBoundingClientRect()
	      return {
	        left: obj.left + window.pageXOffset,
	        top: obj.top + window.pageYOffset,
	        width: Math.round(obj.width),
	        height: Math.round(obj.height)
	      }
	    },
	    css: function(property, value){
	      if (arguments.length < 2) {
	        var computedStyle, element = this[0]
	        if(!element) return
	        computedStyle = getComputedStyle(element, '')
	        if (typeof property == 'string')
	          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
	        else if (isArray(property)) {
	          var props = {}
	          $.each(property, function(_, prop){
	            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
	          })
	          return props
	        }
	      }

	      var css = ''
	      if (type(property) == 'string') {
	        if (!value && value !== 0)
	          this.each(function(){ this.style.removeProperty(dasherize(property)) })
	        else
	          css = dasherize(property) + ":" + maybeAddPx(property, value)
	      } else {
	        for (key in property)
	          if (!property[key] && property[key] !== 0)
	            this.each(function(){ this.style.removeProperty(dasherize(key)) })
	          else
	            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
	      }

	      return this.each(function(){ this.style.cssText += ';' + css })
	    },
	    index: function(element){
	      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
	    },
	    hasClass: function(name){
	      if (!name) return false
	      return emptyArray.some.call(this, function(el){
	        return this.test(className(el))
	      }, classRE(name))
	    },
	    addClass: function(name){
	      if (!name) return this
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        classList = []
	        var cls = className(this), newName = funcArg(this, name, idx, cls)
	        newName.split(/\s+/g).forEach(function(klass){
	          if (!$(this).hasClass(klass)) classList.push(klass)
	        }, this)
	        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
	      })
	    },
	    removeClass: function(name){
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        if (name === undefined) return className(this, '')
	        classList = className(this)
	        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
	          classList = classList.replace(classRE(klass), " ")
	        })
	        className(this, classList.trim())
	      })
	    },
	    toggleClass: function(name, when){
	      if (!name) return this
	      return this.each(function(idx){
	        var $this = $(this), names = funcArg(this, name, idx, className(this))
	        names.split(/\s+/g).forEach(function(klass){
	          (when === undefined ? !$this.hasClass(klass) : when) ?
	            $this.addClass(klass) : $this.removeClass(klass)
	        })
	      })
	    },
	    scrollTop: function(value){
	      if (!this.length) return
	      var hasScrollTop = 'scrollTop' in this[0]
	      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
	      return this.each(hasScrollTop ?
	        function(){ this.scrollTop = value } :
	        function(){ this.scrollTo(this.scrollX, value) })
	    },
	    scrollLeft: function(value){
	      if (!this.length) return
	      var hasScrollLeft = 'scrollLeft' in this[0]
	      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
	      return this.each(hasScrollLeft ?
	        function(){ this.scrollLeft = value } :
	        function(){ this.scrollTo(value, this.scrollY) })
	    },
	    position: function() {
	      if (!this.length) return

	      var elem = this[0],
	        // Get *real* offsetParent
	        offsetParent = this.offsetParent(),
	        // Get correct offsets
	        offset       = this.offset(),
	        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

	      // Subtract element margins
	      // note: when an element has margin: auto the offsetLeft and marginLeft
	      // are the same in Safari causing offset.left to incorrectly be 0
	      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
	      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

	      // Add offsetParent borders
	      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
	      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

	      // Subtract the two offsets
	      return {
	        top:  offset.top  - parentOffset.top,
	        left: offset.left - parentOffset.left
	      }
	    },
	    offsetParent: function() {
	      return this.map(function(){
	        var parent = this.offsetParent || document.body
	        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
	          parent = parent.offsetParent
	        return parent
	      })
	    }
	  }

	  // for now
	  $.fn.detach = $.fn.remove

	  // Generate the `width` and `height` functions
	  ;['width', 'height'].forEach(function(dimension){
	    var dimensionProperty =
	      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

	    $.fn[dimension] = function(value){
	      var offset, el = this[0]
	      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
	        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
	        (offset = this.offset()) && offset[dimension]
	      else return this.each(function(idx){
	        el = $(this)
	        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
	      })
	    }
	  })

	  function traverseNode(node, fun) {
	    fun(node)
	    for (var i = 0, len = node.childNodes.length; i < len; i++)
	      traverseNode(node.childNodes[i], fun)
	  }

	  // Generate the `after`, `prepend`, `before`, `append`,
	  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	  adjacencyOperators.forEach(function(operator, operatorIndex) {
	    var inside = operatorIndex % 2 //=> prepend, append

	    $.fn[operator] = function(){
	      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	      var argType, nodes = $.map(arguments, function(arg) {
	            argType = type(arg)
	            return argType == "object" || argType == "array" || arg == null ?
	              arg : zepto.fragment(arg)
	          }),
	          parent, copyByClone = this.length > 1
	      if (nodes.length < 1) return this

	      return this.each(function(_, target){
	        parent = inside ? target : target.parentNode

	        // convert all methods to a "before" operation
	        target = operatorIndex == 0 ? target.nextSibling :
	                 operatorIndex == 1 ? target.firstChild :
	                 operatorIndex == 2 ? target :
	                 null

	        var parentInDocument = $.contains(document.documentElement, parent)

	        nodes.forEach(function(node){
	          if (copyByClone) node = node.cloneNode(true)
	          else if (!parent) return $(node).remove()

	          parent.insertBefore(node, target)
	          if (parentInDocument) traverseNode(node, function(el){
	            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
	               (!el.type || el.type === 'text/javascript') && !el.src)
	              window['eval'].call(window, el.innerHTML)
	          })
	        })
	      })
	    }

	    // after    => insertAfter
	    // prepend  => prependTo
	    // before   => insertBefore
	    // append   => appendTo
	    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
	      $(html)[operator](this)
	      return this
	    }
	  })

	  zepto.Z.prototype = $.fn

	  // Export internal API functions in the `$.zepto` namespace
	  zepto.uniq = uniq
	  zepto.deserializeValue = deserializeValue
	  $.zepto = zepto

	  return $
	})()

	;(function($){
	  var _zid = 1, undefined,
	      slice = Array.prototype.slice,
	      isFunction = $.isFunction,
	      isString = function(obj){ return typeof obj == 'string' },
	      handlers = {},
	      specialEvents={},
	      focusinSupported = 'onfocusin' in window,
	      focus = { focus: 'focusin', blur: 'focusout' },
	      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

	  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

	  function zid(element) {
	    return element._zid || (element._zid = _zid++)
	  }
	  function findHandlers(element, event, fn, selector) {
	    event = parse(event)
	    if (event.ns) var matcher = matcherFor(event.ns)
	    return (handlers[zid(element)] || []).filter(function(handler) {
	      return handler
	        && (!event.e  || handler.e == event.e)
	        && (!event.ns || matcher.test(handler.ns))
	        && (!fn       || zid(handler.fn) === zid(fn))
	        && (!selector || handler.sel == selector)
	    })
	  }
	  function parse(event) {
	    var parts = ('' + event).split('.')
	    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
	  }
	  function matcherFor(ns) {
	    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
	  }

	  function eventCapture(handler, captureSetting) {
	    return handler.del &&
	      (!focusinSupported && (handler.e in focus)) ||
	      !!captureSetting
	  }

	  function realEvent(type) {
	    return hover[type] || (focusinSupported && focus[type]) || type
	  }

	  function add(element, events, fn, data, selector, delegator, capture){
	    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
	    events.split(/\s/).forEach(function(event){
	      if (event == 'ready') return $(document).ready(fn)
	      var handler   = parse(event)
	      handler.fn    = fn
	      handler.sel   = selector
	      // emulate mouseenter, mouseleave
	      if (handler.e in hover) fn = function(e){
	        var related = e.relatedTarget
	        if (!related || (related !== this && !$.contains(this, related)))
	          return handler.fn.apply(this, arguments)
	      }
	      handler.del   = delegator
	      var callback  = delegator || fn
	      handler.proxy = function(e){
	        e = compatible(e)
	        if (e.isImmediatePropagationStopped()) return
	        e.data = data
	        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
	        if (result === false) e.preventDefault(), e.stopPropagation()
	        return result
	      }
	      handler.i = set.length
	      set.push(handler)
	      if ('addEventListener' in element)
	        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	    })
	  }
	  function remove(element, events, fn, selector, capture){
	    var id = zid(element)
	    ;(events || '').split(/\s/).forEach(function(event){
	      findHandlers(element, event, fn, selector).forEach(function(handler){
	        delete handlers[id][handler.i]
	      if ('removeEventListener' in element)
	        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	      })
	    })
	  }

	  $.event = { add: add, remove: remove }

	  $.proxy = function(fn, context) {
	    var args = (2 in arguments) && slice.call(arguments, 2)
	    if (isFunction(fn)) {
	      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
	      proxyFn._zid = zid(fn)
	      return proxyFn
	    } else if (isString(context)) {
	      if (args) {
	        args.unshift(fn[context], fn)
	        return $.proxy.apply(null, args)
	      } else {
	        return $.proxy(fn[context], fn)
	      }
	    } else {
	      throw new TypeError("expected function")
	    }
	  }

	  $.fn.bind = function(event, data, callback){
	    return this.on(event, data, callback)
	  }
	  $.fn.unbind = function(event, callback){
	    return this.off(event, callback)
	  }
	  $.fn.one = function(event, selector, data, callback){
	    return this.on(event, selector, data, callback, 1)
	  }

	  var returnTrue = function(){return true},
	      returnFalse = function(){return false},
	      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
	      eventMethods = {
	        preventDefault: 'isDefaultPrevented',
	        stopImmediatePropagation: 'isImmediatePropagationStopped',
	        stopPropagation: 'isPropagationStopped'
	      }

	  function compatible(event, source) {
	    if (source || !event.isDefaultPrevented) {
	      source || (source = event)

	      $.each(eventMethods, function(name, predicate) {
	        var sourceMethod = source[name]
	        event[name] = function(){
	          this[predicate] = returnTrue
	          return sourceMethod && sourceMethod.apply(source, arguments)
	        }
	        event[predicate] = returnFalse
	      })

	      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
	          'returnValue' in source ? source.returnValue === false :
	          source.getPreventDefault && source.getPreventDefault())
	        event.isDefaultPrevented = returnTrue
	    }
	    return event
	  }

	  function createProxy(event) {
	    var key, proxy = { originalEvent: event }
	    for (key in event)
	      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

	    return compatible(proxy, event)
	  }

	  $.fn.delegate = function(selector, event, callback){
	    return this.on(event, selector, callback)
	  }
	  $.fn.undelegate = function(selector, event, callback){
	    return this.off(event, selector, callback)
	  }

	  $.fn.live = function(event, callback){
	    $(document.body).delegate(this.selector, event, callback)
	    return this
	  }
	  $.fn.die = function(event, callback){
	    $(document.body).undelegate(this.selector, event, callback)
	    return this
	  }

	  $.fn.on = function(event, selector, data, callback, one){
	    var autoRemove, delegator, $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.on(type, selector, data, fn, one)
	      })
	      return $this
	    }

	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = data, data = selector, selector = undefined
	    if (isFunction(data) || data === false)
	      callback = data, data = undefined

	    if (callback === false) callback = returnFalse

	    return $this.each(function(_, element){
	      if (one) autoRemove = function(e){
	        remove(element, e.type, callback)
	        return callback.apply(this, arguments)
	      }

	      if (selector) delegator = function(e){
	        var evt, match = $(e.target).closest(selector, element).get(0)
	        if (match && match !== element) {
	          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
	          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
	        }
	      }

	      add(element, event, callback, data, selector, delegator || autoRemove)
	    })
	  }
	  $.fn.off = function(event, selector, callback){
	    var $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.off(type, selector, fn)
	      })
	      return $this
	    }

	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = selector, selector = undefined

	    if (callback === false) callback = returnFalse

	    return $this.each(function(){
	      remove(this, event, callback, selector)
	    })
	  }

	  $.fn.trigger = function(event, args){
	    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
	    event._args = args
	    return this.each(function(){
	      // handle focus(), blur() by calling them directly
	      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
	      // items in the collection might not be DOM elements
	      else if ('dispatchEvent' in this) this.dispatchEvent(event)
	      else $(this).triggerHandler(event, args)
	    })
	  }

	  // triggers event handlers on current element just as if an event occurred,
	  // doesn't trigger an actual event, doesn't bubble
	  $.fn.triggerHandler = function(event, args){
	    var e, result
	    this.each(function(i, element){
	      e = createProxy(isString(event) ? $.Event(event) : event)
	      e._args = args
	      e.target = element
	      $.each(findHandlers(element, event.type || event), function(i, handler){
	        result = handler.proxy(e)
	        if (e.isImmediatePropagationStopped()) return false
	      })
	    })
	    return result
	  }

	  // shortcut methods for `.bind(event, fn)` for each event type
	  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
	  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
	  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
	    $.fn[event] = function(callback) {
	      return (0 in arguments) ?
	        this.bind(event, callback) :
	        this.trigger(event)
	    }
	  })

	  $.Event = function(type, props) {
	    if (!isString(type)) props = type, type = props.type
	    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
	    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
	    event.initEvent(type, bubbles, true)
	    return compatible(event)
	  }

	})(Zepto)

	;(function($){
	  var jsonpID = 0,
	      document = window.document,
	      key,
	      name,
	      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	      scriptTypeRE = /^(?:text|application)\/javascript/i,
	      xmlTypeRE = /^(?:text|application)\/xml/i,
	      jsonType = 'application/json',
	      htmlType = 'text/html',
	      blankRE = /^\s*$/,
	      originAnchor = document.createElement('a')

	  originAnchor.href = window.location.href

	  // trigger a custom event and return false if it was cancelled
	  function triggerAndReturn(context, eventName, data) {
	    var event = $.Event(eventName)
	    $(context).trigger(event, data)
	    return !event.isDefaultPrevented()
	  }

	  // trigger an Ajax "global" event
	  function triggerGlobal(settings, context, eventName, data) {
	    if (settings.global) return triggerAndReturn(context || document, eventName, data)
	  }

	  // Number of active Ajax requests
	  $.active = 0

	  function ajaxStart(settings) {
	    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
	  }
	  function ajaxStop(settings) {
	    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
	  }

	  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	  function ajaxBeforeSend(xhr, settings) {
	    var context = settings.context
	    if (settings.beforeSend.call(context, xhr, settings) === false ||
	        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
	      return false

	    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
	  }
	  function ajaxSuccess(data, xhr, settings, deferred) {
	    var context = settings.context, status = 'success'
	    settings.success.call(context, data, status, xhr)
	    if (deferred) deferred.resolveWith(context, [data, status, xhr])
	    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
	    ajaxComplete(status, xhr, settings)
	  }
	  // type: "timeout", "error", "abort", "parsererror"
	  function ajaxError(error, type, xhr, settings, deferred) {
	    var context = settings.context
	    settings.error.call(context, xhr, type, error)
	    if (deferred) deferred.rejectWith(context, [xhr, type, error])
	    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
	    ajaxComplete(type, xhr, settings)
	  }
	  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	  function ajaxComplete(status, xhr, settings) {
	    var context = settings.context
	    settings.complete.call(context, xhr, status)
	    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
	    ajaxStop(settings)
	  }

	  // Empty function, used as default callback
	  function empty() {}

	  $.ajaxJSONP = function(options, deferred){
	    if (!('type' in options)) return $.ajax(options)

	    var _callbackName = options.jsonpCallback,
	      callbackName = ($.isFunction(_callbackName) ?
	        _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
	      script = document.createElement('script'),
	      originalCallback = window[callbackName],
	      responseData,
	      abort = function(errorType) {
	        $(script).triggerHandler('error', errorType || 'abort')
	      },
	      xhr = { abort: abort }, abortTimeout

	    if (deferred) deferred.promise(xhr)

	    $(script).on('load error', function(e, errorType){
	      clearTimeout(abortTimeout)
	      $(script).off().remove()

	      if (e.type == 'error' || !responseData) {
	        ajaxError(null, errorType || 'error', xhr, options, deferred)
	      } else {
	        ajaxSuccess(responseData[0], xhr, options, deferred)
	      }

	      window[callbackName] = originalCallback
	      if (responseData && $.isFunction(originalCallback))
	        originalCallback(responseData[0])

	      originalCallback = responseData = undefined
	    })

	    if (ajaxBeforeSend(xhr, options) === false) {
	      abort('abort')
	      return xhr
	    }

	    window[callbackName] = function(){
	      responseData = arguments
	    }

	    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
	    document.head.appendChild(script)

	    if (options.timeout > 0) abortTimeout = setTimeout(function(){
	      abort('timeout')
	    }, options.timeout)

	    return xhr
	  }

	  $.ajaxSettings = {
	    // Default type of request
	    type: 'GET',
	    // Callback that is executed before request
	    beforeSend: empty,
	    // Callback that is executed if the request succeeds
	    success: empty,
	    // Callback that is executed the the server drops error
	    error: empty,
	    // Callback that is executed on request complete (both: error and success)
	    complete: empty,
	    // The context for the callbacks
	    context: null,
	    // Whether to trigger "global" Ajax events
	    global: true,
	    // Transport
	    xhr: function () {
	      return new window.XMLHttpRequest()
	    },
	    // MIME types mapping
	    // IIS returns Javascript as "application/x-javascript"
	    accepts: {
	      script: 'text/javascript, application/javascript, application/x-javascript',
	      json:   jsonType,
	      xml:    'application/xml, text/xml',
	      html:   htmlType,
	      text:   'text/plain'
	    },
	    // Whether the request is to another domain
	    crossDomain: false,
	    // Default timeout
	    timeout: 0,
	    // Whether data should be serialized to string
	    processData: true,
	    // Whether the browser should be allowed to cache GET responses
	    cache: true
	  }

	  function mimeToDataType(mime) {
	    if (mime) mime = mime.split(';', 2)[0]
	    return mime && ( mime == htmlType ? 'html' :
	      mime == jsonType ? 'json' :
	      scriptTypeRE.test(mime) ? 'script' :
	      xmlTypeRE.test(mime) && 'xml' ) || 'text'
	  }

	  function appendQuery(url, query) {
	    if (query == '') return url
	    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
	  }

	  // serialize payload and append it to the URL for GET requests
	  function serializeData(options) {
	    if (options.processData && options.data && $.type(options.data) != "string")
	      options.data = $.param(options.data, options.traditional)
	    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
	      options.url = appendQuery(options.url, options.data), options.data = undefined
	  }

	  $.ajax = function(options){
	    var settings = $.extend({}, options || {}),
	        deferred = $.Deferred && $.Deferred(),
	        urlAnchor
	    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

	    ajaxStart(settings)

	    if (!settings.crossDomain) {
	      urlAnchor = document.createElement('a')
	      urlAnchor.href = settings.url
	      urlAnchor.href = urlAnchor.href
	      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
	    }

	    if (!settings.url) settings.url = window.location.toString()
	    serializeData(settings)

	    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
	    if (hasPlaceholder) dataType = 'jsonp'

	    if (settings.cache === false || (
	         (!options || options.cache !== true) &&
	         ('script' == dataType || 'jsonp' == dataType)
	        ))
	      settings.url = appendQuery(settings.url, '_=' + Date.now())

	    if ('jsonp' == dataType) {
	      if (!hasPlaceholder)
	        settings.url = appendQuery(settings.url,
	          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
	      return $.ajaxJSONP(settings, deferred)
	    }

	    var mime = settings.accepts[dataType],
	        headers = { },
	        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
	        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	        xhr = settings.xhr(),
	        nativeSetHeader = xhr.setRequestHeader,
	        abortTimeout

	    if (deferred) deferred.promise(xhr)

	    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
	    setHeader('Accept', mime || '*/*')
	    if (mime = settings.mimeType || mime) {
	      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
	      xhr.overrideMimeType && xhr.overrideMimeType(mime)
	    }
	    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
	      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

	    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
	    xhr.setRequestHeader = setHeader

	    xhr.onreadystatechange = function(){
	      if (xhr.readyState == 4) {
	        xhr.onreadystatechange = empty
	        clearTimeout(abortTimeout)
	        var result, error = false
	        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
	          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
	          result = xhr.responseText

	          try {
	            // http://perfectionkills.com/global-eval-what-are-the-options/
	            if (dataType == 'script')    (1,eval)(result)
	            else if (dataType == 'xml')  result = xhr.responseXML
	            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
	          } catch (e) { error = e }

	          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
	          else ajaxSuccess(result, xhr, settings, deferred)
	        } else {
	          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
	        }
	      }
	    }

	    if (ajaxBeforeSend(xhr, settings) === false) {
	      xhr.abort()
	      ajaxError(null, 'abort', xhr, settings, deferred)
	      return xhr
	    }

	    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

	    var async = 'async' in settings ? settings.async : true
	    xhr.open(settings.type, settings.url, async, settings.username, settings.password)

	    for (name in headers) nativeSetHeader.apply(xhr, headers[name])

	    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
	        xhr.onreadystatechange = empty
	        xhr.abort()
	        ajaxError(null, 'timeout', xhr, settings, deferred)
	      }, settings.timeout)

	    // avoid sending empty string (#319)
	    xhr.send(settings.data ? settings.data : null)
	    return xhr
	  }

	  // handle optional data/success arguments
	  function parseArguments(url, data, success, dataType) {
	    if ($.isFunction(data)) dataType = success, success = data, data = undefined
	    if (!$.isFunction(success)) dataType = success, success = undefined
	    return {
	      url: url
	    , data: data
	    , success: success
	    , dataType: dataType
	    }
	  }

	  $.get = function(/* url, data, success, dataType */){
	    return $.ajax(parseArguments.apply(null, arguments))
	  }

	  $.post = function(/* url, data, success, dataType */){
	    var options = parseArguments.apply(null, arguments)
	    options.type = 'POST'
	    return $.ajax(options)
	  }

	  $.getJSON = function(/* url, data, success */){
	    var options = parseArguments.apply(null, arguments)
	    options.dataType = 'json'
	    return $.ajax(options)
	  }

	  $.fn.load = function(url, data, success){
	    if (!this.length) return this
	    var self = this, parts = url.split(/\s/), selector,
	        options = parseArguments(url, data, success),
	        callback = options.success
	    if (parts.length > 1) options.url = parts[0], selector = parts[1]
	    options.success = function(response){
	      self.html(selector ?
	        $('<div>').html(response.replace(rscript, "")).find(selector)
	        : response)
	      callback && callback.apply(self, arguments)
	    }
	    $.ajax(options)
	    return this
	  }

	  var escape = encodeURIComponent

	  function serialize(params, obj, traditional, scope){
	    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
	    $.each(obj, function(key, value) {
	      type = $.type(value)
	      if (scope) key = traditional ? scope :
	        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
	      // handle data in serializeArray() format
	      if (!scope && array) params.add(value.name, value.value)
	      // recurse into nested objects
	      else if (type == "array" || (!traditional && type == "object"))
	        serialize(params, value, traditional, key)
	      else params.add(key, value)
	    })
	  }

	  $.param = function(obj, traditional){
	    var params = []
	    params.add = function(key, value) {
	      if ($.isFunction(value)) value = value()
	      if (value == null) value = ""
	      this.push(escape(key) + '=' + escape(value))
	    }
	    serialize(params, obj, traditional)
	    return params.join('&').replace(/%20/g, '+')
	  }
	})(Zepto)

	;(function($){
	  $.fn.serializeArray = function() {
	    var name, type, result = [],
	      add = function(value) {
	        if (value.forEach) return value.forEach(add)
	        result.push({ name: name, value: value })
	      }
	    if (this[0]) $.each(this[0].elements, function(_, field){
	      type = field.type, name = field.name
	      if (name && field.nodeName.toLowerCase() != 'fieldset' &&
	        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
	        ((type != 'radio' && type != 'checkbox') || field.checked))
	          add($(field).val())
	    })
	    return result
	  }

	  $.fn.serialize = function(){
	    var result = []
	    this.serializeArray().forEach(function(elm){
	      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
	    })
	    return result.join('&')
	  }

	  $.fn.submit = function(callback) {
	    if (0 in arguments) this.bind('submit', callback)
	    else if (this.length) {
	      var event = $.Event('submit')
	      this.eq(0).trigger(event)
	      if (!event.isDefaultPrevented()) this.get(0).submit()
	    }
	    return this
	  }

	})(Zepto)

	;(function($){
	  // __proto__ doesn't exist on IE<11, so redefine
	  // the Z function to use object extension instead
	  if (!('__proto__' in {})) {
	    $.extend($.zepto, {
	      Z: function(dom, selector){
	        dom = dom || []
	        $.extend(dom, $.fn)
	        dom.selector = selector || ''
	        dom.__Z = true
	        return dom
	      },
	      // this is a kludge but works
	      isZ: function(object){
	        return $.type(object) === 'array' && '__Z' in object
	      }
	    })
	  }

	  // getComputedStyle shouldn't freak out when called
	  // without a valid element as argument
	  try {
	    getComputedStyle(undefined)
	  } catch(e) {
	    var nativeGetComputedStyle = getComputedStyle;
	    window.getComputedStyle = function(element){
	      try {
	        return nativeGetComputedStyle(element)
	      } catch(e) {
	        return null
	      }
	    }
	  }
	})(Zepto)

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {!function(t){"use strict";function e(){}function i(t,e){return e.indexOf(t)>-1}function n(t){return"[object Array]"===Object.prototype.toString.call(t)}function s(t){return"[object Object]"===Object.prototype.toString.call(t)}function a(t,e){return t.className.match(new RegExp("(\\s|^)("+e+")(\\s|$)"))}function r(t,e){a(t,e)||(t.className+=" "+e)}function o(t,e){a(t,e)&&(t.className=t.className.replace(RegExp("(\\s|^)("+e+")(\\s|$)"),"$3"))}function h(t){return/<\/?[^>]*>/.test(t)?!1:/^(?:(https|http|ftp|rtsp|mms):)?(\/\/)?(\w+:{0,1}\w*@)?([^\?#:\/]+\.[a-z]+|\d+\.\d+\.\d+\.\d+)?(:[0-9]+)?((?:\.?\/)?([^\?#]*)?(\?[^#]+)?(#.+)?)?$/.test(t)}function l(t){try{return t instanceof HTMLElement}catch(e){return"object"==typeof t&&1===t.nodeType&&"object"==typeof t.style&&"object"==typeof t.ownerDocument}}function d(t){return Array.prototype.slice.apply(t,Array.prototype.slice.call(arguments,1))}function c(t){return t.replace(/^[a-z]/,function(t){return t.toUpperCase()})}var u=function(){var t=d(arguments,0,3);if(!t.length)throw new Error("Parameters required!");var e=s(t.slice(-1)[0])?t.pop():{};switch(t.length){case 2:e.data=e.data||t[1];case 1:e.dom=e.dom||t[0]}if(!e.dom)throw new Error("Container can not be empty!");if(!l(e.dom))throw new Error("Container must be a HTMLElement instance!");if(!e.data||!e.data.length)throw new Error("Data must be an array and must have more than one element!");this._opts=e,e=null,t=null,this._setting(),this.fire("initialize"),this._renderWrapper(),this._initPlugins(),this._bindHandler(),this.fire("initialized"),this._autoPlay()};u.VERSION="2.2.0",u.EVENTS=["initialize","initialized","pluginInitialize","pluginInitialized","renderComplete","slide","slideStart","slideEnd","slideChange","slideChanged","slideRestore","slideRestored","loadData","reset","destroy"],u.EASING=[["linear","ease","ease-in","ease-out","ease-in-out"],/cubic-bezier\(([^\d]*(\d+.?\d*)[^\,]*\,?){4}\)/],u.FIX_PAGE_TAGS=["SELECT","INPUT","TEXTAREA","BUTTON","LABEL"],u.NODE_TYPE={unknown:"unknown",empty:"empty",pic:"pic",dom:"dom",html:"html",node:"node",element:"element"},u.TRANSITION_END_EVENT=null,u.BROWSER_PREFIX=null,function(){var t=document.createElement("fakeElement");[["WebkitTransition","webkitTransitionEnd","webkit"],["transition","transitionend",null],["MozTransition","transitionend","moz"],["OTransition","oTransitionEnd","o"]].some(function(e){return void 0!==t.style[e[0]]?(u.TRANSITION_END_EVENT=e[1],u.BROWSER_PREFIX=e[2],!0):void 0})}(),u.DEVICE_EVENTS=function(){var e=!!("ontouchstart"in t&&!/Mac OS X /.test(t.navigator.userAgent)||t.DocumentTouch&&document instanceof t.DocumentTouch);return{hasTouch:e,startEvt:e?"touchstart":"mousedown",moveEvt:e?"touchmove":"mousemove",endEvt:e?"touchend":"mouseup",cancelEvt:e?"touchcancel":"mouseout",resizeEvt:"onorientationchange"in t?"orientationchange":"resize"}}(),u.extend=function(){var t,e,i=arguments;switch(i.length){case 0:return;case 1:t=u.prototype,e=i[0];break;case 2:t=i[0],e=i[1]}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},u.plugins={},u.regPlugin=function(t,e){u.plugins[t]=u.plugins[t]||e},u.styleProp=function(t,e){return u.BROWSER_PREFIX?e?u.BROWSER_PREFIX+c(t):"-"+u.BROWSER_PREFIX+"-"+t:t},u.setStyle=function(t,e,i){t.style[u.styleProp(e,1)]=i},u.getStyle=function(t,e){return t.style[u.styleProp(e,1)]},u._animateFuncs={normal:function(){function t(t,e,i,n,s){u.setStyle(t,"transform","translateZ(0) translate"+e+"("+(s+i*(n-1))+"px)")}return t.effect=u.styleProp("transform"),t}()};var f=u.prototype;f.extend=u.extend,f._setting=function(){var s=this;s._plugins=u.plugins,s._animateFuncs=u._animateFuncs,s._holding=!1,s._locking=!1,s._intermediateScene=null,s._transitionEndHandler=null,s._LSN={autoPlay:null,resize:null,transitionEnd:null},s.currentEl=null,s._EventHandle={},s.onMoving=!1,s.onSliding=!1,s.direction=null;var a=this._opts;s.wrap=a.dom,s.data=a.data,s.isVertical=!!a.isVertical,s.isOverspread=!!a.isOverspread,s.duration=a.duration||2e3,s.initIndex=a.initIndex>0&&a.initIndex<=a.data.length-1?a.initIndex:0,s.fixPage=function(){var t=a.fixPage;return t===!1||0===t?!1:n(t)&&t.length>0||"string"==typeof t&&""!==t?[].concat(t).toString():!0}(),s.fillSeam=!!a.fillSeam,s.slideIndex=s.slideIndex||s.initIndex||0,s.axis=s.isVertical?"Y":"X",s.reverseAxis="Y"===s.axis?"X":"Y",s.width="number"==typeof a.width?a.width:s.wrap.offsetWidth,s.height="number"==typeof a.height?a.height:s.wrap.offsetHeight,s.ratio=s.height/s.width,s.scale=s.isVertical?s.height:s.width,s.offset=s.offset||{X:0,Y:0},s.isTouchable=null==a.isTouchable?!0:!!a.isTouchable,s.isLooping=!!(a.isLooping&&s.data.length>1),s.dampingForce=Math.max(0,Math.min(1,parseFloat(a.dampingForce)||0)),s.delay=a.delay||0,s.isAutoplay=!!(a.isAutoplay&&s.data.length>1),s.animateType=a.animateType in s._animateFuncs?a.animateType:"normal",s._animateFunc=s._animateFuncs[s.animateType],s._animateReverse=function(){var t=[];for(var e in s._animateFuncs)s._animateFuncs.hasOwnProperty(e)&&s._animateFuncs[e].reverse&&t.push(e);return t}(),s.isVertical&&"card"===s.animateType&&(s.isOverspread=!0),s.log=a.isDebug?function(){t.console.log.apply(t.console,arguments)}:e,s._damping=function(){return function(t){return.62*Math.atan(Math.abs(t)/s.scale)*(1-s.dampingForce)*s.scale*(t>0?1:-1)}}(),s.animateTime=null!=a.animateTime&&a.animateTime>-1?a.animateTime:300,s.animateEasing=i(a.animateEasing,u.EASING[0])||u.EASING[1].test(a.animateEasing)?a.animateEasing:"ease",s.deviceEvents=u.DEVICE_EVENTS,s.fingerRecognitionRange=a.fingerRecognitionRange>-1?parseInt(a.fingerRecognitionRange):10,s.events={},u.EVENTS.forEach(function(t){var e=a["on"+t.replace(/^\w{1}/,function(t){return t.toUpperCase()})]||a["on"+t.toLowerCase()];"function"==typeof e&&s.on(t,e,1)}),s.pluginConfig=function(){var t={};return n(a.plugins)&&a.plugins.forEach(function(e){n(e)?t[e[0]]=e.slice(1):"string"==typeof e&&(t[e]=[])}),t}()},f._initPlugins=function(){var t=this.pluginConfig,e=this._plugins;for(var i in t)t.hasOwnProperty(i)&&e.hasOwnProperty(i)&&e[i]&&"function"==typeof e[i]&&typeof e[i].apply&&e[i].apply(this,t[i]);this.fire("pluginInitialized")},f._itemType=function(t){if(isNaN(t)||(t=this.data[t]),t.hasOwnProperty("type"))return t.type;var e,i=t.content,n=u.NODE_TYPE;return e=null==i?n.empty:Boolean(i.nodeName)&&Boolean(i.nodeType)?n.node:"string"==typeof i?h(i)?n.pic:n.html:n.unknown,t.type=e,e},f._renderItem=function(t,e){var i,n=this,s=this.data.length,a=function(){var e=' src="'+i.content+'"';e+=i.height/i.width>n.ratio?' height="100%"':' width="100%"',n.isOverspread&&(t.style.cssText+="background-image:url("+i.content+");background-repeat:no-repeat;background-position:50% 50%;background-size:cover",e+=' style="display:block;opacity:0;height:100%;width:100%;"'),t.innerHTML="<img"+e+" />"};if(t.innerHTML="",t.style.background="",this.isLooping||null!=this.data[e]){e=(s+e)%s,i=this.data[e];var r=this._itemType(i),o=u.NODE_TYPE;switch(t.className="islider-"+r,r){case o.pic:if(2===i.load)a();else{var h=new Image;h.src=i.content,h.onload=function(){i.height=h.height,i.width=h.width,a(),i.load=2}}break;case o.dom:case o.html:t.innerHTML=i.content;break;case o.node:case o.element:if(11===i.content.nodeType){var l=document.createElement("div");l.appendChild(i.content),i.content=l}t.appendChild(i.content)}}},f._renderIntermediateScene=function(){null!=this._intermediateScene&&(this._renderItem.apply(this,this._intermediateScene),this._intermediateScene=null)},f._changedStyles=function(){var t=["islider-prev","islider-active","islider-next"];this.els.forEach(function(e,i){o(e,t.join("|")),r(e,t[i]),this.fillSeam&&this.originScale(e)}.bind(this))},f._renderWrapper=function(){var e;this.outer?(e=this.outer,e.innerHTML=""):e=document.createElement("ul"),e.className="islider-outer",this.els=[];for(var i=0;3>i;i++){var n=document.createElement("li");e.appendChild(n),this.els.push(n),this._animateFunc(n,this.axis,this.scale,i,0),this.fixPage||(n.style.overflow="auto"),!this.isVertical||"rotate"!==this.animateType&&"flip"!==this.animateType?this._renderItem(n,i-1+this.slideIndex):this._renderItem(n,1-i+this.slideIndex)}this._changedStyles(),this.fillSeam&&this.els.forEach(function(t,e){r(t,"islider-sliding"+(1===e?"-focus":""))}),t.setTimeout(function(){this._preloadImg(this.slideIndex)}.bind(this),200),this.outer||(this.outer=e,this.wrap.appendChild(e)),this.currentEl=this.els[1],this.fire("renderComplete",this.slideIndex,this.currentEl,this)},f._preloadImg=function(t){if(this.data.length>3){var e=this.data,i=e.length,n=this,s=function(t){var i=e[t];if("pic"===n._itemType(i)&&!i.load){var s=new Image;s.src=i.content,s.onload=function(){i.width=s.width,i.height=s.height,i.load=2},i.load=1}};s((t+2)%i),s((t-2+i)%i)}},f._watchTransitionEnd=function(e,i){var n=function(){this._unWatchTransitionEnd(),"slideChanged"===i&&this._changedStyles(),this.fire.call(this,i,this.slideIndex,this.currentEl,this),this._renderIntermediateScene(),this.play(),this.onSliding=!1,this.direction=null}.bind(this);u.TRANSITION_END_EVENT&&(this.currentEl.addEventListener(u.TRANSITION_END_EVENT,n),this._transitionEndHandler={el:this.currentEl,handler:n}),this._LSN.transitionEnd=t.setTimeout(n,e)},f._unWatchTransitionEnd=function(){this._LSN.transitionEnd&&t.clearTimeout(this._LSN.transitionEnd),null!==this._transitionEndHandler&&(this._transitionEndHandler.el.removeEventListener(u.TRANSITION_END_EVENT,this._transitionEndHandler.handler),this._transitionEndHandler=null)},f._bindHandler=function(){var e=this.outer,i=this.deviceEvents;this.isTouchable&&(i.hasTouch||(e.style.cursor="pointer",e.ondragstart=function(t){return!t}),e.addEventListener(i.startEvt,this),e.addEventListener(i.moveEvt,this),e.addEventListener(i.endEvt,this),!i.hasTouch&&e.addEventListener("mouseout",this)),t.addEventListener(i.resizeEvt,this),t.addEventListener("focus",this,!1),t.addEventListener("blur",this,!1)},f.handleEvent=function(t){var e=this.deviceEvents;switch(t.type){case"mousedown":if(0!==t.button)break;case"touchstart":this.startHandler(t);break;case e.moveEvt:this.moveHandler(t);break;case e.endEvt:case e.cancelEvt:this.endHandler(t);break;case e.resizeEvt:this.resizeHandler();break;case"focus":this.play();break;case"blur":this.pause()}},f.startHandler=function(t){if(this.fixPage&&u.FIX_PAGE_TAGS.indexOf(t.target.tagName.toUpperCase())<0&&!this._isItself(t.target)&&t.preventDefault(),!this._holding&&!this._locking){var e=this.deviceEvents;this.onMoving=!0,this.pause(),this.fire("slideStart",t,this),this.startTime=(new Date).getTime(),this.startX=e.hasTouch?t.targetTouches[0].pageX:t.pageX,this.startY=e.hasTouch?t.targetTouches[0].pageY:t.pageY}},f.moveHandler=function(t){if(this.onMoving){var e=this.deviceEvents,i=this.data.length,n=this.axis,s=this.reverseAxis,a={};t.hasOwnProperty("offsetRatio")?(a[n]=t.offsetRatio*this.scale,a[s]=0):(a.X=e.hasTouch?t.targetTouches[0].pageX-this.startX:t.pageX-this.startX,a.Y=e.hasTouch?t.targetTouches[0].pageY-this.startY:t.pageY-this.startY),this.offset=a,t.offsetRatio=a[n]/this.scale,Math.abs(a[n])-Math.abs(a[s])>10&&(t.preventDefault(),this._unWatchTransitionEnd(),this.isLooping||(a[n]>0&&0===this.slideIndex||a[n]<0&&this.slideIndex===i-1)&&(a[n]=this._damping(a[n])),this.els.forEach(function(t,e){t.style.visibility="visible",u.setStyle(t,"transition","none"),this._animateFunc(t,n,this.scale,e,a[n],a[n]),this.fillSeam&&this.seamScale(t)}.bind(this)),this.fire("slide",t,this))}},f.endHandler=function(e){function i(n){if(null!=n)if("A"===n.tagName){if(n.href)return"_blank"===n.getAttribute("target")?t.open(n.href):t.location.href=n.href,e.preventDefault(),!1}else{if("LI"===n.tagName&&n.className.search(/^islider\-/)>-1)return!1;i(n.parentNode)}}if(this.onMoving){this.onMoving=!1;var n=this.offset,s=this.axis,a=this.scale/2,r=(new Date).getTime(),o=this.fingerRecognitionRange;a=r-this.startTime>300?a:14;var h=Math.abs(n[s]),l=Math.abs(n[this.reverseAxis]);this.fire("slideEnd",e,this),n[s]>=a&&h>l?this.slideTo(this.slideIndex-1):n[s]<-a&&h>l?this.slideTo(this.slideIndex+1):Math.abs(this.offset[s])>=o&&this.slideTo(this.slideIndex),Math.abs(this.offset[s])<o&&this.fixPage&&e.target&&i(e.target),this.offset.X=this.offset.Y=0}},f.resizeHandler=function(){var e,i,n=this._LSN.resize,s=+new Date;this.deviceEvents.hasTouch?(n&&t.clearInterval(n),n=t.setInterval(function(){this.height!==this.wrap.offsetHeight||this.width!==this.wrap.offsetWidth?(n&&t.clearInterval(n),n=t.setInterval(function(){e===this.wrap.offsetWidth&&i===this.wrap.offsetHeight?(n&&t.clearInterval(n),this.reset()):(e=this.wrap.offsetWidth,i=this.wrap.offsetHeight)}.bind(this),12)):+new Date-s>=1e3&&n&&t.clearInterval(n)}.bind(this),12)):(n&&t.clearTimeout(n),n=t.setTimeout(function(){this.height===this.wrap.offsetHeight&&this.width===this.wrap.offsetWidth||(n&&t.clearInterval(n),this.reset())}.bind(this),200))},f.slideTo=function(t,e){if(this.isAutoplay&&this.pause(),!this._locking){this.unhold(),this.onSliding=!0;var n,s=this.animateTime,a=this.animateType,h=this._animateFunc,l=this.data,d=this.els,c=this.axis,f=t,p=t-this.slideIndex,m=this.offset,g=0;"object"==typeof e&&(e.animateTime>-1&&(s=e.animateTime),"string"==typeof e.animateType&&e.animateType in this._animateFuncs&&(a=e.animateType,h=this._animateFuncs[a])),0!==m[c]&&(g=Math.abs(m[c])/this.scale*s),Math.abs(p)>1&&this._renderItem(p>0?this.els[2]:this.els[0],f),this._preloadImg(f),l[f]?this.slideIndex=f:this.isLooping?this.slideIndex=p>0?0:l.length-1:p=0;var v,E,_;0===p?n="slideRestore":((this.isVertical&&i(a,this._animateReverse))^p>0?(d.push(d.shift()),v=d[2],E=d[0],_=1):(d.unshift(d.pop()),v=d[0],E=d[2],_=-1),this.currentEl=d[1],1===Math.abs(p)?(this._renderIntermediateScene(),this._renderItem(v,f+p)):Math.abs(p)>1&&(this.isVertical&&i(a,this._animateReverse)?(this._renderItem(E,f+_),this._renderItem(d[1],f),this._intermediateScene=[v,f-_]):(this._renderItem(v,f+_),this._intermediateScene=[E,f-_])),u.setStyle(v,"transition","none"),g=s-g,n="slideChange",this.fillSeam&&(d.forEach(function(t){o(t,"islider-sliding|islider-sliding-focus")}),r(this.currentEl,"islider-sliding-focus"),r(v,"islider-sliding")),this.direction=_);for(var y=0;3>y;y++)d[y]!==v&&u.setStyle(d[y],"transition",(h.effect||"all")+" "+g+"ms "+this.animateEasing),h.call(this,d[y],c,this.scale,y,0,_),this.fillSeam&&this.seamScale(d[y]);this._watchTransitionEnd(g,n+"d"),this.fire(n,this.slideIndex,this.currentEl,this)}},f.slideNext=function(){this.slideTo.apply(this,[this.slideIndex+1].concat(d(arguments)))},f.slidePrev=function(){this.slideTo.apply(this,[this.slideIndex-1].concat(d(arguments)))},f.regPlugin=function(){var t=d(arguments),e=t.shift(),n=t[0];(this._plugins.hasOwnProperty(e)||"function"==typeof n)&&("function"==typeof n&&(this._plugins[e]=n,t.shift()),i(e,this._opts.plugins)||(this._opts.plugins.push(t.length?[].concat([e],t):e),"function"==typeof this._plugins[e]&&this._plugins[e].apply(this,t)))},f.bind=f.delegate=function(e,i,n){function s(e){for(var s=t.event?t.event:e,a=s.target,r=document.querySelectorAll(i),o=0;o<r.length;o++)if(a===r[o]){n.call(a);break}}this.wrap.addEventListener(e,s,!1);var a=e+";"+i;this._EventHandle.hasOwnProperty(a)?(this._EventHandle[a][0].push(n),this._EventHandle[a][1].push(s)):this._EventHandle[a]=[[n],[s]]},f.unbind=f.unDelegate=function(t,e,i){var n=t+";"+e;if(this._EventHandle.hasOwnProperty(n)){var s=this._EventHandle[n][0].indexOf(i);if(s>-1)return this.wrap.removeEventListener(t,this._EventHandle[n][1][s]),this._EventHandle[n][0][s]=this._EventHandle[n][1][s]=null,!0}return!1},f.destroy=function(){var e=this.outer,i=this.deviceEvents;this.fire("destroy"),this.isTouchable&&(e.removeEventListener(i.startEvt,this),e.removeEventListener(i.moveEvt,this),e.removeEventListener(i.endEvt,this),!i.hasTouch&&e.removeEventListener("mouseout",this)),t.removeEventListener(i.resizeEvt,this),t.removeEventListener("focus",this),t.removeEventListener("blur",this);var n;for(n in this._EventHandle)for(var s=this._EventHandle[n][1],a=0;a<s.length;a++)"function"==typeof s[a]&&this.wrap.removeEventListener(n.substr(0,n.indexOf(";")),s[a]);this._EventHandle=null;for(n in this._LSN)this._LSN.hasOwnProperty(n)&&this._LSN[n]&&t.clearTimeout(this._LSN[n]);this._LSN=null,this.wrap.innerHTML=""},f.on=function(t,e,n){return i(t,u.EVENTS)&&"function"==typeof e&&(!(t in this.events)&&(this.events[t]=[]),n?this.events[t].unshift(e):this.events[t].push(e)),this},f.has=function(t,e){return t in this.events?-1<this.events[t].indexOf(e):!1},f.off=function(t,e){if(t in this.events){var i=this.events[t].indexOf(e);i>-1&&delete this.events[t][i]}},f.fire=function(t){var e=d(arguments,1);t.split(/\x20+/).forEach(function(t){if(t in this.events)for(var i=this.events[t],n=0;n<i.length;n++)"function"==typeof i[n]&&i[n].apply&&i[n].apply(this,e)}.bind(this))},f.reset=function(){this.pause(),this._unWatchTransitionEnd(),this.width="number"==typeof this._opts.width?this._opts.width:this.wrap.offsetWidth,this.height="number"==typeof this._opts.height?this._opts.height:this.wrap.offsetHeight,this.ratio=this.height/this.width,this.scale=this.isVertical?this.height:this.width,this._renderWrapper(),this._autoPlay(),this.fire("reset slideRestored",this.slideIndex,this.currentEl,this)},f.loadData=function(t,e){this.pause(),this._unWatchTransitionEnd(),this.slideIndex=e||0,this.data=t,this._renderWrapper(),this._autoPlay(),this.fire("loadData slideChanged",this.slideIndex,this.currentEl,this)},f.pushData=function(t){if(null!=t){var e=this.data.length;this.data=this.data.concat(t),this.isLooping&&0===this.slideIndex?this._renderItem(this.els[0],this.data.length-1):e-1===this.slideIndex&&(this._renderItem(this.els[2],e),this._autoPlay())}},f.unshiftData=function(t){if(null!=t){n(t)||(t=[t]);var e=t.length;this.data=t.concat(this.data),0===this.slideIndex&&this._renderItem(this.els[0],e-1),this.slideIndex+=e}},f._autoPlay=function(){this.delay>0?t.setTimeout(this.play.bind(this),this.delay):this.play()},f.play=function(){this.pause(),this.isAutoplay&&(this.isLooping||this.slideIndex<this.data.length-1)&&(this._LSN.autoPlay=t.setTimeout(this.slideNext.bind(this),this.duration))},f.pause=function(){this._LSN.autoPlay&&t.clearTimeout(this._LSN.autoPlay)},f.hold=function(){this._holding=!0},f.unhold=function(){this._holding=!1,this.unlock()},f.lock=function(){this.hold(),this._locking=!0},f.unlock=function(){this._locking=!1},f.seamScale=function(t){var e=/scale([XY]?)\(([^\)]+)\)/,i=u.getStyle(t,"transform");e.test(i)?u.setStyle(t,"transform",i.replace(e,function(t,e,i){var n={};return e?(n[e]=parseFloat(i),"scale"+this.axis+"("+(e===this.axis?1.001*n[this.axis]:1.001)+")"):(i.indexOf(",")>-1?(i=i.split(","),n.X=parseFloat(i[0]),n.Y=parseFloat(i[1])):n.Y=n.X=parseFloat(i),n[this.axis]*=1.001,"scale("+n.X+", "+n.Y+")")}.bind(this))):u.setStyle(t,"transform",i+" scale"+this.axis+"(1.001)")},f.originScale=function(t){var e=/([\x20]?scale)([XY]?)\(([^\)]+)\)/;u.setStyle(t,"transform",u.getStyle(t,"transform").replace(e,function(t,e,i,n){return t={},i?"1.001"===n?"":(t[i]=parseFloat(n),"scale"+this.axis+"("+(i===this.axis?t[this.axis]/1.001:1)+")"):(n.indexOf(",")>-1?(n=n.split(","),t.X=parseFloat(n[0]),t.Y=parseFloat(n[1])):t.Y=t.X=parseFloat(n),t[this.axis]/=1.001,"scale("+t.X+", "+t.Y+")")}.bind(this)))},f._isItself=function(t){var e=this.fixPage;if("string"==typeof e){for(var i,n=[],s=t;!a(s,"islider-outer")&&s!==this.wrap;)n.push(s),s=s.parentNode;if(s=n.pop(),n.length)try{if(i=Array.prototype.slice.call(s.querySelectorAll(e)),i.length)for(var r=0;r<n.length;r++)if(i.indexOf(n[r])>-1)return!0}catch(o){return!1}}return!1},f.subjectTo=function(t,e){if(!(!t instanceof u)){var i=this;i.animateTime=t.animateTime,i.isLooping=t.isLooping,i.isAutoplay=!1,t.on("slideStart",function(t){i.startHandler(t)}),t.on("slide",function(t){i.moveHandler(t)}),t.on("slideEnd",function(t){i.endHandler(t)}),t.on("slideChange",function(t){var e=i.data.length,n=i.direction;n>0&&(t-i.slideIndex+e)%e===1?i.slideNext():0>n&&(t-i.slideIndex-e)%e===-1&&i.slidePrev()}),t.on("slideRestore",function(t){i.slideIndex!==t&&i.slideTo(t)})}},"function"=="function"&&"object"==typeof module&&module&&"object"==typeof exports&&exports?module.exports=u: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return u}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):t.iSlider=t.iSlider||u}(window||this);


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/**
	 * To create right&left botton on iSlider
	 *
	 * @file button.js
	 * @author BE-FE Team
	 *    xieyu33333 xieyu33333@gmail.com
	 *    shinate shine.wangrs@gmail.com
	 */

	(function (global, factory) {
	    /* CommonJS */
	    if ("function" === 'function' && typeof module === 'object' && module && typeof exports === 'object' && exports)
	        factory(__webpack_require__(2));
	    /* AMD */
	    else if ("function" === 'function' && __webpack_require__(5)['amd'])
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (iSlider) {
	            factory(iSlider);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    /* Global */
	    else
	        factory(global['iSlider']);

	})(window ? window : this, function (iSlider) {

	    'use strict';

	    iSlider && iSlider.regPlugin('button', function () {
	        var HANDLE = this;
	        var btnOuter = [];
	        var btnInner = [];
	        for (var i = 0; i < 2; i++) {
	            btnOuter[i] = document.createElement('div');
	            btnOuter[i].className = 'islider-btn-outer';

	            if (i === 0) {
	                btnOuter[i].className += ' left';
	                btnOuter[i].dir = -1;
	            }
	            else {
	                btnOuter[i].className += ' right';
	                btnOuter[i].dir = 1;
	            }

	            btnOuter[i].addEventListener('click', function () {
	                var dir = parseInt(this.getAttribute('dir'), 10);
	                HANDLE.slideTo(HANDLE.slideIndex + dir);
	            });

	            HANDLE.wrap.parentNode.appendChild(btnOuter[i], HANDLE.wrap.parentNode.nextSibling);
	        }
	    });
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/**
	 * To create dots index on iSlider
	 *
	 * @file dot.js
	 * @author BE-FE Team
	 *    xieyu33333 xieyu33333@gmail.com
	 *    shinate shine.wangrs@gmail.com
	 * @Instructions
	 *    activation:
	 *       new iSlider({
	 *          ...
	 *          plugins: ['dot']
	 *          ...
	 *       });
	 *    more options:
	 *       new iSlider({
	 *          ...
	 *          plugins: [['dot', {locate:'absoulute'}]]
	 *          ...
	 *       });
	 * @options
	 *    locate {string|HTML Element} the warpper of dots value: 'absolute', 'relative' or Specified dom, default: 'absolute'
	 */

	(function (global, factory) {
	    /* CommonJS */
	    if ("function" === 'function' && typeof module === 'object' && module && typeof exports === 'object' && exports)
	        factory(__webpack_require__(2));
	    /* AMD */
	    else if ("function" === 'function' && __webpack_require__(5)['amd'])
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (iSlider) {
	            factory(iSlider);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    /* Global */
	    else
	        factory(global['./iSlider.min.js']);

	})(window ? window : this, function (iSlider) {

	    'use strict';

	    iSlider && iSlider.regPlugin('nav', function (opts) {


	        var HANDLE = this;
	        var data = HANDLE.data;
	        var dots = [];
	        var evtHandle = [];
	        var endEvt = HANDLE.deviceEvents.endEvt;

	        var dotWrap = document.createElement('div');
	        var firstDom, lastDom;
	        dotWrap.className = 'islider-nav-wrap';

	        renderNav();

	        locate(opts && opts.locate != null ? opts.locate : false)
	            .appendChild(dotWrap);

	        HANDLE.on('slideChange', function () {
	            var num = this.slideIndex + 1;

	            if(num === 1){
	                firstDom.style.opacity = 0;
	                firstDom.style.cursor = 'initial';
	            }else{
	                firstDom.style.opacity = 1;
	                firstDom.style.cursor = 'pointer';
	            }
	            if(num === data.length){
	                lastDom.style.opacity = 0;
	                lastDom.style.cursor = 'initial';
	            }else{
	                lastDom.style.opacity = 1;
	                lastDom.style.cursor = 'pointer';
	            }

	            dotWrap.getElementsByClassName('islider-nav-index')[0].innerHTML = num < 9 ? '0' + num : num;
	        });

	        HANDLE.on('loadData', function () {
	            data = this.data;
	            renderNav();
	        }, 1);

	        function renderNav() {
	            var fragment = document.createDocumentFragment();
	            dots.forEach(function (el, i) {
	                el.removeEventListener(endEvt, evtHandle[i], false);
	            });
	            dots = [], evtHandle = [];
	            dotWrap.innerHTML = '<span class="iSlider-nav-first"></span><span class="islider-nav-index">01</span> / <span class="islider-nav-total">' + (data.length > 9 ? data.length : ('0' + data.length)) + '</span><span class="iSlider-nav-last"></span>';
	            // 绑定first/last事件
	            firstDom = dotWrap.getElementsByClassName('iSlider-nav-first')[0];
	            lastDom  = dotWrap.getElementsByClassName('iSlider-nav-last')[0];
	            firstDom.addEventListener('click', function () {
	                if(HANDLE.slideIndex !== 0){
	                    HANDLE.slideTo(0);
	                }
	            });
	            lastDom.addEventListener('click', function () {
	                var length = data.length;
	                HANDLE.slideIndex !== (length - 1) && HANDLE.slideTo(data.length - 1);
	            });
	        }

	        function locate(locate) {
	            if (locate === 'relative') {
	                return HANDLE.wrap;
	            } else if (Boolean(locate.nodeName) && Boolean(locate.nodeType)) {
	                return locate;
	            }
	            return HANDLE.wrap.parentNode;
	        }
	    });
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }
/******/ ]);