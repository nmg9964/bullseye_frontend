import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Login extends React.Component {
  render() {
    return(
      <div className='login-form'>
        <h1>Admin Login</h1>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input type='text' name='username' placeholder='First Name'/>
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input text='text' name='password' placeholder='Password' />
          </Form.Field>

          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Login