var gulp = require('gulp');
var runSequence = require('run-sequence');
var mainBowerFiles = require('main-bower-files');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var webpack = require('webpack');
var webpackLogger = require('webpack-gulp-logger');
var webpackConfig = require('./webpack.config');


gulp.task('default', ['build']);

gulp.task('build', function(callback) {
  runSequence(
    'clean',
    [
      'build-vendors',
      'build-src'
    ],
    'minify',
    callback
  );
});

gulp.task('watch', function() {
  webpack(webpackConfig).watch({}, webpackLogger());
});

gulp.task('build-src', function(callback) {
  webpack(webpackConfig).run(webpackLogger(callback));
});

gulp.task('build-vendors', function() {
  return gulp.src(mainBowerFiles())
    .pipe(sourcemaps.init())
    .pipe(concat('vendors.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return gulp.src('dist')
    .pipe(vinylPaths(del));
});

gulp.task('minify', function() {
  return gulp.src('dist/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/'));
});


module.exports = gulp.tasks;
