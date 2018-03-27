import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux';
import { Button, Card, FormLabel, FormInput } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';

import * as actions from '../Redux/Actions/pose_actions';
import Styles from '../Themes/masterStyles';
import Fonts from '../Themes/fonts';
import Colors from '../Themes/colors';

class RoutineBuilderScreen extends Component {
  constructor () {
    super()
    this.state = {
      isSaving: false,
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
    this.props.navigation.setParams({ handleSave: this.savePose });
  }

  savePose = () => {
    this.setState({isSaving: true});

    const routine = {
      name: this.state.routineName,
      duration: this.state.routineDuration,
      poses: this.state.poses
    }

    if (this.isValid(routine)) {
      console.log(routine)
    }
  }

  isValid = (routine) => {
    if (!this.state.routineName) {
      alert('Please provide a routine name');
      return false
    } else if ( this.state.poses.length < 3) {
      alert('Please select at least 3 poses');
      return false
    } else {
      return true
    }
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

function mapStateToProps() {

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
