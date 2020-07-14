import React from "react";
import { connect } from "react-redux";

import "../../../assets/js/core.js";

import Footer from "../../footer/footer.component";
import SideBar from "../../side-bar/side-bar.component";

import Navigation from "../../navigation/navigation.component";
import ListView from "../../list-view/list-view.component";
import StaffListView from "../../staff/staff-list-view.component";
import GridView from "../../grid-view/grid-view.component";
import AddStaff from "../../add-staff/add-staff.component";
import EditStaff from "../../edit-staff/edit-staff.component";
import Spinner from "../../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import CreateStaff from "../../staff/staff-create.component";

import {
  selectStaffsIsLoading,
  selectdeleteStaffSuccessMessage,
  selectStaffCreateSuccessMessage,
  selectStaffsErrorMessage,
  selectStaffCreateErrorMessage,
  selectdeleteStaffErrorMessage,
  selectStaffUpdateErrorMessage,
  selectStaffUpdateSuccessMessage,
} from "../../../redux/staff/staff.selectors";

import { fetchStaffsStart } from "../../../redux/staff/staff.actions";

import "react-datepicker/dist/react-datepicker.css";

class Staff extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchStaffsStartDispatch } = this.props;
    fetchStaffsStartDispatch();
  }

  reloadThePage = (history) => {
    history.go(0);
  };

  render() {
    let isSuccess = false;
    let isError = false;
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

    const {
      history,
      isLoading,
      fetchAllStaffsError,
      staffCreateSuccess,
      staffDeleteSuccess,
      staffUpdateError,
      staffDeleteError,
      staffCreateError,
      staffUpdateSuccess,
    } = this.props;

    if (staffCreateSuccess || staffDeleteSuccess || staffUpdateSuccess) {
      isSuccess = true;
    }

    if (
      fetchAllStaffsError ||
      staffUpdateError ||
      staffDeleteError ||
      staffCreateError
    ) {
      alert("fetchAllStaffsError");
      isError = true;
    }

    const CreateStaffSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        New Staff is created SuccessFully .....!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const DeleteStaffSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Staff is deleted SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateStaffSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Staff is updated SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const CreatStaffFailedFlashMessage = (
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

    const UpdateStaffFailedFlashMessage = (
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

    const DeleteStaffFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Deleting of staff failed, please contact{" "}
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

    const FetchStaffsFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        No staffs availebel please contact admin{" "}
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
            <Navigation pageTitle={"STAFF"} navigationItems={navigationItems} />

            {isSuccess || isError ? (
              staffCreateSuccess ? (
                CreateStaffSuccessFlashMessage
              ) : null || staffDeleteSuccess ? (
                DeleteStaffSuccessFlashMessage
              ) : null || staffUpdateSuccess ? (
                UpdateStaffSuccessFlashMessage
              ) : null || staffUpdateError ? (
                UpdateStaffFailedFlashMessage
              ) : null || staffDeleteError ? (
                DeleteStaffFailedFlashMessage
              ) : null || staffCreateError ? (
                CreatStaffFailedFlashMessage
              ) : null || fetchAllStaffsError ? (
                FetchStaffsFailedFlashMessage
              ) : null
            ) : (
              <div className="section-body mt-4">
                <div className="container-fluid">
                  <div className="tab-content">
                    <div className="col-sm-12"></div>
                    {isLoading ? (
                      <Spinner />
                    ) : (
                      <StaffListView headerName={headerName} />
                    )}
                    <GridView />
                    <CreateStaff />
                  </div>
                </div>
              </div>
            )}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectStaffsIsLoading,
  staffCreateSuccess: selectStaffCreateSuccessMessage,
  staffDeleteSuccess: selectdeleteStaffSuccessMessage,
  fetchAllStaffsError: selectStaffsErrorMessage,
  staffCreateError: selectStaffCreateErrorMessage,
  staffDeleteError: selectdeleteStaffErrorMessage,
  staffUpdateError: selectStaffUpdateErrorMessage,
  staffUpdateSuccess: selectStaffUpdateSuccessMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStaffsStartDispatch: () => dispatch(fetchStaffsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Staff);
