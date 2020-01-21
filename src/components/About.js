import React from 'react'
import { Grid, Divider, Button, Embed, Image, Header } from 'semantic-ui-react'

class About extends React.Component {

    render () {
      return(
        <div className='App-home'>
          
          <Grid container columns={2}>
            <Grid.Column>
              <Header  size='huge' color='grey'>THIS PLACE IS SPECIAL!</Header>
              <p className='text-area'>
              We have put a great amount of time and energy in making sure our atmosphere and your axe throwing experience is different from other axe throwing locations. 
              We wanted our customers to come in and step into a proper axe throwing lounge. From design to seating and everything in between we are giving the residents of Chicagoland area a relaxing axe throwing lounge to come throw some axes.
              As axe throwing continues to sweep the nation, we will be here in the forefront of ambience and design to give you the best axe throwing experience possible!
              </p>
            </Grid.Column>

            <Grid.Column>
              <Image size='huge' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/09/71490994_2289600564686303_1830487754153132032_o-1.jpg' alt='BullsEye Axe Lounge'/>
            </Grid.Column>
          </Grid>

          <Divider section hidden />

          <Grid container columns={2}>
            <Grid.Column>
              <Image size='huge' src='https://www.bullseyeaxelounge.com/wp-content/uploads/2019/09/70136263_2294529064193453_411467311589883904_o.jpg' alt='BullsEye Axe Lounge'/>
            </Grid.Column>

            <Grid.Column>
              <Header  size='huge' color='grey'>OUR MISSION</Header>
              <p className='text-area'>
              For every five customers that walk through our doors we will have a tree planted on their behalf.  
              BullsEye Axe Lounge cares for things that are much greater than profits. 
              We see and feel that our only home, Earth, is under immense scrutiny. Mother Nature is under attack by our way of life.  
              Let’s all learn the balance of opposites and implement it into our daily lives as nourish our home back to good health.
             </p>
            </Grid.Column>
          </Grid>

        </div>
      )}
}

export default About