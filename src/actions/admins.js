export const loginAdmin = admin => {
  return {
    type: 'LOG_IN',
    adminData: {
      id: admin.id,
      username: admin.username,
      password: admin.password,
      events: admin.events
    }
  }
}

export const logoutAdmin = () => {
  return {
    type: 'LOG_OUT'
  }
}