export default function manageEvents(state = {
  renderEventCard: undefined
  }, action) {
    switch(action.type) {
      case 'SHOW_CARD':
        return Object.assign({}, state, {
          renderEventCard: action.id
        })

      case 'HIDE_CARD':
        return Object.assign({}, state, {
          renderEventCard: undefined
        })

    default:
      return state
    }
}