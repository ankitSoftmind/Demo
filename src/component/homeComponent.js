import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadAllGithubUser } from "../reduxPart/actions/loadAllGIthubUSerAction";
import { searchUserByName } from "../reduxPart/actions/searchUserAction";
import CompleteUserInfoComponent from "./githubUserListComponent";
import "../App.css";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadAllGithubUser();
  }
  render() {
    return (
      <div>
        <CompleteUserInfoComponent />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allGithubUserInfo: state.allGithubUserInfo.allGithubUserInfo
});

HomeComponent.propTypes = {
  loadAllGithubUser: PropTypes.func.isRequired,
  searchUserByName: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  {
    loadAllGithubUser,
    searchUserByName
  }
)(HomeComponent);
