import React from 'react'
import { Header } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class EventsList extends React.Component {
  render () {
    return(
      <div className='App'>
        <Header as='h1'>
          Welcome, {this.props.currentAdmin.username}!
        </Header>
        <h3>Upcoming Events</h3>
        <ul>
          {this.props.events.map(event => {
            return <li>{event.first_name}&nbsp;{event.last_name}</li>
          })}
        </ul>
        <Button primary onClick={this.props.handleOnClick}>
          Logout
        </Button>
      </div>
    )
  }
}

export default withRouter(EventsList)