import { all, put, call, takeLatest } from "redux-saga/effects";
import DesignationtActionTypes from "./designation.types";
import {
  fetchDesignationSuccess,
  fetchDesignationFailure,
} from "./designation.actions";
import API from "../../services/api";
const api = API.create();

function* fetchDesignationStartAsynch(api, action) {
  try {
    const response = yield call(api.fetchAllDesignations);

    if (response.status === 200) {
      yield put(fetchDesignationSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchDesignationFailure(error.message));
  }
}

export function* fetchDesignationStart() {
  yield takeLatest(
    DesignationtActionTypes.FETCH_DESIGNATIONT_START,
    fetchDesignationStartAsynch,
    api
  );
}

export default function* designationSagas() {
  yield all([call(fetchDesignationStart)]);
}
