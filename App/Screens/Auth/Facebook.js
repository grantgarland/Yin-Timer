import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../Redux/Actions/auth_actions';

class FacebookScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    AsyncStorage.removeItem('fb_token');
    this.props.navigation.goBack();
  }

  render() {
    return( true )
  }
}

export default connect(null, actions)(FacebookScreen);