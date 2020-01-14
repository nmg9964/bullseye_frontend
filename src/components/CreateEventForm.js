import React from 'react'
import { connect } from 'react-redux'
import { createEvent, showConfirm } from '../actions/events'
import Confirmation from './Confirmation'

import { Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

class CreateEventForm extends React.Component {
  state = {
    date: new Date(),
    time: new Date(),
    firstName: '',
    lastName: '',
    guestCount: 0,
    phoneNumber: '',
    emailAddress: '',
    message: '',
    adminId: 1
  }

  handleDateChange = date => {
    this.setState({
      date: date
    })
  }

  handleTimeChange = time => {
    this.setState({
      time: time
    })
  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
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
  //   .then(event => {
  //     console.log(event)
    handleOnSubmit = event => {
      event.preventDefault()
      this.props.createEvent(this.state)
      this.props.showConfirm()
    }

    // this.setState({ 
    //   date: new Date(),
    //   time: new Date(),
    //   firstName: '',
    //   lastName: '',
    //   guestCount: '',
    //   phoneNumber: '',
    //   emailAddress: '',
    //   message: '',
    //   adminId: 1
    // })
    // }

  render() {
    return(
      <div>
        {this.props.renderConfirmPage ?
        <Confirmation /> :

        <div className='App'>
          <h1>Book a Session!</h1>
          <h3>Select a Date/Time</h3>

          <DatePicker
          selected={this.state.date}
          onChange={this.handleDateChange}
          value={this.state.date}/>

          <DatePicker 
          selected={this.state.time} 
          onChange={this.handleTimeChange}
          value={this.state.time}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption="Time"
          dateFormat="hh:mm aa"/>

          <Form onSubmit={this.handleOnSubmit}>
          <Form.Group widths='equal'/>
            <Form.Input fluid label='First name*' type='text' name='firstName' value={this.state.firstName} placeholder='First name' onChange={this.handleOnChange} />
            <Form.Input fluid label='Last name*' type='text' name='lastName' value={this.state.lastName} placeholder='Last name' onChange={this.handleOnChange}/>
            <Form.Input fluid label='Number of guests*' type='number' max='10' name='guestCount' value={this.state.guestCount} placeholder='Number of guests' onChange={this.handleOnChange}/>
            <Form.Input fluid label='Phone number*' type='text' name='phoneNumber' value={this.state.phoneNumber} placeholder='Phone number' onChange={this.handleOnChange}/>
            <Form.Input fluid label='E-mail address*' type='text' name='emailAddress' value={this.state.emailAddress} placeholder='E-mail address' onChange={this.handleOnChange}/>
            <Form.TextArea label='How did you hear about us? (optional)' name='message' value={this.state.message} onChange={this.handleOnChange}/><br></br>
            <Form.Button>Continue</Form.Button>
          </Form> 
        </div>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { renderConfirmPage: state.manageEvents.renderConfirmPage }
}

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  showConfirm: () => dispatch(showConfirm())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm)