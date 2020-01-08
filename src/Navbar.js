import React from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  
  render() {
    return (
      <div class='ui secondary menu'>
        <img src='https://www.bullseyeaxelounge.com/wp-content/themes/Website55889577/images/logobig.png' class='ui big image'/>

        <NavLink
          class='link item'
          to='/'
          exact
        >Home</NavLink>

        <NavLink
          class='link item'
          to='/about'
          exact
          >About Us</NavLink>

        <NavLink
          class='link item'
          to='/faq'
          exact
          >FAQ</NavLink>

        <NavLink
          class='link item'
          to='/blog'
          exact
          >Blog</NavLink>

        <NavLink
          class='link item'
          to='/gift-cards'
          exact
          >Gift Cards</NavLink>

        <NavLink
          class='link item'
          to='/contact-us'
          exact
          >Contact Us</NavLink>
    
      </div>
    )
  }
}

export default Navbar