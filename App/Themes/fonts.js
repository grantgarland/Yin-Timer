const type = {
  base: 'Avenir',
  bold: 'Avenir-Medium',
  emphasis: 'Avenir-Black'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 16,
  medium: 15,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.bold,
    fontSize: size.medium
  },
  emphasis: {
    fontFamily: type.bold,
    fontSize: size.h6
  },
  input: {
    fontFamily: type.base,
    fontSize: size.input
  },
  facebook: {
    fontFamily: 'Helvetica',
    fontSize: size.h6
  }
}

export default {
  type,
  size,
  style
}
