import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import MainNavigator from './App/Navigation/MainNavigator';

import Styles from './App/Themes/masterStyles';

export default class App extends React.Component {
  render() {
  
    return (
      <View style={Styles.screen.mainContainer}>
        <MainNavigator />
      </View>
    );
  }
}
