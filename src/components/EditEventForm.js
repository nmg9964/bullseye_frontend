import React from 'react'
import { connect } from 'react-redux'
import { hideEditForm, updateEvent } from '../actions/events'

import { Form, Button } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const newDate = (date) => {
  return new Date(`${date}T00:00:00`)
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
    adminId: this.props.event.admin_id,
    availableTimes: []
  }

  handleDateChange = date => {
    this.setState({ date: date })
    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = date.getFullYear()
    const fetchDate = year + '-' + month + '-' + day

    fetch(`http://localhost:3001/api/v1/available_times/${fetchDate}`)
    .then(resp => resp.json())
    .then(times => this.setState({ availableTimes: times }))
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
    const month = dateObj.getUTCMonth() + 1
    const day = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()
    const submitDate = year + '-' + month + '-' + day

    event.preventDefault()

    const reqObj = 
    { 
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({ event: {
        date: submitDate,
        time: this.state.time,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        guest_count: this.state.guestCount,
        phone_number: this.state.phoneNumber,
        email_address: this.state.emailAddress,
        message: this.state.message,
        admin_id: this.state.adminId
      }})
    }

    fetch(`http://localhost:3001/api/v1/events/${this.props.event.id}`, reqObj)
    .then(resp => resp.json())
    .then(event => { 
      this.props.updateEvent(event)
    })
  }

  render() {
    const options = () => {
      let times = []
      let key = 0
      this.state.availableTimes.map(time => {
        times.push({ key: key++, text: time, value: time })
      })
      return times
    }

    return(
      <div className='App'>
        <h3>Select a Date</h3>

        <DatePicker
        selected={this.state.date}
        value={this.state.date}
        onChange={this.handleDateChange}/>

      <Form onSubmit={this.handleOnSubmit} className='App-form'>
        <Form.Group widths='equal'/>
        <Form.Select 
        fluid label='Available Times*'
        options={options()}
        name='time'
        onChange={this.handleTimeChange}
        placeholder={this.state.time} />
        <Form.Input fluid label='First name*' type='text' name='firstName' value={this.state.firstName} placeholder='First name' onChange={this.handleOnChange} />
        <Form.Input fluid label='Last name*' type='text' name='lastName' value={this.state.lastName} placeholder='Last name' onChange={this.handleOnChange}/>
        <Form.Input fluid label='Number of guests*' type='number' min='0' max='9' name='guestCount' value={this.state.guestCount} placeholder='Number of guests' onChange={this.handleOnChange}/>
        <Form.Input fluid label='Phone number*' type='text' name='phoneNumber' value={this.state.phoneNumber} placeholder='Phone number' onChange={this.handleOnChange}/>
        <Form.Input fluid label='E-mail address*' type='text' name='emailAddress' value={this.state.emailAddress} placeholder='E-mail address' onChange={this.handleOnChange}/>
        <Form.Button size='big' secondary>Submit</Form.Button>
        <Button size='big' secondary onClick={this.props.hideEditForm}>Back</Button> 
      </Form>
      </div>
    )}
}

const mapDispatchToProps = dispatch => ({
  hideEditForm: () => dispatch(hideEditForm()),
  updateEvent: event => dispatch(updateEvent(event))
})

export default connect(null, mapDispatchToProps)(EditEventForm)