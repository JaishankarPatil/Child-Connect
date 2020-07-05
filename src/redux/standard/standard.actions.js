import StandardActionTypes from "./standard.types";

export const fetchStandardsStart = () => ({
  type: StandardActionTypes.FETCH_STANDARD_START,
});

export const fetchStandardsSuccess = (standards) => ({
  type: StandardActionTypes.FETCH_STANDARD_SUCCESS,
  payload: standards,
});

export const fetchStandardsFailure = (errorMessage) => ({
  type: StandardActionTypes.FETCH_STANDARD_FAILURE,
  payload: errorMessage,
});
