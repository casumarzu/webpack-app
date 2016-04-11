var NODE_ENV = process.env.NODE_ENV;
var port = 8080;
var entry;

if(NODE_ENV === 'dev'){
  entry = [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './client/scripts/index.js'
  ];
}else if(NODE_ENV === 'prod'){
  entry = ['babel-polyfill','./client/scripts/index.js'];
}

module.exports = entry;
