export default function manageEvents(state = {
  renderEventCard: undefined
  }, action) {
    switch(action.type) {
      case 'SHOW_CARD':
        return Object.assign({}, state, {
          renderEventCard: action.id
        })

    default:
      return state
    }
}