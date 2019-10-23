import { SELECTED_REPOSITORY_USER } from "../actionTypes";

const initialState = {
  selectedRepositoryOfUser: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECTED_REPOSITORY_USER:
      return {
        ...state,
        selectedRepositoryOfUser: action.payload
      };
    default:
      return state;
  }
}
