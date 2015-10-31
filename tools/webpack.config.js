import path from 'path';
import webpack from 'webpack';


export default {
  devtool: 'source-map',
  resolve: {
    modulesDirectories: [
      path.join(__dirname, '../src'),
      path.join(__dirname, '../node_modules'),
    ],
    extensions: ['', '.es6', '.js'],
  },
  entry: {
    app: [path.join(__dirname, '../src')],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'app.js',
    library: 'app',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|es6)$/,
        include: path.join(__dirname, '../src'),
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.scss$/,
        loaders: ['style/useable', 'css', 'postcss', 'sass?sourceMap'],
      },
    ],
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, '../src')],
  },
};
