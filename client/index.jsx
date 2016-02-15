import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {App} from './app.jsx';

import {a, b} from './f';

a();
b();

// $.ajax({
//   url: "/api/pages?page=index",
//   type: "GET",
//   dataType: "JSON"
// }).done(function(data) {
//   console.log(data);
// }).fail(function (data) {
//   console.error(data);
// })

React.render(<App />, document.getElementById('root'));
