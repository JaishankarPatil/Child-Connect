import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link, Redirect } from "react-router-dom";
import { fetchGroupsByStudentIdStart } from "../../redux/homework/homework.actions";
import { selectGroups } from "../../redux/homework/homework.selectors";

const HomeworkMenu = ({ groupsList }) => {
  console.log("groupsList menu", groupsList);
  return (
    <div>
      {groupsList ? (
        <div>
          <ul className="nav nav-tabs card-header-tabs">
            {!!groupsList.groupDtoList && groupsList.groupDtoList.length > 1
              ? groupsList.groupDtoList.map((group) => (
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Link
                        to={`/viewhomework/${group.groupName}/${group.groupId}`}
                      >
                        {group.groupName}
                      </Link>
                    </a>
                  </li>
                ))
              : null}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  groupsList: selectGroups,
});
const mapDispatchToProps = (dispatch) => ({
  fetchGroupsByStudentIdStartDispatch: (studentId) =>
    dispatch(fetchGroupsByStudentIdStart(studentId)),
});

export default connect(null, mapDispatchToProps)(HomeworkMenu);
