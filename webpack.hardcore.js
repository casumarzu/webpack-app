var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    PathRewriterPlugin = require('webpack-path-rewriter');


var jsxLoader = [
  'react-hot',
  'babel-loader?optional[]=runtime&stage=0&plugins=rewire'
];

var sassParams = [
  'outputStyle=expanded',
  'includePaths[]=' + path.resolve(__dirname, '../client/scss'),
  'includePaths[]=' + path.resolve(__dirname, '../node_modules')
];

var sassLoader = [
    'react-hot',
    'style-loader',
    'css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]',
    'postcss-loader',
    'sass-loader?' + sassParams.join('&')
  ].join('!');

var cssLoader = [
    'react-hot',
    'style-loader',
    'css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]',
    'postcss-loader'
  ].join('!');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/index.js'
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
      // {
      //   test: /[.]jade$/,
      //   loader: PathRewriterPlugin.rewriteAndEmit({
      //     name: '[path][name].html',
      //     loader: 'jade-html?' + JSON.stringify({ pretty: true })
      //   })
      // },
      {
        test: /\.jsx?$/,
        loaders: jsxLoader
      },
      {
        test: /\.css$/,
        loader: cssLoader
      },
      // {
      //   test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.woff$|\.ttf$/,
      //   loader: fileLoader
      // },
      // {
      //   test: /\.json$/,
      //   exclude: /node_modules/,
      //   loaders: jsonLoader
      // },
      // {
      //   test: /\.html$/,
      //   loader: htmlLoader
      // },
      {
        test: /\.scss$/,
        loader: sassLoader
      }
    ]
  },

  postcss: function () {
    return [autoprefixer, precss];
  },

  // proxy: {
  //   '*': {
  //     target: 'http://bebetterclub.ru',
  //     secure: false,
  //   },
  // }

  // proxy: {
  //   '/some/path*': {
  //     target: 'http://bebetterclub.ru',
  //     secure: false,
  //     bypass: function(req, res, proxyOptions) {
  //       if (req.headers.accept.indexOf('html') !== -1) {
  //         console.log('Skipping proxy for browser request.');
  //         return '/index.html';
  //       }
  //     }
  //   }
  // }
};
