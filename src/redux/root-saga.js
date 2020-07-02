import { all, call } from "redux-saga/effects";

import staffSaga from "../redux/staff/staff.sagas";
import studentSagas from "../redux/student/student.sagas";

export default function* rootSaga() {
  yield all([call(staffSaga), call(studentSagas)]);
}
