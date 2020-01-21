import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react'

class Navbar extends React.Component {
  
  render() {
    return (
      <div className='navbar'>       

        <Menu secondary size='huge'>
          <Menu.Item>
          <Image 
          size='large'
          centered 
          src='/logobig.png' 
          alt='BullsEye Axe Lounge' 
          href='http://localhost:3000/'/> 
          </Menu.Item>

          <Menu.Item><Link
          className='nav-link'
          to='/about-us'
          exact
          >About Us</Link>
          </Menu.Item>

          <Menu.Item><Link
          className='nav-link'
          to='/'
          exact
          >FAQ</Link>
          </Menu.Item>

          <Menu.Item><Link
          className='nav-link'
          to='/'
          exact
          >Blog</Link>
          </Menu.Item>

          <Menu.Item>
          <Link
          className='nav-link'
          to='/'
          exact
          >Gift Cards</Link>
          </Menu.Item>

          <Menu.Item>
          <Link
          className='nav-link'
          to='/'
          exact
          >Careers</Link>
          </Menu.Item>

          <Menu.Item>
          <Link
          className='nav-link'
          to='/'
          exact
          >Contact Us</Link>
          </Menu.Item>

        </Menu>
      </div>
    )
  }
}

export default Navbar