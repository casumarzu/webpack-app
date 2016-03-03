import React, { Component } from 'react';
import * as bootstrap from "react-bootstrap";
import { Button } from 'react-bootstrap';
import style from './style.styl';

export class Users extends React.Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.props.children}
      </div>
    )
  }
}
