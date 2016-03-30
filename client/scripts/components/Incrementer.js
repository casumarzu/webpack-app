import React, { Component, PropTypes } from 'react'

export default class Incrementer extends Component {
  handleBtnClick() {
    this.props.getIncrement(this.props.count + 1)
  }
  render() {
    return (
      <div className="btn-incrementer">
        <button className="btn-incrementer__counter" onClick={ ::this.handleBtnClick }>Incrementer: { this.props.count }</button>
      </div>
    )
  }
}

Incrementer.propTypes = {
  getIncrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}
