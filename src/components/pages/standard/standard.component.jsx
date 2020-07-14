import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Footer from "../../footer/footer.component";
import SideBar from "../../side-bar/side-bar.component";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import { fetchStandardsStart } from "../../../redux/standard/standard.actions";
import Spinner from "../../with-spinner/with-spinner.component";
import StandardListView from "../../standard/standard-list-view.component";

import StandardCreate from "../../standard/standard-create.component";

import {
  selectStandardsIsLoading,
  selectdeleteStandardSuccessMessage,
  selectStandardCreateSuccessMessage,
  selectStandardsErrorMessage,
  selectStandardCreateErrorMessage,
  selectdeleteStandardErrorMessage,
  selectStandardUpdateErrorMessage,
  selectStandardUpdateSuccessMessage,
} from "../../../redux/standard/standard.selectors";

class Standard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchStandardsStartDispatch } = this.props;
    fetchStandardsStartDispatch();
  }

  reloadThePage(history) {
    history.go(0);
  }

  render() {
    let isSuccess = false;
    let isError = false;
    const {
      history,
      isLoading,
      fetchAllStandardsError,
      standardCreateSuccess,
      standardDeleteSuccess,
      standardUpdateError,
      standardDeleteError,
      standardCreateError,
      standardUpdateSuccess,
    } = this.props;
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

    if (
      standardCreateSuccess ||
      standardDeleteSuccess ||
      standardUpdateSuccess
    ) {
      isSuccess = true;
    }

    if (
      fetchAllStandardsError ||
      standardUpdateError ||
      standardDeleteError ||
      standardCreateError
    ) {
      alert("fetchAllStandardsError");
      isError = true;
    }

    const CreateStandardSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        New Standard is created SuccessFully .....!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const DeleteStandardSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Standard is deleted SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateStandardSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Standard is updated SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const CreatStandardFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Creation of Standard failed, please contact{" "}
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

    const UpdateStandardFailedFlashMessage = (
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

    const DeleteStandardFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Deleting of standard failed, please contact{" "}
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

    const FetchStandardsFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        No standards availebel please contact admin{" "}
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
              pageTitle={"STANDARD"}
              navigationItems={navigationItems}
            />
            {isSuccess || isError ? (
              standardCreateSuccess ? (
                CreateStandardSuccessFlashMessage
              ) : null || standardDeleteSuccess ? (
                DeleteStandardSuccessFlashMessage
              ) : null || standardUpdateSuccess ? (
                UpdateStandardSuccessFlashMessage
              ) : null || standardUpdateError ? (
                UpdateStandardFailedFlashMessage
              ) : null || standardDeleteError ? (
                DeleteStandardFailedFlashMessage
              ) : null || standardCreateError ? (
                CreatStandardFailedFlashMessage
              ) : null || fetchAllStandardsError ? (
                FetchStandardsFailedFlashMessage
              ) : null
            ) : (
              <div className="section-body mt-4">
                <div className="container-fluid">
                  <div className="tab-content">
                    {isLoading ? <Spinner /> : <StandardListView />}
                    <GridView />
                    <StandardCreate />
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
  isLoading: selectStandardsIsLoading,
  standardCreateSuccess: selectStandardCreateSuccessMessage,
  standardDeleteSuccess: selectdeleteStandardSuccessMessage,
  fetchAllStandardsError: selectStandardsErrorMessage,
  standardCreateError: selectStandardCreateErrorMessage,
  standardDeleteError: selectdeleteStandardErrorMessage,
  standardUpdateError: selectStandardUpdateErrorMessage,
  standardUpdateSuccess: selectStandardUpdateSuccessMessage,
});

const mapDispatcToProps = (dispatch) => ({
  fetchStandardsStartDispatch: () => dispatch(fetchStandardsStart()),
});

export default connect(mapStateToProps, mapDispatcToProps)(Standard);
