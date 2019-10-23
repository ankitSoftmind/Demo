import { SEARCH_USER } from "../actionTypes";

//this action is used for loading all the github users

export const searchUserByName = (searchText) => dispatch => {
        dispatch({
          type: SEARCH_USER,
          payload: searchText
        });
      
};
