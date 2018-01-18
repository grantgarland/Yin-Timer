import React, { Component } from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';

import Styles from '../Themes/masterStyles';
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderSlides(){
    return this.props.data.map((slide) => {
      return (
        <View
          key={slide.index}
          style={slideStyle}
        >
          <Image
            style={Styles.screen.backgroundImage}
            source={slide.image}
          > 
          </Image>
        </View>
      )
    })
  }
  render() {
    return (
      <ScrollView
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