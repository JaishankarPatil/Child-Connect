import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Spinner from "../with-spinner/with-spinner.component";

import SubmitButton from "../submit-button/submit-button.component";
import {
  selectGroupsIsLoading,
  selectGroupToUpdate,
  selectGroupUpdateErrorMessage,
  selectGroupUpdateSuccessMessage,
  selectGroupByIdErrorMessage,
} from "../../redux/group/group.selectors";
import {
  fetchGroupByGroupIdUpdateStart,
  updateGroup,
} from "../../redux/group/group.actions";

class GroupUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupDetails: {
        groupName: "",
        description: "",
      },
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();
    const { updateGroupDispatch, history } = this.props;
    const { groupDetails } = this.state;
    updateGroupDispatch(groupDetails);
  };

  changeHandler = (event) => {
    const { value, name } = event.target;

    console.log("name", name);
    console.log("value", value);

    let item = { ...this.state.groupDetails };
    item[name] = value;

    console.log("item", item);

    this.setState({ groupDetails: item });
  };

  componentDidMount() {
    console.log(`${this.props.match.params.groupId}`);
    alert("componentDidMount");

    const { fetchGroupByIdDispatch, groupToUpdate } = this.props;
    const subjcetId = this.props.match.params.groupId;
    fetchGroupByIdDispatch(subjcetId);
    console.log("groupToUpdate", groupToUpdate);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    alert("componentWillReceiveProps");
    this.initialize(nextProps);
  }

  initialize(nextProps) {
    const groupToUpdateData = nextProps.groupToUpdate;
    console.log("groupToUpdateData", groupToUpdateData);

    alert("stop");
    this.setState({ groupDetails: groupToUpdateData });
  }

  reloadThePage(history) {
    history.push("/group");
  }

  onErrorRedirect(history) {
    history.push("/group");
  }

  render() {
    let isError = false;
    let isSuccess = false;
    const { groupDetails } = this.state;
    const {
      groupUpdateError,
      history,
      isLoading,
      groupUpdateSuccess,
    } = this.props;
    if (groupUpdateError) {
      isError = true;
    }

    if (groupUpdateSuccess) {
      isSuccess = true;
    }

    const UpdateGroupSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Group is updated SuccessFully!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateGroupFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Failed To update group, please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@CHILD-CONNECT.com
        </a>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    return (
      <div>
        {isError || isSuccess ? (
          //this.onErrorRedirect(history)
          groupUpdateError ? (
            UpdateGroupFailedFlashMessage
          ) : null || groupUpdateSuccess ? (
            UpdateGroupSuccessFlashMessage
          ) : null
        ) : isLoading ? (
          <Spinner />
        ) : (
          <div className="tab-pane" id="Staff-add">
            <div className="row clearfix">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Update Group Details</h3>
                  <div className="card-options ">
                    <a
                      href="#"
                      className="card-options-collapse"
                      data-toggle="card-collapse"
                    >
                      <i className="fe fe-chevron-up"></i>
                    </a>
                    <a
                      href="#"
                      className="card-options-remove"
                      data-toggle="card-remove"
                    >
                      <i className="fe fe-x"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <form name="form" onSubmit={this.handelSubmit}>
                    <div className="row clearfix">
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group"></div>
                      </div>

                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Group Name</label>
                          <input
                            type="text"
                            name="groupName"
                            className="form-control"
                            onChange={this.changeHandler}
                            value={groupDetails.groupName}
                          ></input>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-12">
                        <div className="form-group"></div>
                      </div>

                      <div className="col-sm-12">
                        <div className="form-group mt-3">
                          <label>Description</label>
                          <textarea
                            name="description"
                            onChange={this.changeHandler}
                            value={groupDetails.description}
                            rows="4"
                            className="form-control no-resize"
                            placeholder="Please type what you want..."
                          ></textarea>
                        </div>
                      </div>

                      <SubmitButton buttonName={`Update Group`} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectGroupsIsLoading,
  groupToUpdate: selectGroupToUpdate,
  groupUpdateError: selectGroupUpdateErrorMessage,
  groupUpdateSuccess: selectGroupUpdateSuccessMessage,
  selectGroupByIdError: selectGroupByIdErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroupByIdDispatch: (groupId) =>
    dispatch(fetchGroupByGroupIdUpdateStart(groupId)),
  updateGroupDispatch: (groupToUpdate) => dispatch(updateGroup(groupToUpdate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupUpdate);
