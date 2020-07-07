import { call, put, all, takeLatest } from "redux-saga/effects";
import SubjectActionTypes from "./subject.types";
import API from "../../services/api";
import {
  fetchSubjectSuccess,
  fetchSubjectFailure,
  createSubjectSuccess,
  createSubjectFailure,
} from "../../redux/subject/subject.actions";

const api = API.create();

function* fetchSubjectsStartAsync(api, action) {
  try {
    const response = yield call(api.fetchAllSubjects);
    if (response.status === 200) {
      yield put(fetchSubjectSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchSubjectFailure(error.message));
  }
}

function* fetchSubjectBySubjectIdStartAsync(api, action) {
  console.log("action.payload", action.payload);

  const response = yield call(api.fetchSubjectBySubjectId, action.payload);

  console.log("response", response.data);
}

function* createSubjectAsync(api, action) {
  try {
    const response = yield call(api.createSubject, action.payload);
    const successMessage = "test";
    yield put(createSubjectSuccess(successMessage));
    console.log("response", response.data);
    console.log("response", response.status);
  } catch (error) {
    yield put(createSubjectFailure(error.message));
  }
}

export function* fetchSubjectsStart() {
  yield takeLatest(
    SubjectActionTypes.FETCH_SUBJECT_START,
    fetchSubjectsStartAsync,
    api
  );
}

export function* createSubject() {
  yield takeLatest(SubjectActionTypes.CREATE_SUBJECT, createSubjectAsync, api);
}

export function* fetchSubjectBySubjectIdStart() {
  yield takeLatest(
    SubjectActionTypes.FETCH_SUBJECT_BYSUBJECTID_START,
    fetchSubjectBySubjectIdStartAsync,
    api
  );
}

export default function* subjectSagas() {
  yield all([
    call(fetchSubjectsStart),
    call(createSubject),
    call(fetchSubjectBySubjectIdStart),
  ]);
}
