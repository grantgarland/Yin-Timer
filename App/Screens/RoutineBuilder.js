import React, {Component} from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux';
import { Button, Card, FormLabel, FormInput } from 'react-native-elements'
import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons/Ionicons';

import * as actions from '../Redux/Actions/pose_actions';
import Styles from '../Themes/masterStyles';
import Fonts from '../Themes/fonts';
import Colors from '../Themes/colors';

import axios from 'axios';

class RoutineBuilderScreen extends Component {
  constructor () {
    super()
    this.state = {
      userToken: '',
      routineName: '',
      poses: [],
      routineDuration: 0

    }
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
    this.props.navigation.setParams({ handleSave: this.saveRoutine });
    this.getUserToken().then(res => this.setState({userToken: res})).then(() => this.getUserPoses())
  }

  async getUserToken() {
    let token = await AsyncStorage.getItem('phone');

    return token.substr(1);
  }

  getUserPoses() {
    const GET_POSES_URL='https://us-central1-yin-timer-2.cloudfunctions.net/getPoses';

    this.props.navigation.setParams({saving: true });
  
    try {
      this.deployCloudFunction(GET_POSES_URL, this.state.userToken)
        .then(res => {
          if (res.status === 200) {
            console.log(res.data)
            this.props.navigation.navigate('Home');
          } else {
            alert("Error connecting to the network. Please try again.");
            this.props.navigation.setParams({saving: false });
          }})
        } catch(error) {
          alert("We encountered an error. Please try again.")
          this.props.navigation.setParams({saving: false });
      }
  }

  saveRoutine = () => {
  
  }

  async deployCloudFunction(url, token) {
    return await axios.post(url, { token }); 
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Card
            fontFamily={Fonts.type.bold}
            containerStyle={{borderRadius: 10, flex: .95, overflow: 'hidden', }}
          >
            <FormLabel>Routine Name</FormLabel>
            <FormInput 
              inputStyle={{color: Colors.charcoal, fontFamily: Fonts.type.base}}
              onChangeText={(routineName) => {this.setState({ routineName })}}/>
          </Card>
        </View>
      </View>
    )
  }
}

export default connect(null, actions)(RoutineBuilderScreen)

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
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
})
