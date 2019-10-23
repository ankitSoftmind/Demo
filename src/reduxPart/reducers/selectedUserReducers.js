import { SELECTED_USER } from "../actionTypes";

const initialState = {
  selectedUserInfo: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECTED_USER:
      return {
        ...state,
        selectedUserInfo: action.payload
      };

    default:
      return state;
  }
}
