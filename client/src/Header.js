import React, { Component } from 'react' 
import { Row, Col, SideNav, SideNavItem, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

const fullLogo = require('./images/headerLogo.png');

const flStyle = {
  height: '30px',
  width: '300px',
  padding: '5px 0 0 0'
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
    const isLaptop = width <= 1440;

    if (isMobile) {
      return(
        <div className='z-depth-0'>
          <nav className="nav-wrapper">
            <div>
              <ul className='left'>
                <SideNav trigger={<Button><i className='material-icons'>menu</i></Button>}>
                  <SideNavItem>Test 1</SideNavItem>
                  <SideNavItem>Test 2</SideNavItem>
                </SideNav>
              </ul>
              <ul className='brand-logo right'>
                <a>
                  <img href='/' alt='' src={fullLogo} />
                </a>
              </ul>
            </div>
          </nav>
        </div>
      )
    } else if (isLaptop) {
      return(
        <div className='z-depth-0'>
          <nav className='nav-wrapper'>
            <div>
              <ul className='left'>
                <SideNav trigger={<Button><i className='material-icons'>menu</i></Button>}>
                  <SideNavItem>Test 1</SideNavItem>
                  <SideNavItem>Test 2</SideNavItem>
                </SideNav>
              </ul>
              <ul className='brand-logo right'>
                <a>
                  <img href='/' alt='' src={fullLogo} style={flStyle}/>
                </a>
              </ul>
            </div>
          </nav>
        </div>
      )
    } else {
      return(
        <div className='z-depth-0'>
         <SideNav fixed>
            <SideNavItem>Test 1</SideNavItem>
            <SideNavItem>Test 2</SideNavItem>
          </SideNav>
          <nav className='nav-wrapper'>
            <div>
            </div>
          </nav>
        </div>
      )
    }
  }
}

export default Header;