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

        </div>  

      </div>
    )}
}

export default FAQ