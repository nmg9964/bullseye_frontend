import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'

class Blog extends React.Component {
  render() {
    return <div className='App-home'>
      <Grid container columns={2}>
        <Grid.Column>
          <h1 className='fields'>WE ARE EXCITED TO ANNOUNCE OUR SECOND LOCATION!</h1>
          <p className='text-area'>The streets of Woodfield has been one of your favorite spots in the Chicagoland area for decades and we are elated to become part of that community of establishments!</p>

          <Divider section hidden />

          <h1 className='fields'>ALL OUR AMENITIES IN A LARGER SPACE</h1>
          <p className='text-area'>
          Over 4,000 square feet of axe throwing at our Streets of Woodfield location! Bullseye axe throwing lounge is quickly becoming a hot destination for corporate events, birthday parties and much more!
          Local food partnerships with different restaurants located at the Streets of Woodfield coming soon to meet your dining or catering needs - food will be delivered right to your booth!
          </p>
          <p className='text-area'>Coming early 2020 to the Streets of Woodfield, see you soon Schaumburg!</p>
        </Grid.Column>
      </Grid>
    </div>
  }
}

export default Blog