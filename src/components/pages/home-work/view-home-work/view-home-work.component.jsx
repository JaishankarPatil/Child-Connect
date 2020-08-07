import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import {
  selectHomeworks,
  selectHomeworkBySubject,
} from "../../../../redux/homework/homework.selectors";

import Footer from "../../../footer/footer.component";
import SideBar from "../../../side-bar/side-bar.component";
import Navigation from "../../../navigation/navigation.component";
import {
  fetchHomeworkStarts,
  fetchGroupsByStudentIdStart,
} from "../../../../redux/homework/homework.actions";

import { selectGroups } from "../../../../redux/homework/homework.selectors";
import HomeworkMenu from "../../../homework/homework-by-group-menu-component";
import HomeworkContainer from "../../../homework/homework-container.component";
import HomeworkByGroupContainer from "../../../homework-by-group/homework-by-group.component";

class ViewHomeWork extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchGroupsByStudentIdStartDispatch } = this.props;
    fetchGroupsByStudentIdStartDispatch(1);
  }

  render() {
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

    const { homeworkBySubject, history, groupsList } = this.props;

    console.log("homeworkBySubject", homeworkBySubject);
    console.log("groupsList", groupsList);
    console.log("groupsList", groupsList.groupDtoList);

    return (
      <div className="font-muli theme-cyan gradient">
        <div id="main_content">
          <SideBar />
          <div className="page">
            <Navigation
              pageTitle={"VIEW HOMEWORK"}
              navigationItems={navigationItems}
            />
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">HOMEWORK DETAILS</h3>
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
                      <div className="card text-center">
                        <div className="card-header">
                          <HomeworkMenu groupsList={groupsList} />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">
                            To View Homework Select Group
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
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
  groupsList: selectGroups,
});
const mapDispatchToProps = (dispatch) => ({
  fetchGroupsByStudentIdStartDispatch: (studentId) =>
    dispatch(fetchGroupsByStudentIdStart(studentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewHomeWork);
