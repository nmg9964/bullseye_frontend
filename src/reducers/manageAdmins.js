export default function manageEvents(state = {
  currentAdmin: {},
}, action) {
  switch(action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        currentAdmin: {
          id: action.adminData.id,
          username: action.adminData.username,
          password: action.adminData.password
        }
      })

    default:
      return state
  }
}