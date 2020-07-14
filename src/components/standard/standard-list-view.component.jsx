import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectStandards } from "../../redux/standard/standard.selectors";
import { createStructuredSelector } from "reselect";
import { deleteStandardByStandardId } from "../../redux/standard/standard.actions";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const reloadThePage = (history) => {
  history.go(0);
};

const StandardListView = ({
  standardList,
  deleteStandardByStandardIdDispatch,
}) => {
  console.log("standardList", standardList);
  alert("standardList");

  const FetchStandardsFailedFlashMessage = (
    <div class="alert alert-danger" role="alert">
      No standards availebel please contact admin{" "}
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
      {standardList ? (
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
                            <Link to={`/standard/${standard.standardId}`}>
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
                                deleteStandardByStandardIdDispatch(
                                  standard.standardId
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
        FetchStandardsFailedFlashMessage
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  standardList: selectStandards,
});

const mapDispatchToProps = (dispatch) => ({
  deleteStandardByStandardIdDispatch: (standardId) =>
    dispatch(deleteStandardByStandardId(standardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StandardListView);
