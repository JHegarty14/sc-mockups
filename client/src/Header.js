import React, { Component } from 'react' 
import { Row, Col, SideNav, SideNavItem, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

const fullLogo = require('./images/headerLogo.png');
const smallLogo = require('./images/headerImg.png');

const flStyle = {
  height: '38px',
  width: '300px',
  margin: '12px 0 5px 0'
}

const slStyle = {
  height: '50px',
  width: '25px',
  margin: '5px 0 5px 0'
}

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: window.innerWidth
    }
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;
    const isLaptop = width <= 1100;

    if (isMobile) {
      return(
        <div className='' style={{ backgroundColor: '#212121' }}>
          <nav className='nav-wrapper z-depth-0' style={{ backgroundColor: '#212121' }}>
            <div>
              <ul className='left'>
                <SideNav trigger={<i className='material-icons'>menu</i>} style={{ backgroundColor: '#212121' }}>
                  <SideNavItem><a style={{ color: 'white' }}>Test 1</a></SideNavItem>
                  <SideNavItem><a style={{ color: 'white' }}>Test 2</a></SideNavItem>
                </SideNav>
              </ul>
              <ul className='brand-logo right'>
                <a>
                  <img href='/' alt='' src={smallLogo} style={slStyle} />
                </a>
              </ul>
            </div>
          </nav>
        </div>
      )
    } else if (isLaptop) {
      return(
        <div className='z-depth-0 #212121 grey darken-4'>
          <nav className='nav-wrapper z-depth-0' style={{ backgroundColor: '#212121', padding: '0 20px 0 20px' }}>
            <div>
              <ul>
                <li><a>Sign Up</a></li>
                <li>or</li>
                <li><a>Sign In</a></li>
              </ul>
              <ul className='brand-logo right'>
                <img href='/' alt='' src={smallLogo} style={slStyle}/>
              </ul>
            </div>
          </nav>
        </div>
      )
    } else {
      return(
        <div className='z-depth-0 #212121 grey darken-4'>
          <nav className='nav-wrapper z-depth-0' style={{ backgroundColor: '#212121' }}>
            <div>
              <ul>
                <li><a>Sign Up</a></li>
                <li>or</li>
                <li><a>Sign In</a></li>
              </ul>
              <ul className='brand-logo right'>
                <img src={fullLogo} style={flStyle} />
              </ul>
            </div>
          </nav>
        </div>
      )
    }
  }
}

export default Header;