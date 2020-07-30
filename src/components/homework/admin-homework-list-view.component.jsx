import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SideBar from "../side-bar/side-bar.component";
import Spinner from "../with-spinner/with-spinner.component";

import {
  selectHomeworks,
  selectHomeworksIsLoading,
  selectHomeworksErrorMessage,
  selectdeleteHomeworkSuccessMessage,
  selectdeleteHomeworkErrorMessage,
} from "../../redux/homework/homework.selectors";
import {
  fetchHomeworkStarts,
  deleteHomeworkByHomeworkId,
} from "../../redux/homework/homework.actions";

const AdminHomeworkListView = ({
  homeworksList,
  fetchHomeworkStartsDispatch,
  deleteHomeworkByHomeworkIdDispatch,
  isLoading,
  homeworksErrorMessage,
  deleteHomeworkSuccessMessage,
  deleteHomeworkErrorMessage,
}) => {
  useEffect(() => {
    fetchHomeworkStartsDispatch();
  }, []);

  let isError = false;
  let isSuccess = false;

  if (homeworksErrorMessage || deleteHomeworkErrorMessage) {
    isError = true;
  }

  if (deleteHomeworkSuccessMessage) {
    isSuccess = true;
  }

  const DeleteHomeworkSuccessFlashMessage = (
    <div className="alert alert-success" role="alert">
      Homework is deleted SuccessFully ...!
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => reloadThePage(history)}
      ></button>
    </div>
  );
  const DeleteHomeworkFailedFlashMessage = (
    <div className="alert alert-danger" role="alert">
      Deleting of staff failed, please contact{" "}
      <a href="#" className="alert-link">
        SUPPORT@childconnect.com
      </a>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => reloadThePage(history)}
      ></button>
    </div>
  );

  const FetchHomeworksFailedFlashMessage = (
    <div className="alert alert-danger" role="alert">
      Homeworks are not availabel, please contact{" "}
      <a href="#" className="alert-link">
        SUPPORT@childconnect.com
      </a>
      <button
        type="button"
        className="close"
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
                  <h1 className="page-title">Homework List View</h1>
                  <ol className="breadcrumb page-breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Child-Connect</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Homework List View
                    </li>
                  </ol>
                </div>
                <ul className="nav nav-tabs page-header-tab">
                  <li className="nav-item">
                    <Link className="nav-link" to="/adminhomeworklistview">
                      List View
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/createhomework">
                      Create Homework
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {isSuccess || isError ? (
            deleteHomeworkSuccessMessage ? (
              DeleteHomeworkSuccessFlashMessage
            ) : null || deleteHomeworkErrorMessage ? (
              DeleteHomeworkFailedFlashMessage
            ) : null || homeworksErrorMessage ? (
              FetchHomeworksFailedFlashMessage
            ) : null
          ) : isLoading ? (
            <Spinner />
          ) : (
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  {!!homeworksList && !!homeworksList.length ? (
                    <div className="tab-pane active" id="Group-all">
                      <div className="card">
                        <div className="table-responsive">
                          <table className="table table-hover table-vcenter text-nowrap table-striped mb-0">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Subject</th>
                                <th>Posted To</th>
                                <th>Created By</th>
                                <th>Created On</th>
                                <th>Updated On</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {homeworksList.map((homework) => (
                                <tr key={homework.homeworkId}>
                                  <td className="w60">
                                    <div
                                      className="avatar avatar-pink"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title=""
                                      data-original-title="Avatar Name"
                                    >
                                      <span>{homework.homeworkId}</span>
                                    </div>
                                  </td>
                                  <td>
                                    <Link to="/groupmember">
                                      <span>{homework.headLine}</span>
                                    </Link>
                                  </td>
                                  {homework.subjectDtoList.map((subject) => (
                                    <td>
                                      <span>{subject.subjectName}</span>
                                    </td>
                                  ))}
                                  <td>
                                    {homework.groupDtoList.map((group) => (
                                      <span>{group.groupName + " "}</span>
                                    ))}
                                  </td>
                                  <td>
                                    <span>{homework.homeworkBy.userName}</span>
                                  </td>
                                  <td>
                                    <span>
                                      {Moment(homework.insertedDate).format(
                                        "DD/MM/yyyy"
                                      )}
                                    </span>
                                  </td>
                                  <td>
                                    <span>
                                      {Moment(homework.updatedDate).format(
                                        "DD/MM/yyyy"
                                      )}
                                    </span>
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
                                      to={`/updateHomework/${homework.homeworkId}`}
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
                                        deleteHomeworkByHomeworkIdDispatch(
                                          homework.homeworkId
                                        )
                                      }
                                    >
                                      <i className="fa fa-trash-o text-danger"></i>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  homeworksList: selectHomeworks,
  isLoading: selectHomeworksIsLoading,
  homeworksErrorMessage: selectHomeworksErrorMessage,
  deleteHomeworkSuccessMessage: selectdeleteHomeworkSuccessMessage,
  deleteHomeworkErrorMessage: selectdeleteHomeworkErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeworkStartsDispatch: () => dispatch(fetchHomeworkStarts()),
  deleteHomeworkByHomeworkIdDispatch: (homeworkId) =>
    dispatch(deleteHomeworkByHomeworkId(homeworkId)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminHomeworkListView);
