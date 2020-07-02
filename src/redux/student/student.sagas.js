import { all, call, put, takeLatest } from "redux-saga/effects";
import StudentActionTypes from "./student.types";
import { fetchStudentsSuccess, fetchStudentsFailure } from "./student.actions";
import API from "../../services/api";

const api = API.create();

function* fetchStudentsAsynch(api) {
  try {
    const response = yield call(api.getAllStudents);
    yield put(fetchStudentsSuccess(response.data));
  } catch (error) {
    yield put(fetchStudentsFailure(error.message));
    console.log(error.message);
  }
}

function* createStudentAsynch(api, action) {
  try {
    const response = yield call(api.createStudent, action.payload);
    console.log("response", response);
  } catch (error) {
    console.log(error.message);
  }
}

export function* fetchStudentsStarts() {
  yield takeLatest(
    StudentActionTypes.FETCH_STUDENT_START,
    fetchStudentsAsynch,
    api
  );
}

export function* createStudent() {
  yield takeLatest(StudentActionTypes.CREATE_STUDENT, createStudentAsynch, api);
}

export default function* studentSagas() {
  yield all([call(fetchStudentsStarts), call(createStudent)]);
}
