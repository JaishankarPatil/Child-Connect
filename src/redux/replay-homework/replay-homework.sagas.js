import { put, call, all, takeLatest } from "redux-saga/effects";
import ReplayHomeworkActionTypes from "./replay-homework.types";
import {
  fetchReplayHomeworkByUserIdSuccess,
  fetchReplayHomeworkByUserIdFailure,
  createReplayHomeworkSuccess,
  createReplayHomeworkFailure,
  fetchReplayHomeworkByHomeworkReplayIdSuccess,
  fetchReplayHomeworkByReplayHomeworkIdFailure,
  updateReplayHomeworkSuccess,
  updateReplayHomeworkFailure,
  deleteReplayHomeworkByReplayHomeworkIdSuccess,
  deleteReplayHomeworkByReplayHomeworkIdFailure,
} from "./replay-homework.actions";
import API from "../../services/api";
const api = API.create();

function* fetchReplayHomeworkByReplayHomeworkIdStartAsynch(api, action) {
  try {
    const response = yield call(
      api.fetchReplayHomeworkByReplayHomeworkId,
      action.payload
    );
    if (response.ok) {
      yield put(fetchReplayHomeworkByHomeworkReplayIdSuccess(response.data));
    } else {
      const errorMessage = "Failed to fetch Replay Homework";
      yield put(fetchReplayHomeworkByReplayHomeworkIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(fetchReplayHomeworkByReplayHomeworkIdFailure(error));
  }
}

function* fetchReplayHomeworkByUserIdStartAsynch(api, action) {
  try {
    const response = yield call(
      api.fetchReplayHomeworksByUserId,
      action.payload
    );
    if (response.ok) {
      yield put(fetchReplayHomeworkByUserIdSuccess(response.data));
    } else {
      const errorMessage = "Failed to fetch Replay Homework";
      yield put(fetchReplayHomeworkByUserIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(fetchReplayHomeworkByUserIdFailure(error));
  }
}

function* createReplayHomeworkAsynch(api, action) {
  try {
    const response = yield call(api.createReplayHomework, action.payload);
    if (response.ok) {
      const sucsessMessage = "Replay Homework Created Success fully";
      yield put(createReplayHomeworkSuccess(sucsessMessage));
    } else {
      const errorMessage = "Failed to create Replay Homework";
      yield put(createReplayHomeworkFailure(errorMessage));
    }
  } catch (error) {
    yield put(createReplayHomeworkFailure(error));
  }
}

function* updateReplayHomeworkAsynch(api, action) {
  try {
    const response = yield call(api.updateReplayHomework, action.payload);
    if (response.ok) {
      const successMessage = "Replay Homework Updated Successfully";
      yield put(updateReplayHomeworkSuccess(successMessage));
    } else {
      const errorMessage = "Failed to updated replay homework";
      yield put(updateReplayHomeworkFailure(errorMessage));
    }
  } catch (error) {
    yield put(updateReplayHomeworkFailure(error));
  }
}

function* deleteReplayHomeworkAsynch(api, action) {
  try {
    const response = yield call(api.deleteReplayHomework, action.payload);
    if (response.ok) {
      const successMessage = "Replay Homework Deleted Successfully";
      yield put(deleteReplayHomeworkByReplayHomeworkIdSuccess(successMessage));
    } else {
      const errorMessage = "Failed to Delete Replay Homework";
      yield put(deleteReplayHomeworkByReplayHomeworkIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(deleteReplayHomeworkByReplayHomeworkIdFailure(error));
  }
}

export function* createReplayHomework() {
  yield takeLatest(
    ReplayHomeworkActionTypes.CREATE_REPLAYHOMEWORK,
    createReplayHomeworkAsynch,
    api
  );
}

export function* fetchReplayHomeworksByUserIdStart() {
  yield takeLatest(
    ReplayHomeworkActionTypes.FETCH_REPLAYHOMEWORK_BYUSERID_START,
    fetchReplayHomeworkByUserIdStartAsynch,
    api
  );
}

export function* fetchReplayHomeworkByReplayHomeworkIdStart() {
  yield takeLatest(
    ReplayHomeworkActionTypes.FETCH_REPLAYHOMEWORK_BYREPLAYHOMEWORKID_START,
    fetchReplayHomeworkByReplayHomeworkIdStartAsynch,
    api
  );
}

export function* updateReplayHomework() {
  yield takeLatest(
    ReplayHomeworkActionTypes.UPDATE_REPLAYHOMEWORK,
    updateReplayHomeworkAsynch,
    api
  );
}

export function* deleteReplayHomework() {
  yield takeLatest(
    ReplayHomeworkActionTypes.DELETE_REPLAYHOMEWORK,
    deleteReplayHomeworkAsynch,
    api
  );
}

export default function* replayHomeworkSagas() {
  yield all([
    call(fetchReplayHomeworksByUserIdStart),
    call(createReplayHomework),
    call(fetchReplayHomeworkByReplayHomeworkIdStart),
    call(updateReplayHomework),
    call(deleteReplayHomework),
  ]);
}
