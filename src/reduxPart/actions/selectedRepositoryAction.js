import { SELECTED_REPOSITORY_USER } from "../actionTypes";

//this action is used for loading all the repo of a particular user
export const selectedRepositoryOfUser = selectedRepository => dispatch => {debugger;
  dispatch({
    type: SELECTED_REPOSITORY_USER,
    payload: selectedRepository
  });
};
