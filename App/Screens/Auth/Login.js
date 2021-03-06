import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, AsyncStorage } from 'react-native';
import { FormLabel, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PhoneInput from 'react-native-phone-input';
import axios from 'axios';

import * as actions from '../../Redux/Actions/auth_actions';
import LoadingButton from '../../Components/LoadingButton';
import Styles from '../../Themes/masterStyles';
import Images from '../../Themes/images';

class LoginScreen extends Component {
  constructor(){
    super()
    this.state = {
        isLoading: false,
        valid: '',
        value: ''
    }
  }

  updateInfo(){
    this.setState({
        valid: this.refs.phone.isValidNumber(),
        value: this.refs.phone.getValue().replace(/[^\d]/g, '')
    })
  }

  async handleSubmit() {
    this.setState({isLoading: true});

    const SEND_CODE_URL = 'https://us-central1-yin-timer-2.cloudfunctions.net/requestPassword';

    if (this.state.value && this.state.valid) {
      let phone = await AsyncStorage.setItem('phone', this.state.value)

      try {  
        await axios.post(SEND_CODE_URL, { phone: phone });
        this.props.navigation.navigate('Validate');
      } catch (error) {
        this.setState({isLoading: false});
        alert('Network error. Please try again.');
        this.setState({isLoading: false});
      }
    } else {
      alert('Invalid number provided.');
      this.setState({isLoading: false});
    }
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
                onChangePhoneNumber={() => this.updateInfo()}
              />
            </View>
            <LoadingButton
              viewStyle={[Styles.button.active, {margin: 10}]}
              textStyle={Styles.button.text }
              title="Verify Number"
              isLoading={this.state.isLoading}
              onPress={() => this.handleSubmit()} />
            <Button
              transparent
              style={{marginLeft: -10}}
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

export default connect(null, actions)(LoginScreen);