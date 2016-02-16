import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



import './stylesheets/index.css';
// import './stylesheets/styl.styl';
// import './stylesheets/sass.sass';
// import './stylesheets/less.less';

import {App} from './appMUI';
// import {DialogExampleSimple} from './Dialog';
// import MySampleAppComponent from './myComponent';

import {a, b} from './f';
a();
b();

import Coffee from './coffee.coffee';
new Coffee();

import {foo} from './ts.ts';

console.log(foo);

// $.ajax({
//   url: "/api/pages?page=index",
//   type: "GET",
//   dataType: "JSON"
// }).done(function(data) {
//   console.log(data);
// }).fail(function (data) {
//   console.error(data);
// })

import { Button } from 'react-bootstrap';
const buttonsInstance = (
  <div>
    <Button>Default</Button>
    <Button bsStyle="primary">Primary</Button>
    <Button bsStyle="success">Success</Button>
    <Button bsStyle="info">Info</Button>
    <Button bsStyle="warning">Warning</Button>
    <Button bsStyle="danger">Danger</Button>
    <Button bsStyle="link">Link</Button>
  </div>
);

React.render(buttonsInstance, document.getElementById('root'));

// React.render(<App />, document.getElementById('root'));
// React.render(<DialogExampleSimple open='false' />, document.getElementById('root2'));
