import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';

const bannerImg = require('./images/bannerImg.jpg');

const bannerStyle = {
  width: '2000px',
  height: '1332px',
  minWidth: '1000px',
  minHeight: '666px'
}

const bannerOverlay = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute'
}

const bannerWrapper = {
  height: '500px',
  backgroundSize: 'contain',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
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

    if (isMobile) {
      return(
        <div>
          <div style={bannerWrapper}>
            <img src={bannerImg} style={bannerStyle} />
          </div>
          <div>
            TEST 1
          </div>
        </div>
      )
    } else if (isLaptop) {

      return(
        <div>
          <div style={bannerWrapper}>
            <img src={bannerImg} style={bannerStyle} />
          </div>
          <div>
            TEST 1
          </div>
        </div>
      )
    } else {

      const bannerStyle1 = {
        width: '100%',
        height: '100%'
      }

      const bannerOverlay1 = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
      }

      const bannerWrapper1 = {
        backgroundSize: 'contain',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '50%'
      }

      return(
        <div>
          <Col style={{ padding: '0 0 0 300px' }}>
            <Row>
              <div style={bannerWrapper1}>
                <img src={bannerImg} style={bannerStyle1} />
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
}

export default Landing;