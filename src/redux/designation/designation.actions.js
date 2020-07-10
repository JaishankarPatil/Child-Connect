import DesignationActionTypes from "./designation.types";

export const fetchDesignationsStart = () => ({
  type: DesignationActionTypes.FETCH_DESIGNATION_START,
});

export const fetchDesignationSuccess = (designations) => ({
  type: DesignationActionTypes.FETCH_DESIGNATION_SUCCESS,
  payload: designations,
});

export const fetchDesignationFailure = (errorMessage) => ({
  type: DesignationActionTypes.FETCH_DESIGNATION_FAILURE,
  payload: errorMessage,
});

export const createDesignation = (newDesignation) => ({
  type: DesignationActionTypes.CREATE_DESIGNATION,
  payload: newDesignation,
});

export const createDesignationSuccess = (successMessage) => ({
  type: DesignationActionTypes.CREATE_DESIGNATION_SUCCESS,
  payload: successMessage,
});

export const createDesignationFailure = (errorMessage) => ({
  type: DesignationActionTypes.DELETE_DESIGNATION_FAILURE,
  payload: errorMessage,
});

export const updateDesignation = (DesignationToUpdate) => ({
  type: DesignationActionTypes.UPDATE_DESIGNATION,
  payload: DesignationToUpdate,
});

export const updateDesignationSuccess = (successMessage) => ({
  type: DesignationActionTypes.UPDATE_DESIGNATION_SUCCESS,
  payload: successMessage,
});

export const updateDesignationFailure = (errorMessage) => ({
  type: DesignationActionTypes.UPDATE_DESIGNATION_FAILURE,
  payload: errorMessage,
});

export const fetchDesignationByDesignationIdUpdateStart = (DesignationId) => ({
  type: DesignationActionTypes.FETCH_DESIGNATION_BYDESIGNATIONID_START,
  payload: DesignationId,
});

export const fetchDesignationByDesignationIdUpdateSuccess = (Designation) => ({
  type: DesignationActionTypes.FETCH_DESIGNATION_BYDESIGNATIONID_SUCCESS,
  payload: Designation,
});

export const fetchDesignationByDesignationIdUpdateFailure = (errorMessage) => ({
  type: DesignationActionTypes.FETCH_DESIGNATION_BYDESIGNATIONID_SUCCESS,
  payload: errorMessage,
});

export const deleteDesignationByDesignationId = (DesignationId) => ({
  type: DesignationActionTypes.DELETE_DESIGNATION,
  payload: DesignationId,
});

export const deleteDesignationByDesignationIdSuccess = (successMessage) => ({
  type: DesignationActionTypes.DELETE_DESIGNATION_SUCCESS,
  payload: successMessage,
});

export const deleteDesignationByDesignationIdFailure = (errorMessage) => ({
  type: DesignationActionTypes.DELETE_DESIGNATION_FAILURE,
  payload: errorMessage,
});
