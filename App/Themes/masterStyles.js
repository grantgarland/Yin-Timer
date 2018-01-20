import Fonts from './fonts'
import Colors from './colors'

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
      justifyContent: 'center',
      alignItems: 'center',
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
      ...Fonts.style.h4,
      color: Colors.branch,
      textAlign: 'center',
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
    text: {
      ...Fonts.style.description,
      color: Colors.coal,
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: 3
    }
  }
}

export default masterStyles
