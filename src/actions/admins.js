export const loginAdmin = admin => {
  return {
    type: 'LOGIN',
    adminData: {
      id: admin.id,
      username: admin.username,
      password: admin.password
    }
  }
}

export const logoutAdmin = () => {
  return {
    type: 'LOG_OUT'
  }
}