import React from "react";
import { connect } from "react-redux";
import { selectStandards } from "../../redux/standard/standard.selectors";
import { createStructuredSelector } from "reselect";

const StandardListView = ({ standardList }) => {
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
              {standardList.length
                ? standardList.map((standard) => (
                    <tr key={standard.standardId}>
                      <td className="w60">
                        <div
                          className="avatar avatar-pink"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Avatar Name"
                        >
                          <span>{standard.standardId}</span>
                        </div>
                      </td>
                      <td>
                        <span>{standard.standardName}</span>
                      </td>
                      <td>
                        <span>{standard.standardName}</span>
                      </td>
                      <td>
                        <span>{standard.standardName}</span>
                      </td>
                      <td>
                        <span>{standard.description}</span>
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
  standardList: selectStandards,
});

export default connect(mapStateToProps)(StandardListView);
