import React from 'react'
import { Grid, Divider, Embed } from 'semantic-ui-react'

class Contact extends React.Component {
  render() {
    return <div className='App-home'>
      <h1 className='label'>Contact Us</h1>

      <Divider section hidden />

      <Grid container columns={2}>

        <Grid.Column>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.5153896626475!2d-88.1858627855604!3d42.07500576104949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f086d4a26aaa1%3A0x66bf7b552d403f87!2s100%20W%20Higgins%20Rd%2C%20South%20Barrington%2C%20IL%2060010!5e0!3m2!1sen!2sus!4v1587594806488!5m2!1sen!2sus" 
          width="500" 
          height="300" 
          frameborder="0" 
          aria-hidden="false" 
          tabindex="0">
          </iframe>
        </Grid.Column>

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