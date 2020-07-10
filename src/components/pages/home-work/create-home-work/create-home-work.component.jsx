import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Footer from "../../../footer/footer.component";
import SideBar from "../../../side-bar/side-bar.component";
import DatePicker from "react-datepicker";
import Navigation from "../../../navigation/navigation.component";
import ComposeHomeWork from "../../../compose-home-work/compose-home-work.component";

class CreateHomeWork extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
              pageTitle={"CREATE HOMEWORK"}
              navigationItems={navigationItems}
            />
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">DETAILS</h3>
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
                      <form name="form">
                        <div className="row clearfix">
                          <div className="col-md-6 col-sm-12">
                            <label>Subject</label>
                            <select
                              name="gender"
                              onChange={this.changeHandler}
                              value=""
                              className="form-control show-tick"
                            >
                              <option value="">-- Subject --</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                          <div className="col-md-6 col-sm-12"></div>

                          <div className="col-md-6 col-sm-12">
                            <label>Group</label>
                            <select
                              name="gender"
                              onChange={this.changeHandler}
                              value=""
                              className="form-control show-tick"
                            >
                              <option value="">-- Group --</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                          <div className="col-md-6 col-sm-12"></div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                          <div className="form-group">
                            <label>Title</label>
                            <input
                              type="text"
                              className="form-control"
                              name="panNumber"
                              onChange={this.changeHandler}
                              value=""
                            ></input>
                          </div>
                        </div>
                        <div className=" col-sm-12">
                          <ComposeHomeWork />
                        </div>

                        <div class="mt-4 text-right">
                          <button type="button" class="btn btn-success">
                            Post Homework
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-secondary"
                          >
                            Draft
                          </button>
                          <a
                            href="app-email.html"
                            class="btn btn-outline-secondary"
                          >
                            Cancel
                          </a>
                        </div>
                      </form>
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

export default CreateHomeWork;
