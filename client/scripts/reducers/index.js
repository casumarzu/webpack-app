import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import incrementer from './incrementer'

export default combineReducers({
  page, user, incrementer
})
