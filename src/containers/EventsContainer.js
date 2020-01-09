import React from 'react'
import { connect } from 'react-redux'

class EventsContainer extends React.Component {
  render () {
    return(
      <div>
        <h1>Welcome, {this.props.currentAdmin.username}!</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentAdmin: state.manageAdmins.currentAdmin }
}

export default connect(mapStateToProps)(EventsContainer)
