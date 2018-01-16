import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Auth')}
          title="Login or Signup"
        />
      </View>
    )
  }
}

export default WelcomeScreen;