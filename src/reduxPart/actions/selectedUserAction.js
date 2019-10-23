import {
  SELECTED_USER,
  LOAD_ALL_REPO_OF_A_USER,
  SELECTED_REPOSITORY_USER
} from "../actionTypes";

//this action is used for loading all the github users

export const selectedUser = selectedUser => dispatch => {
  fetch("https://api.github.com/users/" + selectedUser.login + "/repos")
    .then(res => res.json())
    .then(data => {
      if (data) {
        dispatch({
          type: LOAD_ALL_REPO_OF_A_USER,
          payload: data
        });
        dispatch({
          type: SELECTED_USER,
          payload: selectedUser
        });
        dispatch({
          type: SELECTED_REPOSITORY_USER,
          payload: data[0]
        });
      }
    });
};
