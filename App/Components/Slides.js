import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

import Styles from '../Themes/masterStyles';
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderSlides(){
    return this.props.data.map((slide) => {
      return (
        <View
          key={slide.text}
          style={[slideStyle, { backgroundColor: slide.backgroundColor }]}
        > 
          <Text style={ Styles.screen.titleText}>{slide.text}</Text>
        </View>
      )
    })
  }
  render() {
    return (
      <ScrollView
        style={ Styles.screen.mainContainer }
        horizontal
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const slideStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: SCREEN_WIDTH
}

export default Slides;