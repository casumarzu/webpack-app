import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import style from './footer.styl';

export class Footer extends React.Component {
  render () {
    return (
      <footer className={style.Footer}>
        <h1>Footer</h1>
      </footer>
    )
  }
}
