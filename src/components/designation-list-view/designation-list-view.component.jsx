import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDesignations } from "../../redux/designation/designation.selectors";

const DesignationListView = ({ designationList }) => {
  return (
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
                        <button
                          type="button"
                          className="btn btn-icon btn-sm"
                          title="Edit"
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-icon btn-sm js-sweetalert"
                          title="Delete"
                          data-type="confirm"
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
  );
};

const mapStateToProps = createStructuredSelector({
  designationList: selectDesignations,
});

export default connect(mapStateToProps)(DesignationListView);
