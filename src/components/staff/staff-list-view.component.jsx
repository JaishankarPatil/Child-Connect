import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  selectStaffs,
  selectStaffsIsLoading,
  selectStaffsErrorMessage,
} from "../../redux/staff/staff.selectors";

import { deleteStaffByStaffId } from "../../redux/staff/staff.actions";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const reloadThePage = (history) => {
  history.go(0);
};

const StaffListView = ({
  staffsList,
  isLoading,
  headerName,
  deleteStaffByStaffIdDispatch,
  fetchStaffsError,
}) => {
  const {
    no,
    firstName,
    midName,
    lastName,
    dateOfBirth,
    gender,
    bloodGroup,
    adharNumber,
    panNumber,
    qualification,
    email,
    mobileNumber,
    alternativeMobileNumber,
    pfNumber,
    address,
    area,
    city,
    state,
    pincode,
    dateOfJoining,
    jobType,
    jobHours,
    department,
    jobDesignation,
    employeeNumber,
    description,
    relievedDate,
  } = headerName;

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

  return (
    <div>
      {staffsList ? (
        <div className="tab-pane active" id="Staff-all">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-hover table-vcenter text-nowrap table-striped mb-0">
                <thead>
                  <tr>
                    <th>{no}</th>
                    <th>{firstName}</th>
                    <th>{midName}</th>
                    <th>{lastName}</th>
                    <th>{dateOfBirth}</th>
                    <th>{gender}</th>
                    <th>{bloodGroup}</th>
                    <th>{adharNumber}</th>
                    <th>{panNumber}</th>
                    <th>{qualification}</th>
                    <th>{email}</th>
                    <th>{mobileNumber}</th>
                    <th>{alternativeMobileNumber}</th>
                    <th>{pfNumber}</th>
                    <th>{address}</th>
                    <th>{area}</th>
                    <th>{city}</th>
                    <th>{state}</th>
                    <th>{pincode}</th>
                    <th>{dateOfJoining}</th>
                    <th>{jobType}</th>
                    <th>{jobHours}</th>
                    <th>{department}</th>
                    <th>{jobDesignation}</th>
                    <th>{employeeNumber}</th>
                    <th>{description}</th>
                    <th>{relievedDate}</th>
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
                              <span>{staff.firstName.slice(0, 2)}</span>
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
                            <span>{staff.dateOfBirth}</span>
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
                            <span>{staff.alternativeMobileNumber}</span>
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
                            <span>{staff.dateOfJoining}</span>
                          </td>
                          <td>
                            <span className="tag tag-success">
                              {staff.jobType}
                            </span>
                          </td>
                          <td>
                            <span>{staff.jobHours}</span>
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
                            <span>{staff.relievedDate}</span>
                          </td>

                          <td>
                            <Link to={`/staff/${staff.staffId}`}>
                              <button
                                type="button"
                                className="btn btn-icon btn-sm"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
                              </button>
                            </Link>

                            <Link to={`/staff/${staff.staffId}`}>
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
                                deleteStaffByStaffIdDispatch(staff.staffId)
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
  );
};

const mapStateToProps = createStructuredSelector({
  staffsList: selectStaffs,
  isLoading: selectStaffsIsLoading,
  fetchStaffsError: selectStaffsErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  deleteStaffByStaffIdDispatch: (staff) =>
    dispatch(deleteStaffByStaffId(staff)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StaffListView);
