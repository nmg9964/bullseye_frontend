import React from 'react'
import { connect } from 'react-redux'
import EventsList from '../components/EventsList'
import { logout } from '../actions/admins'

class EventsContainer extends React.Component {

  handleOnClick = () => {
    this.props.logout()
    this.props.history.push('/login')
  }

  render () {
    return(
      <div>
        <EventsList 
        currentAdmin={this.props.currentAdmin}
        events={this.props.events}
        logout={this.props.logout}
        handleOnClick={this.handleOnClick}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    currentAdmin: state.manageAdmins.currentAdmin,
    events: state.manageAdmins.events
   }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
