import React, { Component, PropTypes } from 'react'
// import { RaisedButton } from 'material-ui'

export default class Incrementer extends Component {
  handleBtnClick() {
    this.props.getIncrement(this.props.count + 1)
  }
  render() {
    return (
      <div className="btn-incrementer">
        <button
          onClick={ ::this.handleBtnClick }
          label={ `Incrementer: ${this.props.count}` }
          primary={ true } >Incrementer: {this.props.count}</button>
      </div>
    )
  }
}

Incrementer.propTypes = {
  getIncrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}
