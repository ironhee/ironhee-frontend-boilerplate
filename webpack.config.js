var path = require('path');
var webpackUMDExternal = require('webpack-umd-external');


module.exports = {
  devtool: 'source-map',
  resolve: {
    modulesDirectories: ['src/js', 'node_modules'],
    extensions: ['', '.es6', '.js']
  },
  entry: {
    'app': './src/js/index.es6'
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].js',
    library: 'app',
    libraryTarget: 'umd'
  },
  externals: webpackUMDExternal({
    'reflux': 'Reflux',
    'react': 'React',
    'react-router': 'ReactRouter'
  }),
  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
};
