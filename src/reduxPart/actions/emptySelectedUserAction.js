import { SELECTED_USER } from "../actionTypes";

//this action is used for empty selected user

export const emptySelectedUser = () => dispatch => {
  dispatch({
    type: SELECTED_USER,
    payload: null
  });
};
