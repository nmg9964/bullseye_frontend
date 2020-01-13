import React from 'react'
import { Button } from 'semantic-ui-react'

class Home extends React.Component {

    render () {
      return(
        <div className='App'>
          <h1>Hello world!</h1>
          <Button secondary onClick={() => this.props.history.push('/book-session')}>Book Now!</Button>
        </div>
      )
    }
  }

  export default Home