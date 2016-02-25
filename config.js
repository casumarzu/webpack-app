var NODE_ENV = process.env.NODE_ENV;

var path = require('path'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server');

var HtmlPlugin = require('html-webpack-plugin');


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
  if(NODE_ENV === 'dev'){

  }
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
    loader: loader,
    include: include,
    exculde: exclude
  };
}

var babelLoader =   jsLoader('babel', /\.js$/);
var coffeeLoader =  jsLoader('coffee-jsx-loader', /\.coffee$/);
var tsLoader =      jsLoader('ts-loader!ts-jsx-loader', /\.ts$/);
var closureLoader = jsLoader('closure-loader', /\.cljs$/);

var jadeLoader = fileLoader('jade', /\.jade$/);

var css = '!css-loader!postcss-loader';

var cssLoader =  styleLoader(css, /\.css$/);
var stylLoader = styleLoader(css + '!stylus-loader', /\.styl$/);
var scssLoader = styleLoader(css + '!sass-loader', /\.scss$/);
var lessLoader = styleLoader(css + '!less-loader', /\.less$/);

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
      // favicon: 'favicon.ico',
      // chunks: ['client', 'vendors'],
    }),
    new ExtractTextPlugin(),
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
      // favicon: 'favicon.ico',
      // chunks: ['client', 'vendors'],
    }),
    new ExtractTextPlugin('bundle.[hash].css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}})
  ], entry = [
    'webpack-dev-server/client?http://localhost:' + port,
    './client/index.js'
  ];
}

var config = {
  devtool: 'eval',
  entry: entry,
  vendors: ['react'],
  output: {
    path: path.resolve(__dirname, '/dist'),
    publicPath: publicPath,
    filename: 'bundle.[hash].js'
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

new WebpackDevServer(webpack(config), {
  contentBase: './client',
  publicPath: publicPath,
  hot: true,
  historyApiFallback: true,
  // proxy: {
  //  "*": "http://localhost:3000"
  // },
  stats: { colors: true },
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
