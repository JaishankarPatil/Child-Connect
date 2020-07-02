import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import API from "../../services/api";
import SubmitButton from "../submit-button/submit-button.component";
import DatePicker from "react-datepicker";
import { updateStaff } from "../../redux/staff/staff.actions";

class EditStaff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userArray: [],

      staffDetails: {
        firstName: "",
        midName: "",
        lastName: "",
        dateOfBirth: new Date(),
        gender: "",
        bloodGroup: "",
        adharNumber: "",
        panNumber: "",
        qualification: "",
        email: "",
        mobileNumber: "",
        alternativeMobileNumber: "",
        pfNumber: "",
        address: "",
        area: "",
        city: "",
        state: "",
        pincode: "",
        dateOfJoining: new Date(),
        jobType: "",
        jobHours: "",
        department: "",
        jobDesignation: "",
        employeeNumber: "",
        description: "",
        relievedDate: new Date(),
      },
    };
  }

  async componentDidMount() {
    const api = API.create();
    console.log(`${this.props.match.params.id}`);
    api
      .getStaffById(`${this.props.match.params.id}`)
      .then((response) => {
        console.log("response response", response.data);
        this.setState({ staffDetails: response.data });
        if (response.status !== 200) {
          console.log("Problem in fetching");
          return;
        }
      })
      .catch((error) => {
        console.log("errrrrr", error);
      });
  }

  changeHandler = (event) => {
    const { value, name } = event.target;

    console.log("name", name);
    console.log("value", value);

    let item = { ...this.state.staffDetails };
    item[name] = value;

    console.log("item", item);

    this.setState({ staffDetails: item });
  };

  handelSubmit = (event) => {
    const api = API.create();
    const { staffDetails } = this.state;
    const { updateStaffDispatch } = this.props;

    updateStaffDispatch(staffDetails);
  };

  render() {
    const staffDetails = this.state.staffDetails;

    return (
      <div className="tab-pane" id="Staff-add">
        <div className="row clearfix">
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
              <form name="form" onSubmit={this.handelSubmit}>
                <div className="row clearfix">
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        onChange={this.changeHandler}
                        value={staffDetails.firstName}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Middle Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="midName"
                        onChange={this.changeHandler}
                        value={staffDetails.midName}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        onChange={this.changeHandler}
                        value={staffDetails.lastName}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Date Of Birth</label>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <label>Gender</label>
                    <select
                      name="gender"
                      onChange={this.changeHandler}
                      value={staffDetails.gender}
                      className="form-control show-tick"
                    >
                      <option value="">-- Gender --</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <label>Blood Group</label>
                    <select
                      name="bloodGroup"
                      onChange={this.changeHandler}
                      value={staffDetails.bloodGroup}
                      className="form-control show-tick"
                    >
                      <option value="">-- Blood Group --</option>
                      <option value="A +ve">A +ve</option>
                      <option value="A -ve">A -ve</option>
                      <option value="B +ve">B +ve</option>
                      <option value="B -ve">B -ve</option>
                      <option value="AB +ve">AB +ve</option>
                      <option value="AB -ve">AB -ve</option>
                      <option value="O +ve">O +ve</option>
                      <option value="O -ve">O -ve</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Aadhar Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="adharNumber"
                        onChange={this.changeHandler}
                        value={staffDetails.adharNumber}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>PAN Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="panNumber"
                        onChange={this.changeHandler}
                        value={staffDetails.panNumber}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Qualification</label>
                      <input
                        type="text"
                        className="form-control"
                        name="qualification"
                        onChange={this.changeHandler}
                        value={staffDetails.qualification}
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        className="form-control"
                        name="mobileNumber"
                        onChange={this.changeHandler}
                        value={staffDetails.mobileNumber}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Alternative Mobile Number </label>
                      <input
                        type="text"
                        className="form-control"
                        name="alternativeMobileNumber"
                        onChange={this.changeHandler}
                        value={staffDetails.alternativeMobileNumber}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={this.changeHandler}
                        value={staffDetails.email}
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>PF UAN </label>
                      <input
                        type="text"
                        className="form-control"
                        name="pfNumber"
                        onChange={this.changeHandler}
                        value={staffDetails.pfNumber}
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group"></div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group"></div>
                  </div>

                  <div className="card-header">
                    <h3 className="card-title">Address Details</h3>
                  </div>

                  <div className="card-body">
                    <div className="row clearfix">
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            onChange={this.changeHandler}
                            value={staffDetails.address}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Area</label>
                          <input
                            type="text"
                            className="form-control"
                            name="area"
                            onChange={this.changeHandler}
                            value={staffDetails.area}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Town/City</label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            onChange={this.changeHandler}
                            value={staffDetails.city}
                          ></input>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>State</label>
                          <input
                            type="text"
                            className="form-control"
                            name="state"
                            onChange={this.changeHandler}
                            value={staffDetails.state}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Postal Code</label>
                          <input
                            type="text"
                            className="form-control"
                            name="pincode"
                            onChange={this.changeHandler}
                            value={staffDetails.pincode}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-header">
                    <h3 className="card-title">Job Details</h3>
                  </div>

                  <div className="card-body">
                    <div className="row clearfix">
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Joining Date</label>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Job Type</label>
                          <select
                            name="jobType"
                            onChange={this.changeHandler}
                            value={staffDetails.jobType}
                            className="form-control show-tick"
                          >
                            <option value="">-- Job Type --</option>
                            <option value="Teaching">Teaching</option>
                            <option value="Non-Teaching">Non-Teaching</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Job Hours</label>
                          <select
                            name="jobHours"
                            onChange={this.changeHandler}
                            value={staffDetails.jobHours}
                            className="form-control show-tick"
                          >
                            <option value="">-- Job Hours --</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Department</label>
                          <select
                            name="department"
                            onChange={this.changeHandler}
                            value={staffDetails.department}
                            className="form-control show-tick"
                          >
                            <option value="">-- Department --</option>
                            <option value="Admin">Admin</option>
                            <option value="Office">Office</option>
                            <option value="Maths">Maths</option>
                            <option value="Scince">Scince</option>
                            <option value="Social">Social</option>
                            <option value="Language">Language</option>
                            <option value="Assistant">Assistant</option>
                            <option value="Transport">Transport</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Designation</label>
                          <select
                            name="jobDesignation"
                            onChange={this.changeHandler}
                            value={staffDetails.jobDesignation}
                            className="form-control show-tick"
                          >
                            <option value="">-- Designation --</option>
                            <option value="Admin">Admin</option>
                            <option value="Snr Teacher">Snr Teacher</option>
                            <option value="Jnr Teacher">Jnr Teacher</option>
                            <option value="Head Of Department">
                              Head Of Department
                            </option>
                            <option value="Finance">Finance</option>
                            <option value="Clerk">Clerk</option>
                            <option value="Assistant">Assistant</option>
                            <option value="Manager">Manager</option>
                            <option value="House Hold">House Hold</option>
                            <option value="Peon">Peon</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Employee Id</label>
                          <input
                            type="text"
                            className="form-control"
                            name="employeeNumber"
                            onChange={this.changeHandler}
                            value={staffDetails.employeeNumber}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Relieved Date</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group mt-2 mb-3">
                      <input
                        type="file"
                        className="dropify"
                        name="photo"
                        onChange={this.changeHandler}
                        value={staffDetails.photo}
                      ></input>
                      <small
                        id="fileHelp"
                        className="form-text text-muted"
                      ></small>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group mt-3">
                      <label>Messages</label>
                      <textarea
                        name="description"
                        onChange={this.changeHandler}
                        value={staffDetails.description}
                        rows="4"
                        className="form-control no-resize"
                        placeholder="Please type what you want..."
                      ></textarea>
                    </div>
                  </div>
                  <SubmitButton buttonName="Update Staff" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateStaffDispatch: (staffDetails) => dispatch(updateStaff(staffDetails)),
});

export default connect(null, mapDispatchToProps)(EditStaff);
