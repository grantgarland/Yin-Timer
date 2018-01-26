import React, { Component } from 'react';
import { Button, View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Card } from 'react-native-elements';
import Moment from 'moment';

import Styles from '../Themes/masterStyles';
import Fonts from '../Themes/fonts';
import Images from '../Themes/images'

class HomeScreen extends Component {
  constructor() {
    super()
    today = Moment(new Date());

    this.state = {
      today: today.format('MMMM Do, YYYY'),
      use_period: '1',
    }
  }

  componentDidMount() {
    use_period = this.determineUsePeriod();
  }

  async determineUsePeriod() {
    let start_date = await AsyncStorage.getItem('start_date');
    let today = new Date();

    if (start_date) {
      let start = Moment(start_date);
      let current = Moment(today);

      let diff = current.diff(start, 'days') + 1;

      this.setState({
        use_period: diff
      })
    }
  }

  render() {
    
    return (
      <View style={Styles.home.container} >

        <View style={Styles.home.thirdHeight} >
          <View style={Styles.home.header} >
            <Image style={Styles.home.headerImage} source={Images.yin_timer_header} />
          </View>
          <View style={Styles.home.headerText} >
            <Text style={Fonts.style.h2}> Day {this.state.use_period} </Text>
            <Text />
            <Text style={Fonts.style.description}> {this.state.today} </Text>
          </View>
        </View>

        <View style={Styles.home.thirdHeight} >
          <Card style={Styles.home.card}>
            <Image
              style={Styles.home.cardImage}
              source={Images.seal}
            />
          <Text style={Fonts.style.h5}>Select Routine</Text>
        </Card>
        </View>
        <View style={Styles.home.thirdHeight}>
          <Card style={Styles.home.card}>
            <Image
              style={Styles.home.cardImage}
              resizeMode="cover"
              source={Images.seal}
            />
            <Text style={Fonts.style.h5}>Build Custom Routine</Text>
          </Card>
        </View>
      </View>
    )
  }
}

export default HomeScreen;