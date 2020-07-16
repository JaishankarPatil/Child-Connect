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
import { fetchHomeworkStarts } from "../../../../redux/homework/homework.actions";
import HomeworkContainer from "../../../homework/homework-container.component";

class ViewHomeWork extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchHomeworkStartsDispatch } = this.props;
    fetchHomeworkStartsDispatch();
  }

  render() {
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

    const { homeworkBySubject, history } = this.props;

    console.log("homeworkBySubject", homeworkBySubject);

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
                          <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                <Link to="/homework/maths">Maths</Link>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                <Link to="/homework/science">Science</Link>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link " href="#">
                                <Link to="/homework/social">Social</Link>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link " href="#">
                                <Link to="/homework/english">English</Link>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">No Home work found</h5>
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

const mapDispatchToProps = (dispatch) => ({
  fetchHomeworkStartsDispatch: () => dispatch(fetchHomeworkStarts()),
});

export default connect(null, mapDispatchToProps)(ViewHomeWork);
