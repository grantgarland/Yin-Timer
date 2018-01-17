import Fonts from './fonts'
import Colors from './colors'

const masterStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
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
