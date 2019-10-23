import { LOAD_ALL_REPO_OF_A_USER } from "../actionTypes";

//this action is used for loading all the repo of a particular user
export const loadAllRepositoryOfUser = username => dispatch => {debugger;
  fetch("https://api.github.com/users/" + username + "/repos")
    .then(res => res.json())
    .then(data => {
      if (data) {
        dispatch({
          type: LOAD_ALL_REPO_OF_A_USER,
          payload: data
        });
      }
    });
};
