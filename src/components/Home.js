import React from 'react'
import { Grid, Divider, Button, Embed, Image, Header } from 'semantic-ui-react'

class Home extends React.Component {

    render () {
      return(
        <div className='App-background'>
          <Header size='huge' color='grey' textAlign='center'>
            AXE THROWING IN THE ARBORETUM OF SOUTH BARRINGTON, IL
          </Header>

          <Header size='large' color='grey' textAlign='center'>
           COMING SOON TO THE STREETS OF WOODFIELD!
          </Header>

          <Divider section hidden />

          <Grid centered columns={1}>
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

          <Divider section hidden />

          <Grid container columns={2}>
            <Grid.Column>
              <Header  size='huge' color='grey'>PERFECT NIGHT OUT</Header>
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
              <Header  size='huge' color='grey'>ALL AGES</Header>
              <p className='text-area'>
              Whether you are nine or nighty-nine, everyone is welcome. 
              At BullsEye Axe Lounge, we welcome all ages as long as parents/guardians sign waivers for their children. 
              As a result, BullsEye Axe Lounge is a great destination for a family night out.
             </p>
            </Grid.Column>
          </Grid>

          <Divider section hidden />

          <Header size='huge' color='grey' textAlign='center'>LOCATION IS EVERYTHING</Header>

          <p className='text-center'>
          Located in the action-filled Arboretum of South Barrington.
          Surrounded by plenty of upscale restaurants, 
          bars and entertainment. A trip to Bullseye Axe Lounge is 
          one filled with smiles and laughter.
          </p>

          <Grid container columns={3}>
            <Grid.Column>
              <Image  size='huge' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/10/ScreenShot20191017at12.08.31AM.png' alt='BullsEye Axe Lounge'/>
            </Grid.Column>

            <Grid.Column>
              <Image size='huge' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/09/1.1.jpg' alt='BullsEye Axe Lounge'/>
            </Grid.Column>

            <Grid.Column>
              <Image size='huge' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/10/ScreenShot20191017at3.06.02PM.png' alt='BullsEye Axe Lounge'/>
            </Grid.Column>

            <Grid.Row centered>
              <Button  size='massive' secondary onClick={() => this.props.history.push('/about-us')}>Read More</Button>
            </Grid.Row>
          </Grid>

          <Divider section hidden />

          <Header size='huge' color='grey' textAlign='center'>OFFICIAL MEMBER OF THE WORLD AXE LEAGUE</Header><br></br>

          <Grid>
            <Grid.Column href='https://worldaxethrowingleague.com/'>
                <Image centered size='medium' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/09/WATLlogowhiteborder.png' alt='World Axe Throwing League'/>
            </Grid.Column>
          </Grid>

        </div>
      )
    }
  }

  export default Home