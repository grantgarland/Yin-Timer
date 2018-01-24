import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

export const login = (jwt) => async dispatch => {
  if (jwt) {
    await AsyncStorage.setItem('jwt', jwt);

    dispatch({ type: LOGIN_SUCCESS, payload: jwt});
  } else {
    dispatch({ type: LOGIN_FAIL })
  }
}

export const facebookLogin = () => async dispatch => {
  //NOTE: switch these statements when testing fb auth flow
  let token = await AsyncStorage.getItem('fb_token');
  // AsyncStorage.removeItem('fb_token');
  
  if (token) {
    dispatch({ action: FACEBOOK_LOGIN_SUCCESS, payload: token })
  } else {
    initializeFacebookLogin(dispatch);
  }
}

const initializeFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('416678285430993', {
    permissions: ['public_profile']
  });

  if ( type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  } else {
    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  }
};