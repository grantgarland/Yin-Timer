import {
  POSE_SAVE_SUCCESS
} from './types';

export const savePose = (pose) => dispatch => {
  dispatch({ action: POSE_SAVE_SUCCESS, payload: pose })
}