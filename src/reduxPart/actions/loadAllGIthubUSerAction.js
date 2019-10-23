import { LOAD_ALL_GITHUB_USER } from "../actionTypes";

//this action is used for loading all the github users

export const loadAllGithubUser = () => dispatch => {
  fetch(" https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      if (data) {
        dispatch({
          type: LOAD_ALL_GITHUB_USER,
          payload: data
        });
      }
    });
};
