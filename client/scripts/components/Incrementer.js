import React, { Component, PropTypes } from 'react'
import { RaisedButton } from 'material-ui'

const style = {
  margin: 10
}

export default class Incrementer extends Component {
  handleBtnClick() {
    this.props.getIncrement(this.props.count + 1)
  }
  render() {
    return (
      <div className="btn-incrementer">
        <RaisedButton onClick={ ::this.handleBtnClick } label={ `Incrementer: ${this.props.count}` } primary={ true } style={ style } />
      </div>
    )
  }
}

Incrementer.propTypes = {
  getIncrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}
