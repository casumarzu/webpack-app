import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { Checkbox, IconButton } from 'material-ui'
import ActionGrade from 'material-ui/lib/svg-icons/action/grade'
import * as todoListActions from '../actions/TodoList.Actions'

export default class TodoList extends Component {
  handleCheck(e) {
    const { checked } = e.target
    this.props.checkItem(this.props.list, this.props.id)
  }

  render() {
    const { id, name, checked } = this.props
    return (
      <div className="todo-list__item">
        {/*
          <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
          <ActionGrade/>
          </IconButton>
        */}
        <Checkbox key={ id } id={ `checkBox-${id}` } label={ `Задача: ${name}`} checked={ checked } onCheck={::this.handleCheck} />
      </div>
    )
  }
}
