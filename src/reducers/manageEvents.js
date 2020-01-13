export default function manageEvents(state = {
  events: [],
  event: {},
  renderEventCard: undefined
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
          events: [...state.events.filter(event => event.id !== action.id)],
          renderEventCard: undefined
        })

      default:
        return state
    }
}