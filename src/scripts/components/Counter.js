import React, { Component } from 'react'
// import { RaisedButton } from 'material-ui'
// import Button from 'react-toolbox/lib/button'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount }
  }
  handleBtnClick() {
    this.setState({ count: ++this.state.count })
  }
  render() {
    return (
      <div className="btn">
        <button
          onClick={ ::this.handleBtnClick }
          value={ `Счетчик - ${this.state.count}` }
          secondary={ true } >Счетчик - {this.state.count}</button>
      </div>
    )
  }
}


Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };
