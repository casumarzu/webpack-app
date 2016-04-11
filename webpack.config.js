var path = require('path'),
    webpack = require('webpack');

var loaders = require('./webpack/loaders');
var postcss = require('./webpack/postCss');
var plugins = require('./webpack/plugins');
var entry = require('./webpack/entry');

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: entry,
  vendors: ['react', 'reset.css'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss', '.less', '.json', '.eot'],
    alias: {
      Root: path.resolve( __dirname, 'client' ),
      Actions: path.resolve( __dirname, 'client', 'scripts', 'actions' ),
      Constants: path.resolve( __dirname, 'client', 'scripts', 'constants' ),
      Reducers: path.resolve( __dirname, 'client', 'scripts', 'reducers' ),
      Store: path.resolve( __dirname, 'client', 'store' ),

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
  },
  closureLoader: {
    paths: [
      __dirname + '/client'
    ],
    es6mode: true,
    watch: true
   }
};

module.exports = config;
