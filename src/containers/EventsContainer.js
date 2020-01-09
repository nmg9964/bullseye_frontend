import React from 'react'
import { connect } from 'react-redux'
import EventsList from '../components/EventsList'
import { logout } from '../actions/admins'
import { showCard, hideCard } from '../actions/events'

class EventsContainer extends React.Component {

  render () {
    return(
      <div>
        <EventsList 
        currentAdmin={this.props.currentAdmin}
        events={this.props.events}
        logout={this.props.logout}
        renderEventCard={this.props.renderEventCard}
        showCard={this.props.showCard}
        hideCard={this.props.hideCard}/>
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
  showCard: event => dispatch(showCard(event)),
  hideCard: () => dispatch(hideCard())
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
