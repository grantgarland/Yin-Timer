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
    this.setState({ token: false });
    !token ? this.navigateToHome() : this.onAuthComplete(this.props);
  }
  
  onAuthComplete(props) {
    if (props.token) {
      this.navigateToHome()
    }
  }

  navigateToHome = () => {
    // FOR TESTING TOGGLE 'AUTH'
    this.props.navigation.navigate('Auth');
    // this.props.navigation.navigate('Home');
  }

  navigateToAuth = () => {
    this.props.navigation.navigate('Auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    } else {
      return (
        <Slides data={SLIDE_DATA} onComplete={this.navigateToAuth}/>
      );
    }
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}
export default connect(mapStateToProps, actions)(WelcomeScreen);