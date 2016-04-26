import { INCREMENT_ITEM } from '../constants/Incrementer.Constants'

export function increment(count) {
  return (dispatch) => {
    dispatch({
      type: INCREMENT_ITEM,
      payload: count
    })
  }
}
