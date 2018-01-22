import { Dimensions } from 'react-native';

import Fonts from './fonts'
import Colors from './colors'

const { height, width } = Dimensions.get('window');

const masterStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    buttonContainer: {
      flex: 1,
      flexWrap: 'wrap', 
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
    },
    formContainer: {
      flexDirection: 'column',
      marginTop: height / 5,
      margin: width / 9
    },
    formItem : {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      margin: 20
    },
    backgroundImage: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      flexWrap: 'wrap',
    },
    sectionText: {
      ...Fonts.style.normal,
      color: Colors.snow,
      textAlign: 'center'
    },
    titleText: {  
      ...Fonts.style.h1,
      color: Colors.branch
    },
    formText: {
      ...Fonts.style.normal,
      textAlign: 'center'
    }
  },
  button: {
    container: {
      flex: 1,
      alignItems: 'flex-start',
      alignItems: 'center'
    },
    active: {
      backgroundColor: Colors.green,
      borderRadius: 5,
      width: 275,
    },
    passive: {
      backgroundColor: Colors.snow,
      borderRadius: 5,
      width: '100%',
    },
    auth: {
      backgroundColor: Colors.green,
      borderRadius: 5,

      width: '100%',
    },
    text: {
      ...Fonts.style.description,
      color: Colors.coal,
      textAlign: 'center',
      letterSpacing: 2
    }
  }
}

export default masterStyles
