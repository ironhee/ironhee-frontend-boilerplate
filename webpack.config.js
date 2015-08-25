var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'source-map',
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.es6', '.js']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'app.js',
    library: 'app',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.es6$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel']
      }
    ]
  }
};
