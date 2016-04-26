import { INCREMENT_ITEM } from '../constants/Incrementer.Constants'

const initialState = {
  count: 0
}

export default function incrementer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_ITEM:
      return { ...state, count: action.payload }
    default:
      return state;
  }
}
