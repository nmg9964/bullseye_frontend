import React from 'react'
import { Header } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import EventCard from './EventCard'

class EventsList extends React.Component {
  render () {
    const today = new Date()
    const upcomingEvents = this.props.events.filter(event => new Date(event.date) > today)
    const pastEvents = this.props.events.filter(event => new Date(event.date) < today)

    return(
      <div className='App'>
        <Header as='h1'>
          Welcome, {this.props.currentAdmin.username}!
        </Header><br></br>

        <h2>Upcoming Events</h2>
        <ul>
          {upcomingEvents.map(event => {
            return <li>{event.first_name}&nbsp;{event.last_name}</li>
          })}
        </ul><br></br>

        <h2>Past Events</h2>
        <ul>
          {pastEvents.map(event => {
            return <li>{event.first_name}&nbsp;{event.last_name}</li>
          })}
        </ul><br></br>

        <Button primary onClick={this.props.handleOnClick}>
          Logout
        </Button>
      </div>
    )
  }
}

export default withRouter(EventsList)