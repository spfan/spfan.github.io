var path = require('path');

var config = {
	init: function (debug) {
		return {
			entry: {
				index_v1: './src/js/index_v1.src.js',
				index_v2: './src/js/index_v2.src.js'
			},
			output: {
				filename: './js/[name].js',
				chunkFilename: debug ? './js/[name]_chunk.js' : './js/[chunkhash:8]_chunk.js' 
			},
			loader: [
				{test: /\.html$/, loader: 'html'}
			]
		}
	}
};

module.exports = config;