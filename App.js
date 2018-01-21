import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import MainNavigator from './App/Navigation/MainNavigator';
import Store from './App/Redux';

import Styles from './App/Themes/masterStyles';

export default class App extends React.Component {
  render() {
  
    return (
      <Provider store={Store}>
        <View style={Styles.screen.mainContainer}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
