import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  deleteDepartmentByDepartmentId,
  fetchDepartmentsStart,
} from "../../redux/department/department.actions";

import {
  selectDepartments,
  selectDepartmentsIsLoading,
  selectDepartmentsErrorMessage,
  selectdeleteDepartmentSuccessMessage,
  selectdeleteDepartmentErrorMessage,
} from "../../redux/department/department.selectors";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const reloadThePage = (history) => {
  history.go(0);
};

const DepartmentListView = ({
  departmentList,
  deleteDepartmentByDepartmentIdDispatch,
  isLoading,
  fetchDepartmentsError,
  departmentDeleteError,
  departmentDeleteSuccess,
}) => {
  console.log("departmentList", departmentList);
  console.log("history", history);

  const FetchDepartmentsFailedFlashMessage = (
    <div class="alert alert-danger" role="alert">
      No departments availebel please contact admin{" "}
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
      {departmentList ? (
        <div className="tab-pane active" id="Staff-all">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-hover table-vcenter text-nowrap table-striped mb-0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Created On</th>
                    <th>Created By</th>
                    <th>Description</th>
                    <th>Actons</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentList.length
                    ? departmentList.map((department) => (
                        <tr key={department.departmentId}>
                          <td className="w60">
                            <div
                              className="avatar avatar-pink"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Avatar Name"
                            >
                              <span>{department.departmentId}</span>
                            </div>
                          </td>
                          <td>
                            <Link to="/groupmember">
                              <span>{department.departmentName}</span>
                            </Link>
                          </td>
                          <td>
                            <span>{department.departmentName}</span>
                          </td>
                          <td>
                            <span>{department.departmentName}</span>
                          </td>
                          <td>
                            <span>{department.description}</span>
                          </td>

                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <Link to={`/department/${department.departmentId}`}>
                              <button
                                type="button"
                                className="btn btn-icon btn-sm"
                                title="Edit"
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
                                deleteDepartmentByDepartmentIdDispatch(
                                  department.departmentId
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
        FetchDepartmentsFailedFlashMessage
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  departmentList: selectDepartments,
  isLoading: selectDepartmentsIsLoading,
  fetchDepartmentsError: selectDepartmentsErrorMessage,
  departmentDeleteError: selectdeleteDepartmentErrorMessage,
  departmentDeleteSuccess: selectdeleteDepartmentSuccessMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDepartmentListDispatch: () => dispatch(fetchDepartmentsStart()),
  deleteDepartmentByDepartmentIdDispatch: (subjectId) =>
    dispatch(deleteDepartmentByDepartmentId(subjectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentListView);
