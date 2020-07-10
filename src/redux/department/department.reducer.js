import DepartmentActionTypes from "./department.types";

const INITIAL_STATE = {
  departments: [],
  errorMessage: "",
  isLoading: false,
};

const departmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DepartmentActionTypes.FETCH_DEPARTMENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case DepartmentActionTypes.FETCH_DEPARTMENT_SUCCESS:
      return {
        departments: action.payload,
        isLoading: false,
      };
    case DepartmentActionTypes.CREATE_DEPARTMENT:
      return {
        ...state,
        isLoading: true,
      };
    case DepartmentActionTypes.CREATE_DEPARTMENT_SUCCESS:
      return {
        createDepartmentSuccessMessage: action.payload,
        isLoading: false,
      };
    case DepartmentActionTypes.CREATE_DEPARTMENT_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    case DepartmentActionTypes.FETCH_DEPARTMENT_BYDEPARTMENTID_START:
      return {
        ...state,
        isLoading: true,
      };
    case DepartmentActionTypes.FETCH_DEPARTMENT_BYDEPARTMENTID_SUCCESS:
      return {
        subjectToUpdate: action.payload,
        isLoading: false,
      };
    case DepartmentActionTypes.FETCH_DEPARTMENT_BYDEPARTMENTID_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    case DepartmentActionTypes.UPDATE_DEPARTMENT:
      return {
        ...state,
        isLoading: true,
      };
    case DepartmentActionTypes.UPDATE_DEPARTMENT_SUCCESS:
      return {
        updateDepartmentSuccessMessage: action.payload,
        isLoading: false,
      };
    case DepartmentActionTypes.UPDATE_DEPARTMENT_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    case DepartmentActionTypes.DELETE_DEPARTMENT:
      return {
        ...state,
        isLoading: true,
      };
    case DepartmentActionTypes.DELETE_DEPARTMENT_SUCCESS:
      return {
        deleteDepartmentSuccessMessage: action.payload,
        isLoading: false,
      };
    case DepartmentActionTypes.DELETE_DEPARTMENT_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default departmentReducer;
