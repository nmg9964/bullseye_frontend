import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react'

class Navbar extends React.Component {
  
  render() {
    return (
      <div className='navbar'>
      <Menu secondary size='large'>
          <Image size='mini' src='https://www.bullseyeaxelounge.com/wp-content/themes/Website55889577/images/logobig.png' className='ui big image' alt='BullsEye Axe Lounge'/>
        
        <NavLink
          className='link item'
          activeClassName='menu'
          to='/'
          exact
        >Home</NavLink>

        <NavLink
          className='link item'
          activeClassName='menu'
          to='/'
          exact
          >About Us</NavLink>

        <NavLink
          className='link item'
          activeClassName='menu'
          to='/'
          exact
          >FAQ</NavLink>

        <NavLink
          className='link item'
          activeClassName='menu'
          to='/'
          exact
          >Blog</NavLink>

        <NavLink
          className='link item'
          activeClassName='menu'
          to='/'
          exact
          >Gift Cards</NavLink>

        <NavLink
          className='link item'
          activeClassName='menu'
          to='/'
          exact
          >Contact Us</NavLink>

      </Menu>
      </div>
    )
  }
}

export default Navbar