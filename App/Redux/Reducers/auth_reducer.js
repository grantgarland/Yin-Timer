import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from '../Actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { jwt: action.payload };
    case LOGIN_FAIL:
      return { jwt: null };
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload };
    case FACEBOOK_LOGIN_FAIL:
      return { token: null }
    default:
      return state;
  }
}