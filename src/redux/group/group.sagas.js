import { call, put, all, takeLatest } from "redux-saga/effects";
import GroupActionTypes from "./group.types";
import API from "../../services/api";
import { createBrowserHistory } from "history";
import {
  fetchGroupSuccess,
  fetchGroupFailure,
  createGroupSuccess,
  createGroupFailure,
  fetchGroupByGroupIdUpdateSuccess,
  fetchGroupByGroupIdUpdateFailure,
  deleteGroupByGroupIdSuccess,
  deleteGroupByGroupIdFailure,
  updateGroupSuccess,
  updateGroupFailure,
} from "../../redux/group/group.actions";

const api = API.create();
const RESPONSE_STATUS_SUCCESS = 200;
const history = createBrowserHistory();

function* fetchGroupsStartAsync(api, action) {
  try {
    const response = yield call(api.fetchAllGroups);
    if (response.status === RESPONSE_STATUS_SUCCESS) {
      yield put(fetchGroupSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchGroupFailure(error.message));
  }
}

function* fetchGroupByGroupIdStartAsync(api, action) {
  console.log("action.payload", action.payload);
  try {
    const response = yield call(api.fetchGroupByGroupId, action.payload);

    console.log("response", response);
    console.log("response", response.data);
    console.log("response", response.status);
    if (response.status === RESPONSE_STATUS_SUCCESS) {
      yield put(fetchGroupByGroupIdUpdateSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchGroupByGroupIdUpdateFailure(error.message));
  }
}

function* createGroupAsync(api, action) {
  try {
    const response = yield call(api.createGroup, action.payload);
    const successMessage = "test";
    if (response.ok) {
      yield put(createGroupSuccess(successMessage));
    } else {
      const errorMessage = "Failed To Create Group";
      yield put(createGroupFailure(errorMessage));
    }
  } catch (error) {
    yield put(createGroupFailure(error.message));
  }
}

function* updateGroupAsync(api, action) {
  console.log("action.payload", action.payload);
  console.log("history", history);

  alert("updateGroupAsync");
  try {
    const response = yield call(api.updateGroup, action.payload);
    if (response.ok) {
      const successMessage = "Group Updated Successfully";
      yield put(updateGroupSuccess(successMessage));
    } else {
      const errorMessage = "Failed to Upadate Group";
      yield put(updateGroupFailure(errorMessage));
    }
  } catch (error) {
    yield put(updateGroupFailure(error));
  }
}

function* deleteGroupAsync(api, action) {
  console.log("action.payload", action.payload);
  alert("delete async");
  try {
    const response = yield call(api.deleteGroup, action.payload);
    console.log("response", response);
    console.log("response", response.status);
    console.log("response", response.ok);
    alert("delete async sec");
    const successMessage = "deleted";
    if (response.ok) {
      yield put(deleteGroupByGroupIdSuccess(successMessage));
    } else {
      console.log("response.Error", response.Error);
      console.log("response", response.status);
      console.log("response", response.ok);
      const errorMessage = "Something went wrong, Please contact Admin Team";
      yield put(deleteGroupByGroupIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(deleteGroupByGroupIdFailure(error.message));
  }
}

export function* fetchGroupsStart() {
  yield takeLatest(
    GroupActionTypes.FETCH_GROUP_START,
    fetchGroupsStartAsync,
    api
  );
}

export function* createGroup() {
  yield takeLatest(GroupActionTypes.CREATE_GROUP, createGroupAsync, api);
}

export function* updateGroup() {
  yield takeLatest(GroupActionTypes.UPDATE_GROUP, updateGroupAsync, api);
}

export function* fetchGroupByGroupIdStart() {
  yield takeLatest(
    GroupActionTypes.FETCH_GROUP_BYGROUPID_START,
    fetchGroupByGroupIdStartAsync,
    api
  );
}

export function* deleteGroup() {
  yield takeLatest(GroupActionTypes.DELETE_GROUP, deleteGroupAsync, api);
}

export default function* groupSagas() {
  yield all([
    call(fetchGroupsStart),
    call(createGroup),
    call(fetchGroupByGroupIdStart),
    call(deleteGroup),
    call(updateGroup),
  ]);
}
