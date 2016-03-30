import { ADD_ITEM } from '../constants/TodoList.Constants'

export function addItem(data) {
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      payload: data
    })
  }
}
