import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import Styles from '../Themes/masterStyles';

class Slides extends Component {
  renderSlides(){
    return this.props.data.map((slide) => {
      return (
        <View key={slide.index} style={Styles.screen.mainContainer} >
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
      <Swiper showsButtons={true} loop={false}>
        {this.renderSlides()}
      </Swiper>
    );
  }
}

export default Slides;