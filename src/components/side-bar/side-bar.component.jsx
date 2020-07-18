import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./side-bar.styles.scss";

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
                    <i className="fa fa-user-circle-o"></i>
                    <Link to="/staff/listView">
                      <span>Staff</span>
                    </Link>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-users"></i>
                      <Link to="/Student/">
                        <span>Students</span>
                      </Link>
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
