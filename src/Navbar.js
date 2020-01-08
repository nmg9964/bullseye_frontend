import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
  
  render() {
    return (
      <Menu secondary>
        <img src='https://www.bullseyeaxelounge.com/wp-content/themes/Website55889577/images/logobig.png' className='ui big image' alt='BullsEye Axe Lounge'/>

        <NavLink
          className='link item'
          to='/'
          exact
        >Home</NavLink>

        <NavLink
          className='link item'
          to='/'
          exact
          >About Us</NavLink>

        <NavLink
          className='link item'
          to='/'
          exact
          >FAQ</NavLink>

        <NavLink
          className='link item'
          to='/'
          exact
          >Blog</NavLink>

        <NavLink
          className='link item'
          to='/'
          exact
          >Gift Cards</NavLink>

        <NavLink
          className='link item'
          to='/'
          exact
          >Contact Us</NavLink>

      </Menu>
    )
  }
}

export default Navbar