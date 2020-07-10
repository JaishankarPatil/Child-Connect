import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  selectStudents,
  selectStudentsIsLoading,
} from "../../redux/student/student.selectors";
import Spinner from "../with-spinner/with-spinner.component";

const StudentListView = ({
  studentList,
  isLoading,
  headerName,
  deleteStudentDispatch,
  updateStudentDispatch,
}) => {
  console.log("isLoading", isLoading);

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

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
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
                  {studentList.length
                    ? studentList.map((student) => (
                        <tr key={student.staffId}>
                          <td className="w60">
                            <div
                              className="avatar avatar-pink"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Avatar Name"
                            >
                              <span>{student.firstName.slice(0, 2)}</span>
                            </div>
                          </td>
                          <td>
                            <span>{student.firstName}</span>
                          </td>
                          <td>
                            <span>{student.midName}</span>
                          </td>
                          <td>
                            <span>{student.lastName}</span>
                          </td>
                          <td>
                            <span>{student.dateOfBirth}</span>
                          </td>
                          <td>
                            <span>{student.gender}</span>
                          </td>
                          <td>
                            <span>{student.bloodGroup}</span>
                          </td>
                          <td>
                            <span>{student.adharNumber}</span>
                          </td>
                          <td>
                            <span>{student.panNumber}</span>
                          </td>
                          <td>
                            <span>{student.qualification}</span>
                          </td>
                          <td>
                            <span>{student.email}</span>
                          </td>
                          <td>
                            <span>{student.mobileNumber}</span>
                          </td>
                          <td>
                            <span>{student.alternativeMobileNumber}</span>
                          </td>
                          <td>
                            <span>{student.pfNumber}</span>
                          </td>
                          <td>
                            <span>{student.address}</span>
                          </td>
                          <td>
                            <span>{student.area}</span>
                          </td>
                          <td>
                            <span>{student.city}</span>
                          </td>
                          <td>
                            <span>{student.state}</span>
                          </td>
                          <td>
                            <span>{student.pincode}</span>
                          </td>
                          <td>
                            <span>{student.dateOfJoining}</span>
                          </td>
                          <td>
                            <span className="tag tag-success">
                              {student.jobType}
                            </span>
                          </td>
                          <td>
                            <span>{student.jobHours}</span>
                          </td>
                          <td>
                            <span>{student.department}</span>
                          </td>
                          <td>
                            <span>{student.jobDesignation}</span>
                          </td>
                          <td>
                            <span>{student.employeeNumber}</span>
                          </td>
                          <td>
                            <span>{student.description}</span>
                          </td>
                          <td>
                            <span>{student.relievedDate}</span>
                          </td>

                          <td>
                            <Link to={`/staff/${student.staffId}`}>
                              <button
                                type="button"
                                className="btn btn-icon btn-sm"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
                              </button>
                            </Link>

                            <Link to={`/staff/${student.staffId}`}>
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
                              onClick={() => deleteStudentDispatch(student)}
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
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  studentList: selectStudents,
  isLoading: selectStudentsIsLoading,
});

/* const mapDispatchToProps = (dispatch) => ({
  deleteStudentDispatch: (student) => dispatch(deleteStaff(student)),
  updateStudentDispatch: (student) => dispatch(updateStaff(student)),
}); */

export default connect(mapStateToProps)(StudentListView);
