import { GITHUB_USER_MEDIUM_INFORMATION } from "../actionTypes";

//this action is used for loading information of a particular user
export const loadParticularGithubUserInfo = userName => dispatch => {
  fetch("https://api.github.com/users/" + userName)
    .then(res => res.json())
    .then(data => {
      if (data) {
        dispatch({
          type: GITHUB_USER_MEDIUM_INFORMATION,
          payload: data
        });
      }
    });
};
