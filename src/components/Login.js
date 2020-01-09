import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login } from '../actions/admins'

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
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        events: this.state.events
      })
    }

    fetch('http://localhost:3001/administrators', reqObj)
    .then(resp => resp.json())
    .then(admin => {
      this.props.login(admin)
      this.props.history.push('/admin')
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
            text='text'
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