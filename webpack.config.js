var NODE_ENV = process.env.NODE_ENV;

var path = require('path'),
    webpack = require('webpack');

var HtmlPlugin = require('html-webpack-plugin');

var NpmInstallPlugin = require('npm-install-webpack-plugin')

var port = 8080,
    publicPath = '';

// Post-css
var autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    pxtorem = require('postcss-pxtorem'),
    postcssShort = require('postcss-short'),
    postcssSorting = require('postcss-sorting'),
    postcssCssnext = require('postcss-cssnext'),
    rucksackcss = require('rucksack-css'),
    postcssCustomSelectors = require('postcss-custom-selectors'),
    postcssGrid = require('postcss-grid'),
    cssnano = require('cssnano'),
    stylelint = require('stylelint');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var include = path.join(__dirname, '/client'),
    exclude = /(node_modules)/;

var imageLoader = {
  test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$|.wav$|.mp3$/,
  loaders: [
    'file?hash=sha512&digest=hex&name=[name].[hash].[ext]',
    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
  ]
}

var jsLoader = function (loader, lang) {
  var loaders = [loader];

  if(NODE_ENV === 'dev') loaders = ['react-hot', loader];

  return {
    test: lang,
    loaders: loaders,
    include: include,
    exculde: exclude
  };
}

var fileLoader = function (loader, lang) {

  return {
    test: lang,
    loader: loader,
    include: include,
    exculde: exclude
  };
}

var styleLoader = function (loader, lang) {
  if(NODE_ENV === 'dev'){
    loader = 'style-loader' + loader;
  }else if(NODE_ENV === 'prod'){
    loader = ExtractTextPlugin.extract('style-loader', loader);
  }

  return {
    test: lang,
    loader: loader
    // include: include,
    // exculde: exclude
  };
}

var babelLoader =   jsLoader('babel', /\.js?$|\.jsx?$/);
var coffeeLoader =  jsLoader('coffee-jsx-loader', /\.coffee?$/);
var tsLoader =      jsLoader('ts-loader!ts-jsx-loader', /\.ts?$/);
var closureLoader = jsLoader('closure-loader', /\.cljs?$/);

var jadeLoader = fileLoader('jade', /\.jade?$/);

var css = '!css-loader!postcss-loader';

var cssLoader =  styleLoader(css, /\.css?$/);
var stylLoader = styleLoader(css + '!stylus-loader', /\.styl?$/);
var scssLoader = styleLoader(css + '!sass-loader', /\.scss$/);
var lessLoader = styleLoader(css + '!less-loader', /\.less?$/);

var postcssArr = [
  autoprefixer,
  precss,
  postcssShort,
  postcssSorting,
  postcssCssnext,
  rucksackcss,
  postcssCustomSelectors,
  postcssGrid,
  cssnano
];

if(NODE_ENV === 'dev'){
  var plugins = [
    new HtmlPlugin({
      filename: 'index.html',
      title: 'DEV APP',
      template: './client/templates/index.jade',
      favicon: './client/favicon.ico',
      // chunks: ['client', 'vendors'],
    }),
    new ExtractTextPlugin(),
    new NpmInstallPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[hash].js')
  ], entry = [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    './client/index.js'
  ];
}else if(NODE_ENV === 'prod'){
  var plugins = [
    new HtmlPlugin({
      filename: 'index.html',
      title: 'PROD APP',
      template: './client/templates/index.jade',
      favicon: './client/favicon.ico',
      // chunks: ['client', 'vendors'],
    }),
    new ExtractTextPlugin('bundle.[hash].css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
    new NpmInstallPlugin(),
    new webpack.noErrorsPlugin()
  ], entry = './client/index.js';
}

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
    loaders: [
      babelLoader,
      coffeeLoader,
      tsLoader,
      closureLoader,
      jadeLoader,
      cssLoader,
      stylLoader,
      scssLoader,
      lessLoader,
      imageLoader
    ]
  },
  postcss: function () {
    return postcssArr;
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
