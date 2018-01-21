import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from '../Actions/types';

export default function(state = {}, action) {
  switch(state) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.paload };
    case FACEBOOK_LOGIN_FAIL:
      return { token: null }
    default:
      return state;
  }
}