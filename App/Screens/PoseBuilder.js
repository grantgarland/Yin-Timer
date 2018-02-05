import React, {Component} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Slider from "react-native-slider";
import { Card, FormLabel, FormInput, Rating } from 'react-native-elements'

import Styles from '../Themes/masterStyles';
import Fonts from '../Themes/fonts';
import Colors from '../Themes/colors';
export default class PoseBuilder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      duration: 1
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Card
            fontFamily={Fonts.type.bold}
            containerStyle={{borderRadius: 10, flex: .75, overflow: 'hidden', justifyContent: 'center'}}
          >
            <Text style={styles.headerText}>Add Custom Pose</Text>
            <FormLabel>Name</FormLabel>
            <FormInput onChangeText={() => {console.log('j')}}/>
            
            <FormLabel>Default Duration ({this.state.duration} minutes)</FormLabel>
            <View style={styles.sliderContainer}>
              <Slider
                value={this.state.duration}
                minimumValue={1}
                maximumValue={10}
                step={1}
                minimumTrackTintColor={Colors.green}
                thumbTintColor={Colors.green}
                onValueChange={duration => this.setState({ duration })}
              />
            </View>

            <FormLabel>Difficulty</FormLabel>
            <FormInput onChangeText={() => {console.log('j')}}/>

            <FormLabel>Target Areas</FormLabel>
            <FormInput onChangeText={() => {console.log('j')}}/>
          </Card>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green
  },
  cardContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    padding: 15
  },
  headerText: {
    ...Fonts.style.emphasis,
    color: Colors.gong,
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  sliderContainer: {
    flex: 1,
    margin: 20,
    paddingTop: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
})
