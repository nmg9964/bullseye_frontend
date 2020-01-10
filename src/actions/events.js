export const showCard = event => {
  return {
    type: 'SHOW_CARD',
    id: event.id
  }
}

export const hideCard = () => {
  return { type: 'HIDE_CARD' }
}

export const updateEvent = event => {
  return {
    type: 'UPDATE_EVENT',
    event
  }
}

export const cancelEvent = event => {
  return { 
    type: 'CANCEL_EVENT',
    id: event.id
  }
}