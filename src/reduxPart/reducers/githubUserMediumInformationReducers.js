import { GITHUB_USER_MEDIUM_INFORMATION, SEARCH_USER } from "../actionTypes";

const initialState = {
  githubUserMediumInformation: [],
  searhedUserList:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GITHUB_USER_MEDIUM_INFORMATION:
      return {
        ...state,
        githubUserMediumInformation: state.githubUserMediumInformation.concat(
          action.payload
        )
      };
    case SEARCH_USER:
      const { payload } = action;
      let works = state.githubUserMediumInformation.filter(val => {
        if (val.name) {
          return val.name.toLowerCase().includes(payload.toLowerCase());
        }
      });
      return {
        ...state,
        searhedUserList:works
      };

    default:
      return state;
  }
}
