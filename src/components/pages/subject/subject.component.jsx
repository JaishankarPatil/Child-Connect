import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSubjectsIsLoading } from "../../../redux/subject/subject.selectors";
import { fetchSubjectsStart } from "../../../redux/subject/subject.actions";
import Footer from "../../footer/footer.component";
import SideBar from "../../side-bar/side-bar.component";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import CustomeAdd from "../../custome-add/custome-add.component";
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
    const { fetchStudentsStartDispatch } = this.props;
    fetchStudentsStartDispatch();
  }

  render() {
    const { isLoading } = this.props;
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };
    return (
      <div className="font-muli theme-cyan gradient">
        <div id="main_content">
          <SideBar />
          <div className="page">
            <Navigation
              pageTitle={"SUBJECT"}
              navigationItems={navigationItems}
            />{" "}
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  {isLoading ? <Spinner /> : <SubjectListView />}

                  <GridView />
                  <CustomeAdd headerName={"SUBJECT"} fieldName={"Subject"} />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectSubjectsIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudentsStartDispatch: () => dispatch(fetchSubjectsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Subject);
