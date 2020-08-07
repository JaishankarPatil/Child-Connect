import { put, call, all, takeLatest } from "redux-saga/effects";
import HomeworkActionTypes from "./homework.types";
import {
  fetchHomeworkSuccess,
  fetchHomeworkFailure,
  createHomeworkSuccess,
  createHomeworkFailure,
  updateHomeworkSuccess,
  updateHomeworkFailure,
  fetchHomeworkByHomeworkIdSuccess,
  fetchHomeworkByHomeworkIdFailure,
  deleteHomeworkByHomeworkIdSuccess,
  deleteHomeworkByHomeworkIdFailure,
  fetchGroupsByStudentIdSuccess,
  fetchGroupsByStudentIdFailure,
  fetchHomeworksByGroupIdSuccess,
  fetchHomeworksByGroupIdFailure,
} from "./homework.actions";
import HOMEWORK_DATA from "./homework.data";
import API from "../../services/api";
const api = API.create();

function* fetchHomeworkStartsAsynch(api, action) {
  try {
    const response = yield call(api.fetchAllHomeworks);
    console.log("response out", response);
    if (response.ok) {
      yield put(fetchHomeworkSuccess(HOMEWORK_DATA));
    } else {
      const failureMessage = "Failed to fecth all homeworks";
      yield put(fetchHomeworkFailure(failureMessage));
    }
  } catch (error) {
    yield put(fetchHomeworkFailure(error.message));
  }
}

function* fetchHomeworkByHomeworkIdStartAsync(api, action) {
  try {
    const response = yield call(api.fetchHomeworkByHomeworkId, action.payload);
    if (response.ok) {
      yield put(fetchHomeworkByHomeworkIdSuccess(response.data));
    } else {
      const errorMessage = "Failed to fetch Homework By homeworkId";
      yield put(fetchHomeworkByHomeworkIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(fetchHomeworkByHomeworkIdFailure(error));
  }
}

function* fectchGroupsByStudentIdAsync(api, action) {
  try {
    const response = yield call(api.fetchGroupsByStudentId, action.payload);
    if (response.ok) {
      yield put(fetchGroupsByStudentIdSuccess(response.data));
    } else {
      const errorMessage = "Failed to fetch groups by student Id";
      yield put(fetchGroupsByStudentIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(fetchGroupsByStudentIdFailure(error));
  }
}

function* fetchHomeworksByGroupIdStartAsync(api, action) {
  try {
    const response = yield call(api.fetchHomeworkByGroupId, action.payload);
    if (response.ok) {
      yield put(fetchHomeworksByGroupIdSuccess(response.data));
    } else {
      const errorMessage = "Failed to fetch homeworks by groupId";
      yield put(fetchHomeworksByGroupIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(fetchHomeworksByGroupIdFailure(error));
  }
}

function* createHomeworkAsynch(api, action) {
  try {
    const response = yield call(api.createHomework, action.payload);
    if (response.ok) {
      const successMessage = "Homework is created Successfully";
      yield put(createHomeworkSuccess(successMessage));
    } else {
      const errorMessage = "Failed o create Homework";
      yield put(createHomeworkFailure(errorMessage));
    }
  } catch (error) {
    yield put(createHomeworkFailure(error));
  }
}

function* updateHomeworkAsynch(api, action) {
  try {
    const response = yield call(api.updateHomework, action.payload);
    if (response.ok) {
      const successMessage = "Homework is updated successfully";
      yield put(updateHomeworkSuccess(successMessage));
    } else {
      const errorMessage = "Failed to update Homework";
      yield put(updateHomeworkFailure(errorMessage));
    }
  } catch (error) {
    yield put(updateHomeworkFailure(error));
  }
}

function* deleteHomeworkAsynch(api, action) {
  try {
    const response = yield call(api.deleteHomework, action.payload);
    if (response.ok) {
      const successMessage = "Homework is deleted successfully";
      yield put(deleteHomeworkByHomeworkIdSuccess(successMessage));
    } else {
      const failureMessage = "Failed to delete the Homework";
      yield put(deleteHomeworkByHomeworkIdFailure(failureMessage));
    }
  } catch (error) {
    yield put(deleteHomeworkByHomeworkIdFailure(error));
  }
}

export function* fetchHomeworkStarts() {
  yield takeLatest(
    HomeworkActionTypes.FETCH_HOMEWORK_START,
    fetchHomeworkStartsAsynch,
    api
  );
}

export function* createHomework() {
  yield takeLatest(
    HomeworkActionTypes.CREATE_HOMEWORK,
    createHomeworkAsynch,
    api
  );
}

export function* updateHomework() {
  yield takeLatest(
    HomeworkActionTypes.UPDATE_HOMEWORK,
    updateHomeworkAsynch,
    api
  );
}

export function* deleteHomework() {
  yield takeLatest(
    HomeworkActionTypes.DELETE_HOMEWORK,
    deleteHomeworkAsynch,
    api
  );
}

export function* fetchHomeworkByHomeworkIdStart() {
  yield takeLatest(
    HomeworkActionTypes.FETCH_HOMEWORK_BYHOMEWORKID_START,
    fetchHomeworkByHomeworkIdStartAsync,
    api
  );
}

export function* fectchGroupsByStudentIdStart() {
  yield takeLatest(
    HomeworkActionTypes.FETCH_GROUPS_BYSTUDENTID_START,
    fectchGroupsByStudentIdAsync,
    api
  );
}

export function* fetchHomeworksByGroupIdStart() {
  yield takeLatest(
    HomeworkActionTypes.FETCH_HOMEWORKS_BYGROUPID_START,
    fetchHomeworksByGroupIdStartAsync,
    api
  );
}

export default function* homeworkSagas() {
  yield all([
    call(fetchHomeworkStarts),
    call(createHomework),
    call(fetchHomeworkByHomeworkIdStart),
    call(fetchHomeworksByGroupIdStart),
    call(fectchGroupsByStudentIdStart),
    call(updateHomework),
    call(deleteHomework),
  ]);
}
