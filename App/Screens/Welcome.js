import React, { Component } from 'react';

import Slides from '../Components/Slides';
import SLIDE_DATA from '../Fixtures/slide_data';

class WelcomeScreen extends Component {
  render() {
    return (
      <Slides data={SLIDE_DATA} />
    );
  }
}

export default WelcomeScreen;