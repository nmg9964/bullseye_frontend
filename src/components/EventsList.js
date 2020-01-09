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
      <div>

        {this.props.renderEventCard ?
        <EventCard 
          event={this.props.events.find(event => event.id === this.props.renderEventCard)}/> :

        <div className='App'>
          <Header as='h1'>
            Welcome, {this.props.currentAdmin.username}!
          </Header><br></br>

          <h2>Upcoming Events</h2>
          <ul>
            {upcomingEvents.map(event => {
              return <li onClick={() => this.props.handleEventClick(event)}>{event.first_name}&nbsp;{event.last_name}</li>
            })}
          </ul><br></br>

          <h2>Past Events</h2>
          <ul>
            {pastEvents.map(event => {
              return <li onClick={() => this.props.handleEventClick(event)}>{event.first_name}&nbsp;{event.last_name}</li>
            })}
          </ul><br></br>

          <Button primary onClick={this.props.handleLogoutClick}>
            Logout
          </Button>
          </div>}

        </div>
    )
  }
}

export default withRouter(EventsList)