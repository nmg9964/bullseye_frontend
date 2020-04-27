import React from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'

class Careers extends React.Component {
  render() {
    return(
      <div className='App-home'>
        <Grid container columns={2}>

          <Grid.Column>
            <Image size='massive' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/09/70675883_2289599958019697_7453961874451726336_o-1.jpg'/>
          </Grid.Column>

          <Grid.Column>
            <h1 className='fields'>CAREERS</h1>
            <p className='text-area'>Looking to join a team of awesome axe throwing hosts while working in a fast paced yet rewarding environment?! You've come to the right place! Please e-mail us at info@bullseyeaxelounge.com with the following details:</p>
            <ul className='text-area'>
              <li>Name</li><br></br>
              <li>Address</li><br></br>
              <li>Phone number</li><br></br>
              <li>Work status</li><br></br>
              <li>Previous job titles and responsibilities</li><br></br>
              <li>Start date & availability</li><br></br>
            </ul>
          </Grid.Column>
        
        </Grid>

        <Divider section hidden />

        <p className='text-center'>©BullsEye Axe Lounge 2020</p>
      </div>)
  }
}

export default Careers