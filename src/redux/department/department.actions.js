import DepartmentActionTypes from "./department.types";

export const fetchDepartmentStarts = () => ({
  type: DepartmentActionTypes.FETCH_DEPARTMENT_START,
});

export const fetchDepartmentSuccess = (dataval) => ({
  type: DepartmentActionTypes.FETCH_DEPARTMENT_SUCCESS,
  payload: dataval,
});

export const fetchDepartmentFail = (errorMessage) => ({
  type: DepartmentActionTypes.FETCH_DEPARTMENT_FAILURE,
  payload: errorMessage,
});
