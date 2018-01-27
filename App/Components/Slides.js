import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import Button from '../Components/LoadingButton';
import Styles from '../Themes/masterStyles';
import Colors from '../Themes/colors';

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      const button_margin = Dimensions.get('window').height - 120;

      return (
        <View style={[Styles.button.container, {marginTop: button_margin}]} >
          <Button
            viewStyle={Styles.button.active}
            textStyle={Styles.button.text}
            title="Get Started"
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
          <Image style={Styles.screen.backgroundImage} source={slide.image} />
          {this.renderLastSlide(index)}
        </View>
      )
    })
  };

  render() {
    return (
      <Swiper
        showsButtons={false}
        loop={false}
        dotColor={Colors.charcoal}
        activeDotColor={Colors.coal}>
        {this.renderSlides()}
      </Swiper>
    );
  }
}

export default Slides;