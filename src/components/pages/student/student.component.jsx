import React from "react";
import { connect } from "react-redux";

import SideBar from "../../side-bar/side-bar.component";
import "../../../assets/js/core.js";

import Footer from "../../footer/footer.component";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import StudentCreate from "../../student/student-create.component";
import AddStudent from "../../add-student/add-student.component";
import StudentListView from "../../student/student-list-view.component";
import { fetchStudentsStart } from "../../../redux/student/student.actions";
import { createStructuredSelector } from "reselect";
import Spinner from "../../with-spinner/with-spinner.component";

import "./student.styles.scss";

import {
  selectStudentsIsLoading,
  selectdeleteStudentSuccessMessage,
  selectStudentCreateSuccessMessage,
  selectStudentsErrorMessage,
  selectStudentCreateErrorMessage,
  selectdeleteStudentErrorMessage,
  selectStudentUpdateErrorMessage,
  selectStudentUpdateSuccessMessage,
} from "../../../redux/student/student.selectors";

class Student extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentArray: [],
    };
  }

  reloadThePage(history) {
    history.go(0);
  }

  componentDidMount() {
    const { fetchStudentsStartsDispatch } = this.props;
    fetchStudentsStartsDispatch();
  }

  render() {
    let isSuccess = false;
    let isError = false;
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
    const {
      history,
      isLoading,
      fetchAllStudentsError,
      studentCreateSuccess,
      studentDeleteSuccess,
      studentUpdateError,
      studentDeleteError,
      studentCreateError,
      studentUpdateSuccess,
    } = this.props;

    if (studentCreateSuccess) {
      alert("seccess");
      isSuccess = true;
    }

    if (fetchAllStudentsError) {
      isError = true;
      console.log("fetchAllStudentsError", fetchAllStudentsError);
      alert("stop");
    }

    const CreateStudentSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        New Student is created SuccessFully .....!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const DeleteStudentSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Student is deleted SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateStudentSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Student is updated SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const CreatStudentFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Creation of departent failed, please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@childconnect.com
        </a>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateStudentFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Update of departent failed, please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@childconnect.com
        </a>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const DeleteStudentFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Deleting of student failed, please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@childconnect.com
        </a>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const FetchStudentsFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        No students availebel please contact admin{" "}
        <a href="#" class="alert-link">
          SUPPORT@childconnect.com
        </a>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    return (
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="font-muli theme-cyan gradient">
            <div id="main_content">
              <SideBar />
              <div className="page">
                <Navigation
                  pageTitle={"STUDENT"}
                  navigationItems={navigationItems}
                />

                {isSuccess || isError ? (
                  studentCreateSuccess ? (
                    CreateStudentSuccessFlashMessage
                  ) : null || studentDeleteSuccess ? (
                    DeleteStudentSuccessFlashMessage
                  ) : null || studentUpdateSuccess ? (
                    UpdateStudentSuccessFlashMessage
                  ) : null || studentUpdateError ? (
                    UpdateStudentFailedFlashMessage
                  ) : null || studentDeleteError ? (
                    DeleteStudentFailedFlashMessage
                  ) : null || studentCreateError ? (
                    CreatStudentFailedFlashMessage
                  ) : null || fetchAllStudentsError ? (
                    FetchStudentsFailedFlashMessage
                  ) : null
                ) : (
                  <div className="section-body mt-4">
                    <div className="container-fluid">
                      <div className="tab-content">
                        <StudentListView headerName={headerName} />
                        <GridView />
                        <StudentCreate />
                      </div>
                    </div>
                  </div>
                )}

                <Footer />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectStudentsIsLoading,
  studentCreateSuccess: selectStudentCreateSuccessMessage,
  studentDeleteSuccess: selectdeleteStudentSuccessMessage,
  fetchAllStudentsError: selectStudentsErrorMessage,
  studentCreateError: selectStudentCreateErrorMessage,
  studentDeleteError: selectdeleteStudentErrorMessage,
  studentUpdateError: selectStudentUpdateErrorMessage,
  studentUpdateSuccess: selectStudentUpdateSuccessMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudentsStartsDispatch: () => dispatch(fetchStudentsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Student);
