import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, FormLabel, FormInput, CheckBox } from 'react-native-elements'
import Slider from "react-native-slider";
import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

import * as actions from '../Redux/Actions/pose_actions';
import Styles from '../Themes/masterStyles';
import Fonts from '../Themes/fonts';
import Colors from '../Themes/colors';

import TARGETS from '../Fixtures/targets';

class PoseBuilderScreen extends Component {
  constructor () {
    super()
    this.state = {
      userToken: '',
      name: '',
      duration: 1,
      twoSided: false,
      targets: [],
      selectedTargets: []
    }
  }

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: (
        <Button
          transparent
          rightIcon={{name: 'add', color: params.saving ?  Colors.cloud : Colors.gong, size: 30}}
          onPress={() => params.handleSave() } />
      )
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({handleSave: this.savePose });
    this.getUserToken().then(res => this.setState({userToken: res}));
  }

  async getUserToken() {
    let token = await AsyncStorage.getItem('phone');

    return token.substr(1);
  }

  savePose = () => {
    const CREATE_POSE_URL='https://us-central1-yin-timer-2.cloudfunctions.net/createPose';
    const pose = {
      name: this.state.name,
      duration: this.state.duration,
      twoSided: this.state.twoSided,
      targets: this.state.targets
    }

    this.props.navigation.setParams({saving: true });

    if (this.isValid(pose)) {
      try {
        this.deployCloudFunction(CREATE_POSE_URL, this.state.userToken, pose)
        .then(res => {
          if (res.status === 200) {
            this.props.navigation.navigate('Home');
          } else {
            alert("Error connection to the network. Please try again.")
          }
        })
      } catch(error) {
        alert("We encountered an error. Please try again.")
        this.props.navigation.setParams({saving: false });
      }
    } else {
      this.props.navigation.setParams({saving: false });
    }
  }

  async deployCloudFunction(url, token, pose) {
    return await axios.post(url, { token, pose }); 
  }

  isValid = (pose) => {
    if (!this.state.name) {
      alert('Please provide a pose name');
      return false
    } else if ( this.state.targets.length < 1 || this.state.targets.length > 3) {
      alert('Please select between 1 and 3 target areas');
      return false
    } else {
      return true
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
              onChangeText={name => this.setState({ name })}/>
            
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

            <CheckBox
              title='Two-sided pose?'
              // containerStyle={styles.sliderContainer}
              fontFamily={Fonts.type.base}
              texStyle={{color: Colors.charcoal}}
              iconRight
              checked={this.state.twoSided}
              checkedColor={Colors.gong}
              onIconPress={() => this.setState({ twoSided: !this.state.twoSided })}
            />
          </Card>
        </View>
      </View>
    )
  }
}

function mapStateToProps({ pose }) {
  return {
    poses: pose.custom_poses
  };
}

export default connect(mapStateToProps, actions)(PoseBuilderScreen)

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
