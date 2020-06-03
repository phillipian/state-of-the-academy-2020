var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var minify = require('gulp-minify');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');

gulp.task('default', ['views', 'sass', 'compress', 'webserver'], function() {
  gulp.watch('src/SCSS/*.scss', ['sass']);
  gulp.watch('src/views/*.pug', ['views']);
  gulp.watch('src/views/components/*.pug', ['views']);
  gulp.watch('src/views/sections/*.pug', ['views']);
  gulp.watch('src/JS/*.js', ['compress']);
  gulp.watch('src/JS/components/*.js', ['compress']);
});

gulp.task('views', function buildHTML() {
  return gulp.src(['src/views/*.pug'])
    .pipe(pug())
    .pipe(gulp.dest('.'));
});

gulp.task('sass', function () {
  return gulp.src('src/SCSS/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/CSS'));
});

gulp.task('compress', function() {
  gulp.src(["src/JS/*.js", 'src/JS/components/*.js'])
  .pipe(concat('script.js'))
    .pipe(minify({}))
    .pipe(gulp.dest('dist'));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});
