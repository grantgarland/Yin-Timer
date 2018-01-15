import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import AuthScreen from './App/Screens/Auth';
import WelcomeScreen from './App/Screens/Welcome';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: {
        screen: WelcomeScreen
      },
      auth: {
        screen: AuthScreen
      }
    })

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
});
