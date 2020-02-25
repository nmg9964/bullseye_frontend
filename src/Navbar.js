import React from 'react'
import { connect } from 'react-redux'
import { logout } from './actions/admins'
import { withRouter } from 'react-router'

import { Link } from 'react-router-dom';
import { Menu, Image, Button, Icon } from 'semantic-ui-react'

class Navbar extends React.Component {

  handleLogoutClick = () => {
    localStorage.removeItem('token')
    this.props.logout()
    this.props.history.push('/login')
  }
  
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
          to='/faq'
          exact
          >FAQ</Link>
          </Menu.Item>

          <Menu.Item><Link
          className='nav-link'
          to='/blog'
          exact
          >Blog</Link>
          </Menu.Item>

          <Menu.Item>
          <Link
          className='nav-link'
          to='/careers'
          exact
          >Careers</Link>
          </Menu.Item>

          <Menu.Item>
          <Link
          className='nav-link'
          to='/contact-us'
          exact
          >Contact Us</Link>
          </Menu.Item>

          <Menu.Item
          className='nav-link'
          href='https://posintigrations.azurewebsites.net/52/GiftCards'
          target='_blank'
          >Gift Cards
          </Menu.Item>

          {this.props.currentAdmin.id ?
          <Button secondary size='huge' className='logout-button' onClick={this.handleLogoutClick}>
            Logout
          </Button>
          : null}

        </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentAdmin: state.currentAdmin }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))