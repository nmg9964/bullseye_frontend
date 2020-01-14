import React from 'react'
import { connect } from 'react-redux'
import { hideEditForm } from '../actions/events'

import { Button } from 'semantic-ui-react'

class EditEventForm extends React.Component {
  render() {
    return(
      <div className='App'>
        <h1>Update Event</h1>
        <Button onClick={this.props.hideEditForm}>Back</Button>
      </div>
    )}
}

const mapDispatchToProps = dispatch => ({
  hideEditForm: () => dispatch(hideEditForm())
})

export default connect(null, mapDispatchToProps)(EditEventForm)