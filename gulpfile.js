/* eslint no-console: 0 */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var webpack = require('webpack');
var webpackLogger = require('webpack-gulp-logger');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');


gulp.task('default', ['build']);

gulp.task('build', function(callback) {
  runSequence(
    'clean',
    'build',
    'minify',
    callback
  );
});

gulp.task('watch', function() {
  const server = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: 'public',
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: { colors: true },
    historyApiFallback: true,
  });
  server.listen(3000, 'localhost', function(err) {
    if (err) { console.log(err); }
    console.log('Listening at localhost:3000');
  });
});

gulp.task('build', function(callback) {
  webpack(webpackConfig).run(webpackLogger(callback));
});

gulp.task('clean', function() {
  return gulp.src('dist')
    .pipe(vinylPaths(del));
});
