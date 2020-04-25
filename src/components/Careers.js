import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

class Careers extends React.Component {
  render() {
    return (
      <div className='App-home'>
        <Grid container columns={2}>

          <Grid.Column>
            <Image size='huge' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/09/70675883_2289599958019697_7453961874451726336_o-1.jpg'/>
          </Grid.Column>

        </Grid>
      </div>)
  }
}

export default Careers