import { Dimensions } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../Redux/Actions/auth_actions';

const auth_buttons = [
  {
    text: 'Log In',
    action: 'Home',
    height: Dimensions.get('window').height / 4
  }, 
  {
    text: 'Sign Up',
    action: 'Home',
    height: 30   
  },
  {
    text: 'Sign Up with Facebook',
    action: 'Facebook',
    height: 30       
  }
];

export default auth_buttons;