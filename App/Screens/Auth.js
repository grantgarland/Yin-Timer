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
      location: {
        height: Dimensions.get('window').height / 3,
        width: 5
      }
    }, 
    {
      text: 'Sign Up',
      action: 'Home',
      location: {
        height: -200,
        width: 5
      }        
    }
  ];

  renderButtons() {
    return this.auth_buttons.map((button, index) => {
      return ( 
        <View key={index} style={[Styles.button.container, {marginTop: button.location.height }]} >
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
            {this.renderButtons()}
        </ImageBackground>
      </View>
    )
  }
}

export default AuthScreen;