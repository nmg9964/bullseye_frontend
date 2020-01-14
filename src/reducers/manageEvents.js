export default function manageEvents(state = {
  events: [],
  event: {},
  renderEventCard: undefined,
  renderConfirmPage: false
  }, action) {
    switch(action.type) {
      case 'LOGIN':
        return Object.assign({}, state, {
          events: action.adminData.events
      })

      case 'LOG_OUT':
        return { events: [] }

      case 'SHOW_CARD':
        return Object.assign({}, state, {
          renderEventCard: action.id
        })

      case 'HIDE_CARD':
        return Object.assign({}, state, {
          renderEventCard: undefined
        })

      case 'CREATE_EVENT':
        return Object.assign({}, state, {
          event: action.eventData
        })

      case 'SHOW_CONFIRM':
        return Object.assign({}, state, {
          renderConfirmPage: true
        })

      case 'HIDE_CONFIRM':
        return Object.assign({}, state, {
          renderConfirmPage: false
        })

      case 'UPDATE_EVENT':
        let editedEvents = state.events.map(event => {
          if (event.id === action.event.id)
            return action.event
          else
            return event
        })
        return Object.assign({}, state, {
          events: editedEvents
        })

      case 'CANCEL_EVENT':
        return Object.assign({}, state, {
          event: undefined
        })

      case 'DELETE_EVENT':
        return Object.assign({}, state, {
          events: [...state.events.filter(event => event.id !== action.id)],
          renderEventCard: undefined
        })

      default:
        return state
    }
}