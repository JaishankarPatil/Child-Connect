import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import SideBar from "../../side-bar/side-bar.component";
import Footer from "../../footer/footer.component";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import DesignationCreate from "../../designation/designation-create.component";
import DesignationListView from "../../designation/designation-list-view.component";
import { fetchDesignationsStart } from "../../../redux/designation/designation.actions";

import {
  selectDesignationsIsLoading,
  selectdeleteDesignationSuccessMessage,
  selectDesignationCreateSuccessMessage,
  selectDesignationsErrorMessage,
  selectDesignationCreateErrorMessage,
  selectdeleteDesignationErrorMessage,
  selectDesignationUpdateErrorMessage,
  selectDesignationUpdateSuccessMessage,
} from "../../../redux/designation/designation.selectors";
import Spinner from "../../with-spinner/with-spinner.component";

class Designation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchDesignationListDispatch } = this.props;
    fetchDesignationListDispatch();
  }

  reloadThePage(history) {
    history.go(0);
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
      history,
      isLoading,
      fetchAllDesignationsError,
      designationCreateSuccess,
      designationDeleteSuccess,
      designationUpdateError,
      designationDeleteError,
      designationCreateError,
      designationUpdateSuccess,
    } = this.props;

    if (
      designationCreateSuccess ||
      designationDeleteSuccess ||
      designationUpdateSuccess
    ) {
      isSuccess = true;
    }

    if (
      fetchAllDesignationsError ||
      designationUpdateError ||
      designationDeleteError ||
      designationCreateError
    ) {
      alert("fetchAllDesignationsError");
      isError = true;
    }

    const CreateDesignationSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        New Designation is created SuccessFully .....!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const DeleteDesignationSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Designation is deleted SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateDesignationSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Designation is updated SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const CreatDesignationFailedFlashMessage = (
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

    const UpdateDesignationFailedFlashMessage = (
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

    const DeleteDesignationFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Deleting of designation failed, please contact{" "}
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

    const FetchDesignationsFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        No designations availebel please contact admin{" "}
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
            <Navigation
              pageTitle={"DEPARTMENT"}
              navigationItems={navigationItems}
            />
            {isSuccess || isError ? (
              designationCreateSuccess ? (
                CreateDesignationSuccessFlashMessage
              ) : null || designationDeleteSuccess ? (
                DeleteDesignationSuccessFlashMessage
              ) : null || designationUpdateSuccess ? (
                UpdateDesignationSuccessFlashMessage
              ) : null || designationUpdateError ? (
                UpdateDesignationFailedFlashMessage
              ) : null || designationDeleteError ? (
                DeleteDesignationFailedFlashMessage
              ) : null || designationCreateError ? (
                CreatDesignationFailedFlashMessage
              ) : null || fetchAllDesignationsError ? (
                FetchDesignationsFailedFlashMessage
              ) : null
            ) : (
              <div className="section-body mt-4">
                <div className="container-fluid">
                  <div className="tab-content">
                    {isLoading ? <Spinner /> : <DesignationListView />}
                    <GridView />

                    <DesignationCreate />
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

const mapStateToProps = createStructuredSelector({
  isLoading: selectDesignationsIsLoading,
  designationCreateSuccess: selectDesignationCreateSuccessMessage,
  designationDeleteSuccess: selectdeleteDesignationSuccessMessage,
  fetchAllDesignationsError: selectDesignationsErrorMessage,
  designationCreateError: selectDesignationCreateErrorMessage,
  designationDeleteError: selectdeleteDesignationErrorMessage,
  designationUpdateError: selectDesignationUpdateErrorMessage,
  designationUpdateSuccess: selectDesignationUpdateSuccessMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDesignationListDispatch: () => dispatch(fetchDesignationsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Designation);
