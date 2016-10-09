
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
                        content: 'data:image/jpeg;base64,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'
                    },
                    {
                        content: 'https://lh5.ggpht.com/REeOJLMfnshzn6Xb3U2SZcVDdWofVd0T1Ck4xij6XYdOZSlqd0k6mKxnXD39zEV_ukU=h900'
                    },
                    {
                        content: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    },
                    {
                        content: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    }
                ],
                [   
                    {
                        content: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    },
                    {
                        content: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    },
                    {
                        content: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    },
                    {
                        content: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
                    },
                    {
                        content: 'http://r1.ykimg.com/054104085274F02D6A0A40636C798A21'
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
            'icon/first.png',
            'icon/last.png',
            'icon/left.png',
            'icon/profile.png',
            'icon/right.png',
            'icon/rong.png',
            'icon/diu.png'
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
