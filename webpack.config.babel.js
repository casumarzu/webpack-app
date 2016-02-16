import path from 'path';
import webpack from 'webpack';

import autoprefixer from 'autoprefixer';
import precss from 'precss';
import pxtorem from 'postcss-pxtorem';
import postcssShort from 'postcss-short';
import postcssSorting from 'postcss-sorting';
import postcssCssnext from 'postcss-cssnext';
import rucksackcss from 'rucksack-css';


import ExtractTextPlugin from 'extract-text-webpack-plugin';
import poststylus from 'poststylus';

let extractSylus = new ExtractTextPlugin('./stylesheets/[name].styl');
let extractSASS = new ExtractTextPlugin('./stylesheets/[name].sass');
let extractLESS = new ExtractTextPlugin('./stylesheets/[name].less');

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
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {test: /\.coffee?$/, loader: 'coffee-jsx-loader'},
      {test: /\.ts?$/, loader: 'ts-loader!ts-jsx-loader'},

      {test: /\.jade?$/, loader: 'jade', exculde: /node_modules/},
      {test: /\.css?$/i, loader: 'style-loader!css-loader!postcss-loader'},
      {test: /\.styl?$/i, loader: 'style-loader!styl-loader!postcss-loader'},
      {test: /\.sass?$/i, loader: 'style-loader!sass-loader!postcss-loader'},
      {test: /\.less?$/i, loader: 'style-loader!less-loader!postcss-loader'}
      // {test: /\.less?$/i, loader: ExtractTextPlugin.extract('style-loader', 'less-loader'   )}
    ]
  },

  postcss: function () {
    return [
      autoprefixer,
      precss,
      postcssShort,
      pxtorem,
      postcssSorting,
      postcssCssnext,
      rucksackcss
    ];
  },

  stylus: {
    use: [
      poststylus([
        'autoprefixer',
        'postcss-short',
        'postcss-sorting',
        'postcss-cssnext',
        'rucksack-css'
      ])
    ]
  }

};
