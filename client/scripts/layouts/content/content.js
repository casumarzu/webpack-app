import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import pic from  './../../../images/pic.jpg';
import pic2 from './../../../images/1.png';

class List extends React.Component {
  handleAdd (event) {
    // console.log(this.state);
    // this.props.results.push({
    //   id: _.uniqueId(),
    //   text: event.target.value
    // })
  }
  render () {
    var results = this.props.results;
    return (
      <div>
        <img width="200" src={pic}/>
        <img src={pic2}/>
        <Input type="text" />
        <button onClick={this.handleAdd}>Добавить</button>
        <ol>
          {results.map(function(result) {
            return <li key={result.id}>{result.text}</li>;
          })}
        </ol>
      </div>
    )
  }
}

var results = [
  {id: 1, text: 'Hello 1'},
  {id: 2, text: 'Hello 2'},
  {id: 3, text: 'Hello 3'},
  {id: 4, text: 'Hello 4'},
  {id: 5, text: 'Hello 5'}
]

// import Button from 'react-toolbox/lib/button';

import {RaisedButton} from 'material-ui';

class ButtonsMaterial extends React.Component {
  render () {
    return (
      <div>
        <RaisedButton label="Default" style={style} />
        <RaisedButton label="Primary" primary={true} style={style} />
        <RaisedButton label="Secondary" secondary={true} style={style} />
        <RaisedButton label="Disabled" disabled={true} style={style} />
      </div>
    )
  }
}

import * as bootstrap from "react-bootstrap";
import { Button, Jumbotron } from 'react-bootstrap';

class ButtonsBootstrap extends React.Component {
  render () {
    return (
      <div>
        <Button>Default</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="success">Success</Button>
        <Button bsStyle="info">Info</Button>
        <Button bsStyle="warning">Warning</Button>
        <Button bsStyle="danger">Danger</Button>
        <Button bsStyle="link">Link</Button>
      </div>
    )
  }
}

// <List results={results} />
// <ButtonsMaterial/>
// <hr/>
// <ButtonsBootstrap/>

export class Content extends React.Component {
  render () {
    return (
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
    )
  }
}
