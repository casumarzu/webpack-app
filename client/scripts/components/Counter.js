import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'

const style = {
  margin: 10
}

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
        <RaisedButton onClick={ ::this.handleBtnClick } label={ `Счетчик - ${this.state.count}` } secondary={ true } style={ style } />
      </div>
    )
  }
}


Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };
