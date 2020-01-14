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
      firstName: event.first_name,
      lastName: event.last_name,
      guestCount: event.guest_count,
      phoneNumber: event.phone_number,
      emailAddress: event.email_address,
      message: event.message,
      adminId: event.admin_id
    }
  }
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