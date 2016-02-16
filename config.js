var path = require('path'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server');

var port = 8080,
    publicPath = '/assets/';

// Post-css
var autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    pxtorem = require('postcss-pxtorem'),
    postcssShort = require('postcss-short'),
    postcssSorting = require('postcss-sorting'),
    postcssCssnext = require('postcss-cssnext'),
    rucksackcss = require('rucksack-css');

var config = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'client'),
    publicPath: publicPath,
    filename: 'bundle.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    loaders: [
      // js bable
      {test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, '/client')},
      // js coffeescript
      {test: /\.coffee?$/i, loader: 'coffee-jsx-loader', exculde: /(node_modules)/},
      // js typescript
      {test: /\.ts?$/i,     loader: 'ts-loader!ts-jsx-loader', exculde: /(node_modules)/},
      // js closurescript
      {test: /\.cljs?$/i,   loader: 'closure-loader', exculde: /(node_modules)/},
      // html jade
      {test: /\.jade?$/i,   loader: 'jade', exculde: /node_modules/},
      // css post-css
      {test: /\.css?$/i,    loader: 'style-loader!css-loader!postcss-loader', exculde: /node_modules/},
      // css post-css stylus
      {test: /\.styl?$/i,   loader: 'style-loader!css-loader!postcss-loader!stylus-loader', exculde: /node_modules/},
      // css post-css scss
      {test: /\.scss?$/i,   loader: 'style-loader!css-loader!postcss-loader!sass-loader', exculde: /node_modules/},
      // css post-css less
      {test: /\.less?$/i,   loader: 'style-loader!css-loader!postcss-loader!less-loader', exculde: /node_modules/}
    ]
  },
  postcss: function () {
    return [autoprefixer, precss, postcssShort, pxtorem, postcssSorting, postcssCssnext, rucksackcss];
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
  proxy: {
   "*": "http://localhost:3000"
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  stats: { colors: true },
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
