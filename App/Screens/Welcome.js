import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import _ from 'lodash';

import * as actions from '../Redux/Actions/auth_actions';
import Slides from '../Components/Slides';
import SLIDE_DATA from '../Fixtures/slide_data';

class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');
    let jwt = await AsyncStorage.getItem('jwt');

    // this ensurs user is sent from AppLoading screen to Auth/Welcome screen
    this.setState({ token: false });

    if (token || jwt) {
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    } else {
      return (
        <Slides data={SLIDE_DATA} onComplete={() => this.props.navigation.navigate('Auth')}/>
      );
    }
  }
}

function mapStateToProps({ auth }) {
  return { 
    token: auth.token,
    jwt: auth.jwt
  };
}
export default connect(mapStateToProps, actions)(WelcomeScreen);