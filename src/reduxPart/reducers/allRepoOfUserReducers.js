import { LOAD_ALL_REPO_OF_A_USER } from "../actionTypes";

const initialState = {
  allRepoOfUser: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_REPO_OF_A_USER:
      return {
        ...state,
        allRepoOfUser: action.payload
      };
    default:
      return state;
  }
}
