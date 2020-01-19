import React from 'react'
import { Grid, Button, Embed, Image } from 'semantic-ui-react'

class Home extends React.Component {

    render () {
      return(
        <Grid centered columns={2} className='App-header'>
          <Grid.Column>
            <Embed id='T_apDtxNZYc' source='youtube' autoplay={true}/>
          </Grid.Column>
          <Grid.Row>
          <Button secondary onClick={() => this.props.history.push('/book-session')}>Book Now!</Button>
          </Grid.Row>
        </Grid>
      )
    }
  }

  export default Home