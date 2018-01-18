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
  component: {
    
  }
}

export default masterStyles
