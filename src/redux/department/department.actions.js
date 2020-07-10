import DepartmentActionTypes from "./department.types";

export const fetchDepartmentsStart = () => ({
  type: DepartmentActionTypes.FETCH_DEPARTMENT_START,
});

export const fetchDepartmentSuccess = (departments) => ({
  type: DepartmentActionTypes.FETCH_DEPARTMENT_SUCCESS,
  payload: departments,
});

export const fetchDepartmentFailure = (errorMessage) => ({
  type: DepartmentActionTypes.FETCH_DEPARTMENT_FAILURE,
  payload: errorMessage,
});

export const createDepartment = (newDepartment) => ({
  type: DepartmentActionTypes.CREATE_DEPARTMENT,
  payload: newDepartment,
});

export const createDepartmentSuccess = (successMessage) => ({
  type: DepartmentActionTypes.CREATE_DEPARTMENT_SUCCESS,
  payload: successMessage,
});

export const createDepartmentFailure = (errorMessage) => ({
  type: DepartmentActionTypes.DELETE_DEPARTMENT_FAILURE,
  payload: errorMessage,
});

export const updateDepartment = (departmentToUpdate) => ({
  type: DepartmentActionTypes.UPDATE_DEPARTMENT,
  payload: departmentToUpdate,
});

export const updateDepartmentSuccess = (successMessage) => ({
  type: DepartmentActionTypes.UPDATE_DEPARTMENT_SUCCESS,
  payload: successMessage,
});

export const updateDepartmentFailure = (errorMessage) => ({
  type: DepartmentActionTypes.UPDATE_DEPARTMENT_FAILURE,
  payload: errorMessage,
});

export const fetchDepartmentByDepartmentIdUpdateStart = (departmentId) => ({
  type: DepartmentActionTypes.FETCH_DEPARTMENT_BYDEPARTMENTID_START,
  payload: departmentId,
});

export const fetchDepartmentByDepartmentIdUpdateSuccess = (
  departmentToUpdate
) => ({
  type: DepartmentActionTypes.FETCH_DEPARTMENT_BYDEPARTMENTID_SUCCESS,
  payload: departmentToUpdate,
});

export const fetchDepartmentByDepartmentIdUpdateFailure = (errorMessage) => ({
  type: DepartmentActionTypes.FETCH_DEPARTMENT_BYDEPARTMENTID_SUCCESS,
  payload: errorMessage,
});

export const deleteDepartmentByDepartmentId = (departmentId) => ({
  type: DepartmentActionTypes.DELETE_DEPARTMENT,
  payload: departmentId,
});

export const deleteDepartmentByDepartmentIdSuccess = (successMessage) => ({
  type: DepartmentActionTypes.DELETE_DEPARTMENT_SUCCESS,
  payload: successMessage,
});

export const deleteDepartmentByDepartmentIdFailure = (errorMessage) => ({
  type: DepartmentActionTypes.DELETE_DEPARTMENT_FAILURE,
  payload: errorMessage,
});
