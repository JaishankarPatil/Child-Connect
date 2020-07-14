import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import {
  selectDesignations,
  selectDesignationsErrorMessage,
} from "../../redux/designation/designation.selectors";

import { deleteDesignationByDesignationId } from "../../redux/designation/designation.actions";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const reloadThePage = (history) => {
  history.go(0);
};

const DesignationListView = ({
  designationList,
  deleteDesignationByDesignationIdDispatch,
  fetchdesignationsError,
}) => {
  console.log("history", history);
  alert("stop designation");

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
      {designationList ? (
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
                  {designationList.length
                    ? designationList.map((designation) => (
                        <tr key={designation.designationId}>
                          <td className="w60">
                            <div
                              className="avatar avatar-pink"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Avatar Name"
                            >
                              <span>{designation.designationId}</span>
                            </div>
                          </td>
                          <td>
                            <span>{designation.designationName}</span>
                          </td>
                          <td>
                            <span>{designation.designationName}</span>
                          </td>
                          <td>
                            <span>{designation.designationName}</span>
                          </td>
                          <td>
                            <span>{designation.designationName}</span>
                          </td>

                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <Link
                              to={`/designation/${designation.designationId}`}
                            >
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
                                deleteDesignationByDesignationIdDispatch(
                                  designation.designationId
                                )
                              }
                            >
                              <i className="fa fa-trash-o text-danger"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    : FetchDepartmentsFailedFlashMessage}
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
  designationList: selectDesignations,
  fetchdesignationsError: selectDesignationsErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDesignationByDesignationIdDispatch: (designationId) =>
    dispatch(deleteDesignationByDesignationId(designationId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesignationListView);
