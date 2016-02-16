import path from 'path';
import webpack from 'webpack';

// Post-css
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import pxtorem from 'postcss-pxtorem';
import postcssShort from 'postcss-short';
import postcssSorting from 'postcss-sorting';
import postcssCssnext from 'postcss-cssnext';
import rucksackcss from 'rucksack-css';

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
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    loaders: [
      // js bable
      {test: /\.js?$/i,     loader: 'babel', exclude: /(node_modules)/, query: {presets: ['react', 'es2015']}},
      // js coffeescript
      {test: /\.coffee?$/i, loader: 'coffee-jsx-loader', exculde: /(node_modules)/},
      // js typescript
      {test: /\.ts?$/i,     loader: 'ts-loader!ts-jsx-loader', exculde: /(node_modules)/},
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
  }
};
