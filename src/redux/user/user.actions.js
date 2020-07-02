import userActionTypes from "./user.types";

export const setCurrentUser = (currentUser) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: currentUser,
});

export const signUPStart = () => ({
  type: userActionTypes.SIGNUP_START,
});

export const signUpSuccess = ({ currentUser, additionalData }) => ({
  type: userActionTypes.SIGNUP_SUCCESS,
  payload: { currentUser, additionalData },
});

export const signUpFailure = (error) => ({
  type: userActionTypes.SIGNUP_FAILURE,
  payload: error,
});
