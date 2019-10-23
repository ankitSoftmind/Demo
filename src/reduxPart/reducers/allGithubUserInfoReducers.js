import { LOAD_ALL_GITHUB_USER } from "../actionTypes";

const initialState = {
  allGithubUserInfo: null
};

export default function(state = initialState, action) {  
  switch (action.type) {
    case LOAD_ALL_GITHUB_USER:
      return {
        ...state,
        allGithubUserInfo: action.payload
      };

    default:
      return state;
  }
}
