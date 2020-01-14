import React from 'react'
import { connect } from 'react-redux'
import { deleteEvent } from '../actions/events'
import { Button } from 'semantic-ui-react'

class EventCard extends React.Component {
  // handleUpdate = event => {

  // }

  handleOnDelete = event => {
    const reqObj = 
    {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    }

    fetch(`http://localhost:3001/api/v1/events/${event.id}`, reqObj)
    this.props.deleteEvent(event)
  }

  render() {
    return(
      <div className='App'>
        <h1>{this.props.event.first_name} &nbsp; {this.props.event.last_name}</h1><br></br>
        <p>Date: &nbsp; {this.props.event.date}</p>
        <p>First Name: &nbsp; {this.props.event.first_name}</p>
        <p>Last Name: &nbsp; {this.props.event.last_name}</p>
        <p>Number of guests: &nbsp; {this.props.event.guest_count}</p>
        <p>Phone number: &nbsp; {this.props.event.phone_number}</p>
        <p>E-mail address: &nbsp; {this.props.event.email_address}</p><br></br><br></br>
        <Button onClick={this.props.hideCard}>Back</Button> &nbsp;&nbsp; 
        <Button onClick={this.handleOnUpdate}>Update</Button> &nbsp;&nbsp; 
        <Button onClick={() => this.handleOnDelete(this.props.event)}>Delete</Button>
      </div>
    )}
}

const mapDispatchToProps = dispatch => ({
  deleteEvent: event => dispatch(deleteEvent(event))
})

export default connect(null, mapDispatchToProps)(EventCard)