import React from 'react'
import { Grid, Button, Embed, Image, Header } from 'semantic-ui-react'

class Home extends React.Component {

    render () {
      return(
        <div className='App-header'>
        <Header size='huge' color='grey' textAlign='center'>
          AXE THROWING IN THE ARBORETUM OF SOUTH BARRINGTON
        </Header>

        <Header size='large' color='grey' textAlign='center'>
          COMING SOON TO THE STREETS OF WOODFIELD
        </Header>

        <Grid centered columns={2}>

          <Grid.Column>
            <Embed
            id='lTno4Aw3O_U'
            source='youtube'
            autoplay={true}
            active={true} />
          </Grid.Column>

          <Grid.Row>
          <Button  size='massive' secondary onClick={() => this.props.history.push('/book-session')}>Book Now!</Button>
          </Grid.Row>

        </Grid>
        </div>
      )
    }
  }

  export default Home