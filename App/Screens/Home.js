import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import Button from '../Components/LoadingButton';


import Styles from '../Themes/masterStyles';
import Images from '../Themes/images'

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: false
    };
  }

  onPressHandler(){
      this.setState({isLoading: true});
      setTimeout(()=>{
          this.setState({isLoading: false});
      }, 1000);
  }
  render() {
    
    return (
      <View style={Styles.screen.mainContainer} >
        <Image style={Styles.screen.header} source={Images.yin_timer_header} resizeMode="contain"/>
        <View style={Styles.card.container}>
          <Button
            viewStyle={Styles.button.passive}
            onPress={this.onPressHandler.bind(this)}
            isLoading={this.state.isLoading} 
          />
        </View>
      </View>
    )
  }
}

export default HomeScreen;