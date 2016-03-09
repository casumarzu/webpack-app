const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-route');
const vhost = require('koa-vhost');
const path = require('path');
const _ = require('lodash');
const port = process.env.PORT || 5000;

const app = koa();

const Jade = require('koa-jade');
const jade = new Jade({
  viewPath: path.join(__dirname, 'server', 'views'),
  debug: true,
  pretty: true,
  compileDebug: true
})

app.use(jade.middleware);
app.use(serve(path.join(__dirname, 'dist')));

app.use(router.get('/foo', function* () {
  this.body = 'foo';
}));

app.use(router.get('/bar', function* () {
  this.body = 'bar';
}));

app.listen(port, function() {
  console.log('server listening port: ' + port);
});
