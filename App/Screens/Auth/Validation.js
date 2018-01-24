import React, { Component } from 'react';
import { View, Text, ImageBackground, AsyncStorage } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../../Redux/Actions/auth_actions';
import Styles from '../../Themes/masterStyles';
import Images from '../../Themes/images';

class ValidationScreen extends Component {
  constructor(){
    super()
    this.state = {
        code: '',
        phone: ''
    }
  }

  async componentDidMount() {
    let phone = await AsyncStorage.getItem('phone');

    this.setState({
      phone: phone
    })
  }


  async handleSubmit() {
    const VERIFY_URL = 'https://us-central1-yin-timer-2.cloudfunctions.net/verifyPassword';

    try {
      await axios.post(VERIFY_URL, { phone: this.state.phone, code: this.state.code });

      this.props.navigation.navigate('Home')
    } catch (error) {
      alert('Invalid code. Please try agains')
    }
  }

  render() {
    return(
      <View style={Styles.screen.mainContainer} >
        <ImageBackground style={Styles.screen.backgroundImage} source={Images.auth_screen} >
          <View style={Styles.screen.formContainer}>
            <FormLabel labelStyle={Styles.screen.formText}>ENTER VALIDATION CODE</FormLabel>
            <View style={Styles.screen.formItem}>
              <FormInput
                inputStyle={Styles.screen.formText}
                keyboardType = 'numeric'
                value={this.state.code}
                onChangeText={code => this.setState({ code })}
              />
            </View>
            <Button
              raised
              style={{marginTop: 30}}
              buttonStyle={Styles.button.auth}
              textStyle={Styles.button.text}
              title="Log In"
              onPress={() => this.handleSubmit()} />
            <Button
              transparent
              style={{marginTop: 30, marginLeft: -10}}
              textStyle={Styles.button.text}
              leftIcon={{name: 'navigate-before', color: 'black'}}
              title="Back"
              onPress={() => {this.props.navigation.navigate('Auth')}} />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default connect(null, actions)(ValidationScreen);