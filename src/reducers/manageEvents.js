export default function manageEvents(state = {
  currentAdmin: {},
  events: []
}, action) {
  switch(action.type) {
    case 'LOG_IN':
      return Object.assign({}, state, {
        currentAdmin: {
          id: action.adminData.id,
          username: action.adminData.username,
          password: action.adminData.password,
        },
        events: action.adminData.events
      })

    default:
      return state
  }
}