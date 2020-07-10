import { call, put, all, takeLatest } from "redux-saga/effects";
import StudentActionTypes from "./student.types";
import API from "../../services/api";
import { createBrowserHistory } from "history";
import {
  fetchStudentSuccess,
  fetchStudentFailure,
  createStudentSuccess,
  createStudentFailure,
  fetchStudentByStudentIdUpdateSuccess,
  fetchStudentByStudentIdUpdateFailure,
  deleteStudentByStudentIdSuccess,
  deleteStudentByStudentIdFailure,
  updateStudentSuccess,
  updateStudentFailure,
} from "../../redux/student/student.actions";

const api = API.create();
const RESPONSE_STATUS_SUCCESS = 200;
const history = createBrowserHistory();

function* fetchStudentsStartAsync(api, action) {
  try {
    const response = yield call(api.fetchAllStudents);
    if (response.status === RESPONSE_STATUS_SUCCESS) {
      yield put(fetchStudentSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchStudentFailure(error.message));
  }
}

function* fetchStudentByStudentIdStartAsync(api, action) {
  console.log("action.payload", action.payload);
  try {
    const response = yield call(api.fetchStudentByStudentId, action.payload);

    console.log("response", response);
    console.log("response", response.data);
    console.log("response", response.status);
    if (response.status === RESPONSE_STATUS_SUCCESS) {
      yield put(fetchStudentByStudentIdUpdateSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchStudentByStudentIdUpdateFailure(error.message));
  }
}

function* createStudentAsync(api, action) {
  try {
    const response = yield call(api.createStudent, action.payload);
    const successMessage = "test";
    if (response.ok) {
      yield put(createStudentSuccess(successMessage));
    } else {
      const errorMessage = "Failed To Create Student";
      yield put(createStudentFailure(errorMessage));
    }
  } catch (error) {
    yield put(createStudentFailure(error.message));
  }
}

function* updateStudentAsync(api, action) {
  console.log("action.payload", action.payload);
  console.log("history", history);

  alert("updateStudentAsync");
  try {
    const response = yield call(api.updateStudent, action.payload);
    if (response.ok) {
      const successMessage = "Student Updated Successfully";
      yield put(updateStudentSuccess(successMessage));
    } else {
      const errorMessage = "Failed to Upadate Student";
      yield put(updateStudentFailure(errorMessage));
    }
  } catch (error) {
    yield put(updateStudentFailure(error));
  }
}

function* deleteStudentAsync(api, action) {
  console.log("action.payload", action.payload);
  alert("delete async");
  try {
    const response = yield call(api.deleteStudent, action.payload);
    console.log("response", response);
    console.log("response", response.status);
    console.log("response", response.ok);
    alert("delete async sec");
    const successMessage = "deleted";
    if (response.ok) {
      yield put(deleteStudentByStudentIdSuccess(successMessage));
    } else {
      console.log("response.Error", response.Error);
      console.log("response", response.status);
      console.log("response", response.ok);
      const errorMessage = "Something went wrong, Please contact Admin Team";
      yield put(deleteStudentByStudentIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(deleteStudentByStudentIdFailure(error.message));
  }
}

export function* fetchStudentsStart() {
  yield takeLatest(
    StudentActionTypes.FETCH_STUDENT_START,
    fetchStudentsStartAsync,
    api
  );
}

export function* createStudent() {
  yield takeLatest(StudentActionTypes.CREATE_STUDENT, createStudentAsync, api);
}

export function* updateStudent() {
  yield takeLatest(StudentActionTypes.UPDATE_STUDENT, updateStudentAsync, api);
}

export function* fetchStudentByStudentIdStart() {
  yield takeLatest(
    StudentActionTypes.FETCH_STUDENT_BYSTUDENTID_START,
    fetchStudentByStudentIdStartAsync,
    api
  );
}

export function* deleteStudent() {
  yield takeLatest(StudentActionTypes.DELETE_STUDENT, deleteStudentAsync, api);
}

export default function* studentSagas() {
  yield all([
    call(fetchStudentsStart),
    call(createStudent),
    call(fetchStudentByStudentIdStart),
    call(deleteStudent),
    call(updateStudent),
  ]);
}
