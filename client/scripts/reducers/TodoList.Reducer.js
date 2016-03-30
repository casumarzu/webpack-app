import { ADD_ITEM } from '../constants/TodoList.Constants'

const initialState = {
  list: [
    {
      name: 'fake task 1',
      checked: false
    },
    {
      name: 'fake task 2',
      checked: false
    },
    {
      name: 'fake task 3',
      checked: false
    }
  ]
}

export default function addItem(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, list: action.payload }
    default:
      return state;
  }
}
