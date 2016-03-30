import React, { Component, PropTypes } from 'react'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleSubmit(event) {
    event.preventDefault()

    const { list } = this.props
    list.push({
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
    const { list } = this.props
    const { value } = this.state
    const listLng = list.length

    const todoListView = list.map((task) => {
      return (
        <div className="todo-list__item">{task.name}</div>
      )
    })

    return (
      <form className="todo-list" onSubmit={::this.handleSubmit}>
        <input type="text" value={ value } onChange={::this.handleChangeInput} placeholder="task name" />
        { todoListView }
        <h3>Количество задач: { listLng }</h3>
      </form>
    )
  }
}

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
}
