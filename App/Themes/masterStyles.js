import Fonts from './fonts'
import Colors from './colors'

const masterStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center'
    },
    sectionText: {
      ...Fonts.style.normal,
      color: Colors.snow,
      textAlign: 'center'
    },
    titleText: {
      ...Fonts.style.h4,
      color: Colors.branch,
      textAlign: 'center',
    }
  },
  button: {
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    active: {
      backgroundColor: Colors.green,
      width: '100%',
    },
    text: {
      ...Fonts.style.h5,
      color: Colors.coal,
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: 3
    }
  }
}

export default masterStyles
