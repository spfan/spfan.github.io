
(function (doc, win, $) {
    var _Tpl = {
        li : '<li style="background-image: url({src});transform: translateX({x}px);" point="{index}" class="profile-collection-contect-imgs-container-img"></li> ',
        collection :  '<div class="profile-collection">'+
                      '    <div class="profile-collection-contect j_contect">'+
                      '        <div class="profile-collection-contect-imgs">'+
                      '            <ul class="profile-collection-contect-imgs-container j_imgs">'+
                      '                {lis}'+
                      '            </ul>'+
                      '        </div>'+
                      '        <div class="profile-collection-prev j_prev"><</div>'+
                      '        <div class="profile-collection-next j_next">></div>   '+
                      '        <div class="profile-collection-navbar j_navbar"><span class="j_cur_page">1</span>/<span class="j_total_page">{imageLength}</span></div>'+   
                      '    </div>'+
                      '</div>',
    },
    _Param = {};



    function init() {
        initElement();
        initEvent();
    }
    function initElement() {
        _Param.imgWidth = 425;
        renderImages();
    }

    function renderImages() {
        var images = [
            [   
                './work/freehand/1.png',
                './work/freehand/2.png',
                './work/freehand/3.png',
                './work/freehand/4.png',
                './work/freehand/5.png',
                './work/freehand/6.png',
                './work/freehand/7.png',
                './work/freehand/8.png',
                './work/freehand/9.png',
                './work/freehand/10.png'
            ]
        ],
        _lis = [],
        _collection = [],
        _l, _i, _j, _le, _item;

        for (_i = 0, _l = images.length; _i < _l; _i++) {
            for (_j = 0, _le = images[_i].length; _j < _le; _j++) {
                _item = images[_i][_j];
                if(_le === 2){
                    _lis = [
                        mktpl({src: images[_i][1], index: 1, x: '-' + _Param.imgWidth}, _Tpl.li),
                        mktpl({src: images[_i][0], index: 0, x: 0}, _Tpl.li),
                        mktpl({src: images[_i][1], index: 1, x: _Param.imgWidth}, _Tpl.li)
                    ]
                    break;
                }
                if(_j === _le - 1){
                    _lis.push( mktpl({src: _item, index: _j, x: '-' + _Param.imgWidth}, _Tpl.li) );
                    break;
                }
                _lis.push( mktpl({src: _item, index: _j, x: _j * _Param.imgWidth}, _Tpl.li) );
            }
            _collection.push( mktpl({lis: _lis.join(''), imageLength: _le}, _Tpl.collection) );
            _lis = [];
        }

        $('#container').html( _collection.join('') );
    }

    function initEvent() {
        $('.j_contect').each(function(i, e){                                         
            var $container  = $(e),
                $imgsDom    = $container.find('.j_imgs');

            $container.find('.j_prev').on('click', function(e) {
                if(!_Param.isMove){
                    movePrev(e, $container, $imgsDom);
                    _Param.isMove = true;
                }
            });

            $container.find('.j_next').on('click', function(e) {
                if(!_Param.isMove){
                    moveNext(e, $container, $imgsDom);
                    _Param.isMove = true;
                }
            });

            $imgsDom.on('touchstart', touchMove);
            $imgsDom.on('touchmove', touchMove);
            $imgsDom.on('touchend', touchMove);

        });
        $('.j_imgs li:first-child').on('transitionend', function() {
                var $imgs = $(this).parent();
                $imgs.find('li').css('transition', 'all 0s ease');
                reLayout($imgs);
                _Param.isMove = false;

        });

    }

    function moveNext(e, $container, $imgsDom, distance) {
        distance = distance || 0;

        $imgsDom.find('li').css('transition', 'all 0.8s ease');
        $imgsDom.find('li').each(function(i, e){
            e.style.transform = e.style.transform.replace(/-?\d+/, function(m){return getX(m, true, distance)});
        });
        var pageNum = $container.find('.j_cur_page').html(),
            total   = $container.find('.j_total_page').html();
        $container.find('.j_cur_page').html( pageNum == total ? 1 : +pageNum + 1 );
    }
    function movePrev(e, $container, $imgsDom, distance) {
        distance = distance || 0;
        $imgsDom.find('li').css('transition', 'all 0.8s ease');
        $imgsDom.find('li').each(function(i, e){
            e.style.transform = e.style.transform.replace(/-?\d+/, function(m){return getX(m, false, distance)});
        });
        var pageNum = $container.find('.j_cur_page').html(),
            total   = $container.find('.j_total_page').html();
        $container.find('.j_cur_page').html( pageNum == 1 ? total : +pageNum - 1 );
    }

    function moveBack(e, $container, $imgsDom, distance) {
        distance = distance || 0;
        $imgsDom.find('li').css('transition', 'all 0.8s ease');
        $imgsDom.find('li').each(function(i, e){
            e.style.transform = e.style.transform.replace(/-?\d+/, function(m){
                var x = parseInt(m),
                    m = x;
                if(distance < 0){
                    if(x > 0){
                        while(x > 0){
                            x = x - _Param.imgWidth;
                        }
                        return m - x;
                    }else{
                        while(x < 0){
                            x = x + _Param.imgWidth;
                        }
                        return m + (_Param.imgWidth - x);
                    }
                }else{
                    if(x > 0){
                        while(x > 0){
                            x = x - _Param.imgWidth;
                        }
                        return m - (_Param.imgWidth + x);
                    }else{
                        while(x < 0){
                            x = x + _Param.imgWidth;
                        }
                        return m - x;
                    }

                }

                return m - _Param.imgWidth
            });
        });
    }

    function reLayout($imgs) {
        var $lis = $imgs.find('li');
        $lis.each(function(i, e){
            var x = +e.style.transform.match(/-?\d+/)[0],
                max = ($lis.length - 1) * _Param.imgWidth;
            if( x < -1 * _Param.imgWidth){
                $(e).css('transform', 'translateX(' + (max - _Param.imgWidth)  + 'px)');
                return false;
            }
            if( x === max ){
                $(e).css('transform', 'translateX(' + -1 * _Param.imgWidth + 'px)');
                return false;
            }
        });
    }

    function touchMove(e) {
        var e = e || window.event; 
        switch(e.type){

            case "touchstart":  
                $(this).parent().find('li').css('transition', 'all 0s ease');
                _Param.touchStratX = _Param.moveBeforeX = event.touches[0].clientX;  
                break;  
            case "touchend":  
                var distance = _Param.moveBeforeX - _Param.touchStratX;
                _Param.touchStratX = _Param.moveBeforeX = 0;

                var isMove = Math.abs(distance) > 0.2 * _Param.imgWidth;
                if(isMove){
                    distance < 0 ? moveNext(e, $(this).parent().parent(), $(this).parent(), Math.floor(distance)) : movePrev(e, $(this).parent().parent(), $(this).parent(), Math.floor(distance));
                }else{
                    moveBack(e, $(this).parent().parent(), $(this).parent(), Math.floor(distance));
                }


                break;  
            case "touchmove":  
                var curX        = event.touches[0].clientX,
                    distance    = curX - ( _Param.moveBeforeX || _Param.touchStratX );
                _Param.moveBeforeX = curX;

                $(this).find('li').each(function(i, e){
                    $(e).css('transform' ,'translateX(' + Math.floor(+e.style.transform.match(/-?\d+/)[0] + distance) +'px)');
                });
                break;  
        }
    }

    function mktpl(data, tpl){
        for(var _k in data){
            tpl = tpl.replace('{' + _k + '}', data[_k]);
        }
        return tpl;
    }

    function getX(oldX, isNext, distance) {
        var x = parseInt(oldX),
            oldX = parseInt(oldX);

        if(distance === 0){
            if(isNext){
                return oldX - _Param.imgWidth;
            }else{
                return oldX + _Param.imgWidth; 
            }

        }
        else if(distance > 0){
            // prev
            while(x > _Param.imgWidth){
                x = x - _Param.imgWidth;
            }
            x = oldX < 0 ? Math.abs(oldX) : _Param.imgWidth - x;
            return oldX + x;
        }
        else{
            // next
            if(oldX > 0){
                while( x > 0 ){
                    x = x - _Param.imgWidth;
                }
                x = _Param.imgWidth + x;
            }else{
                while( x < 0 ){
                    x = x + _Param.imgWidth;
                }
            }
            return oldX - x;
        }
    }


    init();
})(document, window, $)
