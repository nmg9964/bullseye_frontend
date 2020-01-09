import { combineReducers } from 'redux'
import manageAdmins from './manageAdmins'
import manageEvents from './manageEvents'

export default combineReducers({
  manageAdmins,
  manageEvents
})