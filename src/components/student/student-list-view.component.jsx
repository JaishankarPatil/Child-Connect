import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  selectStudents,
  selectStudentsIsLoading,
} from "../../redux/student/student.selectors";
import Spinner from "../with-spinner/with-spinner.component";
import { deleteStudentByStudentId } from "../../redux/student/student.actions";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const reloadThePage = (history) => {
  history.go(0);
};

const StudentListView = ({
  studentList,
  isLoading,
  headerName,
  deleteStudentByStudentIdDispatch,
  updateStudentDispatch,
}) => {
  console.log("isLoading", isLoading);

  console.log("studentList", studentList);

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
        onClick={() => reloadThePage(history)}
      ></button>
    </div>
  );

  return (
    <div>
      {studentList ? (
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
                    <th>{email}</th>
                    <th>{mobileNumber}</th>
                    <th>{alternativeMobileNumber}</th>
                    <th>{address}</th>
                    <th>{area}</th>
                    <th>{city}</th>
                    <th>{state}</th>
                    <th>{pincode}</th>
                    <th>Actions</th>
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
                              <span>{student.studentId}</span>
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
                            <span>{student.email}</span>
                          </td>
                          <td>
                            <span>{student.mobileNumber}</span>
                          </td>
                          <td>
                            <span>{student.alternativeMobileNumber}</span>
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
                            <Link to={`/staff/${student.staffId}`}>
                              <button
                                type="button"
                                className="btn btn-icon btn-sm"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
                              </button>
                            </Link>

                            <Link to={`/student/${student.studentId}`}>
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
                                deleteStudentByStudentIdDispatch(
                                  student.studentId
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
        FetchStudentsFailedFlashMessage
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  studentList: selectStudents,
  isLoading: selectStudentsIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  deleteStudentByStudentIdDispatch: (studentId) =>
    dispatch(deleteStudentByStudentId(studentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentListView);
