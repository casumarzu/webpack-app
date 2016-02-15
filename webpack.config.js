var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

// BABEL
// require('babel-loader');
// require('babel-core');
// require('babel-preset-es2015');
// require('babel-preset-react');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'client'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.jade$/, loader: "jade" },
      { test: /\.css$/, loader: "style!css" },
    ]
  },

  postcss: function () {
    return [autoprefixer, precss];
  },

};
