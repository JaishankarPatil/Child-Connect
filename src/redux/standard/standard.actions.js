import StandardActionTypes from "./standard.types";

export const fetchStandardsStart = () => ({
  type: StandardActionTypes.FETCH_STANDARD_START,
});

export const fetchStandardSuccess = (standards) => ({
  type: StandardActionTypes.FETCH_STANDARD_SUCCESS,
  payload: standards,
});

export const fetchStandardFailure = (errorMessage) => ({
  type: StandardActionTypes.FETCH_STANDARD_FAILURE,
  payload: errorMessage,
});

export const createStandard = (newStandard) => ({
  type: StandardActionTypes.CREATE_STANDARD,
  payload: newStandard,
});

export const createStandardSuccess = (successMessage) => ({
  type: StandardActionTypes.CREATE_STANDARD_SUCCESS,
  payload: successMessage,
});

export const createStandardFailure = (errorMessage) => ({
  type: StandardActionTypes.DELETE_STANDARD_FAILURE,
  payload: errorMessage,
});

export const updateStandard = (standardToUpdate) => ({
  type: StandardActionTypes.UPDATE_STANDARD,
  payload: standardToUpdate,
});

export const updateStandardSuccess = (successMessage) => ({
  type: StandardActionTypes.UPDATE_STANDARD_SUCCESS,
  payload: successMessage,
});

export const updateStandardFailure = (errorMessage) => ({
  type: StandardActionTypes.UPDATE_STANDARD_FAILURE,
  payload: errorMessage,
});

export const fetchStandardByStandardIdUpdateStart = (standardId) => ({
  type: StandardActionTypes.FETCH_STANDARD_BYSTANDARDID_START,
  payload: standardId,
});

export const fetchStandardByStandardIdUpdateSuccess = (standard) => ({
  type: StandardActionTypes.FETCH_STANDARD_BYSTANDARDID_SUCCESS,
  payload: standard,
});

export const fetchStandardByStandardIdUpdateFailure = (errorMessage) => ({
  type: StandardActionTypes.FETCH_STANDARD_BYSTANDARDID_SUCCESS,
  payload: errorMessage,
});

export const deleteStandardByStandardId = (standardId) => ({
  type: StandardActionTypes.DELETE_STANDARD,
  payload: standardId,
});

export const deleteStandardByStandardIdSuccess = (successMessage) => ({
  type: StandardActionTypes.DELETE_STANDARD_SUCCESS,
  payload: successMessage,
});

export const deleteStandardByStandardIdFailure = (errorMessage) => ({
  type: StandardActionTypes.DELETE_STANDARD_FAILURE,
  payload: errorMessage,
});
