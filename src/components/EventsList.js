import React from 'react'
import { withRouter } from 'react-router'
import EventCard from './EventCard'

import { Header, Button, Select } from 'semantic-ui-react'

class EventsList extends React.Component {
  state = { selectBookings: 'All' }

  handleEventClick = event => {
    this.props.showCard(event)
  }

  handleLogoutClick = () => {
    localStorage.removeItem('token')
    this.props.logout()
    this.props.history.push('/login')
  }

  handleOnChange = (event, { value}) => {
    this.setState({ selectBookings: value })
  }

  render () {
    let today = new Date()
    let filteredEvents = []
    
    const newDate = (date) => {
      let dateObj = new Date(date)
      const month = dateObj.getUTCMonth() + 1
      const day = dateObj.getUTCDate()
      const year = dateObj.getUTCFullYear()
      return year + '-' + month + '-' + day
    }

    const bookingOptions = [
      { key: 1, value: 'All', text: 'All'},
      { key: 2, value: 'Today', text: 'Today' },
      { key: 3, value: 'Upcoming', text: 'Upcoming' },
      { key: 4, value: 'Past', text: 'Past' }
    ]

    switch(this.state.selectBookings) {
      case 'All':
        filteredEvents = this.props.events
        break
      case 'Today':
        filteredEvents = this.props.events.filter(event => newDate(event.date) === newDate(today))
        break
      case 'Upcoming':
        filteredEvents = this.props.events.filter(event => newDate(event.date) > newDate(today))
        break
      case 'Past': 
        filteredEvents = this.props.events.filter(event => newDate(event.date) < newDate(today))
        break
    }

    return(
      <div>

        {this.props.renderEventCard ?
        <EventCard 
          event={this.props.events.find(event => event.id === this.props.renderEventCard)}
          hideCard={this.props.hideCard}/> :

        <div className='App'>
          <Header as='h1'>
            Welcome, {this.props.currentAdmin.username}!
          </Header><br></br>

          <Select
          selection
          selected={this.state.selectBookings}
          value={this.state.selectBookings}
          onChange={this.handleOnChange} 
          options={bookingOptions} />&nbsp;&nbsp;

          <Button primary onClick={this.handleLogoutClick}>
            Logout
          </Button>

          <h2>Reservations</h2>
          <ul>
            {filteredEvents.map(event => {
              return <li onClick={() => this.handleEventClick(event)}>{event.first_name}&nbsp;{event.last_name}</li>
            })}
          </ul>
        </div>}

      </div>
    )
  }
}

export default withRouter(EventsList)