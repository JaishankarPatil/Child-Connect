import staffActionTypes from "./staff.types";

export const fetchStaffsStart = () => ({
  type: staffActionTypes.FETCH_STAFFS_START,
});

export const fetchStaffsSuccess = (staffs) => ({
  type: staffActionTypes.FETCH_STAFFS_SUCCESS,
  payload: staffs,
});

export const fetchStaffsFailure = (errorMessage) => ({
  type: staffActionTypes.FETCH_STAFFS_FAILURE,
  payload: errorMessage,
});

export const deleteStaff = (staffToBeDelete) => ({
  type: staffActionTypes.DELETE_STAFF,
  payload: staffToBeDelete,
});

export const createStaff = (staffToBeCreated) => ({
  type: staffActionTypes.CREATE_STAFF,
  payload: staffToBeCreated,
});

export const updateStaff = (staffToBeUpdate) => ({
  type: staffActionTypes.UPDATE_STAFF,
  payload: staffToBeUpdate,
});
