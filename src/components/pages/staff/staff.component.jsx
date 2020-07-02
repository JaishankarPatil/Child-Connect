import React from "react";
import { connect } from "react-redux";

import "../../../assets/js/core.js";

import Footer from "../../footer/footer.component";
import SideBar from "../../side-bar/side-bar.component";

import Navigation from "../../navigation/navigation.component";
import ListView from "../../list-view/list-view.component";
import GridView from "../../grid-view/grid-view.component";
import AddStaff from "../../add-staff/add-staff.component";
import EditStaff from "../../edit-staff/edit-staff.component";
import Spinner from "../../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { selectStaffsIsLoading } from "../../../redux/staff/staff.selectors";

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

  render() {
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

    const { isLoading } = this.props;

    console.log("isLoading", isLoading);

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
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>Holy guacamole!</strong> You should check in on some of
              those fields below.
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  <div className="col-sm-12"></div>

                  <GridView />
                  <AddStaff />
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

const mapStateToProps = createStructuredSelector({
  isLoading: selectStaffsIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStaffsStartDispatch: () => dispatch(fetchStaffsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Staff);
