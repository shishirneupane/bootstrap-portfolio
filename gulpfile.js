const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');

// minify images
gulp.task('image', function() {
  return gulp.src('dev/img/*')
    .pipe(image())
    .pipe(gulp.dest('dist/img'));
});

// compile SCSS to CSS
gulp.task('sass', function () {
  return gulp.src('dev/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dev/css'));
});

// minify CSS
gulp.task('css', function () {
  return gulp.src('dev/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'));
});

// minify HTML
gulp.task('html', function () {
  return gulp.src('dev/html/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/html'));
});

// run all gulp tasks
gulp.task('dev', gulp.series('image', 'sass', 'css', 'html'));