import { call, put, all, takeLatest } from "redux-saga/effects";
import StandardActionTypes from "./standard.types";
import API from "../../services/api";
import { createBrowserHistory } from "history";
import {
  fetchStandardSuccess,
  fetchStandardFailure,
  createStandardSuccess,
  createStandardFailure,
  fetchStandardByStandardIdUpdateSuccess,
  fetchStandardByStandardIdUpdateFailure,
  deleteStandardByStandardIdSuccess,
  deleteStandardByStandardIdFailure,
  updateStandardSuccess,
  updateStandardFailure,
} from "../../redux/standard/standard.actions";

const api = API.create();
const RESPONSE_STATUS_SUCCESS = 200;
const history = createBrowserHistory();

function* fetchStandardsStartAsync(api, action) {
  try {
    const response = yield call(api.fetchAllStandards);
    if (response.status === RESPONSE_STATUS_SUCCESS) {
      yield put(fetchStandardSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchStandardFailure(error.message));
  }
}

function* fetchStandardByStandardIdStartAsync(api, action) {
  console.log("action.payload", action.payload);
  try {
    const response = yield call(api.fetchStandardByStandardId, action.payload);

    console.log("response", response);
    console.log("response", response.data);
    console.log("response", response.status);
    if (response.status === RESPONSE_STATUS_SUCCESS) {
      yield put(fetchStandardByStandardIdUpdateSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchStandardByStandardIdUpdateFailure(error.message));
  }
}

function* createStandardAsync(api, action) {
  try {
    const response = yield call(api.createStandard, action.payload);
    const successMessage = "test";
    if (response.ok) {
      yield put(createStandardSuccess(successMessage));
    } else {
      const errorMessage = "Failed To Create Standard";
      yield put(createStandardFailure(errorMessage));
    }
  } catch (error) {
    yield put(createStandardFailure(error.message));
  }
}

function* updateStandardAsync(api, action) {
  console.log("action.payload", action.payload);
  console.log("history", history);

  alert("updateStandardAsync");
  try {
    const response = yield call(api.updateStandard, action.payload);
    if (response.ok) {
      const successMessage = "Standard Updated Successfully";
      yield put(updateStandardSuccess(successMessage));
    } else {
      const errorMessage = "Failed to Upadate Standard";
      yield put(updateStandardFailure(errorMessage));
    }
  } catch (error) {
    yield put(updateStandardFailure(error));
  }
}

function* deleteStandardAsync(api, action) {
  console.log("action.payload", action.payload);
  alert("delete async");
  try {
    const response = yield call(api.deleteStandard, action.payload);
    console.log("response", response);
    console.log("response", response.status);
    console.log("response", response.ok);
    alert("delete async sec");
    const successMessage = "deleted";
    if (response.ok) {
      yield put(deleteStandardByStandardIdSuccess(successMessage));
    } else {
      console.log("response.Error", response.Error);
      console.log("response", response.status);
      console.log("response", response.ok);
      const errorMessage = "Something went wrong, Please contact Admin Team";
      yield put(deleteStandardByStandardIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(deleteStandardByStandardIdFailure(error.message));
  }
}

export function* fetchStandardsStart() {
  yield takeLatest(
    StandardActionTypes.FETCH_STANDARD_START,
    fetchStandardsStartAsync,
    api
  );
}

export function* createStandard() {
  yield takeLatest(
    StandardActionTypes.CREATE_STANDARD,
    createStandardAsync,
    api
  );
}

export function* updateStandard() {
  yield takeLatest(
    StandardActionTypes.UPDATE_STANDARD,
    updateStandardAsync,
    api
  );
}

export function* fetchStandardByStandardIdStart() {
  yield takeLatest(
    StandardActionTypes.FETCH_STANDARD_BYSTANDARDID_START,
    fetchStandardByStandardIdStartAsync,
    api
  );
}

export function* deleteStandard() {
  yield takeLatest(
    StandardActionTypes.DELETE_STANDARD,
    deleteStandardAsync,
    api
  );
}

export default function* standardSagas() {
  yield all([
    call(fetchStandardsStart),
    call(createStandard),
    call(fetchStandardByStandardIdStart),
    call(deleteStandard),
    call(updateStandard),
  ]);
}
