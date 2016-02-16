import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {App} from './scripts/appMUI';

import './stylesheets/index.css';
import './stylesheets/styl.styl';
import './stylesheets/scss.scss';
import './stylesheets/less.less';


React.render(<App />, document.getElementById('root'));
