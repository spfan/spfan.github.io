/**
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
    if (typeof require === 'function' && typeof module === 'object' && module && typeof exports === 'object' && exports)
        factory(require('iSlider'));
    /* AMD */
    else if (typeof define === 'function' && define['amd'])
        define(['iSlider'], function (iSlider) {
            factory(iSlider);
        });
    /* Global */
    else
        factory(global['iSlider']);

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
