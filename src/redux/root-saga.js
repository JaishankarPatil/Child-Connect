import { all, call } from "redux-saga/effects";

import staffSaga from "../redux/staff/staff.sagas";
import studentSagas from "../redux/student/student.sagas";
import groupSagas from "../redux/group/group.sagas";
import departmentSagas from "../redux/department/department.sagas";
import designationSagas from "../redux/designation/designation.sagas";
import standardSagas from "../redux/standard/standard.sagas";
import subjectSagas from "../redux/subject/subject.sagas";
import homeworkSagas from "../redux/homework/homework.sagas";

export default function* rootSaga() {
  yield all([
    call(staffSaga),
    call(studentSagas),
    call(groupSagas),
    call(departmentSagas),
    call(designationSagas),
    call(standardSagas),
    call(subjectSagas),
    call(homeworkSagas),
  ]);
}
