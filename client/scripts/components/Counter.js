import React, { Component } from 'react'

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
        <button className="btn__counter" onClick={::this.handleBtnClick}>Счетчик - {this.state.count}</button>
      </div>
    )
  }
}

Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };
