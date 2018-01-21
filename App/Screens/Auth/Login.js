import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../Redux/Actions/auth_actions';

class LoginScreen extends Component {

  render() {
  }
}

export default connect(null, actions)(LoginScreen);