import React, { Component, PropTypes } from 'react'

export default class Incrementer extends Component {
  handleBtnClick() {
    function wait(t) {
      return new Promise((r) => setTimeout(r, t))
    }

    async function asyncMania() {
      console.log('1')
      await wait(1000)
      console.log('2')
    }

    asyncMania()
    .then(() => console.log('3'))

    this.props.getIncrement(this.props.count + 1)
  }
  render() {
    return (
      <div className="btn-incrementer">
        <button className="btn-incrementer__counter" onClick={::this.handleBtnClick}>Incrementer: {this.props.count}</button>
      </div>
    )
  }
}

Incrementer.propTypes = {
  increment: PropTypes.func.isRequired
}
