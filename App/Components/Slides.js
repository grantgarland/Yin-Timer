import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';

import Styles from '../Themes/masterStyles';

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <View style={[Styles.button.container, {marginTop: 375}]} >
          <Button
            raised
            rounded
            buttonStyle={Styles.button.active}
            textStyle={Styles.button.text}
            title="Get Started"
            fontFamily='KohinoorTelugu-Medium'
            onPress={this.props.onComplete}
          />
        </View>
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View key={slide.index} style={Styles.screen.mainContainer} >
          <Image
            style={Styles.screen.backgroundImage}
            source={slide.image}
          >
          </Image>
          {this.renderLastSlide(index)}
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