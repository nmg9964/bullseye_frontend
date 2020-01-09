export default function manageAdmins(state = {
  currentAdmin: {},
  events: []
}, action) {
  switch(action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        currentAdmin: {
          id: action.adminData.id,
          username: action.adminData.username,
          password: action.adminData.password
        },
        events: action.adminData.events
      })

    case 'LOG_OUT':
      return Object.assign({}, state, {
        currentAdmin: {},
        events: []
      })

    default:
      return state
  }
}