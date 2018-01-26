import { Dimensions } from 'react-native';

const auth_buttons = [
  {
    text: 'Sign Up',
    action: 'Sign Up',
    height: Dimensions.get('window').height / 4  
  },
  {
    text: 'Log In',
    action: 'Log In',
    height: 30
  },
  {
    text: 'Facebook Login',
    action: 'Facebook',
    height: 30,
    facebook: true   
  }
];

export default auth_buttons;