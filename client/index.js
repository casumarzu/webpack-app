import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './scripts/app';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('root'));
