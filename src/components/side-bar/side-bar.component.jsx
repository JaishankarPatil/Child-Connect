import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../assets/js/core.js";

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staff: {
        Name: "",
        Number: "",
        Designation: "",
        Email: "",
        JoiningDate: "",
        Mode: "",
      },
    };
  }

  render() {
    return (
      <div>
        <div id="header_top" className="header_top">
          <div className="container">
            <div className="hleft">
              <a className="header-brand" href="index.html">
                <i className="fa fa-graduation-cap brand-logo"></i>
              </a>
              <div className="dropdown">
                <a href="#" className="nav-link icon menu_toggle">
                  <i className="fe fe-align-center"></i>
                </a>
                <a href="page-search.html" className="nav-link icon">
                  <i
                    className="fe fe-search"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Search..."
                  ></i>
                </a>
                <a href="app-email.html" className="nav-link icon app_inbox">
                  <i
                    className="fe fe-inbox"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Inbox"
                  ></i>
                </a>
                <a
                  href="app-filemanager.html"
                  className="nav-link icon app_file xs-hide"
                >
                  <i
                    className="fe fe-folder"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="File Manager"
                  ></i>
                </a>
                <a href="app-social.html" className="nav-link icon xs-hide">
                  <i
                    className="fe fe-share-2"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Social Media"
                  ></i>
                </a>
                <a href="#" className="nav-link icon theme_btn">
                  <i className="fe fe-feather"></i>
                </a>
                <a href="#" className="nav-link icon settingbar">
                  <i className="fe fe-settings"></i>
                </a>
              </div>
            </div>
            <div className="hright">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="nav-link icon right_tab"
              >
                <i className="fe fe-align-right"></i>
              </a>
              <a href="login.html" className="nav-link icon settingbar">
                <i className="fe fe-power"></i>
              </a>
            </div>
          </div>
        </div>

        <div id="left-sidebar" className="sidebar">
          <h5 className="brand-name">
            Child-Connect
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="menu_option float-right"
            >
              <i
                className="icon-grid font-16"
                data-toggle="tooltip"
                data-placement="left"
                title="Grid & List Toggle"
              ></i>
            </a>
          </h5>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#menu-uni">
                University
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#menu-admin">
                Admin
              </a>
            </li>
          </ul>
          <div className="tab-content mt-3">
            <div
              className="tab-pane fade show active"
              id="menu-uni"
              role="tabpanel"
            >
              <nav className="sidebar-nav">
                <ul className="metismenu">
                  <li>
                    <a href="index.html">
                      <i className="fa fa-dashboard"></i>
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="professors.html">
                      <i className="fa fa-black-tie"></i>
                      <span>Professors</span>
                    </a>
                  </li>
                  <li className="active">
                    <i className="fa fa-user-circle-o"></i>
                    <Link to="/staff">
                      <span>Staff</span>
                    </Link>
                  </li>
                  <li>
                    <a href="students.html">
                      <i className="fa fa-users"></i>
                      <Link to="/Student">
                        <span>Students</span>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a href="departments.html">
                      <i className="fa fa-users"></i>
                      <span>Departments</span>
                    </a>
                  </li>
                  <li>
                    <a href="courses.html">
                      <i className="fa fa-graduation-cap"></i>
                      <span>Courses</span>
                    </a>
                  </li>
                  <li>
                    <a href="library.html">
                      <i className="fa fa-book"></i>
                      <span>Library</span>
                    </a>
                  </li>
                  <li>
                    <a href="holiday.html">
                      <i className="fa fa-bullhorn"></i>
                      <span>Holiday</span>
                    </a>
                  </li>
                  <li className="g_heading">Extra</li>
                  <li>
                    <a href="events.html">
                      <i className="fa fa-calendar"></i>
                      <span>Calender</span>
                    </a>
                  </li>
                  <li>
                    <a href="app-chat.html">
                      <i className="fa fa-comments-o"></i>
                      <span>Chat App</span>
                    </a>
                  </li>
                  <li>
                    <a href="app-contact.html">
                      <i className="fa fa-address-book"></i>
                      <span>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a href="app-filemanager.html">
                      <i className="fa fa-folder"></i>
                      <span>FileManager</span>
                    </a>
                  </li>
                  <li>
                    <a href="our-centres.html">
                      <i className="fa fa-map"></i>
                      <span>OurCentres</span>
                    </a>
                  </li>
                  <li>
                    <a href="gallery.html">
                      <i className="fa fa-camera-retro"></i>
                      <span>Gallery</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="tab-pane fade" id="menu-admin" role="tabpanel">
              <nav className="sidebar-nav">
                <ul className="metismenu">
                  <li>
                    <a href="payments.html">
                      <i className="fa fa-credit-card"></i>
                      <span>Payments</span>
                    </a>
                  </li>
                  <li>
                    <a href="noticeboard.html">
                      <i className="fa fa-dashboard"></i>
                      <span>Noticeboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="taskboard.html">
                      <i className="fa fa-list-ul"></i>
                      <span>Taskboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="hostel.html">
                      <i className="fa fa-bed"></i>
                      <span>Hostel</span>
                    </a>
                  </li>
                  <li>
                    <a href="transport.html">
                      <i className="fa fa-truck"></i>
                      <span>Transport</span>
                    </a>
                  </li>
                  <li>
                    <a href="attendance.html">
                      <i className="fa fa-calendar-check-o"></i>
                      <span>Attendance</span>
                    </a>
                  </li>
                  <li>
                    <a href="leave.html">
                      <i className="fa fa-flag"></i>
                      <span>Leave</span>
                    </a>
                  </li>
                  <li>
                    <a href="setting.html">
                      <i className="fa fa-gear"></i>
                      <span>Settings</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
