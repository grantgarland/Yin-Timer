import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Slides from '../Components/Slides';
import SLIDE_DATA from '../Fixtures/Slides';

class WelcomeScreen extends Component {
  render() {
    return (
      <Slides data={SLIDE_DATA} />
    );
  }
}

export default WelcomeScreen;