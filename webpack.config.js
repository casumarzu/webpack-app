var NODE_ENV = process.env.NODE_ENV;

var port = 8080,
    publicPath = '';

var path = require('path'),
    webpack = require('webpack');

var loaders = require('./webpack/loaders');
var postcss = require('./webpack/postCss');
var plugins = require('./webpack/plugins').plugins;
var entry = require('./webpack/plugins').entry;

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: entry,
  vendors: ['react', 'reset.css'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: publicPath,
    filename: 'bundle.[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss', '.less', '.json', '.eot'],
    alias: {
      Root: path.resolve( __dirname, 'client' ),
      Images: path.resolve( __dirname, 'client', 'images' ),
      Layout: path.resolve( __dirname, 'client', 'scipts', 'loyouts' ),
      Widget: path.resolve( __dirname, 'client', 'scripts', 'widgets' ),
      Page: path.resolve( __dirname, 'client', 'scripts', 'pages' ),
      Util: path.resolve( __dirname, 'client', 'scripts', 'utils' ),
      Exp: path.resolve( __dirname, 'client', 'scripts', 'exp' ),
      Style: path.resolve( __dirname, 'client', 'stylesheets' ),
      Tmpl: path.resolve( __dirname, 'client', 'templates' )
    }
  },
  plugins: plugins,
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, './client'),
        ],
      }
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
