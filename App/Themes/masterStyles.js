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
    section: {
      // margin: Metrics.section,
      // padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      // paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      // marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.snow,
      // padding: Metrics.smallMargin,
      // marginBottom: Metrics.smallMargin,
      // marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h6,
      fontSize: 77,
      color: Colors.branch
    }
  }
}

export default masterStyles
