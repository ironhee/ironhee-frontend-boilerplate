import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../webpack.config';

const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');
const webpackStats = {
  colors: true,
  reasons: DEBUG,
  hash: VERBOSE,
  version: VERBOSE,
  timings: true,
  chunks: VERBOSE,
  chunkModules: VERBOSE,
  cached: VERBOSE,
  cachedAssets: VERBOSE,
};


function bundle() {
  return new Promise((resolve, reject) => {
    function onComplete(err, stats) {
      if (err) {
        return reject(err);
      }
      console.log(stats.toString(webpackStats));
      return resolve();
    }

    if (global.WATCH) {
      webpackConfig.entry.app.unshift(
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
      );
    }

    const bundler = webpack(webpackConfig);

    if (global.WATCH) {
      const server = new WebpackDevServer(bundler, {
        contentBase: path.resolve(__dirname, '../../static'),
        publicPath: '/static/',
        hot: true,
        stats: webpackStats,
        historyApiFallback: true,
      });
      server.listen(3000, 'localhost', function(err) {
        if (err) { console.log(err); }
        console.log('Listening at localhost:3000');
      });
    } else {
      bundler.run(onComplete);
    }
  });
}

export default bundle;
