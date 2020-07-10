import { call, put, all, takeLatest } from "redux-saga/effects";
import DesignationActionTypes from "./designation.types";
import API from "../../services/api";
import { createBrowserHistory } from "history";
import {
  fetchDesignationSuccess,
  fetchDesignationFailure,
  createDesignationSuccess,
  createDesignationFailure,
  fetchDesignationByDesignationIdUpdateSuccess,
  fetchDesignationByDesignationIdUpdateFailure,
  deleteDesignationByDesignationIdSuccess,
  deleteDesignationByDesignationIdFailure,
  updateDesignationSuccess,
  updateDesignationFailure,
} from "../../redux/designation/designation.actions";

const api = API.create();
const RESPONSE_STATUS_SUCCESS = 200;
const history = createBrowserHistory();

function* fetchDesignationsStartAsync(api, action) {
  try {
    const response = yield call(api.fetchAllDesignations);
    if (response.status === RESPONSE_STATUS_SUCCESS) {
      yield put(fetchDesignationSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchDesignationFailure(error.message));
  }
}

function* fetchDesignationByDesignationIdStartAsync(api, action) {
  console.log("action.payload", action.payload);
  try {
    const response = yield call(
      api.fetchDesignationByDesignationId,
      action.payload
    );

    console.log("response", response);
    console.log("response", response.data);
    console.log("response", response.status);
    if (response.status === RESPONSE_STATUS_SUCCESS) {
      yield put(fetchDesignationByDesignationIdUpdateSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchDesignationByDesignationIdUpdateFailure(error.message));
  }
}

function* createDesignationAsync(api, action) {
  try {
    const response = yield call(api.createDesignation, action.payload);
    const successMessage = "test";
    if (response.ok) {
      yield put(createDesignationSuccess(successMessage));
    } else {
      const errorMessage = "Failed To Create Designation";
      yield put(createDesignationFailure(errorMessage));
    }
  } catch (error) {
    yield put(createDesignationFailure(error.message));
  }
}

function* updateDesignationAsync(api, action) {
  console.log("action.payload", action.payload);
  console.log("history", history);

  alert("updateDesignationAsync");
  try {
    const response = yield call(api.updateDesignation, action.payload);
    if (response.ok) {
      const successMessage = "Designation Updated Successfully";
      yield put(updateDesignationSuccess(successMessage));
    } else {
      const errorMessage = "Failed to Upadate Designation";
      yield put(updateDesignationFailure(errorMessage));
    }
  } catch (error) {
    yield put(updateDesignationFailure(error));
  }
}

function* deleteDesignationAsync(api, action) {
  console.log("action.payload", action.payload);
  alert("delete async");
  try {
    const response = yield call(api.deleteDesignation, action.payload);
    console.log("response", response);
    console.log("response", response.status);
    console.log("response", response.ok);
    alert("delete async sec");
    const successMessage = "deleted";
    if (response.ok) {
      yield put(deleteDesignationByDesignationIdSuccess(successMessage));
    } else {
      console.log("response.Error", response.Error);
      console.log("response", response.status);
      console.log("response", response.ok);
      const errorMessage = "Something went wrong, Please contact Admin Team";
      yield put(deleteDesignationByDesignationIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(deleteDesignationByDesignationIdFailure(error.message));
  }
}

export function* fetchDesignationsStart() {
  yield takeLatest(
    DesignationActionTypes.FETCH_DESIGNATION_START,
    fetchDesignationsStartAsync,
    api
  );
}

export function* createDesignation() {
  yield takeLatest(
    DesignationActionTypes.CREATE_DESIGNATION,
    createDesignationAsync,
    api
  );
}

export function* updateDesignation() {
  yield takeLatest(
    DesignationActionTypes.UPDATE_DESIGNATION,
    updateDesignationAsync,
    api
  );
}

export function* fetchDesignationByDesignationIdStart() {
  yield takeLatest(
    DesignationActionTypes.FETCH_DESIGNATION_BYDESIGNATIONID_START,
    fetchDesignationByDesignationIdStartAsync,
    api
  );
}

export function* deleteDesignation() {
  yield takeLatest(
    DesignationActionTypes.DELETE_DESIGNATION,
    deleteDesignationAsync,
    api
  );
}

export default function* subjectSagas() {
  yield all([
    call(fetchDesignationsStart),
    call(createDesignation),
    call(fetchDesignationByDesignationIdStart),
    call(deleteDesignation),
    call(updateDesignation),
  ]);
}
