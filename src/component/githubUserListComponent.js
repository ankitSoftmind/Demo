import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadParticularGithubUserInfo } from "../reduxPart/actions/loadParticularGithubUserInfoAction";
import { searchUserByName } from "../reduxPart/actions/searchUserAction";
import { selectedUser } from "../reduxPart/actions/selectedUserAction";
import SelectedUserRepositoriesComponent from "./selectedUserRepositoriesList";

class GithubUserListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedText: null
    };
  }
  componentDidMount() {
    if (this.props.allGithubUserInfo) {
      this.props.allGithubUserInfo.forEach(data => {
        this.props.loadParticularGithubUserInfo(data.login);
      });
    }
  }

  handleSearchChange = event => {
    this.setState({
      searchedText: event.target.value
    });
    this.props.searchUserByName(event.target.value);
  };

  handleUserCardClick = userdata => {
    this.props.selectedUser(userdata);
  };

  openUrlInNewWindow = url => {
    var win = window.open(url, "_blank");
    win.focus();
  };

  render() {
    return (
      <React.Fragment>
        <header id="header">
          <div className="content">
            <a className="logo" href="index.html">
              Logo Here
            </a>
          </div>
        </header>
        <div className="content">
          <div className="search-box-div">
            <input
              type="text"
              className="search-box"
              onChange={this.handleSearchChange}
              placeholder="Search Profile Card"
            />
            <a href={null} className="icon fa-search">
              <span className="label">Icon</span>
            </a>
          </div>

          <div className="user-card">
            <div className="card-box">
              <ul>
                {!this.state.searchedText &&
                  this.props.githubUserMediumInformation &&
                  this.props.githubUserMediumInformation.map((data, index) => {
                    return (
                      <li id={index}>
                        <div
                          className="card-img brown"
                          onClick={this.handleUserCardClick.bind(this, data)}
                        >
                          <div>
                            <img src={data.avatar_url} />
                          </div>
                          <div>{data.name}</div>
                          <div>{data.location}</div>
                        </div>
                        <div className="card-text">
                          <div className="card-text-head">Basic Information</div>
                          <div className="card-text-dic">
                            <p>
                              Followers :{data.followers}
                              <a
                                onClick={this.openUrlInNewWindow.bind(
                                  this,
                                  data.followers_url
                                )}
                                href={null}
                              ></a>
                            </p>
                            <p>
                              Following :{data.following}
                              <a
                                onClick={this.openUrlInNewWindow.bind(
                                  this,
                                  data.following_url
                                )}
                                href={null}
                              ></a>
                            </p>
                            <p>
                              Repository Count  :{data.public_repos}{" "}
                              <a
                                href={null}
                                onClick={this.openUrlInNewWindow.bind(
                                  this,
                                  data.repos_url
                                )}
                              ></a>
                            </p>

                            <p>
                              Blog URL:
                              <a
                                href={null}
                                onClick={this.openUrlInNewWindow.bind(
                                  this,
                                  data.blog
                                )}
                              >
                                Click here
                              </a>
                            </p>
                          </div>
                          <div className="card-social">
                            <a href={data.html_url}>
                              <i className="icon fa-github">&nbsp;</i>
                            </a>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                {this.state.searchedText &&
                  this.props.searhedUserList &&
                  this.props.searhedUserList.map((data, index) => {
                    return (
                      <li id={index}>
                        <div
                          className="card-img brown"
                          onClick={this.handleUserCardClick.bind(this, data)}
                        >
                          <div>
                            <img src={data.avatar_url} />
                          </div>
                          <div>{data.name}</div>
                          <div>{data.location ? data.location : "NULL"}</div>
                        </div>
                        <div className="card-text">
                          <div className="card-text-head">Basic Information</div>
                          <div className="card-text-dic">
                            <p>
                              Followers :{data.followers}
                              <a
                                onClick={this.openUrlInNewWindow.bind(
                                  this,
                                  data.followers_url
                                )}
                                href={null}
                              ></a>
                            </p>
                            <p>
                              Following :{data.following}
                              <a
                                onClick={this.openUrlInNewWindow.bind(
                                  this,
                                  data.following_url
                                )}
                                href={null}
                              ></a>
                            </p>
                            <p>
                              Repo Count :{data.public_repos}{" "}
                              <a
                                href={null}
                                onClick={this.openUrlInNewWindow.bind(
                                  this,
                                  data.repos_url
                                )}
                              ></a>
                            </p>

                            <p>
                              Blog URL:
                              <a
                                href={null}
                                onClick={this.openUrlInNewWindow.bind(
                                  this,
                                  data.blog
                                )}
                              >
                                Click here
                              </a>
                            </p>
                          </div>
                          <div className="card-social">
                            <a href={data.html_url}>
                              <i className="icon fa-github">&nbsp;</i>
                            </a>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
         
        </div>
        {this.props.selectedUserInfo && <SelectedUserRepositoriesComponent />}
        <div className="copyright">
          Copyright © 2019 Design | All Rights Reserved
        </div>
      </React.Fragment>
    );
  }
}

GithubUserListComponent.propTypes = {
  loadParticularGithubUserInfo: PropTypes.func.isRequired,
  searchUserByName: PropTypes.func.isRequired,
  selectedUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  githubUserMediumInformation:
    state.githubUserMediumInformation.githubUserMediumInformation,
  searhedUserList: state.searhedUserList.searhedUserList,
  allGithubUserInfo: state.allGithubUserInfo.allGithubUserInfo,
  selectedUserInfo: state.selectedUserInfo.selectedUserInfo
});

export default connect(
  mapStateToProps,
  {
    loadParticularGithubUserInfo,
    searchUserByName,
    selectedUser
  }
)(GithubUserListComponent);
