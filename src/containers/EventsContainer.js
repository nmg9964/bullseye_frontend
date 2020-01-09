import React from 'react'
import { connect } from 'react-redux'
import EventsList from '../components/EventsList'
import { logout } from '../actions/admins'
import { showCard } from '../actions/events'

class EventsContainer extends React.Component {

  handleLogoutClick = () => {
    this.props.logout()
    this.props.history.push('/login')
  }

  handleEventClick = event => {
    this.props.showCard(event)
  }

  render () {
    return(
      <div>
        <EventsList 
        currentAdmin={this.props.currentAdmin}
        events={this.props.events}
        logout={this.props.logout}
        handleLogoutClick={this.handleLogoutClick}
        handleEventClick={this.handleEventClick}
        renderEventCard={this.props.renderEventCard}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    currentAdmin: state.manageAdmins.currentAdmin,
    events: state.manageAdmins.events,
    renderEventCard: state.manageEvents.renderEventCard
   }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  showCard: event => dispatch(showCard(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
