import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../footer/footer.component";
import SideBar from "../../side-bar/side-bar.component";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import GroupCreate from "../../group/group-create.component";
import { fetchGroupsStart } from "../../../redux/group/group.actions";
import GroupListView from "../../group/group-list-view.component";
import Spinner from "../../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";

import {
  selectGroupsIsLoading,
  selectdeleteGroupSuccessMessage,
  selectGroupCreateSuccessMessage,
  selectGroupsErrorMessage,
  selectGroupCreateErrorMessage,
  selectdeleteGroupErrorMessage,
  selectGroupUpdateErrorMessage,
  selectGroupUpdateSuccessMessage,
} from "../../../redux/group/group.selectors";

import "./group.styles.scss";

import GROUP_DATA from "./group_data";

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: GROUP_DATA,
    };
  }

  reloadThePage(history) {
    history.go(0);
  }

  componentDidMount() {
    const { fetchGroupStartsDispatch } = this.props;
    fetchGroupStartsDispatch();
  }

  render() {
    let isSuccess = false;
    let isError = false;
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };
    const {
      isLoading,
      history,
      fetchAllGroupsError,
      groupCreateSuccess,
      groupDeleteSuccess,
      groupUpdateError,
      groupDeleteError,
      groupCreateError,
      groupUpdateSuccess,
    } = this.props;

    if (groupCreateSuccess || groupDeleteSuccess || groupUpdateSuccess) {
      isSuccess = true;
    }

    if (
      fetchAllGroupsError ||
      groupUpdateError ||
      groupDeleteError ||
      groupCreateError
    ) {
      alert("fetchAllDesignationsError");
      isError = true;
    }

    const CreateGroupSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        New Group is created SuccessFully .....!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const DeleteGroupSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Group is deleted SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateGroupSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Group is updated SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const CreatGroupFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Creation of departent failed, please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@childconnect.com
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

    const UpdateGroupFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Update of departent failed, please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@childconnect.com
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

    const DeleteGroupFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Deleting of group failed, please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@childconnect.com
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

    const FetchGroupsFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        No groups availebel please contact admin{" "}
        <a href="#" class="alert-link">
          SUPPORT@childconnect.com
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
      <div className="font-muli theme-cyan gradient">
        <div id="main_content">
          <SideBar />
          <div className="page">
            <Navigation pageTitle={"GROUP"} navigationItems={navigationItems} />
            {isSuccess || isError ? (
              groupCreateSuccess ? (
                CreateGroupSuccessFlashMessage
              ) : null || groupDeleteSuccess ? (
                DeleteGroupSuccessFlashMessage
              ) : null || groupUpdateSuccess ? (
                UpdateGroupSuccessFlashMessage
              ) : null || groupUpdateError ? (
                UpdateGroupFailedFlashMessage
              ) : null || groupDeleteError ? (
                DeleteGroupFailedFlashMessage
              ) : null || groupCreateError ? (
                CreatGroupFailedFlashMessage
              ) : null || fetchAllGroupsError ? (
                FetchGroupsFailedFlashMessage
              ) : null
            ) : (
              <div className="section-body mt-4">
                <div className="container-fluid">
                  <div className="tab-content">
                    {isLoading ? <Spinner /> : <GroupListView />}
                    <GridView />
                    <GroupCreate />
                  </div>
                </div>
              </div>
            )}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchGroupStartsDispatch: () => dispatch(fetchGroupsStart()),
});

const mapStateToProps = createStructuredSelector({
  isLoading: selectGroupsIsLoading,
  groupCreateSuccess: selectGroupCreateSuccessMessage,
  groupDeleteSuccess: selectdeleteGroupSuccessMessage,
  fetchAllGroupsError: selectGroupsErrorMessage,
  groupCreateError: selectGroupCreateErrorMessage,
  groupDeleteError: selectdeleteGroupErrorMessage,
  groupUpdateError: selectGroupUpdateErrorMessage,
  groupUpdateSuccess: selectGroupUpdateSuccessMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Group);
