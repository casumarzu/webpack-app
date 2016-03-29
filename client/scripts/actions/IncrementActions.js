import { INCREMENT_ITEM } from '../constants/Incrementer'

export function increment(count) {
  return (dispatch) => {
    dispatch({
      type: INCREMENT_ITEM,
      payload: count
    })
  }
}
