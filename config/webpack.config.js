var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080/app/',
    'webpack/hot/only-dev-server',
    './client/index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/client/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'jsx?harmony'],
        include: path.join(__dirname, 'client')
      },
      {
        test:   /\.css$/,
        loader: ['react-hot', "style-loader!css-loader!postcss-loader"]
      },
      {
        test: /\.jade$/, loader: "jade"
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};
