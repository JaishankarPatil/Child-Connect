import StaffActionTypes from "./staff.types";

export const fetchStaffsStart = () => ({
  type: StaffActionTypes.FETCH_STAFF_START,
});

export const fetchStaffSuccess = (staffs) => ({
  type: StaffActionTypes.FETCH_STAFF_SUCCESS,
  payload: staffs,
});

export const fetchStaffFailure = (errorMessage) => ({
  type: StaffActionTypes.FETCH_STAFF_FAILURE,
  payload: errorMessage,
});

export const createStaff = (newStaff) => ({
  type: StaffActionTypes.CREATE_STAFF,
  payload: newStaff,
});

export const createStaffSuccess = (successMessage) => ({
  type: StaffActionTypes.CREATE_STAFF_SUCCESS,
  payload: successMessage,
});

export const createStaffFailure = (errorMessage) => ({
  type: StaffActionTypes.CREATE_STAFF_FAILURE,
  payload: errorMessage,
});

export const updateStaff = (staffToUpdate) => ({
  type: StaffActionTypes.UPDATE_STAFF,
  payload: staffToUpdate,
});

export const updateStaffSuccess = (successMessage) => ({
  type: StaffActionTypes.UPDATE_STAFF_SUCCESS,
  payload: successMessage,
});

export const updateStaffFailure = (errorMessage) => ({
  type: StaffActionTypes.UPDATE_STAFF_FAILURE,
  payload: errorMessage,
});

export const fetchStaffByStaffIdUpdateStart = (staffId) => ({
  type: StaffActionTypes.FETCH_STAFF_BYSTAFFID_START,
  payload: staffId,
});

export const fetchStaffByStaffIdUpdateSuccess = (staffToUpdate) => ({
  type: StaffActionTypes.FETCH_STAFF_BYSTAFFID_SUCCESS,
  payload: staffToUpdate,
});

export const fetchStaffByStaffIdUpdateFailure = (errorMessage) => ({
  type: StaffActionTypes.FETCH_STAFF_BYSTAFFID_SUCCESS,
  payload: errorMessage,
});

export const deleteStaffByStaffId = (staffId) => ({
  type: StaffActionTypes.DELETE_STAFF,
  payload: staffId,
});

export const deleteStaffByStaffIdSuccess = (successMessage) => ({
  type: StaffActionTypes.DELETE_STAFF_SUCCESS,
  payload: successMessage,
});

export const deleteStaffByStaffIdFailure = (errorMessage) => ({
  type: StaffActionTypes.DELETE_STAFF_FAILURE,
  payload: errorMessage,
});
