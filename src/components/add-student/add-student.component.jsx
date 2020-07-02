import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { createStudent } from "../../redux/student/student.actions";

import UserAccount from "../../components/user-account/user-account.component";
import SubmitButton from "../../components/submit-button/submit-button.component";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentArray: [],

      studentDetails: {
        firstName: "",
        midName: "",
        lastName: "",
        dateOfBirth: new Date(),
        gender: "",
        adharNumber: "",
        mobileNumber: "",
        alternativeMobileNumber: "",
        email: "",
        bloodGroup: "",
        religion: "",
        caste: "",
        category: "",

        admisionDate: new Date(),
        standard: "",
        studentClass: "",
        rollNumber: "",
        admisionNumber: "",
        registerNumber: "",

        address: "",
        area: "",
        city: "",
        state: "",
        pincode: "",

        associatedParentList: [
          {
            address: "",
            adharNumber: "",
            alternativeMobileNumber: "",
            area: "",
            city: "",
            email: "",
            firstName: "",
            gender: "",
            lastName: "",
            midName: "",
            mobileNumber: "",
            occupation: "",
            parentId: "",
            pincode: "",
            relationship: "",
            state: "",
          },
        ],
        groupDtoList: [
          {
            description: "",
            groupId: "",
            groupName: "",
            studentsFileName: "",
            studentsFileType: "",
          },
        ],
      },
    };
  }

  dateOfBirthUpadte = (date) => {
    let item = { ...this.state.studentDetails };
    item["dateOfBirth"] = date;

    this.setState({ studentDetails: item });
  };

  dateOfAdmissionUpadte = (date) => {
    let item = { ...this.state.studentDetails };
    item["dateOfAdmission"] = date;

    this.setState({ studentDetails: item });
  };

  changeHandler = (event) => {
    const { value, name } = event.target;

    console.log("name", name);
    console.log("value", value);

    let item = { ...this.state.studentDetails };
    item[name] = value;

    console.log("item", item);

    this.setState({ studentDetails: item });
  };

  handelSubmit = (event) => {
    event.preventDefault();
    const { createStudentDispatch } = this.props;
    const { studentDetails } = this.state;
    console.log("studentDetails", studentDetails);
    createStudentDispatch(studentDetails);
  };

  render() {
    const { studentDetails } = this.state;
    return (
      <div className="tab-pane" id="Staff-add">
        <div className="row clearfix">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">STUDENT DETAILS</h3>
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
                        value={studentDetails.firstName}
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
                        value={studentDetails.midName}
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
                        value={studentDetails.lastName}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Date Of Birth</label>
                      <DatePicker
                        className="form-control"
                        name="dateOfBirth"
                        selected={studentDetails.dateOfBirth}
                        onChange={this.dateOfBirthUpadte}
                        dateFormat="dd/MM/yyyy"
                      />
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <label>Gender</label>
                    <select
                      name="gender"
                      onChange={this.changeHandler}
                      value={studentDetails.gender}
                      className="form-control show-tick"
                    >
                      <option value="">-- Gender --</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
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
                        value={studentDetails.adharNumber}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Mobile No</label>
                      <input
                        type="text"
                        className="form-control"
                        name="mobileNumber"
                        onChange={this.changeHandler}
                        value={studentDetails.mobileNumber}
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Alternative Mobile No</label>
                      <input
                        type="text"
                        className="form-control"
                        name="alternativeMobileNumber"
                        onChange={this.changeHandler}
                        value={studentDetails.alternativeMobileNumber}
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
                        value={studentDetails.email}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <label>Blood Group</label>
                    <select
                      name="bloodGroup"
                      onChange={this.changeHandler}
                      value={studentDetails.bloodGroup}
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
                    <label>Religion</label>
                    <select
                      name="religion"
                      onChange={this.changeHandler}
                      value={studentDetails.religion}
                      className="form-control show-tick"
                    >
                      <option value="">-- Religion --</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Sikh">Sikh</option>
                      <option value="Cristaian">Cristaian</option>
                      <option value="Muslim">Muslim</option>
                    </select>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Caste</label>
                      <input
                        type="text"
                        className="form-control"
                        name="caste"
                        onChange={this.changeHandler}
                        value={studentDetails.caste}
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Category</label>
                      <input
                        type="text"
                        className="form-control"
                        name="category"
                        onChange={this.changeHandler}
                        value={studentDetails.category}
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Date Of Admission</label>
                      <DatePicker
                        className="form-control"
                        name="admisionDate"
                        selected={studentDetails.admisionDate}
                        onChange={this.dateOfAdmissionUpadte}
                        dateFormat="dd/MM/yyyy"
                      />
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <label>Standard</label>
                    <select
                      name="standard"
                      onChange={this.changeHandler}
                      value={studentDetails.standard}
                      className="form-control show-tick"
                    >
                      <option value="">-- Class --</option>
                      <option value="U kG">U KG</option>
                      <option value="Female">L KG</option>
                      <option value="1st-A">1st-A</option>
                      <option value="1st-B">1st-B</option>
                    </select>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <label>Student Class</label>
                    <select
                      name="studentClass"
                      onChange={this.changeHandler}
                      value={studentDetails.studentClass}
                      className="form-control show-tick"
                    >
                      <option value="">-- Student Class --</option>
                      <option value="U kG">U KG</option>
                      <option value="Female">L KG</option>
                      <option value="1st-A">1st-A</option>
                      <option value="1st-B">1st-B</option>
                    </select>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Roll No</label>
                      <input
                        type="text"
                        className="form-control"
                        name="rollNumber"
                        onChange={this.changeHandler}
                        value={studentDetails.rollNumber}
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Admision Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="admisionNumber"
                        onChange={this.changeHandler}
                        value={studentDetails.admisionNumber}
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Register Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="registerNumber"
                        onChange={this.changeHandler}
                        value={studentDetails.registerNumber}
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
                            value={studentDetails.address}
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
                            value={studentDetails.area}
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
                            value={studentDetails.city}
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
                            value={studentDetails.state}
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
                            value={studentDetails.pincode}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-header">
                    <h3 className="card-title">Parents/Guardian Details</h3>
                  </div>

                  <div className="card-body">
                    <div className="row clearfix">
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.firstName"
                            onChange={this.changeHandler}
                            value={
                              studentDetails.associatedParentList.firstName
                            }
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Middle Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.midName"
                            onChange={this.changeHandler}
                            value={studentDetails.associatedParentList.midName}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label> Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.lastName"
                            onChange={this.changeHandler}
                            value={studentDetails.associatedParentList.lastName}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label>Gender</label>
                        <select
                          name="associatedParentList.gender"
                          onChange={this.changeHandler}
                          value={studentDetails.associatedParentList.gender}
                          className="form-control show-tick"
                        >
                          <option value="">-- Gender --</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Relationship</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.relationship"
                            onChange={this.changeHandler}
                            value={
                              studentDetails.associatedParentList.relationship
                            }
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Aadhar Number</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.adharNumber"
                            onChange={this.changeHandler}
                            value={
                              studentDetails.associatedParentList.adharNumber
                            }
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Mobile No</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.mobileNumber"
                            onChange={this.changeHandler}
                            value={
                              studentDetails.associatedParentList.mobileNumber
                            }
                          ></input>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Alternative Mobile Number</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.alternativeMobileNumber"
                            onChange={this.changeHandler}
                            value={
                              studentDetails.associatedParentList
                                .alternativeMobileNumber
                            }
                          ></input>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.email"
                            onChange={this.changeHandler}
                            value={studentDetails.associatedParentList.email}
                          ></input>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Occupation</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.occupation"
                            onChange={this.changeHandler}
                            value={
                              studentDetails.associatedParentList.occupation
                            }
                          ></input>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.address"
                            onChange={this.changeHandler}
                            value={studentDetails.associatedParentList.address}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Area</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.area"
                            onChange={this.changeHandler}
                            value={studentDetails.associatedParentList.area}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.city"
                            onChange={this.changeHandler}
                            value={studentDetails.associatedParentList.city}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>State</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.state"
                            onChange={this.changeHandler}
                            value={studentDetails.associatedParentList.state}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Postal Code</label>
                          <input
                            type="text"
                            className="form-control"
                            name="associatedParentList.pincode"
                            onChange={this.changeHandler}
                            value={studentDetails.associatedParentList.pincode}
                          ></input>
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
                        value={studentDetails.photo}
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
                        value={studentDetails.description}
                        rows="4"
                        className="form-control no-resize"
                        placeholder="Please type what you want..."
                      ></textarea>
                    </div>
                  </div>
                  <SubmitButton buttonName={"Add Student"} />
                </div>
              </form>
            </div>
          </div>
          <UserAccount />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createStudentDispatch: (newStudent) => dispatch(createStudent(newStudent)),
});

export default connect(null, mapDispatchToProps)(AddStudent);
