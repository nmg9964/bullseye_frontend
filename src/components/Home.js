import React from 'react'
import { Grid, Divider, Button, Image, List } from 'semantic-ui-react'

class Home extends React.Component {

    render () {
      return(
        <div className='App-home'>
          
          <h1 className='label'>
            AXE THROWING IN THE ARBORETUM OF SOUTH BARRINGTON, IL
          </h1>

          <h1 className='label'>
           COMING SOON TO THE STREETS OF WOODFIELD!
          </h1>

          <Divider section hidden />

          <Grid centered columns={1}>
            <Grid.Column>
            <iframe
            className='iframe'
            src="https://www.youtube.com/embed/T_apDtxNZYc?autoplay=1&mute=1&enablejsapi=1"
            frameBorder="0"
            ></iframe>
            </Grid.Column>

            <Grid.Row>
              <Button size='massive' secondary onClick={() => this.props.history.push('/book-session')}>Book Now!</Button>
            </Grid.Row>
          </Grid>

          <Divider section hidden />

          <Grid container columns={2}>
            <Grid.Column>
              <h1  className='fields'>PERFECT NIGHT OUT</h1>
              <p className='text-area'>
              Axe throwing is perfect for corporate events because the activity itself promotes team building as well as team bonding. Bring your group in today and see how your team will flourish. 
              As a result, everyone will leave with a big smile. 
              Axe throwing is great for other group events too; such as birthday parties, bachelor parties, bachelorette parties and family reunions. 
              </p>
            </Grid.Column>

            <Grid.Column>
              <Image size='huge' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/09/70409044_2286284018351291_1562723790520057856_o.jpg' alt='BullsEye Axe Lounge'/>
            </Grid.Column>
          </Grid>

          <Grid container columns={2}>
            <Grid.Column>
              <Image size='huge' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/09/70136263_2294529064193453_411467311589883904_o.jpg' alt='BullsEye Axe Lounge'/>
            </Grid.Column>

            <Grid.Column>
              <h1 className='fields'>ALL AGES</h1>
              <p className='text-area'>
              Whether you are nine or nighty-nine, everyone is welcome. 
              At BullsEye Axe Lounge, we welcome all ages as long as parents/guardians sign waivers for their children. 
              As a result, BullsEye Axe Lounge is a great destination for a family night out.
             </p>
            </Grid.Column>
          </Grid>

          <Divider section hidden />

          <h1 className='label'>LOCATION IS EVERYTHING</h1>

          <p className='text-center'>
          Located in the action-filled Arboretum of South Barrington.
          Surrounded by plenty of upscale restaurants, 
          bars and entertainment. A trip to Bullseye Axe Lounge is 
          one filled with smiles and laughter.
          </p>

          <Grid container columns={3}>
            <Grid.Column>
              <Image className='image-group' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/10/ScreenShot20191017at12.08.31AM.png' alt='BullsEye Axe Lounge'/>
            </Grid.Column>

            <Grid.Column>
              <Image className='image-group' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/09/1.1.jpg' alt='BullsEye Axe Lounge'/>
            </Grid.Column>

            <Grid.Column>
              <Image className='image-group' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/10/ScreenShot20191017at3.06.02PM.png' alt='BullsEye Axe Lounge'/>
            </Grid.Column>

            <Grid.Row centered>
              <Button  size='massive' secondary onClick={() => this.props.history.push('/about-us')}>Read More</Button>
            </Grid.Row>
          </Grid>

          <Divider section hidden />

          <h1 className='label'>OFFICIAL MEMBER OF THE WORLD AXE THROWING LEAGUE</h1><br></br>

          <Grid>
            <Grid.Column href='https://worldaxethrowingleague.com/'>
                <Image centered size='medium' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/09/WATLlogowhiteborder.png' alt='World Axe Throwing League'/>
            </Grid.Column>
          </Grid>

          <Divider section hidden />

          <List size='massive'>
            <h1 className='label'>STANDARD HOURS OF OPERATION</h1>
            <List.Item className='label'>SUNDAY: 12 PM - 10 PM</List.Item>
            <List.Item className='label'>MONDAY: 4 PM - 10 PM</List.Item>
            <List.Item className='label'>TUESDAY: 4 PM - 10 PM</List.Item>
            <List.Item className='label'>WEDNESDAY: 4 PM - 10 PM</List.Item>
            <List.Item className='label'>THURSDAY: 4 PM - 10 PM</List.Item>
            <List.Item className='label'>FRIDAY: 4 PM - 12 AM</List.Item>
            <List.Item className='label'>SATURDAY: 12 PM - 12 AM</List.Item>
            <List.Item className='label'>
              We will open earlier on weekdays upon booking of large groups/parties/corporate events.
              Call 630-550-8939 or e-mail us at info@bullseyeaxelounge.com for any inquiries.
            </List.Item>
          </List>

          <Divider section hidden />

          <p className='text-center'>©BullsEye Axe Lounge 2020</p>
        </div>

        
      )
    }
  }

  export default Home