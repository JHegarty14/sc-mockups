import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='/' component={Header} />
            <Route exact path='/' component={Landing} />
            <Route />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
