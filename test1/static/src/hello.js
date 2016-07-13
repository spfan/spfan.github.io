define(function (require, exports, module) {
	var Spainning = require('./spinning.js');
	module.exports = function (argument) {
		var s = new Spainning('#container');
		s.render();
	}
});