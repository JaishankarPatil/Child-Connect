import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SideBar from "../side-bar/side-bar.component";
import { createStructuredSelector } from "reselect";
import Moment from "moment";
import "../../assets/js/core";

import "./staff.styles.scss";
import {
  selectStaffs,
  selectStaffsIsLoading,
  selectStaffsErrorMessage,
  selectdeleteStaffSuccessMessage,
  selectdeleteStaffErrorMessage,
} from "../../redux/staff/staff.selectors";
import Footer from "../footer/footer.component";

import {
  deleteStaffByStaffId,
  fetchStaffsStart,
} from "../../redux/staff/staff.actions";

import { createBrowserHistory } from "history";
import Spinner from "../with-spinner/with-spinner.component";
const history = createBrowserHistory();

const reloadThePage = (history) => {
  history.go(0);
};

const StaffListView = ({
  staffsList,
  isLoading,
  deleteStaffByStaffIdDispatch,
  fetchStaffsError,
  fetchStaffsStartDispatch,
  staffDeleteError,
  staffDeleteSuccess,
}) => {
  useEffect(() => {
    fetchStaffsStartDispatch();
  }, []);

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
        onClick={() => reloadThePage(history)}
      ></button>
    </div>
  );

  let isError = false;
  let isSuccess = false;

  if (staffDeleteError) {
    isError = true;
  }

  if (staffDeleteSuccess) {
    isSuccess = true;
  }

  const DeleteStaffSuccessFlashMessage = (
    <div class="alert alert-success" role="alert">
      Staff is deleted SuccessFully ...!
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => reloadThePage(history)}
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
        onClick={() => reloadThePage(history)}
      ></button>
    </div>
  );

  return (
    <div className="font-muli theme-cyan gradient">
      <div id="main_content">
        <SideBar />
        <div className="page">
          <div className="section-body">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center ">
                <div className="header-action">
                  <h1 className="page-title">Staff List View</h1>
                  <ol className="breadcrumb page-breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Child-Connect</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Staff List View
                    </li>
                  </ol>
                </div>
                <ul className="nav nav-tabs page-header-tab">
                  <li className="nav-item">
                    <Link className="nav-link" to="/staffListView">
                      List View
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/createStaff">
                      Add Staff
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {isSuccess || isError ? (
            staffDeleteError ? (
              DeleteStaffFailedFlashMessage
            ) : null || staffDeleteSuccess ? (
              DeleteStaffSuccessFlashMessage
            ) : null
          ) : isLoading ? (
            <Spinner />
          ) : (
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  <div className="col-sm-12"></div>
                  {staffsList ? (
                    <div className="tab-pane active" id="Staff-all">
                      <div className="card">
                        <div className="table-responsive">
                          <table className="table table-hover table-vcenter text-nowrap table-striped mb-0">
                            <thead>
                              <tr>
                                <th>no</th>
                                <th>firstName</th>
                                <th>midName</th>
                                <th>lastName</th>
                                <th>dateOfBirth</th>
                                <th>gender</th>
                                <th>bloodGroup</th>
                                <th>adharNumber</th>
                                <th>panNumber</th>
                                <th>qualification</th>
                                <th>email</th>
                                <th>mobileNumber</th>
                                <th>alternativeMobileNumber</th>
                                <th>pfNumber</th>
                                <th>address</th>
                                <th>area</th>
                                <th>city</th>
                                <th>state</th>
                                <th>pincode</th>
                                <th>dateOfJoining</th>
                                <th>jobType</th>
                                <th>jobHours</th>
                                <th>department</th>
                                <th>jobDesignation</th>
                                <th>employeeNumber</th>
                                <th>description</th>
                                <th>relievedDate</th>
                                <th>ACTIONS</th>
                              </tr>
                            </thead>
                            <tbody>
                              {staffsList.length
                                ? staffsList.map((staff) => (
                                    <tr key={staff.staffId}>
                                      <td className="w60">
                                        <div
                                          className="avatar avatar-pink"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title=""
                                          data-original-title="Avatar Name"
                                        >
                                          <span>{staff.staffId}</span>
                                        </div>
                                      </td>
                                      <td>
                                        <span>{staff.firstName}</span>
                                      </td>
                                      <td>
                                        <span>{staff.midName}</span>
                                      </td>
                                      <td>
                                        <span>{staff.lastName}</span>
                                      </td>
                                      <td>
                                        <span>
                                          {Moment(staff.dateOfBirth).format(
                                            "DD/MM/yyyy"
                                          )}
                                        </span>
                                      </td>
                                      <td>
                                        <span>{staff.gender}</span>
                                      </td>
                                      <td>
                                        <span>{staff.bloodGroup}</span>
                                      </td>
                                      <td>
                                        <span>{staff.adharNumber}</span>
                                      </td>
                                      <td>
                                        <span>{staff.panNumber}</span>
                                      </td>
                                      <td>
                                        <span>{staff.qualification}</span>
                                      </td>
                                      <td>
                                        <span>{staff.email}</span>
                                      </td>
                                      <td>
                                        <span>{staff.mobileNumber}</span>
                                      </td>
                                      <td>
                                        <span>
                                          {staff.alternativeMobileNumber}
                                        </span>
                                      </td>
                                      <td>
                                        <span>{staff.pfNumber}</span>
                                      </td>
                                      <td>
                                        <span>{staff.address}</span>
                                      </td>
                                      <td>
                                        <span>{staff.area}</span>
                                      </td>
                                      <td>
                                        <span>{staff.city}</span>
                                      </td>
                                      <td>
                                        <span>{staff.state}</span>
                                      </td>
                                      <td>
                                        <span>{staff.pincode}</span>
                                      </td>
                                      <td>
                                        <span>
                                          {Moment(staff.dateOfJoining).format(
                                            "DD/MM/yyyy"
                                          )}
                                        </span>
                                      </td>
                                      <td>
                                        <span>{staff.jobType}</span>
                                      </td>
                                      <td>
                                        {staff.jobHours === "Full-Time" ? (
                                          <span className="tag tag-success">
                                            {staff.jobHours}
                                          </span>
                                        ) : (
                                          <span className="tag tag-warning">
                                            {staff.jobHours}
                                          </span>
                                        )}
                                      </td>
                                      <td>
                                        <span>{staff.department}</span>
                                      </td>
                                      <td>
                                        <span>{staff.jobDesignation}</span>
                                      </td>
                                      <td>
                                        <span>{staff.employeeNumber}</span>
                                      </td>
                                      <td>
                                        <span>{staff.description}</span>
                                      </td>
                                      <td>
                                        <span>
                                          {Moment(staff.relievedDate).format(
                                            "DD/MM/yyyy"
                                          )}
                                        </span>
                                      </td>

                                      <td>
                                        <Link
                                          to={`/staff/updateStaff/${staff.staffId}`}
                                        >
                                          <button
                                            type="button"
                                            className="btn btn-icon btn-sm"
                                            title="View"
                                          >
                                            <i className="fa fa-eye"></i>
                                          </button>
                                        </Link>

                                        <Link
                                          to={`/staff/updateStaff/${staff.staffId}`}
                                        >
                                          <button
                                            type="button"
                                            className="btn btn-icon btn-sm"
                                            title="Edit"
                                            data-type="confirm"
                                          >
                                            <i className="fa fa-edit"></i>
                                          </button>
                                        </Link>

                                        <button
                                          type="button"
                                          className="btn btn-icon btn-sm js-sweetalert"
                                          title="Delete"
                                          data-type="confirm"
                                          onClick={() =>
                                            deleteStaffByStaffIdDispatch(
                                              staff.staffId
                                            )
                                          }
                                        >
                                          <i className="fa fa-trash-o text-danger"></i>
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                : null}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ) : (
                    FetchStaffsFailedFlashMessage
                  )}
                </div>
              </div>
            </div>
          )}

          <Footer />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  staffsList: selectStaffs,
  isLoading: selectStaffsIsLoading,
  fetchStaffsError: selectStaffsErrorMessage,
  staffDeleteError: selectdeleteStaffErrorMessage,
  staffDeleteSuccess: selectdeleteStaffSuccessMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStaffsStartDispatch: () => dispatch(fetchStaffsStart()),
  deleteStaffByStaffIdDispatch: (staff) =>
    dispatch(deleteStaffByStaffId(staff)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StaffListView);
