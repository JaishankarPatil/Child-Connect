import React from "react";

import SideBar from "../side-bar/side-bar.component";

import pick from "../../assets/images/themes/rtl.png";

const Home = () => (
  <div className="font-muli theme-cyan gradient">
    <div className="page-loader-wrapper">
      <div className="loader"></div>
    </div>
    <div id="main_content">
      <SideBar></SideBar>
      <div id="rightsidebar" className="right_sidebar">
        <a href="#" className="p-3 settingbar float-right">
          <i className="fa fa-close"></i>
        </a>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#Settings"
              aria-expanded="true"
            >
              Settings
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#activity"
              aria-expanded="false"
            >
              Activity
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            role="tabpanel"
            className="tab-pane vivify fadeIn active"
            id="Settings"
            aria-expanded="true"
          >
            <div className="mb-4">
              <h6 className="font-14 font-weight-bold text-muted">
                Theme Color
              </h6>
              <ul className="choose-skin list-unstyled mb-0">
                <li data-theme="azure">
                  <div className="azure"></div>
                </li>
                <li data-theme="indigo">
                  <div className="indigo"></div>
                </li>
                <li data-theme="purple">
                  <div className="purple"></div>
                </li>
                <li data-theme="orange">
                  <div className="orange"></div>
                </li>
                <li data-theme="green">
                  <div className="green"></div>
                </li>
                <li data-theme="cyan" className="active">
                  <div className="cyan"></div>
                </li>
                <li data-theme="blush">
                  <div className="blush"></div>
                </li>
                <li data-theme="white">
                  <div className="bg-white"></div>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h6 className="font-14 font-weight-bold text-muted">
                Font Style
              </h6>
              <div className="custom-controls-stacked font_setting">
                <label className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="font"
                    value="font-muli"
                    checked=""
                  ></input>
                  <span className="custom-control-label">Muli Google Font</span>
                </label>
                <label className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="font"
                    value="font-montserrat"
                  ></input>
                  <span className="custom-control-label">
                    Montserrat Google Font
                  </span>
                </label>
                <label className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="font"
                    value="font-poppins"
                  ></input>
                  <span className="custom-control-label">
                    Poppins Google Font
                  </span>
                </label>
              </div>
            </div>

            <div>
              <h6 className="font-14 font-weight-bold mt-4 text-muted">
                General Settings
              </h6>
              <ul className="setting-list list-unstyled mt-1 setting_switch">
                <li>
                  <label className="custom-switch">
                    <span className="custom-switch-description">
                      Night Mode
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input btn-darkmode"
                    ></input>
                    <span className="custom-switch-indicator"></span>
                  </label>
                </li>
                <li>
                  <label className="custom-switch">
                    <span className="custom-switch-description">
                      Fix Navbar top
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input btn-fixnavbar"
                    ></input>
                    <span className="custom-switch-indicator"></span>
                  </label>
                </li>
                <li>
                  <label className="custom-switch">
                    <span className="custom-switch-description">
                      Header Dark
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input btn-pageheader"
                    ></input>
                    <span className="custom-switch-indicator"></span>
                  </label>
                </li>
                <li>
                  <label className="custom-switch">
                    <span className="custom-switch-description">
                      Min Sidebar Dark
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input btn-min_sidebar"
                    ></input>
                    <span className="custom-switch-indicator"></span>
                  </label>
                </li>
                <li>
                  <label className="custom-switch">
                    <span className="custom-switch-description">
                      Sidebar Dark
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input btn-sidebar"
                    ></input>
                    <span className="custom-switch-indicator"></span>
                  </label>
                </li>
                <li>
                  <label className="custom-switch">
                    <span className="custom-switch-description">
                      Icon Color
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input btn-iconcolor"
                    ></input>
                    <span className="custom-switch-indicator"></span>
                  </label>
                </li>
                <li>
                  <label className="custom-switch">
                    <span className="custom-switch-description">
                      Gradient Color
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input btn-gradient"
                      checked=""
                    ></input>
                    <span className="custom-switch-indicator"></span>
                  </label>
                </li>
                <li>
                  <label className="custom-switch">
                    <span className="custom-switch-description">
                      Box Shadow
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input btn-boxshadow"
                    ></input>
                    <span className="custom-switch-indicator"></span>
                  </label>
                </li>
                <li>
                  <label className="custom-switch">
                    <span className="custom-switch-description">
                      RTL Support
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input btn-rtl"
                    ></input>
                    <span className="custom-switch-indicator"></span>
                  </label>
                </li>
                <li>
                  <label className="custom-switch">
                    <span className="custom-switch-description">
                      Box Layout
                    </span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input btn-boxlayout"
                    ></input>
                    <span className="custom-switch-indicator"></span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="form-group">
              <label className="d-block">
                Storage <span className="float-right">77%</span>
              </label>
              <div className="progress progress-sm">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="77"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <button type="button" className="btn btn-primary btn-block mt-3">
                Upgrade Storage
              </button>
            </div>
          </div>
          <div
            role="tabpanel"
            className="tab-pane vivify fadeIn"
            id="activity"
            aria-expanded="false"
          >
            <ul className="new_timeline mt-3">
              <li>
                <div className="bullet pink"></div>
                <div className="time">11:00am</div>
                <div className="desc">
                  <h3>Attendance</h3>
                  <h4>Computer className=</h4>
                </div>
              </li>
              <li>
                <div className="bullet pink"></div>
                <div className="time">11:30am</div>
                <div className="desc">
                  <h3>Added an interest</h3>
                  <h4>“Volunteer Activities”</h4>
                </div>
              </li>
              <li>
                <div className="bullet green"></div>
                <div className="time">12:00pm</div>
                <div className="desc">
                  <h3>Developer Team</h3>
                  <h4>Hangouts</h4>
                  <ul className="list-unstyled team-info margin-0 p-t-5">
                    <li>
                      <img src="../assets/images/xs/avatar1.jpg" alt="Avatar" />
                    </li>
                    <li>
                      <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                    </li>
                    <li>
                      <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
                    </li>
                    <li>
                      <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="bullet green"></div>
                <div className="time">2:00pm</div>
                <div className="desc">
                  <h3>Responded to need</h3>
                  <a href="#">“In-Kind Opportunity”</a>
                </div>
              </li>
              <li>
                <div className="bullet orange"></div>
                <div className="time">1:30pm</div>
                <div className="desc">
                  <h3>Lunch Break</h3>
                </div>
              </li>
              <li>
                <div className="bullet green"></div>
                <div className="time">2:38pm</div>
                <div className="desc">
                  <h3>Finish</h3>
                  <h4>Go to Home</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="theme_div">
        <div className="card">
          <div className="card-body">
            <ul className="list-group list-unstyled">
              <li className="list-group-item mb-2">
                <p>Light Version</p>
                <a href="../university/index.html">
                  <img
                    src="../assets/images/themes/default.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </li>
              <li className="list-group-item mb-2">
                <p>Dark Version</p>
                <a href="../university-dark/index.html">
                  <img
                    src="../assets/images/themes/dark.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </li>
              <li className="list-group-item mb-2">
                <p>RTL Version</p>
                <a href="../university-rtl/index.html">
                  <img
                    src="../assets/images/themes/rtl.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="user_div">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#righttab-statistics"
            >
              Statistics
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#righttab-Result">
              Result
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#righttab-Students">
              Student
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#righttab-Todo">
              Todo
            </a>
          </li>
        </ul>
        <div className="tab-content mt-3">
          <div
            className="tab-pane fade show active"
            id="righttab-statistics"
            role="tabpanel"
          >
            <div className="card">
              <div className="card-body">
                <div>Total Revenue</div>
                <div className="py-3 m-0 text-center h1 text-success">
                  $79,452
                </div>
                <div className="d-flex">
                  <span className="text-muted">Income</span>
                  <div className="ml-auto">
                    <i className="fa fa-caret-up text-success"></i>4%
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <ul className="list-unstyled mb-0">
                  <li className="mb-3">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>$43,320</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Bank of America</small>
                      </div>
                    </div>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar bg-azure"
                        role="progressbar"
                        aria-valuenow="42"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>$36,132</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Wells Fargo</small>
                      </div>
                    </div>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-body top_counter">
                <div className="icon bg-yellow">
                  <i className="fa fa-users"></i>{" "}
                </div>
                <div className="content">
                  <span>Total Student</span>
                  <h5 className="number mb-0">2,051</h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body top_counter">
                <div className="icon bg-gray">
                  <i className="fa fa-sitemap"></i>{" "}
                </div>
                <div className="content">
                  <span>Department</span>
                  <h5 className="number mb-0">14</h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body top_counter">
                <div className="icon bg-dark">
                  <i className="fa fa-black-tie"></i>{" "}
                </div>
                <div className="content">
                  <span>Total Teacher</span>
                  <h5 className="number mb-0">27</h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body top_counter">
                <div className="icon bg-azure">
                  <i className="fa fa-tags"></i>{" "}
                </div>
                <div className="content">
                  <span>Total Courses</span>
                  <h5 className="number mb-0">31</h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body top_counter">
                <div className="icon bg-pink">
                  <i className="fa fa-credit-card"></i>{" "}
                </div>
                <div className="content">
                  <span>Expense</span>
                  <h5 className="number mb-0">$7,254</h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body top_counter">
                <div className="icon bg-green">
                  <i className="fa fa-bank"></i>{" "}
                </div>
                <div className="content">
                  <span>Total Income</span>
                  <h5 className="number mb-0">$27,852</h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body top_counter">
                <div className="icon bg-cyan">
                  <i className="fa fa-map-o"></i>{" "}
                </div>
                <div className="content">
                  <span>Our Center</span>
                  <h5 className="number mb-0">52</h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body top_counter">
                <div className="icon bg-indigo">
                  <i className="fa fa-smile-o"></i>{" "}
                </div>
                <div className="content">
                  <span>Smiley Face</span>
                  <h5 className="number mb-0">10K</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="righttab-Result" role="tabpanel">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Result 2019</h3>
                <div className="card-options">
                  <a href="#">
                    <i
                      className="fa fa-file-excel-o"
                      data-toggle="tooltip"
                      title="Export Excel"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>87%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Art & Design</small>
                      </div>
                    </div>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar bg-azure"
                        role="progressbar"
                        aria-valuenow="42"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>80%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Fashion</small>
                      </div>
                    </div>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>63%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Sports Science</small>
                      </div>
                    </div>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar bg-orange"
                        role="progressbar"
                        aria-valuenow="36"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>91%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Computers</small>
                      </div>
                    </div>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar bg-indigo"
                        role="progressbar"
                        aria-valuenow="6"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>35%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">
                          Biological Sciences
                        </small>
                      </div>
                    </div>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar bg-pink"
                        role="progressbar"
                        aria-valuenow="6"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer">
                <div className="row text-center">
                  <div className="col-6 border-right">
                    <label className="mb-0">Total Pass</label>
                    <div className="font-20 font-weight-bold">1,052</div>
                  </div>
                  <div className="col-6">
                    <label className="mb-0">Total Fail</label>
                    <div className="font-20 font-weight-bold">198</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Result 2018</h3>
                <div className="card-options">
                  <a href="#">
                    <i
                      className="fa fa-file-excel-o"
                      data-toggle="tooltip"
                      title="Export Excel"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>80%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Fashion</small>
                      </div>
                    </div>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>87%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Art & Design</small>
                      </div>
                    </div>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar bg-azure"
                        role="progressbar"
                        aria-valuenow="42"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>91%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Computers</small>
                      </div>
                    </div>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar bg-indigo"
                        role="progressbar"
                        aria-valuenow="6"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>35%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">
                          Biological Sciences
                        </small>
                      </div>
                    </div>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar bg-pink"
                        role="progressbar"
                        aria-valuenow="6"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>63%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Sports Science</small>
                      </div>
                    </div>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar bg-orange"
                        role="progressbar"
                        aria-valuenow="36"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer">
                <div className="row text-center">
                  <div className="col-6 border-right">
                    <label className="mb-0">Total Pass</label>
                    <div className="font-20 font-weight-bold">845</div>
                  </div>
                  <div className="col-6">
                    <label className="mb-0">Total Fail</label>
                    <div className="font-20 font-weight-bold">142</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="righttab-Students" role="tabpanel">
            <div id="users">
              <div className="input-group mt-2 mb-2">
                <input
                  type="text"
                  className="form-control search"
                  placeholder="Search Student"
                ></input>
              </div>
              <ul className="right_chat list-unstyled list">
                <li className="alfabet">A</li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar1.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Abigail Churchill</span>
                      <span className="message">Art & Design</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar2.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Alexandra Carr</span>
                      <span className="message">Fashion</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar3.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Alison Berry</span>
                      <span className="message">Fashion</span>
                    </div>
                  </a>
                </li>
                <li className="alfabet">B</li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar4.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Bella Alan</span>
                      <span className="message">Sports Science</span>
                    </div>
                  </a>
                </li>
                <li className="alfabet">C</li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar5.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Caroline Alan</span>
                      <span className="message">Sports Science</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar6.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Connor Campbell</span>
                      <span className="message">Computers</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar7.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Charles Campbell</span>
                      <span className="message">Computers</span>
                    </div>
                  </a>
                </li>
                <li className="alfabet">D</li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar8.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Donna Hudson</span>
                      <span className="message">Computers</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar9.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Dylan Jones</span>
                      <span className="message">Computers</span>
                    </div>
                  </a>
                </li>
                <li className="alfabet">G</li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar8.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Gordon Hudson</span>
                      <span className="message">Sports Science</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar9.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Gabrielle Walker</span>
                      <span className="message">Computers</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar10.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Gavin North</span>
                      <span className="message">Computers</span>
                    </div>
                  </a>
                </li>
                <li className="alfabet">S</li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar1.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">Stephanie Hudson</span>
                      <span className="message">Sports Science</span>
                    </div>
                  </a>
                </li>
                <li className="alfabet">W</li>
                <li>
                  <a href="javascript:void(0);" className="media">
                    <img
                      className="media-object"
                      src="../assets/images/xs/avatar1.jpg"
                      alt=""
                    ></img>
                    <div className="media-body">
                      <span className="name">William Paige</span>
                      <span className="message">Fashion</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="user_chatbody chat_app">
              <div className="card-header bline pt-1 pl-0 pr-0">
                <h3 className="card-title">
                  Abigail Churchill <small>Online</small>
                </h3>
                <div className="card-options">
                  <a href="#" className="p-1" data-toggle="dropdown">
                    <i className="fa fa-cog"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a className="dropdown-item active" href="#">
                      Online
                    </a>
                    <a className="dropdown-item" href="#">
                      Away
                    </a>
                    <a className="dropdown-item" href="#">
                      Do not disturb
                    </a>
                    <a className="dropdown-item" href="#">
                      Invisible
                    </a>
                  </div>
                  <a href="#" className="p-1 chat_close">
                    <i className="fa fa-close"></i>
                  </a>
                </div>
              </div>
              <div className="chat_windows">
                <ul className="mb-0">
                  <li className="other-message">
                    <img
                      className="avatar mr-3"
                      src="../assets/images/xs/avatar1.jpg"
                      alt="avatar"
                    ></img>
                    <div className="message">
                      <p className="bg-light-blue">Are we meeting today?</p>
                      <span className="time">10:10 AM, Today</span>
                    </div>
                  </li>
                  <li className="other-message">
                    <img
                      className="avatar mr-3"
                      src="../assets/images/xs/avatar1.jpg"
                      alt="avatar"
                    ></img>
                    <div className="message">
                      <p className="bg-light-blue">
                        Hi Aiden, how are you? How is the project coming along?
                      </p>
                      <p className="bg-light-blue">Are we meeting today?</p>
                      <span className="time">10:15 AM, Today</span>
                    </div>
                  </li>
                  <li className="my-message">
                    <div className="message">
                      <p className="bg-light-gray">
                        Project has been already finished and I have results to
                        show you.
                      </p>
                      <div className="file_folder">
                        <a href="javascript:void(0);">
                          <div className="icon">
                            <i className="fa fa-file-excel-o text-success"></i>
                          </div>
                          <div className="file-name">
                            <p className="mb-0 text-muted">Report2017.xls</p>
                            <small>Size: 68KB</small>
                          </div>
                        </a>
                      </div>
                      <span className="time">10:17 AM, Today</span>
                    </div>
                  </li>
                  <li className="other-message">
                    <img
                      className="avatar mr-3"
                      src="../assets/images/xs/avatar1.jpg"
                      alt="avatar"
                    ></img>
                    <div className="message">
                      <div className="media_img">
                        <img
                          src="../assets/images/gallery/1.jpg"
                          className="w100 img-thumbnail"
                          alt=""
                        ></img>
                        <img
                          src="../assets/images/gallery/2.jpg"
                          className="w100 img-thumbnail"
                          alt=""
                        ></img>
                      </div>
                      <span className="time">10:15 AM, Today</span>
                    </div>
                  </li>
                  <li className="other-message">
                    <img
                      className="avatar mr-3"
                      src="../assets/images/xs/avatar1.jpg"
                      alt="avatar"
                    ></img>
                    <div className="message">
                      <p className="bg-light-blue">
                        Are we meeting today I have results?
                      </p>
                      <span className="time">10:18 AM, Today</span>
                    </div>
                  </li>
                  <li className="my-message">
                    <div className="message">
                      <p className="bg-light-gray">
                        Well we have good budget for the project
                      </p>
                      <span className="time">10:25 AM, Today</span>
                    </div>
                  </li>
                </ul>
                <div className="chat-message clearfix">
                  <a href="javascript:void(0);">
                    <i className="icon-camera"></i>
                  </a>
                  <a href="javascript:void(0);">
                    <i className="icon-camcorder"></i>
                  </a>
                  <a href="javascript:void(0);">
                    <i className="icon-paper-plane"></i>
                  </a>
                  <div className="input-group mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter text here..."
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="righttab-Todo" role="tabpanel">
            <ul className="list-unstyled mb-0 todo_list">
              <li>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox1"
                    value="option1"
                    checked=""
                  ></input>
                  <span className="custom-control-label">
                    Report Panel Usag
                  </span>
                </label>
              </li>
              <li>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox1"
                    value="option1"
                  ></input>
                  <span className="custom-control-label">
                    Report Panel Usag
                  </span>
                </label>
              </li>
              <li>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox1"
                    value="option1"
                    checked=""
                  ></input>
                  <span className="custom-control-label">
                    New logo design for Angular Admin
                  </span>
                </label>
              </li>
              <li>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox1"
                    value="option1"
                  ></input>
                  <span className="custom-control-label">
                    Design PSD files for Angular Admin
                  </span>
                </label>
              </li>
              <li>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox1"
                    value="option1"
                    checked=""
                  ></input>
                  <span className="custom-control-label">
                    New logo design for Angular Admin
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="page">
        <div className="section-body">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center ">
              <div className="header-action">
                <h1 className="page-title">Staff</h1>
                <ol className="breadcrumb page-breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Child-Connect</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Staff
                  </li>
                </ol>
              </div>
              <ul className="nav nav-tabs page-header-tab">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#Staff-all"
                  >
                    List View
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#Staff-grid">
                    Grid View
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#Staff-profile"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#Staff-add">
                    Add
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-body mt-4">
          <div className="container-fluid">
            <div className="tab-content">
              <div className="tab-pane active" id="Staff-all">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table table-hover table-vcenter text-nowrap table-striped mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Number</th>
                          <th>Designation</th>
                          <th>Email</th>
                          <th>Joining Date</th>
                          <th></th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="w60">
                            <img
                              className="avatar"
                              src="../../assets/images/xs/avatar3.jpg"
                              alt=""
                            ></img>
                          </td>
                          <td>
                            <div className="font-15">Ken Smith</div>
                          </td>
                          <td>
                            <span>(417) 646-8377</span>
                          </td>
                          <td>
                            <span className="text-muted">Peon</span>
                          </td>
                          <td>ken@gmail.com</td>
                          <td>
                            <strong>04 Jan, 2019</strong>
                          </td>
                          <td>
                            <span className="tag tag-success">Full-time</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="w60">
                            <img
                              className="avatar"
                              src="../assets/images/xs/avatar4.jpg"
                              alt=""
                            ></img>
                          </td>
                          <td>
                            <div className="font-15">Alice A Smith</div>
                          </td>
                          <td>
                            <span>(417) 646-5023</span>
                          </td>
                          <td>
                            <span className="text-muted">Purchase Officer</span>
                          </td>
                          <td>Alice@info.com</td>
                          <td>
                            <strong>04 Jan, 2019</strong>
                          </td>
                          <td>
                            <span className="tag tag-success">Full-time</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="w60">
                            <img
                              className="avatar"
                              src="../../assets/images/xs/avatar5.jpg"
                              alt=""
                            ></img>
                          </td>
                          <td>
                            <div className="font-15">Gladys J Smith</div>
                          </td>
                          <td>
                            <span>(417) 646-9207</span>
                          </td>
                          <td>
                            <span className="text-muted">Receptionist</span>
                          </td>
                          <td>Gladys@info.com</td>
                          <td>
                            <strong>04 Jan, 2019</strong>
                          </td>
                          <td>
                            <span className="tag tag-success">Full-time</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="w60">
                            <div
                              className="avatar avatar-pink"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Avatar Name"
                            >
                              <span>GS</span>
                            </div>
                          </td>
                          <td>
                            <div className="font-15">Gladys J Smith</div>
                          </td>
                          <td>
                            <span>(417) 646-8377</span>
                          </td>
                          <td>
                            <span className="text-muted">Clerk</span>
                          </td>
                          <td>sarah@gmail.com</td>
                          <td>
                            <strong>04 Jan, 2019</strong>
                          </td>
                          <td>
                            <span className="tag tag-success">Full-time</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="w60">
                            <img
                              className="avatar"
                              src="../assets/images/xs/avatar1.jpg"
                              alt=""
                            ></img>
                          </td>
                          <td>
                            <div className="font-15">Alan Johnson</div>
                          </td>
                          <td>
                            <span>(417) 646-8377</span>
                          </td>
                          <td>
                            <span className="text-muted">Librarian</span>
                          </td>
                          <td>kenh@gmail.com</td>
                          <td>
                            <strong>04 Jan, 2019</strong>
                          </td>
                          <td>
                            <span className="tag tag-warning">Part-time</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="w60">
                            <img
                              className="avatar"
                              src="../assets/images/xs/avatar2.jpg"
                              alt=""
                            ></img>
                          </td>
                          <td>
                            <div className="font-15">James A Johnson</div>
                          </td>
                          <td>
                            <span>(417) 646-1636</span>
                          </td>
                          <td>
                            <span className="text-muted">Librarian</span>
                          </td>
                          <td>johnson@gmail.com</td>
                          <td>
                            <strong>04 Jan, 2019</strong>
                          </td>
                          <td>
                            <span className="tag tag-success">Full-time</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="w60">
                            <img
                              className="avatar"
                              src="../assets/images/xs/avatar7.jpg"
                              alt=""
                            ></img>
                          </td>
                          <td>
                            <div className="font-15">Gladys J Smith</div>
                          </td>
                          <td>
                            <span>(417) 646-9207</span>
                          </td>
                          <td>
                            <span className="text-muted">Driver</span>
                          </td>
                          <td>Gladys@info.com</td>
                          <td>
                            <strong>04 Jan, 2019</strong>
                          </td>
                          <td>
                            <span className="tag tag-warning">Part-time</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="w60">
                            <img
                              className="avatar"
                              src="../assets/images/xs/avatar8.jpg"
                              alt=""
                            ></img>
                          </td>
                          <td>
                            <div className="font-15">Danny M Johnson</div>
                          </td>
                          <td>
                            <span>(417) 646-8377</span>
                          </td>
                          <td>
                            <span className="text-muted">Driver</span>
                          </td>
                          <td>Danny@info.com</td>
                          <td>
                            <strong>04 Jan, 2019</strong>
                          </td>
                          <td>
                            <span className="tag tag-success">Full-time</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="w60">
                            <img
                              className="avatar"
                              src="../assets/images/xs/avatar9.jpg"
                              alt=""
                            ></img>
                          </td>
                          <td>
                            <div className="font-15">Patricia Smith</div>
                          </td>
                          <td>
                            <span>(417) 646-8377</span>
                          </td>
                          <td>
                            <span className="text-muted">Purchase Officer</span>
                          </td>
                          <td>Patricia@info.com</td>
                          <td>
                            <strong>04 Jan, 2019</strong>
                          </td>
                          <td>
                            <span className="tag tag-warning">Part-time</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="w60">
                            <img
                              className="avatar"
                              src="../assets/images/xs/avatar10.jpg"
                              alt=""
                            ></img>
                          </td>
                          <td>
                            <div className="font-15">Gladys J Smith</div>
                          </td>
                          <td>
                            <span>(417) 646-9207</span>
                          </td>
                          <td>
                            <span className="text-muted">Librarian</span>
                          </td>
                          <td>Gladys@info.com</td>
                          <td>
                            <strong>04 Jan, 2019</strong>
                          </td>
                          <td>
                            <span className="tag tag-success">Full-time</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="w60">
                            <img
                              className="avatar"
                              src="../assets/images/xs/avatar6.jpg"
                              alt=""
                            ></img>
                          </td>
                          <td>
                            <div className="font-15">Gerald K Smith</div>
                          </td>
                          <td>
                            <span>(417) 646-8377</span>
                          </td>
                          <td>
                            <span className="text-muted">Lab Assistent</span>
                          </td>
                          <td>Smith@info.com</td>
                          <td>
                            <strong>04 Jan, 2019</strong>
                          </td>
                          <td>
                            <span className="tag tag-success">Full-time</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm js-sweetalert"
                              title="Delete"
                              data-type="confirm"
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="Staff-grid">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-body text-center">
                        <img
                          className="card-profile-img"
                          src="../assets/images/sm/avatar1.jpg"
                          alt=""
                        ></img>
                        <h5 className="mb-0">Peter Richards</h5>
                        <span>Librarian</span>
                        <div className="text-muted">+ (916) 369-7180</div>
                        <p className="mb-4 mt-3">
                          449 Thompson St, Conway, SC, 29527
                        </p>
                        <button className="btn btn-primary btn-sm">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-body text-center ribbon">
                        <div
                          className="ribbon-box orange"
                          data-toggle="tooltip"
                          title="Permanent"
                        >
                          <i className="fa fa-star"></i>
                        </div>
                        <img
                          className="card-profile-img"
                          src="../../assets/images/sm/avatar2.jpg"
                          alt=""
                        ></img>
                        <h5 className="mb-0">Ken Smith</h5>
                        <span>Clerk</span>
                        <div className="text-muted">+ (916) 369-7180</div>
                        <p className="mb-4 mt-3">
                          449 Thompson St, Conway, SC, 29527
                        </p>
                        <button className="btn btn-primary btn-sm">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-body text-center">
                        <img
                          className="card-profile-img"
                          src="../assets/images/sm/avatar3.jpg"
                          alt=""
                        ></img>
                        <h5 className="mb-0">Alan Johnson</h5>
                        <span>Librarian</span>
                        <div className="text-muted">+ (916) 369-7180</div>
                        <p className="mb-4 mt-3">
                          5290 NE 50th Rd, Osceola, MO, 64776
                        </p>
                        <button className="btn btn-primary btn-sm">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-body text-center">
                        <img
                          className="card-profile-img"
                          src="../assets/images/sm/avatar4.jpg"
                          alt=""
                        ></img>
                        <h5 className="mb-0">Alice A Smith</h5>
                        <span>Clerk</span>
                        <div className="text-muted">+ (916) 369-7180</div>
                        <p className="mb-4 mt-3">
                          462 Acacia Ave, Blythe, CA, 92225
                        </p>
                        <button className="btn btn-primary btn-sm">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-body text-center ribbon">
                        <div
                          className="ribbon-box orange"
                          data-toggle="tooltip"
                          title="Permanent"
                        >
                          <i className="fa fa-star"></i>
                        </div>
                        <img
                          className="card-profile-img"
                          src="../assets/images/sm/avatar5.jpg"
                          alt=""
                        ></img>
                        <h5 className="mb-0">Gerald K Smith</h5>
                        <span>Receptionist</span>
                        <div className="text-muted">+ (916) 369-7180</div>
                        <p className="mb-4 mt-3">
                          449 Thompson St, Conway, SC, 29527
                        </p>
                        <button className="btn btn-primary btn-sm">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-status bg-yellow"></div>
                      <div className="card-body text-center">
                        <img
                          className="card-profile-img"
                          src="../assets/images/sm/avatar6.jpg"
                          alt=""
                        ></img>
                        <h5 className="mb-0">Peter Richards</h5>
                        <span>Purchase Officer</span>
                        <div className="text-muted">+ (916) 369-7180</div>
                        <p className="mb-4 mt-3">
                          449 Thompson St, Conway, SC, 29527
                        </p>
                        <button className="btn btn-primary btn-sm">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-body text-center">
                        <img
                          className="card-profile-img"
                          src="../assets/images/sm/avatar3.jpg"
                          alt=""
                        ></img>
                        <h5 className="mb-0">Alan Johnson</h5>
                        <span>Peon</span>
                        <div className="text-muted">+ (916) 369-7180</div>
                        <p className="mb-4 mt-3">
                          5290 NE 50th Rd, Osceola, MO, 64776
                        </p>
                        <button className="btn btn-primary btn-sm">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-body text-center ribbon">
                        <div
                          className="ribbon-box green"
                          data-toggle="tooltip"
                          title="Assistent"
                        >
                          <i className="fa fa-star"></i>
                        </div>
                        <img
                          className="card-profile-img"
                          src="../../assets/images/sm/avatar2.jpg"
                          alt=""
                        ></img>
                        <h5 className="mb-0">Ken Smith</h5>
                        <span>Lab Assistent</span>
                        <div className="text-muted">+ (916) 369-7180</div>
                        <p className="mb-4 mt-3">
                          449 Thompson St, Conway, SC, 29527
                        </p>
                        <button className="btn btn-primary btn-sm">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-body text-center ribbon">
                        <div
                          className="ribbon-box orange"
                          data-toggle="tooltip"
                          title="Permanent"
                        >
                          <i className="fa fa-star"></i>
                        </div>
                        <img
                          className="card-profile-img"
                          src="../assets/images/sm/avatar5.jpg"
                          alt=""
                        ></img>
                        <h5 className="mb-0">Gerald K Smith</h5>
                        <span>Peon</span>
                        <div className="text-muted">+ (916) 369-7180</div>
                        <p className="mb-4 mt-3">
                          449 Thompson St, Conway, SC, 29527
                        </p>
                        <button className="btn btn-primary btn-sm">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-body text-center">
                        <img
                          className="card-profile-img"
                          src="../assets/images/sm/avatar4.jpg"
                          alt=""
                        ></img>
                        <h5 className="mb-0">Alice A Smith</h5>
                        <span>Driver</span>
                        <div className="text-muted">+ (916) 369-7180</div>
                        <p className="mb-4 mt-3">
                          462 Acacia Ave, Blythe, CA, 92225
                        </p>
                        <button className="btn btn-primary btn-sm">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="Staff-profile">
                <div className="row">
                  <div className="col-xl-4 col-md-12">
                    <div className="card">
                      <div className="card-body w_user">
                        <div className="user_avtar">
                          <img
                            className="rounded-circle"
                            src={pick}
                            alt=""
                          ></img>
                        </div>
                        <div className="wid-u-info">
                          <h5>Dessie Parks</h5>
                          <p className="text-muted m-b-0">
                            119 Peepee Way, Hilo, HI, 96720
                          </p>
                          <ul className="list-unstyled">
                            <li>
                              <h5 className="mb-0">270</h5>
                              <small>Followers</small>
                            </li>
                            <li>
                              <h5 className="mb-0">310</h5>
                              <small>Following</small>
                            </li>
                            <li>
                              <h5 className="mb-0">908</h5>
                              <small>Liks</small>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">About Me</h3>
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
                        <p>
                          Hello I am Celena Anderson a Clerk in Xyz College USA.
                          I love to work with all my college staff and seniour
                          professors.
                        </p>
                        <ul className="list-group">
                          <li className="list-group-item">
                            <b>Gender </b>
                            <div>Female</div>
                          </li>
                          <li className="list-group-item">
                            <b>Operation Done </b>
                            <div>30+</div>
                          </li>
                          <li className="list-group-item">
                            <b>Degree </b>
                            <div>M.Com.</div>
                          </li>
                          <li className="list-group-item">
                            <b>Designation</b>
                            <div>Jr. Clerk</div>
                          </li>
                          <li className="list-group-item">
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>Telly</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">35%</small>
                              </div>
                            </div>
                            <div className="progress progress-xxs">
                              <div
                                className="progress-bar bg-azure"
                                role="progressbar"
                              ></div>
                            </div>
                          </li>
                          <li className="list-group-item">
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>Account</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">72%</small>
                              </div>
                            </div>
                            <div className="progress progress-xxs">
                              <div
                                className="progress-bar bg-red"
                                role="progressbar"
                              ></div>
                            </div>
                          </li>
                          <li className="list-group-item">
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>MS Office</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">60%</small>
                              </div>
                            </div>
                            <div className="progress progress-xxs">
                              <div
                                className="progress-bar bg-blue"
                                role="progressbar"
                              ></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer text-center">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 col-6">
                            <div className="font-18 font-weight-bold">37</div>
                            <div>Projects</div>
                          </div>
                          <div className="col-md-4 col-sm-4 col-6">
                            <div className="font-18 font-weight-bold">51</div>
                            <div>Tasks</div>
                          </div>
                          <div className="col-md-4 col-sm-4 col-6">
                            <div className="font-18 font-weight-bold">61</div>
                            <div>Uploads</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Timeline Activity</h3>
                        <div className="card-options">
                          <a
                            href="#"
                            className="card-options-collapse"
                            data-toggle="card-collapse"
                          >
                            <i className="fe fe-chevron-up"></i>
                          </a>
                          <a
                            href="#"
                            className="card-options-fullscreen"
                            data-toggle="card-fullscreen"
                          >
                            <i className="fe fe-maximize"></i>
                          </a>
                          <a
                            href="#"
                            className="card-options-remove"
                            data-toggle="card-remove"
                          >
                            <i className="fe fe-x"></i>
                          </a>
                          <div className="item-action dropdown ml-2">
                            <a href="#" data-toggle="dropdown">
                              <i className="fe fe-more-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#" className="dropdown-item">
                                <i className="dropdown-icon fa fa-eye"></i> View
                                Details{" "}
                              </a>
                              <a href="#" className="dropdown-item">
                                <i className="dropdown-icon fa fa-share-alt"></i>{" "}
                                Share{" "}
                              </a>
                              <a href="#" className="dropdown-item">
                                <i className="dropdown-icon fa fa-cloud-download"></i>{" "}
                                Download
                              </a>
                              <div className="dropdown-divider"></div>
                              <a href="#" className="dropdown-item">
                                <i className="dropdown-icon fa fa-copy"></i>{" "}
                                Copy to
                              </a>
                              <a href="#" className="dropdown-item">
                                <i className="dropdown-icon fa fa-folder"></i>{" "}
                                Move to
                              </a>
                              <a href="#" className="dropdown-item">
                                <i className="dropdown-icon fa fa-edit"></i>{" "}
                                Rename
                              </a>
                              <a href="#" className="dropdown-item">
                                <i className="dropdown-icon fa fa-trash"></i>{" "}
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="summernote">
                          Hello there,
                          <br />
                          <p>
                            The toolbar can be customized and it also supports
                            various callbacks such as <code>oninit</code>,{" "}
                            <code>onfocus</code>, <code>onpaste</code> and many
                            more.
                          </p>
                          <p>
                            Please try <b>paste some texts</b> here
                          </p>
                        </div>
                        <div className="timeline_item ">
                          <img
                            className="tl_avatar"
                            src="../assets/images/xs/avatar1.jpg"
                            alt=""
                          />
                          <span>
                            <a href="javascript:void(0);">Elisse Joson</a> San
                            Francisco, CA{" "}
                            <small className="float-right text-right">
                              20-April-2019 - Today
                            </small>
                          </span>
                          <h6 className="font600">
                            Hello, 'Im a single div responsive timeline without
                            media Queries!
                          </h6>
                          <div className="msg">
                            <p>
                              I'm speaking with myself, number one, because I
                              have a very good brain and I've said a lot of
                              things. I write the best placeholder text, and I'm
                              the biggest developer on the web card she has is
                              the Lorem card.
                            </p>
                            <a
                              href="javascript:void(0);"
                              className="mr-20 text-muted"
                            >
                              <i className="fa fa-heart text-pink"></i> 12 Love
                            </a>
                            <a
                              className="text-muted"
                              role="button"
                              data-toggle="collapse"
                              href="#collapseExample"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <i className="fa fa-comments"></i> 1 Comment
                            </a>
                            <div
                              className="collapse p-4 section-gray mt-2"
                              id="collapseExample"
                            >
                              <form className="well">
                                <div className="form-group">
                                  <textarea
                                    rows="2"
                                    className="form-control no-resize"
                                    placeholder="Enter here for tweet..."
                                  ></textarea>
                                </div>
                                <button className="btn btn-primary">
                                  Submit
                                </button>
                              </form>
                              <ul className="recent_comments list-unstyled mt-4 mb-0">
                                <li>
                                  <div className="avatar_img">
                                    <img
                                      className="rounded img-fluid"
                                      src="../assets/images/xs/avatar4.jpg"
                                      alt=""
                                    ></img>
                                  </div>
                                  <div className="comment_body">
                                    <h6>
                                      Donald Gardner{" "}
                                      <small className="float-right font-14">
                                        Just now
                                      </small>
                                    </h6>
                                    <p>
                                      Lorem ipsum Veniam aliquip culpa laboris
                                      minim tempor
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="timeline_item ">
                          <img
                            className="tl_avatar"
                            src="../assets/images/xs/avatar4.jpg"
                            alt=""
                          />
                          <span>
                            <a href="javascript:void(0);" title="">
                              Dessie Parks
                            </a>{" "}
                            Oakland, CA{" "}
                            <small className="float-right text-right">
                              19-April-2019 - Yesterday
                            </small>
                          </span>
                          <h6 className="font600">
                            Oeehhh, that's awesome.. Me too!
                          </h6>
                          <div className="msg">
                            <p>
                              I'm speaking with myself, number one, because I
                              have a very good brain and I've said a lot of
                              things. on the web by far... While that's mock-ups
                              and this is politics, are they really so
                              different? I think the only card she has is the
                              Lorem card.
                            </p>
                            <div className="timeline_img mb-20">
                              <img
                                className="width100"
                                src="../assets/images/gallery/1.jpg"
                                alt="Awesome Image"
                              ></img>
                              <img
                                className="width100"
                                src="../assets/images/gallery/2.jpg"
                                alt="Awesome Image"
                              ></img>
                            </div>
                            <a
                              href="javascript:void(0);"
                              className="mr-20 text-muted"
                            >
                              <i className="fa fa-heart text-pink"></i> 23 Love
                            </a>
                            <a
                              className="text-muted"
                              role="button"
                              data-toggle="collapse"
                              href="#collapseExample1"
                              aria-expanded="false"
                              aria-controls="collapseExample1"
                            >
                              <i className="fa fa-comments"></i> 2 Comment
                            </a>
                            <div
                              className="collapse p-4 section-gray mt-2"
                              id="collapseExample1"
                            >
                              <form className="well">
                                <div className="form-group">
                                  <textarea
                                    rows="2"
                                    className="form-control no-resize"
                                    placeholder="Enter here for tweet..."
                                  ></textarea>
                                </div>
                                <button className="btn btn-primary">
                                  Submit
                                </button>
                              </form>
                              <ul className="recent_comments list-unstyled mt-4 mb-0">
                                <li>
                                  <div className="avatar_img">
                                    <img
                                      className="rounded img-fluid"
                                      src="../assets/images/xs/avatar4.jpg"
                                      alt=""
                                    ></img>
                                  </div>
                                  <div className="comment_body">
                                    <h6>
                                      Donald Gardner{" "}
                                      <small className="float-right font-14">
                                        Just now
                                      </small>
                                    </h6>
                                    <p>
                                      Lorem ipsum Veniam aliquip culpa laboris
                                      minim tempor
                                    </p>
                                    <div className="timeline_img mb-20">
                                      <img
                                        className="width150"
                                        src="../assets/images/gallery/7.jpg"
                                        alt="Awesome Image"
                                      ></img>
                                      <img
                                        className="width150"
                                        src="../assets/images/gallery/8.jpg"
                                        alt="Awesome Image"
                                      ></img>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="avatar_img">
                                    <img
                                      className="rounded img-fluid"
                                      src="../assets/images/xs/avatar3.jpg"
                                      alt=""
                                    ></img>
                                  </div>
                                  <div className="comment_body">
                                    <h6>
                                      Dessie Parks{" "}
                                      <small className="float-right font-14">
                                        1min ago
                                      </small>
                                    </h6>
                                    <p>
                                      It is a long established fact that a
                                      reader will be distracted by the readable
                                      content of a page when looking
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="timeline_item ">
                          <img
                            className="tl_avatar"
                            src="../assets/images/xs/avatar7.jpg"
                            alt=""
                          ></img>
                          <span>
                            <a href="javascript:void(0);" title="">
                              Rochelle Barton
                            </a>{" "}
                            San Francisco, CA{" "}
                            <small className="float-right text-right">
                              12-April-2019
                            </small>
                          </span>
                          <h6 className="font600">
                            An Engineer Explains Why You Should Always Order the
                            Larger Pizza
                          </h6>
                          <div className="msg">
                            <p>
                              I'm speaking with myself, number one, because I
                              have a very good brain and I've said a lot of
                              things. I write the best placeholder text, and I'm
                              the biggest developer on the web by far... While
                              that's mock-ups and this is politics, is the Lorem
                              card.
                            </p>
                            <a
                              href="javascript:void(0);"
                              className="mr-20 text-muted"
                            >
                              <i className="fa fa-heart text-pink"></i> 7 Love
                            </a>
                            <a
                              className="text-muted"
                              role="button"
                              data-toggle="collapse"
                              href="#collapseExample2"
                              aria-expanded="false"
                              aria-controls="collapseExample2"
                            >
                              <i className="fa fa-comments"></i> 1 Comment
                            </a>
                            <div
                              className="collapse p-4 section-gray mt-2"
                              id="collapseExample2"
                            >
                              <form className="well">
                                <div className="form-group">
                                  <textarea
                                    rows="2"
                                    className="form-control no-resize"
                                    placeholder="Enter here for tweet..."
                                  ></textarea>
                                </div>
                                <button className="btn btn-primary">
                                  Submit
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="Staff-add">
                <div className="row clearfix">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Basic Information</h3>
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
                        <div className="row clearfix">
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>First Name</label>
                              <input
                                type="text"
                                className="form-control"
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Joining Date</label>
                              <input
                                data-provide="datepicker"
                                data-date-autoclose="true"
                                className="form-control"
                                placeholder=""
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <label>Gender</label>
                            <select className="form-control show-tick">
                              <option value="">-- Gender --</option>
                              <option value="10">Male</option>
                              <option value="20">Female</option>
                            </select>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Department</label>
                              <input
                                type="text"
                                className="form-control"
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Position</label>
                              <input
                                type="text"
                                className="form-control"
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Phone</label>
                              <input
                                type="text"
                                className="form-control"
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Enter Your Email</label>
                              <input
                                type="text"
                                className="form-control"
                              ></input>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group mt-2 mb-3">
                              <input type="file" className="dropify"></input>
                              <small
                                id="fileHelp"
                                className="form-text text-muted"
                              >
                                This is some placeholder block-level help text
                                for the above input. It's a bit lighter and
                                easily wraps to a new line.
                              </small>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group mt-3">
                              <label>Messages</label>
                              <textarea
                                rows="4"
                                className="form-control no-resize"
                                placeholder="Please type what you want..."
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                            <button
                              type="submit"
                              className="btn btn-outline-secondary"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Account Information</h3>
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
                        <div className="row clearfix">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label>User Name</label>
                              <input
                                type="text"
                                className="form-control"
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Password</label>
                              <input
                                type="text"
                                className="form-control"
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input
                                type="text"
                                className="form-control"
                              ></input>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                            <button
                              type="submit"
                              className="btn btn-outline-secondary"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Account Information</h3>
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
                        <div className="form-group">
                          <label>Facebook</label>
                          <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group">
                          <label>Twitter</label>
                          <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group">
                          <label>LinkedIN</label>
                          <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group">
                          <label>Behance</label>
                          <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group">
                          <label>dribbble</label>
                          <input type="text" className="form-control"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                        <button
                          type="submit"
                          className="btn btn-outline-secondary"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-body">
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  Copyright © 2019{" "}
                  <a href="https://themeforest.net/user/puffintheme/portfolio">
                    PuffinTheme
                  </a>
                  .
                </div>
                <div className="col-md-6 col-sm-12 text-md-right">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="../doc/index.html">Documentation</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
