import { call, put, all, takeLatest } from "redux-saga/effects";
import SubjectActionTypes from "./subject.types";
import API from "../../services/api";
import {
  fetchSubjectSuccess,
  fetchSubjectFailure,
} from "../../redux/subject/subject.actions";

const api = API.create();

function* fetchSubjectsStartAsynch(api, action) {
  try {
    const response = yield call(api.fetchAllSubjects);
    if (response.status === 200) {
      yield put(fetchSubjectSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchSubjectFailure(error.message));
  }
}

export function* fetchSubjectsStart() {
  yield takeLatest(
    SubjectActionTypes.FETCH_SUBJECT_START,
    fetchSubjectsStartAsynch,
    api
  );
}

export default function* subjectSagas() {
  yield all([call(fetchSubjectsStart)]);
}
