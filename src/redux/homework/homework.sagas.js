import { put, call, all, takeLatest } from "redux-saga/effects";
import HomeworkActionTypes from "./homework.types";
import {
  fetchHomeworkSuccess,
  createHomeworkSuccess,
  createHomeworkFailure,
} from "./homework.actions";
import HOMEWORK_DATA from "./homework.data";
import API from "../../services/api";
const api = API.create();

function* fetchHomeworkStartsAsynch() {
  yield put(fetchHomeworkSuccess(HOMEWORK_DATA));
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

export function* fetchHomeworkStarts() {
  yield takeLatest(
    HomeworkActionTypes.FETCH_HOMEWORK_START,
    fetchHomeworkStartsAsynch
  );
}

export function* createHomework() {
  yield takeLatest(
    HomeworkActionTypes.CREATE_HOMEWORK,
    createHomeworkAsynch,
    api
  );
}

export default function* homeworkSagas() {
  yield all([call(fetchHomeworkStarts), call(createHomework)]);
}
