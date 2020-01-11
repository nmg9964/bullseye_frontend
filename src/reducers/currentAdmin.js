const initialState = {}

export default function currentAdmin(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
          id: action.adminData.id,
          username: action.adminData.username,
          password: action.adminData.password
      })

      case 'LOG_OUT':
          return { currentAdmin: {} }

    default:
      return state
  }
}