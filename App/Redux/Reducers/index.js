import { combineReducers } from 'redux';
import auth from './auth_reducer';
import pose from './pose_reducer';

export default combineReducers({
  auth,
  pose
})