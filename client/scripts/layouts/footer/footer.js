import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as bootstrap from "react-bootstrap";
import { Navbar } from 'react-bootstrap';

export class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">Footer</p>
        </div>
      </footer>
    )
  }
}
