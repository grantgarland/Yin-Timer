import React, { Component } from 'react';

import { Button, View, ScrollView, Text, Image, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native';
import { RkButton, RkText} from 'react-native-ui-kitten';
import Moment from 'moment';

import Styles from '../Themes/masterStyles';
import Colors from '../Themes/colors';
import Fonts from '../Themes/fonts';
import Images from '../Themes/images'
import HOME_BUTTONS from '../Fixtures/home_buttons';
const paddingValue = 10;

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
    this._determineUsePeriod();
  }

  _calculateButtonSize() {
    let {height, width} = Dimensions.get('window');
    return (width - paddingValue * 5) / 2;
  }

  async _determineUsePeriod() {
    let start_date = await AsyncStorage.getItem('start_date');
    let today = new Date();

    if (start_date) {
      let start = Moment(start_date);
      let current = Moment(today);

      this.setState({
        use_period: current.diff(start, 'days') + 1
      })
    }
  }

  render() {
    let size = this._calculateButtonSize();
    let navigate = this.props.navigation.navigate;

    let buttons = HOME_BUTTONS.map((button, index) => {
      return (
        <RkButton
          rkType='square shadow'
          style={[styles.button, {width: size, height: size}]}
          key={index}
          onPress={() => {
            navigate(button.page)
          }}>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <RkText style={{padding: paddingValue}}>{button.icon}</RkText>
            <RkText style={Fonts.style.normal}>{button.title}</RkText>
          </View>
        </RkButton>
      )
    });

    return (
      <View style={Styles.home.container} >

        <View style={[Styles.home.thirdHeight, {paddingBottom: 30}]} >
          <View style={Styles.home.header} >
            <Image style={Styles.home.headerImage} source={Images.yin_timer_header} />
          </View>
          <View style={Styles.home.headerText} >
            <Text style={Fonts.style.h3}> Day {this.state.use_period} </Text>
            <Text />
            <Text style={Fonts.style.normal}> {this.state.today} </Text>
          </View>
        </View>

        <View style={Styles.home.twoThirdHeight} >
          <ScrollView style={{padding: paddingValue}} contentContainerStyle={styles.rootContainer} >
            {buttons}
          </ScrollView>
        </View>
        
      </View>
    )
  }
}

let styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  button: {
    padding: paddingValue,
    marginBottom: paddingValue + paddingValue / 2,
    backgroundColor: Colors.silver
  }
})

export default HomeScreen;