import React from 'react'
import { Button } from 'semantic-ui-react'

class EventCard extends React.Component {

  handleBackClick = () => {
    this.props.hideCard()
  }

  render() {
    return(
      <div className='App'>
        <h1>{this.props.event.first_name}&nbsp;{this.props.event.last_name}</h1><br></br>
        <p1>Date: &nbsp;&nbsp; {this.props.event.date}</p1><br></br><br></br>
        <Button onClick={this.handleBackClick}>Back</Button> &nbsp;&nbsp; 
        <Button onClick={this.handleUpdateClick}>Update</Button> &nbsp;&nbsp; 
        <Button onClick={this.handleDeleteClick}>Delete</Button>
      </div>
    )}
}

export default EventCard