import React, { Component } from 'react';
import { View, Text, ImageBackground, AsyncStorage } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../../Redux/Actions/auth_actions';
import LoadingButton from '../../Components/LoadingButton';
import Styles from '../../Themes/masterStyles';
import Images from '../../Themes/images';

class ValidationScreen extends Component {
  constructor(){
    super()
    this.state = {
        isLoading: false,
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.jwt) {
      AsyncStorage.setItem('start_date', new Date());
      
      this.props.navigation.navigate('Home');
    }
  }


  async handleSubmit() {
    this.setState({isLoading: true});
    const VERIFY_URL = 'https://us-central1-yin-timer-2.cloudfunctions.net/verifyPassword';

    try {
      let  { data } = await axios.post(VERIFY_URL, { phone: this.state.phone, code: this.state.code });
      
      this.props.login(data.token);
    } catch (error) {
      alert('Invalid code. Please try agains');
      this.setState({isLoading: false});
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
            <LoadingButton
              viewStyle={[Styles.button.active, {margin: 10}]}
              textStyle={Styles.button.text }
              title="Log In"
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

function mapStateToProps({ auth }) {
  return { jwt: auth.jwt };
}

export default connect(mapStateToProps, actions)(ValidationScreen);