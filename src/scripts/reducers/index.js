import { combineReducers } from 'redux'
import incrementer from './Incrementer.Reducer'
import todoList from './TodoList.Reducer'

export default combineReducers({
  incrementer, todoList
})
