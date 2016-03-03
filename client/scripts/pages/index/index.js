import React, { Component } from 'react';
import * as bootstrap from "react-bootstrap";
import { Button, Jumbotron } from 'react-bootstrap';
import style from './style.styl';

export class Index extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Index Page</h1>
        <p>This is a simple hero unit, a simple
           jumbotron-style component for calling
            extra attention to featured
             content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
    )
  }
}
