import React, {Component} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Card, FormLabel, FormInput } from 'react-native-elements'
import Slider from "react-native-slider";
import CustomMultiPicker from "react-native-multiple-select-list";

import Styles from '../Themes/masterStyles';
import Fonts from '../Themes/fonts';
import Colors from '../Themes/colors';
export default class PoseBuilder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      duration: 1,
      difficulty: 1,
      targets: []
    }
  }

  difficultyText = () => {
    switch (this.state.difficulty) {
      case 1:
        return 'Beginner';
      case 2:
        return 'Intermediate';
      case 3:
        return 'Advanced';
      default:
        return;
    }
  }

  onSelectTarget = (targets) => {
    this.setState({ targets });
    alert(this.state.targets)
  };

  render () {
    const { targets } = this.state;
    const target_areas = ['Abdominals', 'Ankles', 'Calves', 'Hamstrings', 'Hips', 'Lower Back',  'Upper Back',  'Shoulders', 'Quads' ];

    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Card
            fontFamily={Fonts.type.bold}
            containerStyle={{borderRadius: 10, flex: .90, overflow: 'hidden', }}
          >
            <Text style={styles.headerText}>Add Custom Pose</Text>
            <FormLabel>Name</FormLabel>
            <FormInput onChangeText={(name) => {this.setState({ name })}}/>
            
            <FormLabel>Default Duration: {this.state.duration} minutes</FormLabel>
            <View style={styles.sliderContainer}>
              <Slider
                value={this.state.duration}
                minimumValue={1}
                maximumValue={10}
                step={1}
                minimumTrackTintColor={Colors.gong}
                thumbTintColor={Colors.gong}
                onValueChange={duration => this.setState({ duration })}
              />
            </View>

            <FormLabel>Difficulty: {this.difficultyText()}</FormLabel>
            <View style={styles.sliderContainer}>
              <Slider
                value={this.state.difficulty}
                minimumValue={1}
                maximumValue={3}
                step={1}
                minimumTrackTintColor={Colors.gong}
                thumbTintColor={Colors.gong}
                onValueChange={difficulty => this.setState({ difficulty })}
              />
            </View>

            <FormLabel>Target Areas</FormLabel>
            <View style={styles.targetsContainer}>
              <CustomMultiPicker
                options={target_areas}
                multiple={true}
                placeholder={"Select Targets"}
                placeholderTextColor={'#757575'}
                returnValue={"label"}
                callback={(target) => { this.onSelectTarget(target) }}
                rowBackgroundColor={"#eee"}
                scrollViewHeight={9}
                rowHeight={40}
                rowRadius={5}
                iconColor={Colors.gong}
                iconSize={30}
                selectedIconName={"ios-checkmark-circle-outline"}
                unselectedIconName={"ios-radio-button-off-outline"}
                scrollViewHeight={120}
              />
           </View>
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
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  sliderContainer: {
    flex: 1,
    margin: 20,
    paddingTop: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  targetsContainer: {
    paddingTop: 10
  },
})
