var webpack = require('webpack'),
    config = require('./webpack.config'),
    port = 8080,
    WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
  contentBase: './client',
  // publicPath: publicPath,
  hot: true,
  historyApiFallback: true,
  // proxy: {
  //  "*": "http://localhost:3000"
  // },
  stats: { colors: true }
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
