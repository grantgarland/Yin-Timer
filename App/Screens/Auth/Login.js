import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../../Redux/Actions/auth_actions';
import Styles from '../../Themes/masterStyles';
import Images from '../../Themes/images';

class LoginScreen extends Component {

  render() {
    return(
      <View style={Styles.screen.mainContainer} >
        <ImageBackground style={Styles.screen.backgroundImage} source={Images.auth_screen} >
          <View style={Styles.screen.buttonContainer} >

          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default connect(null, actions)(LoginScreen);