import { combineReducers } from "redux";
import allGithubUserInfo from "./reducers/allGithubUserInfoReducers";
import githubUserMediumInformation from "./reducers/githubUserMediumInformationReducers";
import searhedUserList from './reducers/githubUserMediumInformationReducers';
import allRepoOfUser from "./reducers/allRepoOfUserReducers";
import selectedUserInfo from './reducers/selectedUserReducers';
import selectedRepositoryOfUser from './reducers/selecetedRepositoryUserReducers';

export default combineReducers({
  allGithubUserInfo: allGithubUserInfo,
  githubUserMediumInformation: githubUserMediumInformation,
  allRepoOfUser: allRepoOfUser,
  selectedUserInfo:selectedUserInfo,
  searhedUserList:searhedUserList,
  selectedRepositoryOfUser:selectedRepositoryOfUser
});
