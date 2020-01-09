import React from 'react'
import { Header } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class EventsList extends React.Component {
  render () {
    return(
      <div>
        <Header as='h1' textAlign='center'>
          Welcome, {this.props.currentAdmin.username}!
        </Header>
        <Header onClick={this.props.handleOnClick} as='h1' textAlign='center'>
          Logout
        </Header>
      </div>
    )
  }
}

export default withRouter(EventsList)