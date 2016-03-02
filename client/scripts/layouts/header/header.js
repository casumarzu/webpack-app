import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory } from 'react-router';
import style from './header.styl';

export class Header extends React.Component {
  render () {
    return (
      <header className={style.Header}>
        <h1>Header</h1>
      </header>
    )
  }
}
