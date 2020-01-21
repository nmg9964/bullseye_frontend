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
      <div className='App'>
      <div className='login-form'>
        <h1>Administrator Login</h1>
        <Form size='large' onSubmit={this.handleOnSubmit}>
          <Form.Field>
            <label>Username</label>
            <input 
            fluid 
            icon='user'
            iconPosition='left'
            type='text' 
            name='username' 
            value={this.state.username} 
            placeholder='Username'
            onChange={this.handleOnChange}/>
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
            fluid
            icon='lock'
            iconPosition='left'
            type='password'
            name='password'
            value={this.state.password} 
            placeholder='Password' 
            onChange={this.handleOnChange}/>
          </Form.Field>

          <Button secondary type='submit'>Login</Button>
        </Form>
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: admin => dispatch(login(admin))
})

export default connect(null, mapDispatchToProps)(Login)