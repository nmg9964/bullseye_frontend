export const login = admin => {
  return {
    type: 'LOGIN',
    adminData: {
      id: admin.id,
      username: admin.username,
      password: admin.password
    }
  }
}

export const logout = () => {
  return {
    type: 'LOG_OUT'
  }
}