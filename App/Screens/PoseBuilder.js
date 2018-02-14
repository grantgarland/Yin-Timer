import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, FormLabel, FormInput } from 'react-native-elements'
import Slider from "react-native-slider";
import MultiSelect from 'react-native-multiple-select';

import LoadingButton from '../Components/LoadingButton';

import Styles from '../Themes/masterStyles';
import Fonts from '../Themes/fonts';
import Colors from '../Themes/colors';

import TARGETS from '../Fixtures/targets';
export default class PoseBuilder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      duration: 1,
      difficulty: 1,
      targets: [],
      selectedTargets: []
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

  onSelectedItemsChange = selectedItems => {
    const targets = [];

    selectedItems.forEach((selectedId) => {
      TARGETS.filter((target) => {
        target.id == selectedId ? targets.push(target.name) : null;
      });
    });

    this.setState({ selectedTargets: selectedItems });
    this.setState({ targets });
  };

  savePose = () => {
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Card
            fontFamily={Fonts.type.bold}
            containerStyle={{borderRadius: 10, flex: .98, overflow: 'hidden', }}
          >
            <FormLabel>Name</FormLabel>
            <FormInput onChangeText={(name) => {this.setState({ name })}}/>
            
            <FormLabel>Target Areas</FormLabel>
            <View style={styles.targetsContainer}>
              <MultiSelect
                hideTags
                items={TARGETS}
                uniqueKey="id"
                displayKey="name"
                hideSubmitButton={true}
                ref={(component) => { this.multiSelect = component }}
                onSelectedItemsChange={this.onSelectedItemsChange}
                selectedItems={this.state.selectedTargets}
                selectText="Select"
                searchInputPlaceholderText="..."
                onChangeInput={ (text)=> console.log(text)}
                fontFamily={Fonts.type.base}
                selectedItemTextColor={Colors.gong}
                selectedItemIconColor={Colors.gong}
                itemTextColor={Colors.charcoal}
                searchInputStyle={{ color: '#CCC' }}
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
                maximumTrackTintColor={Colors.windowTint}
                thumbTintColor={Colors.gong}
                onValueChange={difficulty => this.setState({ difficulty })}
              />
            </View>

            <FormLabel>Default Duration: {this.state.duration} minutes</FormLabel>
            <View style={styles.sliderContainer}>
              <Slider
                value={this.state.duration}
                minimumValue={1}
                maximumValue={10}
                step={1}
                minimumTrackTintColor={Colors.gong}
                maximumTrackTintColor={Colors.windowTint}
                thumbTintColor={Colors.gong}
                onValueChange={duration => this.setState({ duration })}
              />
            </View>

           <View style={styles.buttonContainer}>
            <LoadingButton
              viewStyle={[Styles.button.small, {margin: 5, marginTop: 15}]}
              textStyle={Styles.button.text}
              title="Save"
              isLoading={false}
              onPress={() => this.savePose()} />
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
    padding: 5
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
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
})
