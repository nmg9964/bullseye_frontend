import React from 'react'
import { connect } from 'react-redux'
import EventsList from '../components/EventsList'
import { login, logout } from '../actions/admins'
import { showCard, hideCard } from '../actions/events'

class EventsContainer extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token')

    if (!token) {
      this.props.history.push('login')
    } else {
      const reqObj = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }

      fetch('http://localhost:3001/api/v1/current_admin', reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          this.props.history.push('login')
        } else {
            this.props.login(data)
        }
      })
    }
  }

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
    currentAdmin: state.currentAdmin,
    events: state.manageEvents.events,
    renderEventCard: state.manageEvents.renderEventCard
   }
}

const mapDispatchToProps = dispatch => ({
  login: admin => dispatch(login(admin)),
  logout: () => dispatch(logout()),
  showCard: event => dispatch(showCard(event)),
  hideCard: () => dispatch(hideCard())
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
