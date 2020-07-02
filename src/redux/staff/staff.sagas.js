import { call, all, takeLatest, put, select } from "redux-saga/effects";
import axios from "axios";

import API from "../../services/api.js";

import { fetchStaffsSuccess, fetchStaffsFailure } from "./staff.actions";
import staffActionTypes from "./staff.types";
import { selectStaffs } from "./staff.selectors";

const api = API.create();

const staffData = {
  firstName: "vishu",
  midName: "vishu",
  lastName: "vishu",
  dateOfBirth: "2020-06-27T18:00:51.032Z",
  gender: "Male",
  bloodGroup: "AB +ve",
  adharNumber: "123456",
  panNumber: "123456",
  qualification: "BE",
  email: "ramesh@gmail.com",
  mobileNumber: "123456789",
  alternativeMobileNumber: "1234569",
  pfNumber: "DES45885",
  address: "Vijaupur",
  area: "Bang",
  city: "Bang",
  state: "KA",
  pincode: "test",
  dateOfJoining: "2020-06-27T18:00:51.032Z",
  jobType: "Teaching",
  jobHours: "fullTime",
  department: "Maths",
  jobDesignation: "Mast",
  employee_number: "457888",
  description: "gfdfd",
  relieved_date: "2020-06-27T18:00:51.032Z",
};

function* fetchStaffsDataStartAsync(api, action) {
  try {
    const response = yield call(api.getAllStaffs);

    yield put(fetchStaffsSuccess(response.data));
  } catch (error) {
    yield put(fetchStaffsFailure(error.message));
  }
}

const url =
  "https://walkinchildconnect.cloudjiffy.net/ChildConnectAdminWeb/staff/v1/createStaff";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEiLCJpYXQiOjE1OTM0NTUzMDUsImV4cCI6MTU5MzU0MTcwNX0.jSR1nc_7pOQktJTWQbXBOUwpMVsabXkupwg-WsP5Hant8RQKbITNI5NrLWNQ0OrSQ685Rv4HVfaFsaHnCxTZoQ",
  },
};

function* createStaffMethod(api, action) {
  console.log(action);
  console.log(action);
  const respon = yield call(api.addStaff, action.payload);
  console.log("respoooo", respon);
}

function* updateStaffAsynch(api, action) {
  console.log("update", action.payload);
  const response = yield call(api.updateStaff, action.payload);
}

function* deleteStaffAsync(api, action) {
  console.log("API", api);
  console.log("action", action);
  console.log("API", action.payload.staffId);

  const response = yield call(api.deleteStaff, action.payload.staffId);

  console.log("respo ", response);
}

export function* fetchStaffsDataStart() {
  yield takeLatest(
    staffActionTypes.FETCH_STAFFS_START,
    fetchStaffsDataStartAsync,
    api
  );
}

export function* deleteStaff() {
  yield takeLatest(staffActionTypes.DELETE_STAFF, deleteStaffAsync, api);
}

export function* createStaff() {
  yield takeLatest(staffActionTypes.CREATE_STAFF, createStaffMethod, api);
}

export function* updateStaff() {
  yield takeLatest(staffActionTypes.UPDATE_STAFF, updateStaffAsynch, api);
}

export default function* staffSaga() {
  yield all([
    call(fetchStaffsDataStart),
    call(createStaff),
    call(updateStaff),
    call(deleteStaff),
  ]);
}
