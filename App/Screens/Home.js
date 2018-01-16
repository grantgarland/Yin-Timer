import React, { Component } from 'react';
import { Button, View, StatusBar } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Chooser')}
          title="Select a Routine"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Builder')}
          title="Build a Routine"
        />
      </View>
    )
  }
}

export default HomeScreen;