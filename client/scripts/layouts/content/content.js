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

const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation
               ullamco laboris nisi ut aliquip ex ea commodo
               consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum
               dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export class Content extends React.Component {
  render () {
    return (
      <main className={style.Content}>
        <p>{lorem}</p>
        <p>{lorem}</p>
        <p>{lorem}</p>
        <Example/>
      </main>
    )
  }
}
