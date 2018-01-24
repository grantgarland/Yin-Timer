import { Dimensions } from 'react-native';

const auth_buttons = [
  {
    text: 'Log In',
    action: 'Log In',
    height: Dimensions.get('window').height / 4
  }, 
  {
    text: 'Sign Up',
    action: 'Sign Up',
    height: 30   
  },
  {
    text: 'Sign Up with Facebook',
    action: 'Facebook',
    height: 30       
  }
];

export default auth_buttons;