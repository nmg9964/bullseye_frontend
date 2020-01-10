import { combineReducers } from 'redux'
import manageEvents from './manageEvents'
import currentAdmin from './currentAdmin'

export default combineReducers({
  currentAdmin,
  manageEvents
})