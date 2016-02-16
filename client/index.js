import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './stylesheets/index.css';
import './stylesheets/styl.styl';
import './stylesheets/scss.scss';
import './stylesheets/less.less';

import {App} from './appMUI';
// import {DialogExampleSimple} from './Dialog';
// import MySampleAppComponent from './myComponent';


React.render(<App />, document.getElementById('root'));
// React.render(<DialogExampleSimple open='false' />, document.getElementById('root2'));
