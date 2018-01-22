import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PhoneInput from 'react-native-phone-input';

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
    this.renderInfo = this.renderInfo.bind(this)
  }

  updateInfo(){
    this.setState({
        valid: this.refs.phone.isValidNumber(),
        value: this.refs.phone.getValue()
    })
  }

  renderInfo(){
    if(this.state.value)
    return (
        <View style={styles.info}>
          <Text>Is Valid: <Text style={{fontWeight:'bold'}}>{this.state.valid.toString()}</Text></Text>
          <Text>Value: <Text style={{fontWeight:'bold'}}>{this.state.value}</Text></Text>
        </View>
    )
  }

  render() {
    return(
      <View style={Styles.screen.mainContainer} >
        <ImageBackground style={Styles.screen.backgroundImage} source={Images.auth_screen} >
          <View style={Styles.screen.formContainer}>
            <FormLabel style={Styles.screen.titleText}>ENTER PHONE NUMBER</FormLabel>
            <View style={Styles.screen.formItem}>
              <PhoneInput 
                style={{ marginTop: 10}}
                ref='phone'
                initialCountry='us'
                offset={5}
              />
            </View>
            <Button
              raised
              style={{marginTop: 30}}
              buttonStyle={Styles.button.auth}
              textStyle={Styles.button.text}
              title="Verify Number" />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
      paddingTop: 60
  },
  info: {
      //width: 200,
      borderRadius: 5,
      backgroundColor: '#f0f0f0',
      padding:10,
      marginTop: 20,
  },
  button:{
      marginTop: 20,
      padding: 10,
  }
})

export default connect(null, actions)(SignupScreen);