import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';

const bannerImg = require('./images/bannerImg.jpg');

const centerContent = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const textStyle = {
  color: 'white',
  textAlign: 'left'
}

class Landing extends Component {
  constructor(props){
    super(props);

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

      const bannerStyle = {
        backgroundSize: 'contain',
        overflow: 'hidden',
        height: '1000px',
        width: '1500px',
        minHeight: '1000x',
        minWidth: '1500px',
        maxHeight: '1000px',
        maxWidth: '1500px'
      }

      const bannerOverlay = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        padding: '30px 0 0 0'
      }

      const bannerWrapper = {
        backgroundSize: 'contain',
        position: 'relative',
        height: 'calc(100vh - 56px)',
        padding: 0,
        margin: 0,
        display: '-webkit-box',
        display: '-ms-flexbox',
        display: 'flex',
        webkitboxorient: 'horizontal',
        webkitboxdirection: 'normal',
            msflexdirection: 'row',
                flexDirection: 'row',
        msflexwrap: 'wrap',
            flexWrap: 'wrap',
        flexBasis: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
      }

      const btns = {
        display: '-webkit-box',
        display: '-ms-flexbox',
        display: 'flex',
        webkitboxorient: 'horizontal',
        webkitboxdirection: 'normal',
            msflexdirection: 'row',
                flexDirection: 'row',
        msflexwrap: 'wrap',
            flexWrap: 'wrap',
        flexBasis: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
      }

      return(
        <div>
          <Col style={{ backgroundSize: 'contain', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', padding: '0 0 0 0px' }}>
            <Row>
              <div style={bannerWrapper}>
                <img src={bannerImg} style={bannerStyle} />
                <div style={bannerOverlay}>
                  <Col className='container'>
                    <Row xs={12} s={12} m={12} l={12} xl={12}>
                      <Col xs={12} s={12} m={6} l={6} xl={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'left' }}>
                        <Row>
                          <h1 style={textStyle}>Our job is your career.</h1>
                        </Row>
                        <Row>
                          <h4 style={textStyle}>Lext is the premier Career Talent Network that represents and matches top early career talent with dynamic companies.</h4>
                        </Row>
                      </Col>
                      <Col xs={12} s={12} m={6} l={6} xl={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Row style={{ backgroundSize: 'contain', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                          <div>
                            <Col style={{ backgroundColor: 'white', width: '345px', borderRadius: '5px'}} rounded>
                              <form action='/signup' method='GET' style={{ padding: '10px 0 1px 0' }}>
                                <Row>
                                  <Col xs={12} s={12} m={6} l={6} xl={6}>
                                    <label>First Name</label>                                  
                                    <input name='firstName' placeholder='First Name' id='first_name' type='text' className='validate' />
                                  </Col>
                                  <Col xs={12} s={12} m={6} l={6} xl={6}>
                                    <label>Last Name</label>
                                    <input name='lastName' placeholder='Last Name' id='last_name' type='text' className='validate' />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={12} s={12} m={12} l={12} xl={12}>
                                    <label>Username</label>
                                    <input name='username' placeholder='Username' id='username' type='text' className='validate' />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={12} s={12} m={12} l={12} xl={12}>
                                    <label>Email</label>
                                    <input name='email' placeholder='email@example.com' id='email' type='text' className='validate' />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={12} s={12} m={12} l={12} xl={12}>
                                    <label>Password</label>
                                    <input name='password' placeholder='Password' id='password' type='text' className='validate' />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={12} s={12} m={12} l={12} xl={12} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                    <Button type='submit' value='submit'>Submit</Button>
                                  </Col>
                                </Row>
                              </form>
                            </Col>
                          </div>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </div>
              </div>
            </Row>
              <div>
                TEST 1
              </div>
          </Col>
        </div>
      )
    }
  }

export default Landing;