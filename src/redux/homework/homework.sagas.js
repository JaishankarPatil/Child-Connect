import { put, call, all, takeLatest } from "redux-saga/effects";
import HomeworkActionTypes from "./homework.types";
import { fetchHomeworkSuccess } from "./homework.actions";
import HOMEWORK_DATA from "./homework.data";

function* fetchHomeworkStartsAsynch() {
  yield put(fetchHomeworkSuccess(HOMEWORK_DATA));
}

export function* fetchHomeworkStarts() {
  yield takeLatest(
    HomeworkActionTypes.FETCH_HOMEWORK_START,
    fetchHomeworkStartsAsynch
  );
}

export default function* homeworkSagas() {
  yield all([call(fetchHomeworkStarts)]);
}
