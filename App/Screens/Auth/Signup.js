import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Alert} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PhoneInput from 'react-native-phone-input';
import axios from 'axios';

import * as actions from '../../Redux/Actions/auth_actions';
import Styles from '../../Themes/masterStyles';
import Images from '../../Themes/images';

class SignupScreen extends Component {
  constructor(){
    super()
    this.state = {
        valid: '',
        value: ''
    }

    this.updateInfo = this.updateInfo.bind(this)
  }

  updateInfo(){
    this.setState({
        valid: this.refs.phone.isValidNumber(),
        value: this.refs.phone.getValue()
    })
  }

  async handleSubmit() {
    const CREATE_USER_URL = 'https://us-central1-yin-timer-2.cloudfunctions.net/createUser';
    const SEND_CODE_URL = 'https://us-central1-yin-timer-2.cloudfunctions.net/requestPassword';

    if (this.state.value && this.state.valid) {
      try {
        let first = await axios.post(CREATE_USER_URL, { phone: this.state.value });

        let second = await axios.post(SEND_CODE_URL, { phone: this.state.value });
      } catch (error) {
        this.alert('There was a problem with the network. Please try again.')
      }
    } else {
      this.alert('Please check number provided');
    }
  }

  alert(error) {
    Alert.alert(
      { cancelable: false }
    )
  }

  render() {
    return(
      <View style={Styles.screen.mainContainer} >
        <ImageBackground style={Styles.screen.backgroundImage} source={Images.auth_screen} >
          <View style={Styles.screen.formContainer}>
            <FormLabel labelStyle={Styles.screen.formText}>ENTER PHONE NUMBER</FormLabel>
            <View style={Styles.screen.formItem}>
              <PhoneInput 
                textStyle={Styles.screen.formText}
                textProps={{placeholder: '+1 555 555 5555'}}
                keyboardType = 'numeric'
                ref='phone'
                initialCountry='us'
                offset={5}
                onChangePhoneNumber={() => this.handleSubmit()}
              />
            </View>
            <Button
              raised
              style={{marginTop: 30}}
              buttonStyle={Styles.button.auth}
              textStyle={Styles.button.text}
              title="Verify Number"
              onPress={() => alert('There was a problem with the network. Please try again later.')} />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default connect(null, actions)(SignupScreen);