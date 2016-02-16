import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {Buttons} from './appMUI';

import './../stylesheets/index.css';
import './../stylesheets/styl.styl';
import './../stylesheets/scss.scss';
import './../stylesheets/less.less';

export class Blocks extends React.Component {
  render () {
    return (
      <section>
        <div className="stylus-block">Stylus</div>
        <div className="sass-block">Sass</div>
        <div className="less-block">Less</div>
        <Buttons/>
      </section>
    )
  }
}
