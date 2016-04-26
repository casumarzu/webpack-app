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

var entry = {
  common: preEntry.concat(['./src/scripts/index.js']),
  alpha: preEntry.concat(['./src/scripts/alpha.js']),
  beta: preEntry.concat(['./src/scripts/beta.js'])
};


module.exports = entry;
