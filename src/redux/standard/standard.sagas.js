import { all, call, put, takeLatest } from "redux-saga/effects";
import StandardActionTypes from "./standard.types";
import API from "../../services/api";
import {
  fetchStandardsSuccess,
  fetchStandardsFailure,
} from "./standard.actions";

const api = API.create();

function* fetchStandardsStartAsynch(api, action) {
  try {
    const response = yield call(api.fetchAllStandards);
    if (response.status === 200) {
      yield put(fetchStandardsSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchStandardsFailure(error.message));
  }
}

export function* fetchStandardsStart() {
  yield takeLatest(
    StandardActionTypes.FETCH_STANDARD_START,
    fetchStandardsStartAsynch,
    api
  );
}

export default function* standardSagas() {
  yield all([call(fetchStandardsStart)]);
}
