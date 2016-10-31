
var $ = require('webpack-zepto');
var Collection = require('./tool/collectionView.js');


(function (doc, win, $) {
    var _Tpl = {
            img: '<div class="collection-page__section_img j_img" data-index="{index}"><div style="box-shadow: 0 1px 3px rgba(0,0,0,.3);"><img style="height: {height}px;" src="{content}"></div></div>',
            detail: ' <img class="section-float__img" data-index="{index}" src="{url}" style="left: {left}px;top: {top}px;width: {width}px;height: {height}px;">',
            collectionHeader: '<div class="collection-page__header_title">{title}</div> <div class="collection-page__header_line"></div> <div class="collection-page__header_subtitle">{subtitle}</div> </div>'
        },
        _Images = [
            [
                {
                    content: '../work/freehand/0.png',
                    height: 250
                },
                {
                    content: '../work/freehand/1.jpg',
                    height: 333
                },
                {
                    content: '../work/freehand/2.jpg',
                    height: 360
                },
                {
                    content: '../work/freehand/3.jpg',
                    height: 250
                },
                {
                    content: '../work/freehand/4.jpg',
                    height: 332
                },
                {
                    content: '../work/freehand/5.jpg',
                    height: 233
                },
                {
                    content: '../work/freehand/6.jpg',
                    height: 333
                },
                {
                    content: '../work/freehand/7.jpg',
                    height: 187
                },
                {
                    content: '../work/freehand/8.jpg',
                    height: 333
                },
                {
                    content: '../work/freehand/9.jpg',
                    height: 312
                },
                {
                    content: '../work/freehand/10.jpg',
                    height: 187
                },
                {
                    content: '../work/freehand/11.jpg',
                    height: 187
                },
                {
                    content: '../work/freehand/12.jpg',
                    height: 187
                },
                {
                    content: '../work/freehand/13.jpg',
                    height: 187
                },
                {
                    content: '../work/freehand/14.jpg',
                    height: 333
                },
                {
                    content: '../work/freehand/15.jpg',
                    height: 187
                },
                {
                    content: '../work/freehand/16.jpg',
                    height: 333
                }
            ],
            [
                {
                    content: '../work/plane/0.png',
                    height: 250
                },
                {
                    content: '../work/plane/1.jpg',
                    height: 400
                },
                {
                    content: '../work/plane/2.jpg',
                    height: 252
                },
                {
                    content: '../work/plane/3.jpg',
                    height: 402
                },
                {
                    content: '../work/plane/4.jpg',
                    height: 625
                },
                {
                    content: '../work/plane/5.jpg',
                    height: 625
                },
                {
                    content: '../work/plane/6.jpg',
                    height: 167
                },
                {
                    content: '../work/plane/7.jpg',
                    height: 176
                },
                {
                    content: '../work/plane/8.jpg',
                    height: 174
                },
                {
                    content: '../work/plane/9.jpg',
                    height: 354
                },
                {
                    content: '../work/plane/10.jpg',
                    height: 327
                },
                {
                    content: '../work/plane/11.jpg',
                    height: 177
                },
                {
                    content: '../work/plane/12.jpg',
                    height: 177
                },
                {
                    content: '../work/plane/13.jpg',
                    height: 188
                },
                {
                    content: '../work/plane/14.jpg',
                    height: 188
                },
                {
                    content: '../work/plane/15.png',
                    height: 250
                },
                {
                    content: '../work/plane/16.png',
                    height: 250
                },
                {
                    content: '../work/plane/17.jpg',
                    height: 140
                },
                {
                    content: '../work/plane/18.jpg',
                    height: 311
                },
                {
                    content: '../work/plane/19.jpg',
                    height: 247
                },
                {
                    content: '../work/plane/20.jpg',
                    height: 290
                }
            ],
            [
                {
                    content: '../work/interface/000.png',
                    height: 250
                },
                {
                    content: '../work/interface/001.jpg',
                    height: 215
                },
                {
                    content: '../work/interface/002.jpg',
                    height: 505
                },
                {
                    content: '../work/interface/003.jpg',
                    height: 250
                },
                {
                    content: '../work/interface/004.jpg',
                    height: 764
                },
                {
                    content: '../work/interface/005.jpg',
                    height: 506
                },
                {
                    content: '../work/interface/006.jpg',
                    height: 781
                },
                {
                    content: '../work/interface/007.jpg',
                    height: 250
                },
                {
                    content: '../work/interface/008.jpg',
                    height: 444
                },
                {
                    content: '../work/interface/009.jpg',
                    height: 444
                },
                {
                    content: '../work/interface/010.jpg',
                    height: 444
                },
                {
                    content: '../work/interface/011.jpg',
                    height: 444
                },
                {
                    content: '../work/interface/012.jpg',
                    height: 444
                },
                {
                    content: '../work/interface/013.jpg',
                    height: 444
                },
                {
                    content: '../work/interface/014.jpg',
                    height: 444
                },
                {
                    content: '../work/interface/015.jpg',
                    height: 444
                },
                {
                    content: '../work/interface/016.jpg',
                    height: 444
                },
                {
                    content: '../work/interface/017.jpg',
                    height: 444
                },
                {
                    content: '../work/interface/018.jpg',
                    height: 445
                },
                {
                    content: '../work/interface/019.jpg',
                    height: 445
                },
                {
                    content: '../work/interface/020.jpg',
                    height: 445
                },
                {
                    content: '../work/interface/021.png',
                    height: 445
                },
                {
                    content: '../work/interface/022.png',
                    height: 445
                },
                {
                    content: '../work/interface/023.png',
                    height: 445
                },
                {
                    content: '../work/interface/024.jpg',
                    height: 447
                },
                {
                    content: '../work/interface/025.jpg',
                    height: 266
                },
                {
                    content: '../work/interface/026.jpg',
                    height: 391
                },
                {
                    content: '../work/interface/027.jpg',
                    height: 396
                },
                {
                    content: '../work/interface/028.jpg',
                    height: 203
                },
                {
                    content: '../work/interface/029.jpg',
                    height: 302
                },
                {
                    content: '../work/interface/030.jpg',
                    height: 1242
                },
                {
                    content: '../work/interface/031.jpg',
                    height: 188
                },
                {
                    content: '../work/interface/032.jpg',
                    height: 233
                },
                {
                    content: '../work/interface/033.jpg',
                    height: 215
                },
                {
                    content: '../work/interface/034.jpg',
                    height: 215
                },
                {
                    content: '../work/interface/035.jpg',
                    height: 380
                },
                {
                    content: '../work/interface/036.jpg',
                    height: 188
                },
                {
                    content: '../work/interface/037.jpg',
                    height: 188
                },
                {
                    content: '../work/interface/038.jpg',
                    height: 188
                },
                {
                    content: '../work/interface/039.jpg',
                    height: 188
                },
                {
                    content: '../work/interface/040.jpg',
                    height: 188
                },
                {
                    content: '../work/interface/041.jpg',
                    height: 400
                },
                {
                    content: '../work/interface/042.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/043.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/044.jpg',
                    height: 481
                },
                {
                    content: '../work/interface/045.jpg',
                    height: 2513
                },
                {
                    content: '../work/interface/046.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/047.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/048.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/049.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/050.jpg',
                    height: 250
                },
                {
                    content: '../work/interface/051.jpg',
                    height: 125
                },
                {
                    content: '../work/interface/052.jpg',
                    height: 250
                },
                {
                    content: '../work/interface/053.jpg',
                    height: 192
                },
                {
                    content: '../work/interface/054.jpg',
                    height: 250
                },
                {
                    content: '../work/interface/055.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/056.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/057.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/058.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/059.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/060.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/061.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/062.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/063.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/064.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/065.jpg',
                    height: 606
                },
                {
                    content: '../work/interface/066.jpg',
                    height: 555
                },
                {
                    content: '../work/interface/067.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/068.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/069.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/070.jpg',
                    height: 405
                },
                {
                    content: '../work/interface/071.jpg',
                    height: 405
                }
            ]
        ],
        _CollectionHeadData = [{
            title: 'PAINTING',
            subtitle: 'A growing history about my painting'
        },{
            title: 'The plane design',
            subtitle: 'Some of the things I tried'
        },{
            title: 'Interface design',
            subtitle: 'I want to do a good job'
        }],
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
        });
    }

    function renderPaper() {
    }

    function initEvent() {

        // if(os.isPc){


        // }else{

        // }
        $(doc).on('click', '#me_btn,.j_close', function(e) {
            $('#introduction').addClass('animated').toggleClass('open');
        }).on('click', '.j_nav', function(e) {
            var i   = +$(this).attr('data-index'),
                arr = _Images[i],
                html = '';
            document.body.scrollTop = 0;
            ['section-one', 'section-two', 'section-three'].forEach(function(e){
                $('.' + e).hide();
            });

            // 设置头部
            $('#collection-header').html( mktpl( _CollectionHeadData[i],_Tpl.collectionHeader ) );

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

        }).on('click', '.j_collection_back', function(e) {
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
            setTimeout(function(){
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
                }, 400);
            }, 20);
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
