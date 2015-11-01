import path from 'path';
import webpack from 'webpack';

const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');
const WATCH = global.WATCH === undefined ? false : global.WATCH;
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

export default {
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  cache: DEBUG,
  debug: DEBUG,
  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },
  resolve: {
    modulesDirectories: [
      path.join(__dirname, '../src'),
      path.join(__dirname, '../node_modules'),
      path.join(__dirname, '../vendors'),
    ],
    extensions: ['', '.es6', '.js'],
  },
  entry: {
    app: [
      ...WATCH ? [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
      ] : [],
      path.join(__dirname, '../src'),
    ],
  },
  output: {
    path: path.join(__dirname, '../dist/static/'),
    filename: 'app.js',
    library: 'app',
    libraryTarget: 'umd',
  },
  postcss() {
    return [
      require('postcss-nested')(),
      require('postcss-cssnext')({ autoprefixer: AUTOPREFIXER_BROWSERS }),
    ];
  },
  plugins: [
    /* default */
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
      __DEV__: DEBUG,
    }),
    /* production */
    ...!DEBUG ? [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: VERBOSE,
        },
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ] : [],
    /* watch */
    ...WATCH ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ] : [],
  ],
  module: {
    loaders: [
      {
        test: /\.(js|es6)$/,
        include: path.join(__dirname, '../src'),
        loaders: [...DEBUG ? ['react-hot'] : [], 'babel'],
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, '../src'),
        loaders: ['style/useable', 'css', 'postcss', 'sass?sourceMap'],
      },
      {
        test: /\.css$/,
        loaders: ['style/useable', 'css', 'postcss'],
      },
    ],
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../bower_components/foundation/scss'),
    ],
  },
};
