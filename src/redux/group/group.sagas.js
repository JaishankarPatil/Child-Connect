import { all, put, call, takeLatest } from "redux-saga/effects";
import API from "../../services/api";
import GroupActionTypes from "./group.types";
import { fetchGroupSuccess, fetchGroupFailure } from "./group.actions";

const api = API.create();

function* fetchGroupsStartAsynch(api) {
  try {
    const response = yield call(api.fetchAllGroups);
    if (response.status === 200) {
      yield put(fetchGroupSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchGroupFailure(error.message));
  }
}

export function* fetchGroupsStart() {
  yield takeLatest(
    GroupActionTypes.FETCH_GROUP_START,
    fetchGroupsStartAsynch,
    api
  );
}

export default function* groupSagas() {
  yield all([call(fetchGroupsStart)]);
}
