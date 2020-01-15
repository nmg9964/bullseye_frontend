import React from 'react'
import { connect } from 'react-redux'
import { hideEditForm, updateEvent } from '../actions/events'

import { Form, Button } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const newDate = (date) => {
  return new Date(`${date}T12:00:00.474Z`)
}

class EditEventForm extends React.Component {
  state = {
    date: newDate(this.props.event.date),
    time: this.props.event.time,
    firstName: this.props.event.first_name,
    lastName: this.props.event.last_name,
    guestCount: this.props.event.guest_count,
    phoneNumber: this.props.event.phone_number,
    emailAddress: this.props.event.email_address,
    message: this.props.event.message,
    adminId: this.props.event.admin_id
  }

  handleDateChange = date => {
    this.setState({ date: date })
  }

  handleTimeChange = (event, { value }) => {
    this.setState({ time: value })
  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleOnSubmit = event => {
    const dateObj = this.state.date
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    const submitDate = year + '-' + month + '-' + day

    event.preventDefault()

    const reqObj = 
    { 
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
        date: submitDate,
        time: this.state.time,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        guest_count: this.state.guestCount,
        phone_number: this.state.phoneNumber,
        email_address: this.state.emailAddress,
        message: this.state.message,
        admin_id: this.state.adminId
      })
    }

    fetch(`http://localhost:3001/api/v1/events/${this.props.event.id}`, reqObj)
    .then(resp => resp.json())
    .then(event => { 
      this.props.updateEvent(event)
      this.props.hideEditForm()
    })
  }

  render() {
    const weekdayOptions = [ 
      { key: 0, text: '12:00 PM', value: '12:00 PM' },
      { key: 1, text: '1:00 PM', value: '1:00 PM' },
      { key: 2, text: '2:00 PM', value: '2:00 PM' },
      { key: 3, text: '3:00 PM', value: '3:00 PM' },
      { key: 4, text: '4:00 PM', value: '4:00 PM' },
      { key: 5, text: '5:00 PM', value: '5:00 PM' },
      { key: 6, text: '6:00 PM', value: '6:00 PM' },
      { key: 7, text: '7:00 PM', value: '7:00 PM' },
      { key: 8, text: '8:00 PM', value: '8:00 PM' }
    ]

    const weekendOptions = weekdayOptions.concat(
      { key: 9, text: '9:00 PM', value: '9:00 PM' },
      { key: 10, text: '10:00 PM', value: '10:00 PM' },
      { key: 11, text: '11:00 PM', value: '11:00 PM' },
      { key: 12, text: '12:00 AM', value: '12:00 AM' }
    )

    const options = () => {
      // const newDate = new Date(`${this.state.date}T12:00:00.474Z`)
      if (this.state.date.getDay() === 5 || this.state.date.getDay() === 6)
        return weekendOptions
      else
        return weekdayOptions
    }

    return(
      <div className='App'>
        <h1>Update Event</h1>
        <h3>Select a Date</h3>

        <DatePicker
        selected={this.state.date}
        onChange={this.handleDateChange}
        value={this.state.date}/>

      <Form onSubmit={this.handleOnSubmit}>
        <Form.Group widths='equal'/>
        <Form.Select 
        fluid label='Available Times*'
        options={options()}
        name='time'
        onChange={this.handleTimeChange}
        placeholder='12:00 PM' />
        <Form.Input fluid label='First name*' type='text' name='firstName' value={this.state.firstName} placeholder='First name' onChange={this.handleOnChange} />
        <Form.Input fluid label='Last name*' type='text' name='lastName' value={this.state.lastName} placeholder='Last name' onChange={this.handleOnChange}/>
        <Form.Input fluid label='Number of guests*' type='number' max='10' name='guestCount' value={this.state.guestCount} placeholder='Number of guests' onChange={this.handleOnChange}/>
        <Form.Input fluid label='Phone number*' type='text' name='phoneNumber' value={this.state.phoneNumber} placeholder='Phone number' onChange={this.handleOnChange}/>
        <Form.Input fluid label='E-mail address*' type='text' name='emailAddress' value={this.state.emailAddress} placeholder='E-mail address' onChange={this.handleOnChange}/>
        <Form.Button>Submit</Form.Button> &nbsp;&nbsp;
      </Form> 
      <Button onClick={this.props.hideEditForm}>Back</Button>
      </div>
    )}
}

const mapDispatchToProps = dispatch => ({
  hideEditForm: () => dispatch(hideEditForm()),
  updateEvent: event => dispatch(updateEvent(event))
})

export default connect(null, mapDispatchToProps)(EditEventForm)