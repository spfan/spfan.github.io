
(function (doc, win, $) {
    var _Tpl = {
            collection :    
                    '<div class="profile-collection" data-zhdesc="{zh_desc}" data-endesc="{en_desc}">'+
                    '    <div class="profile-collection-contect">'+
                    '        <div class="profile-collection-contect-imgs j_iSlider-wrapper">'+
                    '        </div>'+
                    '    </div>'+
                    '</div>',
            alertTpl : 
                '<div class="dialog-back">'+
                '    <div class="dialog-wrap">'+
                '        <div class="dialog-wrap-img"><img src="{url}" style="display:block;height:100%;width:100%;"></div>'+
                '        <div class="dialog-wrap-close"></div>'+
                '        <div class="dialog-wrap-info"><div class="dialog-wrap-info-page"><span class="dialog-wrap-info-index">{index}</span> / {total}</div><div class="dialog-wrap-info-desc">{zh_desc}</div><div class="dialog-wrap-info-en-desc">{en_desc}</div></div>'+
                '    </div>'+
                '</div>'
        },
        _Images = [
                [   
                    {
                        content: '<div class="alert"><img src="http://r1.ykimg.com/054104085274F02D6A0A40636C798A21"></div>',
                        img: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    },
                    {
                        content: '<div class="alert"><img src="http://r1.ykimg.com/054104085274F02D6A0A40636C798A21"></div>',
                        img: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    },
                    {
                        content: '<div class="alert"><img src="http://r1.ykimg.com/054104085274F02D6A0A40636C798A21"></div>',
                        img: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    },
                    {
                        content: '<div class="alert"><img src="http://r1.ykimg.com/054104085274F02D6A0A40636C798A21"></div>',
                        img: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    }
                ],
                [   
                    {
                        content: '<div class="alert"><img src="http://r1.ykimg.com/054104085274F02D6A0A40636C798A21"></div>',
                        img: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    },
                    {
                        content: '<div class="alert"><img src="http://r1.ykimg.com/054104085274F02D6A0A40636C798A21"></div>',
                        img: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    },
                    {
                        content: '<div class="alert"><img src="http://r1.ykimg.com/054104085274F02D6A0A40636C798A21"></div>',
                        img: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    },
                    {
                        content: '<div class="alert"><img src="http://r1.ykimg.com/054104085274F02D6A0A40636C798A21"></div>',
                        img: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    },
                    {
                        content: '<div class="alert"><img src="http://r1.ykimg.com/054104085274F02D6A0A40636C798A21"></div>',
                        img: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
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
        var imgs = [],
            total = 0,
            cur  = 0;
        // 拉取作品图片
        _Images.forEach(function(d, i) {
            d.forEach(function(e, j){
                imgs.push(e.img);
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
                zh_desc: '平面设计',
                en_desc: 'THE  PLANE DESIGN'
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
                isTouchable : !os.isPc
            });
        }
    }

    function initEvent() {

        function alert(e) {
            var data = {},
                $container = $(e.target).parent().parent().parent().parent().parent().parent();
            data.zh_desc = $container.attr('data-zhdesc');
            data.en_desc = $container.attr('data-endesc');
            data.index   = $container.find('.islider-nav-index').html();
            data.total   = $container.find('.islider-nav-total').html();
            data.url     = $(e.target).attr('src');

            $('footer').after( mktpl(data, _Tpl.alertTpl) );
        }

        if(os.isPc){
            $(doc)
            .on('click', '.j_iSlider-wrapper .alert', function(e) {
                alert(e);
            })
        }else{
            fastClick($('#container')[0], function(e){
                if(e.target.parentNode.className.indexOf('alert') > -1){
                    alert(e);
                }
            });
        }

        $(doc).on('click', '.dialog-wrap-close', function(e) {
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
