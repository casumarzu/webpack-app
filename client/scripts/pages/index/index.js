import React, { Component } from 'react';
import * as bootstrap from "react-bootstrap";
import { Button, Jumbotron, Table } from 'react-bootstrap';
import style from './style.styl';

import pic2 from './../../../images/1.png';

export class Index extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Index Page</h1>
        <img src={pic2}/>
        <p>This is a simple hero unit, a simple
           jumbotron-style component for calling
            extra attention to featured
             content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
    )
  }
}
