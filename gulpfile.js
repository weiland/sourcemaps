// Plugins
var gulp = require('gulp'),
	compass = require('gulp-compass'), // https://github.com/appleboy/gulp-compass
	livereload = require('gulp-livereload'),
	lr = require('tiny-lr'),
	server = lr(),
	connect = require('gulp-connect');


// CSS
gulp.task('styles', function() {
	return gulp.src('css/src/styles.scss')
		.pipe(compass({
			// config_file: 'config.rb', // https://github.com/appleboy/gulp-compass/issues/24#issuecomment-42016037
			sourcemap: true,
			debug : true,
			css: 'css',
			sass: 'css/src'
		}))
		.pipe(livereload(server))
		.pipe(gulp.dest('css'));
});


// HTML
gulp.task('markup', function() {
	return gulp.src('*.html')
		.pipe(gulp.dest(''))
		.pipe(livereload(server));
});


// Default Task
gulp.task('default', ['connect', 'watch']);


// Server
gulp.task('connect', function() {
	connect.server({
		root: '.',
		livereload: false
	});
});


// Watch
gulp.task('watch', function() {
	server.listen(35729, function (err) {
		if (err) {
			return console.log(err);
		}

		gulp.watch('css/src/**/*.scss', ['styles']);
		gulp.watch('*.html', ['markup']);
	});

});
