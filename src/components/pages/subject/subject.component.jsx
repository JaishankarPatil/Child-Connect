import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import {
  selectSubjectsIsLoading,
  selectdeleteSubjectSuccessMessage,
  selectSubjectCreateSuccessMessage,
  selectSubjectsErrorMessage,
  selectSubjectCreateErrorMessage,
  selectdeleteSubjectErrorMessage,
  selectSubjectUpdateErrorMessage,
  selectSubjectUpdateSuccessMessage,
} from "../../../redux/subject/subject.selectors";
import {
  fetchSubjectsStart,
  createSubjectSuccess,
} from "../../../redux/subject/subject.actions";
import Footer from "../../footer/footer.component";
import SideBar from "../../side-bar/side-bar.component";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import SubjectCreate from "../../subject/subject-create.component";
import SubjectListView from "../../subject/subject-list-view.component";
import Spinner from "../../with-spinner/with-spinner.component";

class Subject extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchSubjectsStartDispatch } = this.props;
    fetchSubjectsStartDispatch();
  }

  reloadThePage(history) {
    history.go(0);
  }

  render() {
    let isSuccess = false;
    let isError = false;
    const {
      isLoading,
      history,
      subjectCreateSuccess,
      subjectDeleteSuccess,
      updateSuccessMessage,
      fetchAllSubjectsError,
      subjectCreateError,
      deleteSubjectError,
      subjectUpdateError,
    } = this.props;
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

    const CreateSubjectSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        New Subject is created SuccessFully .....!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const DeleteSubjectSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Subject is deleted SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateSubjectSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Subject is updated SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const CreatSubjectFailedFlashMessage = (
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

    const UpdateSubjectFailedFlashMessage = (
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

    const DeleteSubjectFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Deleting of subject failed, please contact{" "}
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

    const FetchSubjectsFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        No subjects availebel please contact admin{" "}
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

    if (subjectCreateSuccess || subjectDeleteSuccess || updateSuccessMessage) {
      isSuccess = true;
    }

    if (
      fetchAllSubjectsError ||
      subjectCreateError ||
      deleteSubjectError ||
      subjectUpdateError
    ) {
      alert("fetchAllDesignationsError");
      isError = true;
    }
    return (
      <div className="font-muli theme-cyan gradient">
        <div id="main_content">
          <SideBar />
          <div className="page">
            <Navigation
              pageTitle={"SUBJECT"}
              navigationItems={navigationItems}
            />
            {isSuccess || isError ? (
              subjectCreateSuccess ? (
                CreateSubjectSuccessFlashMessage
              ) : null || subjectDeleteSuccess ? (
                DeleteSubjectSuccessFlashMessage
              ) : null || updateSuccessMessage ? (
                UpdateSubjectSuccessFlashMessage
              ) : null || subjectUpdateError ? (
                UpdateSubjectFailedFlashMessage
              ) : null || deleteSubjectError ? (
                DeleteSubjectFailedFlashMessage
              ) : null || subjectCreateError ? (
                CreatSubjectFailedFlashMessage
              ) : null || fetchAllSubjectsError ? (
                FetchSubjectsFailedFlashMessage
              ) : null
            ) : (
              <div className="section-body mt-4">
                <div className="container-fluid">
                  <div className="tab-content">
                    {isLoading ? <Spinner /> : <SubjectListView />}
                    <GridView />
                    <SubjectCreate />
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
  isLoading: selectSubjectsIsLoading,
  subjectCreateSuccess: selectSubjectCreateSuccessMessage,
  subjectDeleteSuccess: selectdeleteSubjectSuccessMessage,
  updateSuccessMessage: selectSubjectUpdateSuccessMessage,
  fetchAllSubjectsError: selectSubjectsErrorMessage,
  subjectCreateError: selectSubjectCreateErrorMessage,
  deleteSubjectError: selectdeleteSubjectErrorMessage,
  subjectUpdateError: selectSubjectUpdateErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSubjectsStartDispatch: () => dispatch(fetchSubjectsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Subject);
