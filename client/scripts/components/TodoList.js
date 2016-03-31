import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'
import _ from 'lodash'
import { TextField } from 'material-ui'

export default class TodoList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    checkItem: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleSubmit(event) {
    event.preventDefault()
    if(!this.state.value) return;
    const { list } = this.props
    list.push({
      id: _.uniqueId(),
      name: this.state.value,
      checked: false
    })

    this.setState({ value: '' })

    this.props.addItem(list)
  }
  handleChangeInput(event) {
    this.setState({ value: event.target.value })
  }
  render() {
    const { list, checkItem } = this.props
    const { value } = this.state
    const listLng = list.length

    const todoListView = list.map((task) => {
      return (
        <TodoItem list={ list } id={ task.id } name={ task.name } checked={ task.checked } checkItem={checkItem} />
      )
    })

    return (
      <form className="todo-list" onSubmit={::this.handleSubmit}>
        <TextField value={ value } onChange={::this.handleChangeInput} placeholder="task name" />
        { todoListView }
        <h3>Количество задач: { listLng }</h3>
      </form>
    )
  }
}
