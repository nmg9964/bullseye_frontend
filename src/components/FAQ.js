import React from 'react'
import { Divider } from 'semantic-ui-react'

class FAQ extends React.Component {
  render() {
    return(
      <div className='App-home'>
        <h1 className='label'>Frequent Questions & Answers</h1>

        <Divider section hidden />

        <div className='text-area'>
          <p style={{fontWeight: 'bold'}}>What are your prices?</p>
          <p>Take advantage of our weekend group pricing, special weekday prices, and more – view here!</p><br></br>

          <p style={{fontWeight: 'bold'}}>When are you open?</p>
          <p>See our standard business hours here. If you would like to book please click here. If you have a large party, special event or private facility, you may call 630-550-8939 or email ben@bullseyeaxelounge.com.</p>

          <p style={{fontWeight: 'bold'}}>What do I get in an axe throwing session?</p>
          <ul>
            <li>Personal Host and Coach</li>
            <li>Food delivery from local food partnerships (Mago and Georgio’s)</li>
            <li>A *private, spacious, ‘fire-lit’ booth</li>
            <li>A bluetooth device to personalize your music</li><br></br>
            <p>*Note that couples may need to share a booth with another pair, only when we are at full capacity. In this case, you will still always have your own private range and target.</p>
          </ul><br></br>

          <p style={{fontWeight: 'bold'}}>Are you on social media?</p>
          <p>Yes we do! Please visit our Instagram, Facebook and LinkedIn.</p>

          <p style={{fontWeight: 'bold'}}>How do I set a up a birthday party, corporate, or special event?</p>
          <p>Book here or contact us at 630-550-8939 or ben@bullseyeaxelounge.com</p>

          <p style={{fontWeight: 'bold'}}>How many people can I bring?</p>
          <p>As many as you want! (up to 60 people if the whole facility is needed)
            The more the merrier! But, to make sure no one is turned away, we strongly encourage you to make an advance reservation here.</p>

          <p style={{fontWeight: 'bold'}}>Do I need to make a reservation or can I walk in at any time?</p>
          <p>We can typically accommodate most walk-ins, outside of our peak hours after 5pm on Fridays and Saturdays. Making your reservation in advance takes only a few seconds, and protects everyone from any disappointments. To book, please click here.</p>

          <p style={{fontWeight: 'bold'}}>How old do you have to be to throw axes?</p>
          <p>We do not have a specific age limit, but a coach or manager must determine that the willing, young thrower can safely hold, and throw the axe to the target from 10ft.</p>

        </div>  

      </div>
    )}
}

export default FAQ