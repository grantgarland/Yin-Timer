import React, { Component } from 'react';

import Slides from '../Components/Slides';
import SLIDE_DATA from '../Fixtures/slide_data';

class WelcomeScreen extends Component {
  navigateToAuth = () => {
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.navigateToAuth}/>
    );
  }
}

export default WelcomeScreen;