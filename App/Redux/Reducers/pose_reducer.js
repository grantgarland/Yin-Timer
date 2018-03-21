import {
  POSE_SAVE_SUCCESS
} from '../Actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case POSE_SAVE_SUCCESS:
      return { custom_poses: [...action.payload] };
    default:
      return state;
  }
}