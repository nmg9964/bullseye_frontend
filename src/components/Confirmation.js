import React from 'react'
import { connect } from 'react-redux'
import { hideConfirm, cancelEvent } from '../actions/events'
import { Button } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class Confirmation extends React.Component {

  handleOnCancel = () => {
    this.props.hideConfirm()
    this.props.cancelEvent()
    this.props.history.push('/')
  }

  // handleOnSubmit = event => {
  //   const dateObj = this.state.date
  //   const month = dateObj.getMonth() + 1
  //   const day = dateObj.getDate()
  //   const year = dateObj.getFullYear()
  //   const newdate = year + "/" + month + "/" + day

  //   event.preventDefault()

  //   const reqObj = 
  //     { 
  //       method: 'POST',
  //       headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         date: newdate,
  //         first_name: this.state.firstName,
  //         last_name: this.state.lastName,
  //         email_address: this.state.emailAddress,
  //         phone_number: this.state.phoneNumber,
  //         guest_count: this.state.guestCount,
  //         message: this.state.message,
  //         administrator_id: this.state.adminId
  //       })
  //     }

  //   fetch('http://localhost:3001/api/v1/events', reqObj)
  //   .then(resp => resp.json())
  //   .then(event => console.log(event))
  // }

  render() {
    return(
       <div className='App'>
         <h1>Your Event Details</h1>
          {/* <p>Date/Time: {this.props.event.date}</p> */}
          <p>First Name: {this.props.event.firstName}</p>
          <p>Last Name: {this.props.event.lastName}</p>
          <p>Number of guests: {this.props.event.guestCount}</p>
          <p>Phone number: {this.props.event.phoneNumber}</p>
          <p>E-mail address: {this.props.event.emailAddress}</p>
          <Button secondary onClick={() => this.props.hideConfirm()}>Go Back</Button>
          <Button secondary onClick={this.handleOnSubmit}>Submit</Button>
          <Button secondary onClick={this.handleOnCancel}>Cancel</Button>
       </div>
    )
  }
}

const mapStateToProps = state => {
  return { event: state.manageEvents.event }
}

const mapDispatchToProps = dispatch => ({
  hideConfirm: () => dispatch(hideConfirm()),
  cancelEvent: event => dispatch(cancelEvent(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Confirmation))