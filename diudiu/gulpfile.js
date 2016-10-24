var gulp = require('gulp');
var path = require('path');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var hash = require('gulp-hash');
var parseHtml = require('gulp-parseHtml');
var rename    = require('gulp-rename')

var releaseRelativePath = './dist/';
var webpackConfig       = './webpack.config.js';

gulp.task('watch-html', function () {
	var watchPath = ['src/*.html'];
	gulp.watch(watchPath,function (event){
		var distPath = releaseRelativePath;
		gulp.src( event.path )
			.pipe( gulp.dest( distPath ) );
	});	
});

gulp.task('watch-module', function() {
	var watchPath = ['src/js/**', 'src/js/plugin/**', 'src/css/**'];

	gulp.watch(watchPath, function( event ){
		gulp.src( watchPath )
			.pipe( webpack( require( webpackConfig ).init( 1 ) ) )
			.pipe( gulp.dest( releaseRelativePath ) )
	});
});

gulp.task('watch', ['watch-html', 'watch-module']);

gulp.task('release-module', function() {
	var watchPath = ['src/js/**', 'src/js/plugin/**', 'src/css/**'];
	return gulp.src( watchPath )
		.pipe( webpack( require( webpackConfig ).init() ) )
		.pipe( uglify() )
		.pipe( hash() )
		.pipe( rename(function(path) {
			debugger;
			var date  = new Date();
			var year  = date.getFullYear();
			var month = date.getMonth() + 1;
			var day   = date.getDate();
			if(!/js/.test(path.dirname)){
				path.dirname  += '/js/';
			}

			path.dirname = releaseRelativePath + path.dirname;

			// 除了common.js外的发布文件都放在日期文件目录下
			if(!/common_[a-zA-Z0-9]{8}/.test(path.basename) && !/[a-zA-Z0-9]{8}_chunk/.test(path.basename)){
				path.dirname = path.dirname + '/' + year + month + day;
			}
		}, parseHtml.mapPicker) )
		.pipe( gulp.dest( './' ) )
});

gulp.task('release',['release-module'], function() {
	var watchPath = ['src/*.html'];
	gulp.src( watchPath )
		.pipe( parseHtml( releaseRelativePath,'' ) )
		.pipe( gulp.dest( releaseRelativePath ) )
});









