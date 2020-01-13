import React from 'react'
import { Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

class CreateEventForm extends React.Component {
  state = {
    date: new Date(),
    time: new Date()
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

  render() {
    return(
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

        <Form >
        <Form.Group widths='equal'/>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Input fluid label='Number of guests' placeholder='Number of guests' />
          <Form.Input fluid label='Phone number' placeholder='Phone number' />
          <Form.Input fluid label='E-mail address' placeholder='E-mail address' />
          <Form.TextArea label='How did you hear about us? (optional)' /><br></br>
          <Form.Button>Continue</Form.Button>
        </Form>
      </div>
    )
  }
}

export default CreateEventForm