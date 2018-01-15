import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
});

export default WelcomeScreen;