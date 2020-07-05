import React from "react";
import { connect } from "react-redux";
import { selectSubjects } from "../../redux/subject/subject.selectors";
import { createStructuredSelector } from "reselect";

const SubjectListView = ({ subjectList }) => {
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
              {subjectList.length
                ? subjectList.map((subject) => (
                    <tr key={subject.subjectId}>
                      <td className="w60">
                        <div
                          className="avatar avatar-pink"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Avatar Name"
                        >
                          <span>{subject.subjectId}</span>
                        </div>
                      </td>
                      <td>
                        <span>{subject.subjectName}</span>
                      </td>
                      <td>
                        <span>{subject.subjectName}</span>
                      </td>
                      <td>
                        <span>{subject.subjectName}</span>
                      </td>
                      <td>
                        <span>{subject.subjectName}</span>
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
  subjectList: selectSubjects,
});

export default connect(mapStateToProps)(SubjectListView);
