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

          <p style={{fontWeight: 'bold'}}>How often do you replace the wood?</p>
          <p>Depending on how busy we are, some boards need to be replaced after one day! We test all of the boards each day to make sure they’re ready to take your axes!</p>

          <p style={{fontWeight: 'bold'}}>Can the broken/used boards be used for firewood?</p>
          <p>Absolutely! They are untreated lumber, and make for excellent kindling. Ask us during your session, or through ben@bullseyeaxelounge.com – and the wood is free to anyone who can pick it up themselves!</p>

          <p style={{fontWeight: 'bold'}}>Do you offer gift cards?</p>
          <p>Yes we do! Please click here!</p>

          <p style={{fontWeight: 'bold'}}>Do you serve alcohol?</p>
          <p>We do not serve alcohol, and we are not a BYOB facility.</p>

          <p style={{fontWeight: 'bold'}}>What are our dining options? Can we bring our own food?</p>
          <p>We have partnered with local restaurants Mago Bar and Grill and Georgio’s Pizzeria, which will deliver right to our door.
          You may bring, or cater your own food as well – just no alcoholic beverages will be allowed.</p>

          <p style={{fontWeight: 'bold'}}>Are you hiring? When/how do I apply?</p>
          <p>You may submit an application here at any time! With our planned expansion, we will reach out as soon as we need positions filled!</p>

          <p style={{fontWeight: 'bold'}}>Are there any other locations?</p>
          <p>Bullseye South Barrington – Arboretum is our first location, with Schaumburg – Streets of Woodfield close on it’s heels! Keep an eye on our website and social media for updates! Here is our Instagram, Facebook and LinkedIn.</p>

          <p style={{fontWeight: 'bold'}}>Will you be starting leagues?</p>
          <p>Yes! As an affiliate of the World Axe Throwing League (WATL), we will be introducing leagues to our location starting in the near future!</p>

          <p style={{fontWeight: 'bold'}}>Can I bring my own axe?</p>
          <p>Your own axe is allowed, only with the inspection and green light of one of our managers or coaches.</p>

          <p style={{fontWeight: 'bold'}}>Do you allow throwing knives or other weaponry? </p>
          <p>Currently we can only allow standard throwing axes, but we are looking into ways to accommodate upgraded weaponry, such as knives, stars, javelins and great axes.</p>
        </div>

        <Divider section hidden />

        <p className='text-center'>©BullsEye Axe Lounge 2020</p>

      </div>
    )}
}

export default FAQ