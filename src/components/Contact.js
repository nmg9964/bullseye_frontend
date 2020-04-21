import React from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'

class Contact extends React.Component {
  render() {
    return <div className='App-home'>
      <h1 className='label'>Contact Us</h1>

      <Divider section hidden />

      <Grid container columns={2}>

        <Grid.Column>
          <h1 className='fields'>LOCATED IN THE ARBORETUM OF SOUTH BARRINGTON</h1>
          <div className='text-area'>
            <p>100 W Higgins Rd #M30 
            <br></br>South Barrington, IL 60010</p>
            <p>To book an axe-throwing session, please <a href='http://localhost:3000/book-session'>click here</a>.
            <br></br>Phone: 630-550-8939
            <br></br>Email: info@bullseyeaxelounge.com</p>
          </div>
        </Grid.Column>
      
      </Grid>

      <Divider section hidden />

      <p className='text-center'>©BullsEye Axe Lounge 2020</p>
    </div>
  }
}

export default Contact