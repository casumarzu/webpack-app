var NODE_ENV = process.env.NODE_ENV;
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlPlugin = require('html-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var plugins;

if(NODE_ENV === 'development'){
  plugins = [
    new HtmlPlugin({
      filename: 'index.html',
      title: 'Development App',
      template: './client/templates/index.jade',
      favicon: './client/favicon.ico',
      // chunks: ['common', 'alpha', 'vendors']
    }),
    new NpmInstallPlugin(),
    new ExtractTextPlugin(),
    new CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.ProgressPlugin(function(percentage, msg) {
    //   console.log((percentage * 100) + '%', msg);
    // }),
    // new webpack.NoErrorsPlugin()
  ];
}else if(NODE_ENV === 'production'){
  plugins = [
    new HtmlPlugin({
      filename: 'index.html',
      title: 'Production App',
      template: './client/templates/index.jade',
      favicon: './client/favicon.ico',
      // chunks: ['common', 'beta', 'vendors'],
    }),
    // new CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
    new ExtractTextPlugin('bundle.[hash].css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
    new NpmInstallPlugin()
  ];
}

module.exports = plugins;
