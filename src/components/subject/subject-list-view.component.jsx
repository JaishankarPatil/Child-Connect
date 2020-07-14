import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectSubjects,
  selectSubjectsErrorMessage,
} from "../../redux/subject/subject.selectors";

import { deleteSubjectBySubjectId } from "../../redux/subject/subject.actions";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const reloadThePage = (history) => {
  history.go(0);
};

const SubjectListView = ({
  subjectList,
  deleteSubjectBySubjectIdDispatch,
  subjectsErrorMessage,
}) => {
  const FetchSubjectsFailedFlashMessage = (
    <div class="alert alert-danger" role="alert">
      No subjects availebel please contact admin{" "}
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
      {subjectList ? (
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
                            <span>{subject.description}</span>
                          </td>
                          <td>
                            <span>{subject.description}</span>
                          </td>
                          <td>
                            <span>{subject.description}</span>
                          </td>

                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <Link to={`/subject/${subject.subjectId}`}>
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
                                deleteSubjectBySubjectIdDispatch(
                                  subject.subjectId
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
        FetchSubjectsFailedFlashMessage
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  subjectList: selectSubjects,
  subjectsErrorMessage: selectSubjectsErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  deleteSubjectBySubjectIdDispatch: (subjectId) =>
    dispatch(deleteSubjectBySubjectId(subjectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubjectListView);
