import StudentActionTypes from "./student.types";

const INITIAL_STATE = {
  students: [],
  isLoading: false,
  errorMessage: "",
};

const StudentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StudentActionTypes.FETCH_STUDENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case StudentActionTypes.FETCH_STUDENT_SUCCESS:
      return {
        students: action.payload,
        isLoading: false,
      };

    case StudentActionTypes.FETCH_STUDENT_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    case StudentActionTypes.CREATE_STUDENT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default StudentReducer;
