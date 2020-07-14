import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectGroups } from "../../redux/group/group.selectors";
import { deleteGroupByGroupId } from "../../redux/group/group.actions";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const reloadThePage = (history) => {
  history.go(0);
};

const GroupListView = ({ groupList, deleteGroupByGroupIdDispatch }) => {
  const FetchGroupsFailedFlashMessage = (
    <div class="alert alert-danger" role="alert">
      No grops found contact admin{" "}
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
      {groupList ? (
        <div className="tab-pane active" id="Group-all">
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
                  {groupList.length
                    ? groupList.map((group) => (
                        <tr key={group.groupId}>
                          <td className="w60">
                            <div
                              className="avatar avatar-pink"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Avatar Name"
                            >
                              <span>{group.groupId}</span>
                            </div>
                          </td>
                          <td>
                            <Link to="/groupmember">
                              <span>{group.groupName}</span>
                            </Link>
                          </td>
                          <td>
                            <span>{group.groupName}</span>
                          </td>
                          <td>
                            <span>{group.groupName}</span>
                          </td>
                          <td>
                            <span>{group.groupName}</span>
                          </td>

                          <td>
                            <button
                              type="button"
                              className="btn btn-icon btn-sm"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <Link to={`/group/${group.groupId}`}>
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
                                deleteGroupByGroupIdDispatch(group.groupId)
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
        FetchGroupsFailedFlashMessage
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  groupList: selectGroups,
});

const mapDispatchToProps = (dispatch) => ({
  deleteGroupByGroupIdDispatch: (groupId) =>
    dispatch(deleteGroupByGroupId(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupListView);
