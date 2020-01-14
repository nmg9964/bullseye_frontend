import React from 'react'
import { Header } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import EventCard from './EventCard'

class EventsList extends React.Component {

  handleEventClick = event => {
    this.props.showCard(event)
  }

  handleLogoutClick = () => {
    localStorage.removeItem('token')
    this.props.logout()
    this.props.history.push('/login')
  }

  render () {
    let today = new Date()
    let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    const upcomingEvents = this.props.events.filter(event => new Date(event.date) > today || (new Date(event.date) === today && event.time >= currentTime))
    const pastEvents = this.props.events.filter(event => new Date(event.date) < today || (new Date(event.date) === today && event.time < currentTime ))

    return(
      <div>

        {this.props.renderEventCard ?
        <EventCard 
          event={this.props.events.find(event => event.id === this.props.renderEventCard)}
          hideCard={this.props.hideCard}/> :

        <div>
          <Header as='h1'>
            Welcome, {this.props.currentAdmin.username}!
          </Header><br></br>

          <h2>Upcoming Events</h2>
          <ul>
            {upcomingEvents.map(event => {
              return <li onClick={() => this.handleEventClick(event)}>{event.first_name}&nbsp;{event.last_name}</li>
            })}
          </ul><br></br>

          <h2>Past Events</h2>
          <ul>
            {pastEvents.map(event => {
              return <li onClick={() => this.handleEventClick(event)}>{event.first_name}&nbsp;{event.last_name}</li>
            })}
          </ul><br></br>

          <Button primary onClick={this.handleLogoutClick}>
            Logout
          </Button>
          </div>}

        </div>
    )
  }
}

export default withRouter(EventsList)