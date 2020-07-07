import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectSubjects,
  selectSubjectsIsLoading,
  selectSubjectCreateSuccess,
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

import SUBJECT_DATA from "./subject_data";

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList: SUBJECT_DATA,
    };
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
    const { isLoading, history, subjectCreateSuccess } = this.props;
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

    console.log("subjectCreateSuccess", subjectCreateSuccess);
    if (subjectCreateSuccess) {
      successFlash = true;
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
            {successFlash ? (
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
  subjectList: selectSubjects,
  subjectCreateSuccess: selectSubjectCreateSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSubjectsStartDispatch: () => dispatch(fetchSubjectsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Subject);
