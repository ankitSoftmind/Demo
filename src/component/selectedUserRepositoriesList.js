import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import closeImage from "../asset/images/close.png";
import { loadAllRepositoryOfUser } from "../reduxPart/actions/loadAllRepositoriesOfUserAction";
import { emptySelectedUser } from "../reduxPart/actions/emptySelectedUserAction";
import { selectedRepositoryOfUser } from "../reduxPart/actions/selectedRepositoryAction";

class SelectedUserRepositoriesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRepo: 0
    };
  }

  handleClearSelecteduser = () => {
    this.props.emptySelectedUser();
  };

  showSelectedRepositoryInformation = (repository, index) => {
    this.setState({
      selectedRepo: index
    });
    this.props.selectedRepositoryOfUser(repository);
  };
  render() {
    return (
      <div className="seleced-user-repo">
        <div className="repository-left-div">
          <div className="repository-left-section">
            <div className="repository-user-image">
              <img
                src={
                  this.props.selectedUserInfo &&
                  this.props.selectedUserInfo.avatar_url
                }
              />
              <div className="repository-user-name">
                <p>
                  {this.props.selectedUserInfo &&
                    this.props.selectedUserInfo.name}
                </p>
                <span>
                  {" "}
                  {this.props.selectedUserInfo &&
                    this.props.selectedUserInfo.location}
                </span>
              </div>
            </div>
          </div>
          <div className="repository-list">
            <h3>Repository List</h3>
            <ul>
              {this.props.allRepoOfUser &&
                this.props.allRepoOfUser.map((data, index) => {
                  return (
                    <li
                      id={index}
                      className={
                        this.state.selectedRepo === index ? "active-higlisghted-repo" : ""
                      }
                      onClick={this.showSelectedRepositoryInformation.bind(
                        this,
                        data,
                        index
                      )}
                    >
                      {data.full_name}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="repository-right-div">
          <div className="close-div" onClick={this.handleClearSelecteduser}>
            <img src={closeImage} className="popup-close"></img>
          </div>
          <h1>Repository Information</h1>
          <p>
            <span>Archive URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.archive_url}{" "}
          </p>
          <p>
            <span>Archived :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.archived}{" "}
          </p>
          <p>
            <span>Assignees URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.assignees_url}{" "}
          </p>
          <p>
            <span>Downloads URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.downloads_url}
          </p>
          <p>
            <span>Disabled :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.disabled}
          </p>
          <p>
            <span>Description :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.description}
          </p>
          <p>
            <span>Deployments URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.deployments_url}
          </p>
          <p>
            <span>Default Branch :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.default_branch}
          </p>
          <p>
            <span>Created At :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.created_at}
          </p>
          <p>
            <span>Contributors URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.contributors_url}
          </p>
          <p>
            <span>Clone URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.clone_url}
          </p>
          <p>
            <span>Has Downloads :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.has_downloads}
          </p>
          <p>
            <span>Git URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.git_url}
          </p>
          <p>
            <span>Full Name :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.full_name}
          </p>
          <p>
            <span>Forks URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.forks_url}
          </p>
          <p>
            <span>Forks Count :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.forks_count}
          </p>
          <p>
            <span>Forks :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.forks}
          </p>
          <p>
            <span>Fork :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.fork}
          </p>
          <p>
            <span>Events URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.events_url}
          </p>
          <p>
            <span>Merges URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.merges_url}
          </p>
          <p>
            <span>Languages URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.languages_url}
          </p>
          <p>
            <span>Language :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.language}
          </p>
          <p>
            <span>Labels URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.labels_url}
          </p>
          <p>
            <span>Html URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.html_url}
          </p>
          <p>
            <span>Hooks URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.hooks_url}
          </p>
          <p>
            <span>Homepage :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.homepage}
          </p>
          <p>
            <span>Has Wiki :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.has_wiki}
          </p>
          <p>
            <span>Has Projects :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.has_projects}
          </p>
          <p>
            <span>Has Pages :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.has_pages}
          </p>
          <p>
            <span>Has Issues :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.has_issues}
          </p>
          <p>
            <span>Pulls URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.pulls_url}
          </p>
          <p>
            <span>Private :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.private}
          </p>
          <p>
            <span>Open Issues Count :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.open_issues_count}
          </p>
          <p>
            <span>Open Issues :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.open_issues}
          </p>
          <p>
            <span>Notifications URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.notifications_url}
          </p>
          <p>
            <span>Node ID :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.node_id}
          </p>
          <p>
            <span>Name :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.name}
          </p>
          <p>
            <span>Mirror URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.mirror_url}
          </p>
          <p>
            <span>Milestones URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.milestones_url}
          </p>
          <p>
            <span>Subscribers URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.subscribers_url}
          </p>
          <p>
            <span>Statuses URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.statuses_url}
          </p>
          <p>
            <span>Stargazers URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.stargazers_url}
          </p>
          <p>
            <span>Stargazers Count :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.stargazers_count}
          </p>
          <p>
            <span>SSH URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.ssh_url}
          </p>
          <p>
            <span>Size :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.size}
          </p>
          <p>
            <span>Releases URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.releases_url}
          </p>
          <p>
            <span>Pushed At :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.pushed_at}
          </p>
          <p>
            <span>Blobs URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.blobs_url}{" "}
          </p>
          <p>
            <span>Branches URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.branches_url}
          </p>
          <p>
            <span>Watchers Count :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.watchers_count}
          </p>
          <p>
            <span>Watchers :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.watchers}
          </p>
          <p>
            <span>Url :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.url}
          </p>
          <p>
            <span>Updated At :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.updated_at}
          </p>
          <p>
            <span>Trees URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.trees_url}
          </p>
          <p>
            <span>Teams URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.teams_url}
          </p>
          <p>
            <span>Tags URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.tags_url}
          </p>
          <p>
            <span> Svn URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.svn_url}
          </p>
          <p>
            <span>Subscription URL :</span>
            {this.props.selectedRepositoryOfAUser &&
              this.props.selectedRepositoryOfAUser.subscription_url}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allGithubUserInfo: state.allGithubUserInfo.allGithubUserInfo,
  allRepoOfUser: state.allRepoOfUser.allRepoOfUser,
  selectedUserInfo: state.selectedUserInfo.selectedUserInfo,
  selectedRepositoryOfAUser:
    state.selectedRepositoryOfUser.selectedRepositoryOfUser
});

SelectedUserRepositoriesComponent.propTypes = {
  loadAllRepositoryOfUser: PropTypes.func.isRequired,
  emptySelectedUser: PropTypes.func.isRequired,
  selectedRepositoryOfUser: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  {
    loadAllRepositoryOfUser,
    emptySelectedUser,
    selectedRepositoryOfUser
  }
)(SelectedUserRepositoriesComponent);
