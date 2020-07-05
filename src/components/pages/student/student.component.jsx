import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import SideBar from "../../side-bar/side-bar.component";
import "../../../assets/js/core.js";

import pick from "../../../assets/images/themes/rtl.png";

import Footer from "../../footer/footer.component";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import AddStudent from "../../add-student/add-student.component";
import StudentListView from "../../student-list-view/student-list-view.component";
import { fetchStudentsStarts } from "../../../redux/student/student.actions";

import "./student.styles.scss";

class Student extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentArray: [],

      studentDetails: {
        firstName: "",
        middleName: "",
        lastName: "",
        stuGgender: "",
        dateOfBirth: new Date(),
        aadharNumber: "",
        mobile: "",
        email: "",
        dateOfAdmission: new Date(),
        class: "",
        rollNo: "",
        parentsFirstName: "",
        parentsMiddleName: "",
        parentsLastName: "",
        parentsGender: "",
        relationship: "",
        parentsAadharNumber: "",
        parentsMobileNo: "",
        parentsEmail: "",
        parentsOccupation: "",
        fullName: "",
        houseNo: "",
        street: "",
        city: "",
        district: "",
        state: "",
        postalCode: "",
        photo: "",
        description: "",
      },
    };
  }

  componentWillMount() {}

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

  componentDidMount() {
    const { fetchStudentsStartsDispatch } = this.props;
    fetchStudentsStartsDispatch();
  }

  render() {
    const { studentArray } = this.state;
    const { studentDetails } = this.state;
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

    const headerName = {
      no: "No",
      firstName: "First Name",
      midName: "MiddleName",
      lastName: "lastName",
      dateOfBirth: "dateOfBirth",
      gender: "gender",
      bloodGroup: "bloodGroup",
      adharNumber: "adharNumber",
      panNumber: "panNumber",
      qualification: "qualification",
      email: "email",
      mobileNumber: "mobileNumber",
      alternativeMobileNumber: "alternativeMobileNumber",
      pfNumber: "pfNumber",
      address: "address",
      area: "area",
      city: "city",
      state: "state",
      pincode: "pincode",
      dateOfJoining: "dateOfJoining",
      jobType: "jobType",
      jobHours: "jobHours",
      department: "department",
      jobDesignation: "jobDesignation",
      employeeNumber: "employeeNumber",
      description: "description",
      relievedDate: "relievedDate",
    };

    return (
      <div className="font-muli theme-cyan gradient">
        <div id="main_content">
          <SideBar />
          <div className="page">
            <Navigation
              pageTitle={"STUDENT"}
              navigationItems={navigationItems}
            />
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  <StudentListView headerName={headerName} />
                  <GridView />
                  <AddStudent />
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
  fetchStudentsStartsDispatch: () => dispatch(fetchStudentsStarts()),
});

export default connect(null, mapDispatchToProps)(Student);
