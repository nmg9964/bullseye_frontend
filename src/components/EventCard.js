import React from 'react'
import EditEventForm from './EditEventForm'
import { connect } from 'react-redux'
import { deleteEvent, showEditForm } from '../actions/events'
import { Button } from 'semantic-ui-react'

class EventCard extends React.Component {

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
      <div>
        {this.props.renderEditForm ?
        <EditEventForm event={this.props.event}/> :
        
        <div className='App'>
          <h1>{this.props.event.first_name} {this.props.event.last_name}</h1><br></br>
          <p>Date: &nbsp; {this.props.event.date}</p>
          <p>Time &nbsp; {this.props.event.time}</p>
          <p>First Name: &nbsp; {this.props.event.first_name}</p>
          <p>Last Name: &nbsp; {this.props.event.last_name}</p>
          <p>Number of guests: &nbsp; {this.props.event.guest_count}</p>
          <p>Phone number: &nbsp; {this.props.event.phone_number}</p>
          <p>E-mail address: &nbsp; {this.props.event.email_address}</p><br></br><br></br>
          <Button onClick={this.props.hideCard}>Back</Button> &nbsp;&nbsp; 
          <Button onClick={() => this.props.showEditForm(this.props.event)}>Update</Button><br></br><br></br>
          <Button secondary onClick={() => this.handleOnDelete(this.props.event)}>Delete Event</Button>
        </div>}
      </div>
    )}
}

const mapStateToProps = state => ({
  renderEditForm: state.manageEvents.renderEditForm
})

const mapDispatchToProps = dispatch => ({
  deleteEvent: event => dispatch(deleteEvent(event)),
  showEditForm: event => dispatch(showEditForm(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventCard)