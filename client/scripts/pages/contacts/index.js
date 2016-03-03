import React, { Component } from 'react';
import * as bootstrap from "react-bootstrap";
import { Button, Jumbotron, Grid, Col, Row } from 'react-bootstrap';
import style from './style.styl';

export class Contacts extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Contacts Page</h1>
        <p>This is a simple hero unit, a simple
           jumbotron-style component for calling
            extra attention to featured
             content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
            <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
          </Row>
        </Grid>
      </Jumbotron>
    )
  }
}
