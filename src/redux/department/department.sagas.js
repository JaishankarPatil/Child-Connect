import { call, put, all, takeLatest } from "redux-saga/effects";
import DepartmentActionTypes from "./department.types";
import API from "../../services/api";
import { createBrowserHistory } from "history";
import {
  fetchDepartmentSuccess,
  fetchDepartmentFailure,
  createDepartmentSuccess,
  createDepartmentFailure,
  fetchDepartmentByDepartmentIdUpdateSuccess,
  fetchDepartmentByDepartmentIdUpdateFailure,
  deleteDepartmentByDepartmentIdSuccess,
  deleteDepartmentByDepartmentIdFailure,
  updateDepartmentSuccess,
  updateDepartmentFailure,
} from "../../redux/department/department.actions";

const api = API.create();
const RESPONSE_STATUS_SUCCESS = 200;
const history = createBrowserHistory();

function* fetchDepartmentsStartAsync(api, action) {
  try {
    const response = yield call(api.fetchAllDepartments);
    if (response.status === RESPONSE_STATUS_SUCCESS) {
      yield put(fetchDepartmentSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchDepartmentFailure(error.message));
  }
}

function* fetchDepartmentByDepartmentIdStartAsync(api, action) {
  console.log("action.payload", action.payload);
  try {
    const response = yield call(
      api.fetchDepartmentByDepartmentId,
      action.payload
    );

    console.log("response", response);
    console.log("response", response.data);
    console.log("response", response.status);
    if (response.ok) {
      alert("i am ok");
      yield put(fetchDepartmentByDepartmentIdUpdateSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchDepartmentByDepartmentIdUpdateFailure(error.message));
  }
}

function* createDepartmentAsync(api, action) {
  try {
    const response = yield call(api.createDepartment, action.payload);
    const successMessage = "test";
    if (response.ok) {
      yield put(createDepartmentSuccess(successMessage));
    } else {
      const errorMessage = "Failed To Create Department";
      yield put(createDepartmentFailure(errorMessage));
    }
  } catch (error) {
    yield put(createDepartmentFailure(error.message));
  }
}

function* updateDepartmentAsync(api, action) {
  console.log("action.payload", action.payload);
  console.log("history", history);

  alert("updateDepartmentAsync");
  try {
    const response = yield call(api.updateDepartment, action.payload);
    if (response.ok) {
      const successMessage = "Department Updated Successfully";
      yield put(updateDepartmentSuccess(successMessage));
    } else {
      const errorMessage = "Failed to Upadate Department";
      yield put(updateDepartmentFailure(errorMessage));
    }
  } catch (error) {
    yield put(updateDepartmentFailure(error));
  }
}

function* deleteDepartmentAsync(api, action) {
  console.log("action.payload", action.payload);
  alert("delete async");
  try {
    const response = yield call(api.deleteDepartment, action.payload);
    console.log("response", response);
    console.log("response", response.status);
    console.log("response", response.ok);
    alert("delete async sec");
    const successMessage = "deleted";
    if (response.ok) {
      yield put(deleteDepartmentByDepartmentIdSuccess(successMessage));
    } else {
      console.log("response.Error", response.Error);
      console.log("response", response.status);
      console.log("response", response.ok);
      const errorMessage = "Something went wrong, Please contact Admin Team";
      yield put(deleteDepartmentByDepartmentIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(deleteDepartmentByDepartmentIdFailure(error.message));
  }
}

export function* fetchDepartmentsStart() {
  yield takeLatest(
    DepartmentActionTypes.FETCH_DEPARTMENT_START,
    fetchDepartmentsStartAsync,
    api
  );
}

export function* createDepartment() {
  yield takeLatest(
    DepartmentActionTypes.CREATE_DEPARTMENT,
    createDepartmentAsync,
    api
  );
}

export function* updateDepartment() {
  yield takeLatest(
    DepartmentActionTypes.UPDATE_DEPARTMENT,
    updateDepartmentAsync,
    api
  );
}

export function* fetchDepartmentByDepartmentIdStart() {
  yield takeLatest(
    DepartmentActionTypes.FETCH_DEPARTMENT_BYDEPARTMENTID_START,
    fetchDepartmentByDepartmentIdStartAsync,
    api
  );
}

export function* deleteDepartment() {
  yield takeLatest(
    DepartmentActionTypes.DELETE_DEPARTMENT,
    deleteDepartmentAsync,
    api
  );
}

export default function* subjectSagas() {
  yield all([
    call(fetchDepartmentsStart),
    call(createDepartment),
    call(fetchDepartmentByDepartmentIdStart),
    call(deleteDepartment),
    call(updateDepartment),
  ]);
}
