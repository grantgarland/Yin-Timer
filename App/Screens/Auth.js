import React, { Component } from 'react';
import { View, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import Styles from '../Themes/masterStyles';
import Images from '../Themes/images';

class AuthScreen extends Component {
  auth_buttons = [
    {
      text: 'Log In',
      action: 'Home',
      height: Dimensions.get('window').height / 4
    }, 
    {
      text: 'Sign Up',
      action: 'Home',
      height: 30   
    },
    {
      text: 'Sign Up with Facebook',
      action: 'Home',
      height: 30       
    }
  ];

  renderButtons() {
    return this.auth_buttons.map((button, index) => {
      return ( 
        <View key={index} style={{marginTop: button.height}} >
          <Button
            raised
            buttonStyle={Styles.button.active}
            textStyle={Styles.button.text}
            title={button.text}
            onPress={() => this.props.navigation.navigate(button.action)}
          />
        </View>
      )
    })
  }

  render() {
    return (
      <View style={Styles.screen.mainContainer} >
        <ImageBackground style={Styles.screen.backgroundImage} source={Images.auth_screen} >
          <View style={Styles.screen.buttonContainer} >
            {this.renderButtons()}
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default AuthScreen;