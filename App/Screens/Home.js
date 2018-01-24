import React, { Component } from 'react';
import { Button, View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import HOME_BUTTONS from '../Fixtures/home_buttons';

import Styles from '../Themes/masterStyles';
import Images from '../Themes/images'

class HomeScreen extends Component {
  renderButtons() {
    return HOME_BUTTONS.map((button, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate(button.page)} >
          <Card style={Styles.screen.backgroundImage} />
        </TouchableOpacity>
      )
    })
  }

  render() {
    
    return (
      <View style={Styles.screen.mainContainer} >
        <Image style={Styles.screen.header} source={Images.yin_timer_header} resizeMode="contain"/>
        <View style={Styles.card.container}>
          {this.renderButtons()}
        </View>
      </View>
    )
  }
}

export default HomeScreen;