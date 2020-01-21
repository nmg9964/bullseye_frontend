import React from 'react'
import { connect } from 'react-redux'
import { hideConfirm, removeEvent } from '../actions/events'
import { Button, Divider } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class Confirmation extends React.Component {
  state = { errors: [] }

  handleOnCancel = () => {
    this.props.hideConfirm()
    this.props.removeEvent()
    this.props.history.push('/')
  }

  handleOnSubmit = event => {
    const dateObj = this.props.event.date
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    const submitDate = year + '-' + month + '-' + day

    event.preventDefault()

    const reqObj = 
      { 
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
        body: JSON.stringify({ event: {
          date: submitDate,
          time: this.props.event.time,
          first_name: this.props.event.firstName,
          last_name: this.props.event.lastName,
          email_address: this.props.event.emailAddress,
          phone_number: this.props.event.phoneNumber,
          guest_count: this.props.event.guestCount,
          message: this.props.event.message,
          administrator_id: this.props.event.adminId
        }})
      }

    fetch('http://localhost:3001/api/v1/events', reqObj)
    .then(resp => resp.json())
    .then(data => { 
      console.log(data)
      if (data.error)
        alert('Booking unsuccessful. Please fill in all required fields')
      else
        alert('Booking successful! You will be e-mailed shortly')
        this.handleOnCancel()
    })
  }

  render() {
    const dateObj = this.props.event.date
    const dayOfWeek = dateObj.toLocaleString('en-us', {weekday:'long'})
    const month = dateObj.getUTCMonth() + 1
    const day = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()
    const displayDate = `${dayOfWeek} - ${month}/${day}/${year}`

    return(
       <div className='confirm'>
          <h1>Your Session Details</h1>
          <p>Date: &nbsp; {displayDate}</p>
          <p>Time: &nbsp; {this.props.event.time}</p>
          <p>First Name: &nbsp; {this.props.event.firstName}</p>
          <p>Last Name: &nbsp; {this.props.event.lastName}</p>
          <p>Number of guests: &nbsp; {this.props.event.guestCount}</p>
          <p>Phone number: &nbsp; {this.props.event.phoneNumber}</p>
          <p>E-mail address: &nbsp; {this.props.event.emailAddress}</p>
          <Button secondary size='big' onClick={this.props.hideConfirm}>Back</Button>
          <Button secondary size='big' onClick={this.handleOnSubmit}>Submit</Button>
          <Button secondary size='big' onClick={this.handleOnCancel}>Cancel</Button>
          <br></br><br></br>
       </div>
    )
  }
}

const mapStateToProps = state => {
  return { event: state.manageEvents.event }
}

const mapDispatchToProps = dispatch => ({
  hideConfirm: () => dispatch(hideConfirm()),
  removeEvent: event => dispatch(removeEvent(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Confirmation))