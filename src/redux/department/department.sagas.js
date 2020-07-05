import { call, all, put, takeLatest } from "redux-saga/effects";
import DepartmentActionTypes from "./department.types";
import API from "../../services/api";
import {
  fetchDepartmentSuccess,
  fetchDepartmentFail,
} from "../department/department.actions";

const api = API.create();

function* fetchDepartmentStartAsynch(api) {
  try {
    const response = yield call(api.fetchAllDepartments);

    if (response.status === 200) {
      yield put(fetchDepartmentSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchDepartmentFail(error.message));
  }
}

export function* fetchDepartmentStart() {
  yield takeLatest(
    DepartmentActionTypes.FETCH_DEPARTMENT_START,
    fetchDepartmentStartAsynch,
    api
  );
}

export default function* departmentSagas() {
  yield all([call(fetchDepartmentStart)]);
}
