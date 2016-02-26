import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import style from './content.styl';
// import {DatePickerBlock} from './../../widgets/datepicker/datepicker';
// import {DatePicker} from 'material-ui';

const Example = React.createClass({
  render: () => {
    return <div>Example</div>
  }
})

class Input extends React.Component {
  getInitialState () {
    return {value: '', placeholder: this.props.placeholder};
  }
  handleChange (event) {
    console.log(event);
    this.setState.value = event.target.value;
  }
  render () {
    return (
      <div>
        <input type="text" placeholder={this.props.placeholder} onChange={this.handleChange}/>
      </div>
    )
  }
}

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

export class Content extends React.Component {
  render () {
    return (
      <main className={style.Content}>
        <Input placeholder="hello"/>
        <List results={results} />
        <Example/>
      </main>
    )
  }
}
