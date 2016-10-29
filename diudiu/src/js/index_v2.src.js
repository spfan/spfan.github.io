
var $ = require('webpack-zepto');
var iSlider = require('./plugin/iSlider.min.js');
require('./plugin/iSlider.plugin.button.js');
require('./plugin/iSlider.plugin.nav.js');


(function (doc, win, $) {
    var _Tpl = {
        },
        _Param = {};

    function init() {
        initElement();
        initEvent();
    }
    function initElement() {
        loadImg();
        setSectionHeight();
    }

    function loadImg() {
        var imgs = [
            '../icon/nav.png',
            '../icon/text_2.png',
            '../icon/logo_2.png',
            '../icon/h_1.jpg',
            '../icon/h_2.jpg',
            '../icon/h_3.jpg'
        ],
            total = 0,
            cur  = 0;

        total = imgs.length;
        imgs.forEach(function(e, i){
            var img = new Image(); 
            function load(){
                cur++;
                $('#load-progress').css('transform', 'scaleX(' + cur / total + ')');
                if(cur === total){
                    $('#loader-view').removeClass('open');
                    renderPaper();
                }
            } 
            img.onload  = load;  
            img.onerror = load;  
            img.src=e;  
        });
    }

    function setSectionHeight() {
        var height = document.documentElement.clientHeight || window.innerHeight;
        $('.section-one,.section-two,.section-three').each(function(i, e){
            e.style.height = height + 'px';
            console.log(e)
        });
    }

    function renderPaper() {
    }

    function initEvent() {

        if(os.isPc){


        }else{

        }
        $(doc).on('click touchend', '#me_btn,.j_close', function(e) {
            $('#introduction').toggleClass('open');
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
