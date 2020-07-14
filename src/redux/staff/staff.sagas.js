import { call, put, all, takeLatest } from "redux-saga/effects";
import StaffActionTypes from "./staff.types";
import API from "../../services/api";
import { createBrowserHistory } from "history";
import {
  fetchStaffSuccess,
  fetchStaffFailure,
  createStaffSuccess,
  createStaffFailure,
  fetchStaffByStaffIdUpdateSuccess,
  fetchStaffByStaffIdUpdateFailure,
  deleteStaffByStaffIdSuccess,
  deleteStaffByStaffIdFailure,
  updateStaffSuccess,
  updateStaffFailure,
} from "../../redux/staff/staff.actions";

const api = API.create();
const history = createBrowserHistory();

function* fetchStaffsStartAsync(api, action) {
  try {
    const response = yield call(api.fetchAllStaffs);
    if (response.ok) {
      yield put(fetchStaffSuccess(response.data));
    } else {
      const errorMessage = "Failed to fatch staffs";
      yield put(fetchStaffFailure(errorMessage));
    }
  } catch (error) {
    yield put(fetchStaffFailure(error.message));
  }
}

function* fetchStaffByStaffIdStartAsync(api, action) {
  console.log("action.payload", action.payload);
  try {
    const response = yield call(api.fetchStaffByStaffId, action.payload);

    console.log("response", response);
    console.log("response", response.data);
    console.log("response", response.status);
    if (response.ok) {
      yield put(fetchStaffByStaffIdUpdateSuccess(response.data));
    } else {
      const errorMessage = "Failed to fetch staff by styaff Id";
      yield put(fetchStaffByStaffIdUpdateFailure(errorMessage));
    }
  } catch (error) {
    yield put(fetchStaffByStaffIdUpdateFailure(error.message));
  }
}

function* createStaffAsync(api, action) {
  console.log("action.payload", action.payload);
  alert("createStaffAsync");
  try {
    const response = yield call(api.createStaff, action.payload);
    const successMessage = "test";
    if (response.ok) {
      yield put(createStaffSuccess(successMessage));
    } else {
      const errorMessage = "Failed To Create Staff";
      yield put(createStaffFailure(errorMessage));
    }
  } catch (error) {
    yield put(createStaffFailure(error.message));
  }
}

function* updateStaffAsync(api, action) {
  console.log("action.payload", action.payload);
  console.log("history", history);

  alert("updateStaffAsync");
  try {
    const response = yield call(api.updateStaff, action.payload);
    if (response.ok) {
      const successMessage = "Staff Updated Successfully";
      yield put(updateStaffSuccess(successMessage));
    } else {
      const errorMessage = "Failed to Upadate Staff";
      yield put(updateStaffFailure(errorMessage));
    }
  } catch (error) {
    yield put(updateStaffFailure(error));
  }
}

function* deleteStaffAsync(api, action) {
  console.log("action.payload", action.payload);
  alert("delete async");
  try {
    const response = yield call(api.deleteStaff, action.payload);
    console.log("response", response);
    console.log("response", response.status);
    console.log("response", response.ok);
    alert("delete async sec");
    const successMessage = "deleted";
    if (response.ok) {
      yield put(deleteStaffByStaffIdSuccess(successMessage));
    } else {
      console.log("response.Error", response.Error);
      console.log("response", response.status);
      console.log("response", response.ok);
      const errorMessage = "Something went wrong, Please contact Admin Team";
      yield put(deleteStaffByStaffIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(deleteStaffByStaffIdFailure(error.message));
  }
}

export function* fetchStaffsStart() {
  yield takeLatest(
    StaffActionTypes.FETCH_STAFF_START,
    fetchStaffsStartAsync,
    api
  );
}

export function* createStaff() {
  yield takeLatest(StaffActionTypes.CREATE_STAFF, createStaffAsync, api);
}

export function* updateStaff() {
  yield takeLatest(StaffActionTypes.UPDATE_STAFF, updateStaffAsync, api);
}

export function* fetchStaffByStaffIdStart() {
  yield takeLatest(
    StaffActionTypes.FETCH_STAFF_BYSTAFFID_START,
    fetchStaffByStaffIdStartAsync,
    api
  );
}

export function* deleteStaff() {
  yield takeLatest(StaffActionTypes.DELETE_STAFF, deleteStaffAsync, api);
}

export default function* staffSagas() {
  yield all([
    call(fetchStaffsStart),
    call(createStaff),
    call(fetchStaffByStaffIdStart),
    call(deleteStaff),
    call(updateStaff),
  ]);
}
