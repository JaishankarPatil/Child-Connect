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
} from "../../../redux/subject/subject.selectors";
import {
  fetchSubjectsStart,
  createSubjectSuccess,
} from "../../../redux/subject/subject.actions";
import Footer from "../../footer/footer.component";
import SideBar from "../../side-bar/side-bar.component";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import SubjectCreate from "../../subject-add/subject-create.component";
import SubjectListView from "../../subject-list-view/subject-list-view.component";
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
    let successFlash = false;
    let failureFlash = false;
    const {
      isLoading,
      history,
      subjectCreateSuccess,
      selectSubjectUpdateError,
      selectdeleteSubjectError,
    } = this.props;
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

    console.log("selectSubjectUpdateError", selectSubjectUpdateError);

    const CreateSubjectSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        New Subject is created SuccessFully!
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
        Deleting of Subject failed, please contact{" "}
        <a href="#" class="alert-link">
          jai.patil69@gmail.com
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

    console.log("subjectCreateSuccess", subjectCreateSuccess);
    if (subjectCreateSuccess) {
      successFlash = true;
    }
    if (selectSubjectUpdateError || selectdeleteSubjectError) {
      failureFlash = true;
    }
    console.log("isLoading", isLoading);
    console.log("successFlash", successFlash);
    return (
      <div className="font-muli theme-cyan gradient">
        <div id="main_content">
          <SideBar />
          <div className="page">
            <Navigation
              pageTitle={"SUBJECT"}
              navigationItems={navigationItems}
            />{" "}
            {failureFlash || successFlash ? (
              failureFlash ? (
                DeleteSubjectFailedFlashMessage
              ) : null || successFlash ? (
                CreateSubjectSuccessFlashMessage
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
  selectSubjectsError: selectSubjectsErrorMessage,
  selectSubjectCreateError: selectSubjectCreateErrorMessage,
  selectdeleteSubjectError: selectdeleteSubjectErrorMessage,
  selectSubjectUpdateError: selectSubjectUpdateErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSubjectsStartDispatch: () => dispatch(fetchSubjectsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Subject);
