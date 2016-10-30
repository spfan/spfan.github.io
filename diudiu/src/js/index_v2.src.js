
var $ = require('webpack-zepto');
var Collection = require('./tool/collectionView.js');


(function (doc, win, $) {
    var _Tpl = {
            img: '<div class="collection-page__section_img j_img" data-index="{index}"><div style="box-shadow: 0 1px 3px rgba(0,0,0,.3);"><img style="height: {height}px;" src="{content}"></div></div>',
            detail: ' <img class="section-float__img" data-index="{index}" src="{url}" style="left: {left}px;top: {top}px;width: {width}px;height: {height}px;">'
        },
        _Images = [
            [
                {
                    content: '../work/freehand/0.png',
                    height: 300
                },
                {
                    content: '../work/freehand/1.png',
                    height: 220
                },
                {
                    content: '../work/freehand/2.png',
                    height: 200
                },
                {
                    content: '../work/freehand/3.png',
                    height: 200
                },
                {
                    content: '../work/freehand/4.png',
                    height: 200
                },
                {
                    content: '../work/freehand/5.png',
                    height: 200
                },
                {
                    content: '../work/freehand/6.png',
                    height: 200
                },
                {
                    content: '../work/freehand/7.png',
                    height: 200
                },
                {
                    content: '../work/freehand/8.png',
                    height: 200
                },
                {
                    content: '../work/freehand/9.png',
                    height: 200
                },
                {
                    content: '../work/freehand/10.png',
                    height: 200
                }
            ],[
                {
                    content: '../work/plane/0.png',
                    height: 200
                }
            ],[
                {
                    content: '../work/interface/0.jpg',
                    height: 200
                },
                {
                    content: '../work/interface/1.jpg',
                    height: 200
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
        setSectionHeight();
    }

    function initImgDetail() {
        var imgStr = '';

        $('.j_img img').each(function(i, e){
            var config = getImgLocation(e);
            config.url = e.src;
            config.index = i;
            imgStr += mktpl(config, _Tpl.detail);
        });

        $('#img_detail').html( imgStr );
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
        $(doc).on('click', '#me_btn,.j_close', function(e) {
            $('#introduction').toggleClass('open');
        }).on('click', '.j_nav', function(e) {
            var i   = +$(this).attr('data-index'),
                arr = _Images[i],
                html = '';
            document.body.scrollTop = 0;
            ['section-one', 'section-two', 'section-three'].forEach(function(e){
                $('.' + e).hide();
            });
            $('#collection').show();

            arr.forEach(function(e, i){
                e.index = i;
                html += mktpl(e, _Tpl.img);
            });

            $('#imgs').html(html);

            var height = Collection('imgs', 'j_img');

            $('#imgs').css('height', height + 'px');

            // 初始化详情页
            initImgDetail();

        }).on('click', '#collection_back', function(e) {
            document.body.scrollTop = 0;
            $('#collection').hide();
            ['section-one', 'section-two', 'section-three'].forEach(function(e){
                $('.' + e).show();
            });
        }).on('click', '.j_img', function(e) {
            var i = $(this).attr('data-index'),
            $img = $('#img_detail').find('.section-float__img').eq(i),
            offsetTop = (document.body.scrollTop || 0) + 50;

            $img.addClass('select');

            $(this).css('opacity', 0);
            $('#img_detail').show();
            $img.css({
                'opacity': 1,
                'width': '80%',
                'top': offsetTop + 'px',
                'height': 'auto',
                'left': '10%'
            });
            setTimeout(function(){
                // 浮层的高
                var offset = setLayerHeight($img, offsetTop);
                // 避免顶部溢出
                if(offset > 0){
                    var oldHeight = document.getElementById('imgs').offsetHeight;
                    $('#imgs').css('height', oldHeight + offset + 'px');
                    $('#imgs').attr('data-intheight', oldHeight);
                }
            }, 10);
        }).on('click', '#img_detail', function(e){
            var $currImg   = $(this).find('.select');
            var index     = $currImg.attr('data-index');
            var originImg = $('.j_img img')[index];
            var detail = getImgLocation( originImg );
            var intImgsHeight = $('#imgs').attr('data-intheight') || $('#imgs')[0].offsetHeight;

            setImgLocation($currImg[0], detail);

            originImg.parentNode.parentNode.style.opacity = 1;
            originImg.style.opacity = 1;
            $('#imgs').css('height', intImgsHeight + 'px');

            $('#img_detail').hide();

            $currImg.removeClass('select');
        });
    }
    function mktpl(data, tpl){
        for(var _k in data){
            tpl = tpl.replace('{' + _k + '}', data[_k]);
        }
        return tpl;
    }
    function getImgLocation(img){

        var offsettop = 0,
            offsetleft = 0;
        var tmp = img;
        while (tmp) {
            if ('body' != tmp.nodeName.toLowerCase()) {
                offsettop += tmp.offsetTop;
                offsetleft += tmp.offsetLeft;
                tmp = tmp.offsetParent;
            } else {
                break;
            }
        }

        return{
            top: offsettop,
            left: offsetleft,
            width: img.offsetWidth || img.clientWidth,
            height: img.offsetHeight || img.clientHeight
        }
    }
    function setImgLocation(img, detail){
        $(img).css({
            width: detail.width + 'px',
            height: detail.height + 'px',
            top: detail.top + 'px',
            left: detail.left + 'px',
            opacity: 0
        });
    }
    function setLayerHeight($img, offsettop){
        var screenHeight = document.body.clientHeight || window.innerHeight,
            imgHeight    = $img[0].offsetHeight + offsettop + 50;

            $('#img_detail').css('height', Math.max(screenHeight, imgHeight) + 'px');
        return imgHeight - screenHeight;
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
