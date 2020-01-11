import React from 'react'
import { Button } from 'semantic-ui-react'

class EventCard extends React.Component {

  handleBackClick = () => {
    this.props.hideCard()
  }

  // handleUpdate = event => {

  // }

  // handleCancel = event => {

  // }

  render() {
    return(
      <div className='App'>
        <h1>{this.props.event.first_name}&nbsp;{this.props.event.last_name}</h1><br></br>
        <p>Date: &nbsp;&nbsp; {this.props.event.date}</p><br></br><br></br>
        <Button onClick={this.handleBackClick}>Back</Button> &nbsp;&nbsp; 
        <Button onClick={this.handleUpdate}>Update</Button> &nbsp;&nbsp; 
        <Button onClick={this.handleCancel}>Cancel</Button>
      </div>
    )}
}

export default EventCard