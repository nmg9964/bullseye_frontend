import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/admins'
import { Button, Form } from 'semantic-ui-react'

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    events: []
  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    const reqObj = 
    { 
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3001/api/v1/login', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert('Invalid Credentials')
      } else {
        localStorage.setItem('token', data.token)
        this.props.login(data)
        this.props.history.push('/admin')
      }
    })
    this.setState({ username: '', password: '', events: [] })
  }
  
  render() {
    return(
      <div className='login-form'>
        <h1>Admin Login</h1>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Field>
            <label>Username</label>
            <input 
            type='text' 
            name='username' 
            value={this.state.username} 
            placeholder='Username'
            onChange={this.handleOnChange}/>
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input 
            type='password'
            name='password'
            value={this.state.password} 
            placeholder='Password' 
            onChange={this.handleOnChange}/>
          </Form.Field>

          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: admin => dispatch(login(admin))
})

export default connect(null, mapDispatchToProps)(Login)