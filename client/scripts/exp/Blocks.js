import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
(require('react-tap-event-plugin'))();

import {Buttons} from './appMUI';

import './../stylesheets/index.css';
import styl from './../stylesheets/styl.styl';
import scss from './../stylesheets/scss.scss';
import less from './../stylesheets/less.less';

export class Blocks extends React.Component {
  render () {
    return (
      <section>
        <div className={`${styl.stylusBlock} block`}>Stylus</div>
        <div className={`${scss.scssBlock} block`}>Scss</div>
        <div className={`${less.lessBlock} block`}>Less</div>
        <div className="shitClass"></div>
        <Buttons/>
      </section>
    )
  }
}
