import DepartmentActionTypes from "./department.types";

const INITIAL_STATE = {
  departments: [],
  isLoading: false,
  errormessage: "",
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
        isLoading: false,
        departments: action.payload,
      };
    case DepartmentActionTypes.FETCH_DEPARTMENT_FAILURE:
      return {
        errormessage: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default departmentReducer;
