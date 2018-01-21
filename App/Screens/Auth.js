import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../Redux/Actions/auth_actions';
import auth_buttons from'../Fixtures/auth_buttons';
import Styles from '../Themes/masterStyles';
import Images from '../Themes/images';

class AuthScreen extends Component {
  renderButtons() {
    return auth_buttons.map((button, index) => {
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

export default connect(null, actions)(AuthScreen);