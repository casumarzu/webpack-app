var NODE_ENV = process.env.NODE_ENV;
var path = require('path'),
    webpack = require('webpack');

var loaders = require('./webpack/loaders');
var postcss = require('./webpack/postCss');
var plugins = require('./webpack/plugins');
var entry = require('./webpack/entry');

var config = {
  entry: entry,
  vendors: ['react', 'reset.css', 'normalize.css'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].bundle.[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss', '.less', '.styl', '.json', '.eot'],
    alias: {
      Root: path.resolve( __dirname, 'client' ),
      Actions: path.resolve( __dirname, 'client', 'scripts', 'actions' ),
      Constants: path.resolve( __dirname, 'client', 'scripts', 'constants' ),
      Reducers: path.resolve( __dirname, 'client', 'scripts', 'reducers' ),
      Store: path.resolve( __dirname, 'client', 'scripts', 'store' ),

      Containers: path.resolve( __dirname, 'client', 'scripts', 'containers' ),
      Components: path.resolve( __dirname, 'client', 'scripts', 'components' ),

      Layout: path.resolve( __dirname, 'client', 'scripts', 'loyouts' ),
      Page: path.resolve( __dirname, 'client', 'scripts', 'pages' ),

      Util: path.resolve( __dirname, 'client', 'scripts', 'utils' ),
      Exp: path.resolve( __dirname, 'client', 'scripts', 'exp' ),

      Images: path.resolve( __dirname, 'client', 'images' ),
      Styles: path.resolve( __dirname, 'client', 'stylesheets' ),
      Tmpl: path.resolve( __dirname, 'client', 'templates' )
    }
  },
  plugins: plugins,
  module: {
    preLoaders: [
      {test: /\.js$/, loaders: ['eslint'], include: [ path.resolve(__dirname, './client')]}
    ],
    loaders: loaders
  },
  postcss: function () {
    return postcss;
  }
};

if(NODE_ENV === 'development') {
  config.devtool = 'cheap-module-eval-source-map';
}

module.exports = config;
