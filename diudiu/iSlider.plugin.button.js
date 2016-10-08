/**
 * To create right&left botton on iSlider
 *
 * @file button.js
 * @author BE-FE Team
 *    xieyu33333 xieyu33333@gmail.com
 *    shinate shine.wangrs@gmail.com
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
