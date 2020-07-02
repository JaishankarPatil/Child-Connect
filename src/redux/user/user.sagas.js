import { all, call, takeLatest, put } from "redux-saga/effects";
import userActionTypes from "./user.types";
import { signUpSuccess, signUpFailure } from "./user.actions";

export function* signUpStart() {
  yield takeLatest(userActionTypes.SIGNUP_START);
}

export default function* userSaga() {
  yield all([call(signUpStart)]);
}
