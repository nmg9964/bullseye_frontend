import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react'

class Navbar extends React.Component {
  
  render() {
    return (
      <div className='navbar'>
        <Menu secondary size='large'>
          <Menu.Item>
            <Image size='medium' src='/logobig.png' alt='BullsEye Axe Lounge'/>
          </Menu.Item>
      
          <Menu.Item><Link
          className='link item'
          activeClassName='menu'
          to='/'
          exact
          >Home</Link>
          </Menu.Item>

          <Menu.Item><Link
          className='link item'
          activeClassName='menu'
          to='/about-us'
          exact
          >About Us</Link>
          </Menu.Item>

          <Menu.Item><Link
          className='link item'
          activeClassName='menu'
          to='/'
          exact
          >FAQ</Link>
          </Menu.Item>

          <Menu.Item><Link
          className='link item'
          activeClassName='menu'
          to='/'
          exact
          >Blog</Link>
          </Menu.Item>

          <Menu.Item>
          <Link
          className='link item'
          activeClassName='menu'
          to='/'
          exact
          >Gift Cards</Link>
          </Menu.Item>

          <Menu.Item>
          <Link
          className='link item'
          activeClassName='menu'
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