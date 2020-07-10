import { call, put, all, takeLatest } from "redux-saga/effects";
import SubjectActionTypes from "./subject.types";
import API from "../../services/api";
import { createBrowserHistory } from "history";
import {
  fetchSubjectSuccess,
  fetchSubjectFailure,
  createSubjectSuccess,
  createSubjectFailure,
  fetchSubjectBySubjectIdUpdateSuccess,
  fetchSubjectBySubjectIdUpdateFailure,
  deleteSubjectBySubjectIdSuccess,
  deleteSubjectBySubjectIdFailure,
  updateSubjectSuccess,
  updateSubjectFailure,
} from "../../redux/subject/subject.actions";

const api = API.create();
const history = createBrowserHistory();

function* fetchSubjectsStartAsync(api, action) {
  try {
    const response = yield call(api.fetchAllSubjects);
    if (response.ok) {
      yield put(fetchSubjectSuccess(response.data));
    } else {
      const errorMessage = " Failed to fetch SubjectList";
      yield put(fetchSubjectFailure(errorMessage));
    }
  } catch (error) {
    yield put(fetchSubjectFailure(error.message));
  }
}

function* fetchSubjectBySubjectIdStartAsync(api, action) {
  try {
    const response = yield call(api.fetchSubjectBySubjectId, action.payload);

    if (response.ok) {
      yield put(fetchSubjectBySubjectIdUpdateSuccess(response.data));
    } else {
      const errorMessage = "Failed to fetch subject";
      yield put(fetchSubjectBySubjectIdUpdateFailure(errorMessage));
    }
  } catch (error) {
    yield put(fetchSubjectBySubjectIdUpdateFailure(error.message));
  }
}

function* createSubjectAsync(api, action) {
  try {
    const response = yield call(api.createSubject, action.payload);
    if (response.ok) {
      const successMessage = "New subject Created successfully";
      yield put(createSubjectSuccess(successMessage));
    } else {
      const errorMessage = "Failed To Create New Subject";
      yield put(createSubjectFailure(errorMessage));
    }
  } catch (error) {
    yield put(createSubjectFailure(error.message));
  }
}

function* updateSubjectAsync(api, action) {
  try {
    const response = yield call(api.updateSubject, action.payload);
    if (response.ok) {
      const successMessage = "Subject Updated Successfully";
      yield put(updateSubjectSuccess(successMessage));
    } else {
      const errorMessage = "Failed to Upadate Subject";
      yield put(updateSubjectFailure(errorMessage));
    }
  } catch (error) {
    yield put(updateSubjectFailure(error));
  }
}

function* deleteSubjectAsync(api, action) {
  try {
    const response = yield call(api.deleteSubject, action.payload);
    const successMessage = "Subject deleted successfully";
    if (response.ok) {
      yield put(deleteSubjectBySubjectIdSuccess(successMessage));
    } else {
      const errorMessage = "Something went wrong, Please contact Admin Team";
      yield put(deleteSubjectBySubjectIdFailure(errorMessage));
    }
  } catch (error) {
    yield put(deleteSubjectBySubjectIdFailure(error.message));
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

export function* updateSubject() {
  yield takeLatest(SubjectActionTypes.UPDATE_SUBJECT, updateSubjectAsync, api);
}

export function* fetchSubjectBySubjectIdStart() {
  yield takeLatest(
    SubjectActionTypes.FETCH_SUBJECT_BYSUBJECTID_START,
    fetchSubjectBySubjectIdStartAsync,
    api
  );
}

export function* deleteSubject() {
  yield takeLatest(SubjectActionTypes.DELETE_SUBJECT, deleteSubjectAsync, api);
}

export default function* subjectSagas() {
  yield all([
    call(fetchSubjectsStart),
    call(createSubject),
    call(fetchSubjectBySubjectIdStart),
    call(deleteSubject),
    call(updateSubject),
  ]);
}
