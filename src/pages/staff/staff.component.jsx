import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

import "../../assets/js/core.js";

import Footer from "../../components/footer/footer.component";
import SideBar from "../../components/side-bar/side-bar.component";
import StaffListView from "../../components/staff/staff-list-view.component";
import CreateStaff from "../../components/staff/staff-create.component";

import Navigation from "../../components/navigation/navigation.component";

import { fetchStaffsStart, createStaff } from "../../redux/staff/staff.actions";

import "react-datepicker/dist/react-datepicker.css";

class Staff extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;

    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

    console.log("match", match);
    console.log("match.url", match.url);
    console.log("match.path", match.path);

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
                                <Link to="/staff/listView">Maths</Link>
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

export default Staff;
