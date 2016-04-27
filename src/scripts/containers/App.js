import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import Incrementer from '../components/Incrementer'
import TodoList from '../components/TodoList'
import * as incrementActions from '../actions/Increment.Actions'
import * as todoListActions from '../actions/TodoList.Actions'
import _ from 'lodash'
import styles from 'Styles/index'

class App extends Component {
  componentDidMount() {
    console.log('loaded');
  }
  render() {
    const { incrementer, todoList } = this.props
    const { increment } = this.props.incrementActions

    const { addItem, checkItem } = this.props.todoListActions

    return (
      <div className={ styles.Wrapper }>
        <TodoList list={ todoList.list } addItem={ addItem } checkItem={ checkItem } />
        <Incrementer count={incrementer.count} getIncrement={increment} />
        <Counter />
      </div>
    )
  }
}

App.propTypes = {
  incrementer: PropTypes.object.isRequired,
  incrementActions: PropTypes.shape({
    increment: PropTypes.func.isRequired
  }),
  todoList: PropTypes.object.isRequired,
  todoListActions: PropTypes.shape({
    addItem: PropTypes.func.isRequired,
    checkItem: PropTypes.func.isRequired
  }),
}

function mapStateToProps(state) {
  return {
    incrementer: state.incrementer,
    incrementActions: state.incrementActions,

    todoList: state.todoList,
    todoListActions: state.todoListActions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    incrementActions: bindActionCreators(incrementActions, dispatch),
    todoListActions: bindActionCreators(todoListActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
