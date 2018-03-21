import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux';
import { Button, Card, FormLabel, FormInput } from 'react-native-elements'
import Slider from "react-native-slider";
import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons/Ionicons';

import * as actions from '../Redux/Actions/pose_actions';
import Styles from '../Themes/masterStyles';
import Fonts from '../Themes/fonts';
import Colors from '../Themes/colors';

import TARGETS from '../Fixtures/targets';

class PoseBuilder extends Component {
  constructor () {
    super()
    this.state = {
      isSaving: false,
      name: '',
      duration: 1,
      difficulty: 1,
      targets: [],
      selectedTargets: []
    },
    this.error = ''
  }

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: (
        <Button
          transparent
          rightIcon={{name: 'add', color: Colors.gong, size: 30}}
          onPress={() => params.handleSave() } />
      )
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.savePose });
  }

  savePose = () => {
    this.setState({isSaving: true});

    const pose = {
      name: this.state.name,
      duration: this.state.duration,
      difficulty: this.state.difficulty,
      targets: this.state.targets
    }

    if (this.isValid(pose)) {
      console.log('valid pose')
    } else {
      alert(this.error)
    }
  }

  isValid = (pose) => {
    if (this.state.name.length > 1) {
      this.error = 'Please provide a pose name';
      return false
    } else if ( this.state.targets.length < 1 || this.state.targets.length > 3) {
      this.error = 'Please select between 1 and 3 target areas';
      return false
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

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Card
            fontFamily={Fonts.type.bold}
            containerStyle={{borderRadius: 10, flex: .95, overflow: 'hidden', }}
          >
            <FormLabel>Name</FormLabel>
            <FormInput 
              inputStyle={{color: Colors.charcoal, fontFamily: Fonts.type.base}}
              onChangeText={(name) => {this.setState({ name })}}/>
            
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

            <FormLabel>Hold Duration: {this.state.duration > 1 ? this.state.duration + ' minutes' : '1 minute'}</FormLabel>
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
          </Card>
        </View>
      </View>
    )
  }
}

function mapStateToProps({ pose }) {
  return { poses: pose.custom_poses };
}

export default connect(null, actions)(PoseBuilder)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green
  },
  cardContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    padding: 10,
    marginTop: 10
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
