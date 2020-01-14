export const showCard = event => {
  return {
    type: 'SHOW_CARD',
    id: event.id
  }
}

export const hideCard = () => {
  return { type: 'HIDE_CARD' }
}

export const createEvent = event => {
  return { 
    type: 'CREATE_EVENT',
    eventData: {
      id: event.id,
      date: event.date,
      time: event.time,
      firstName: event.firstName,
      lastName: event.lastName,
      guestCount: event.guestCount,
      phoneNumber: event.phoneNumber,
      emailAddress: event.emailAddress,
      message: event.message,
      adminId: event.adminId
    }
  }
}

export const showConfirm = () => {
  return { type: 'SHOW_CONFIRM' }
}

export const hideConfirm = () => {
  return { type: 'HIDE_CONFIRM' }
}

export const showEditForm = event => {
  return {
    type: 'SHOW_EDIT_FORM',
    id: event.id
  }
}

export const hideEditForm = () => {
  return { type: 'HIDE_EDIT_FORM' }
}

export const updateEvent = event => {
  return {
    type: 'UPDATE_EVENT',
    event
  }
}

export const removeEvent = event => {
  return { 
    type: 'REMOVE_EVENT',
    event
  }
}

export const deleteEvent = event => {
  return { 
    type: 'DELETE_EVENT',
    id: event.id
  }
}