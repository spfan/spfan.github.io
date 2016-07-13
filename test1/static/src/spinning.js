define(function (require, exports, module) {
	
	var $ = require('jquery');

	function Spinning(container) {
		this.container = $(container);
		this.icons     = this.container.children();
		this.Spinnings = [];
	}

	module.exports = Spinning;

	Spinning.prototype.render = function (argument) {
		this._init();
		$(this.icons).css('display', 'inline-block');
		this._spin();
	}

	Spinning.prototype._init = function () {
		var Spinnings = this.Spinnings;
		$(this.icons).each(function (i, e) {
			var node = $(this),
				timer,
				startDeg = random(360);

			node.css({
				top  : random(40),
				left : random(10),
				zIndex : 1000
			}).hover(function () {
				node.fadeTo(250, 1)
					.css({
						'zIndex' : 1001,
						'transform' : 'rotate(0deg)'
					});
			}, function () {
				node.fadeTo(250, 0.6)
					.css('zIndex', 1000);
				timer && clearTimeout(timer);
				timer = setTimeout(spin, Math.ceil(random(3000)));
			});

			function spin() {
				node.css({
					'transform' : 'rotate(' + startDeg + 'deg)'
				})
			}
			Spinnings[i] = spin;
		});
	}

	Spinning.prototype._spin = function () {
		this.Spinnings.forEach(function (e, i) {
			setTimeout(e, Math.ceil(random(3000)));
		});
	}

	function random(num) {
		return Math.random() * num;
	}

});
