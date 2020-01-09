export const showCard = event => {
  return {
    type: 'SHOW_CARD',
    id: event.id
  }
}

export const hideCard = () => {
  return { type: 'HIDE_CARD' }
}