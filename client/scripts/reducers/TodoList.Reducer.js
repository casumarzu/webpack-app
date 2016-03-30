import { ADD_ITEM } from '../constants/TodoList.Constants'

const initialState = {
  list: []
}

export default function addItem(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, list: action.payload }
    default:
      return state;
  }
}
