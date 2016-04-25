var NODE_ENV = process.env.NODE_ENV;
var port = 8080;

var preEntry;

if(NODE_ENV === 'development') {
  preEntry = [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
  ]
}else if(NODE_ENV === 'production') {
  preEntry = [
    'babel-polyfill',
  ];
}

// var entry = {
//   common: preEntry.concat(['./client/scripts/index.js']),
//   alpha: preEntry.concat(['./client/scripts/alpha.js']),
//   beta: preEntry.concat(['./client/scripts/beta.js'])
// };

var entry = preEntry.concat(['./client/scripts/index.js']);

module.exports = entry;
