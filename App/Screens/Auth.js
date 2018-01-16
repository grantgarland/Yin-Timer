import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AuthScreen extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Login!"
        />
      </View>
    )
  }
}

export default AuthScreen;