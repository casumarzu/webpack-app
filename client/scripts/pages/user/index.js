import React, { Component } from 'react';
import * as bootstrap from "react-bootstrap";
import { Button } from 'react-bootstrap';
import style from './style.styl';

export class User extends React.Component {
  render() {
    return (
      <div>
        <h3>User {this.props.params.id}</h3>
      </div>
    )
  }
}
