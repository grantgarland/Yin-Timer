import { Dimensions } from 'react-native';

import Fonts from './fonts'
import Colors from './colors'

const { height, width } = Dimensions.get('window');

const masterStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.green
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
      backgroundColor: Colors.transparent,
      marginTop: height / 4,
      margin: width / 20
    },
    formItem : {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: Colors.transparent,
      height: 35,
      margin: 20,
      marginBottom: 30,
      borderStyle: 'solid',
      borderBottomWidth: 1.3,
      borderBottomColor: 'black',
    },
    backgroundImage: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      flexWrap: 'wrap',
    },
    header: {
      marginTop: -(Dimensions.get('window').height / 10),
      marginLeft: 30,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    labelText: {
      ...Fonts.style.normal,
      color: 'black',
      textAlign: 'left'
    },
    titleText: {  
      ...Fonts.style.h1,
      color: Colors.charcoal
    },
    formText: {
      ...Fonts.style.normal,
      textAlign: 'left',
      color: 'black'
    }
  },
  button: {
    container: {
      flex: 1,
      alignItems: 'flex-start',
      alignItems: 'center'
    },
    active: {
      width: Dimensions.get('window').width / 1.5,
      height: 60,
      backgroundColor: Colors.green,
      borderRadius: 50
    },
    passive: {
      width: Dimensions.get('window').width / 1.5,
      height: 60,
      backgroundColor: Colors.gong,
      borderRadius: 50
    },
    facebook: {
      width: Dimensions.get('window').width / 1.5,
      height: 60,
      backgroundColor: Colors.facebook,
      borderRadius: 50
    },
    auth: {
      backgroundColor: Colors.green,
      borderRadius: 5,
      width: '100%',
    },
    text: {
      ...Fonts.style.emphasis,
      color: Colors.coal,
      textAlign: 'center',
      letterSpacing: 2
    },
    facebookText: {
      ...Fonts.style.facebook,
      color: Colors.snow,
      textAlign: 'center',
      letterSpacing: 2
    }
  },
  card: {
    container: {
      flex: 1,
      justifyContent: 'center', 
      flexDirection: 'column',
      alignItems: 'center',
    }
  }
}

export default masterStyles
