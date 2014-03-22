// Installing Gulp
// =======================================================
// References
// http://gulpjs.com
// https://laracasts.com/lessons/gulp-this
// http://markgoodyear.com/2014/01/getting-started-with-gulp
// https://gist.github.com/grayghostvisuals/e85c85243a79f1ccc58a
// http://tooling.github.io/book-of-modern-frontend-tooling/build-systems/gulp/getting-started.html

// $ cd ~
// $ npm install -g gulp
// $ cd [projects-dir] && cd baseball-app
// $ npm install

// Installs gulp locally along with the devDependencies 
// listed in the package.json file.
// =======================================================


// Load Gulp Plugins
var gulp = require('gulp'),
    compass = require('gulp-compass'), // https://github.com/appleboy/gulp-compass
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

// Gulp CSS Task
gulp.task('styles', function() {

    return gulp.src('css/src/styles.scss')
        .pipe(compass({
            config_file: 'config.rb',
            sourcemap: true,
            debug : true,
            css: 'css',
            sass: 'css/src'
        }))
        .pipe(livereload(server))
        .pipe(gulp.dest('css'));

});

// Gulp HTML Task
gulp.task('markup', function() {
    return gulp.src('*.html')
        .pipe(gulp.dest(''))
        .pipe(livereload(server));
});

// Gulp Default CLI Task
gulp.task('default', function() {

    gulp.start('styles');

});

// Gulp CLI Watch Task
gulp.task('watch', function() {

    // Listen on port 35729
    server.listen(35729, function (err) {
        if (err) {
            return console.log(err);
        }

        // Watch .scss files
        gulp.watch('css/src/**/*.scss', ['styles']);

        // Watch html files
        gulp.watch('*.html', ['markup']);
    });

});