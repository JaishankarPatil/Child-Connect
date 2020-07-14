import StudentActionTypes from "./student.types";

const INITIAL_STATE = {
  students: [],
  isLoading: false,
  errorMessage: "",
  createStudentSuccessMessage: "",
  updateStudentSuccessMessage: "",
  deleteStudentSuccessMessage: "",
  fetchAllStudentsErrorMessage: "",
  fetchStudentByIdErrorMessage: "",
  createStudentErrorMessage: "",
  updateStudentErrorMessage: "",
  deleteStudentErrorMessage: "",
  studentToUpdate: "",
};

const studentReducer = (state = INITIAL_STATE, action) => {
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
        fetchAllStudentsErrorMessage: action.payload,
        isLoading: false,
      };
    case StudentActionTypes.CREATE_STUDENT:
      return {
        ...state,
        isLoading: true,
      };
    case StudentActionTypes.CREATE_STUDENT_SUCCESS:
      return {
        createStudentSuccessMessage: action.payload,
        isLoading: false,
      };
    case StudentActionTypes.CREATE_STUDENT_FAILURE:
      return {
        createStudentErrorMessage: action.payload,
        isLoading: false,
      };
    case StudentActionTypes.FETCH_STUDENT_BYSTUDENTID_START:
      return {
        ...state,
        isLoading: true,
      };
    case StudentActionTypes.FETCH_STUDENT_BYSTUDENTID_SUCCESS:
      return {
        studentToUpdate: action.payload,
        isLoading: false,
      };
    case StudentActionTypes.FETCH_STUDENT_BYSTUDENTID_FAILURE:
      return {
        fetchStudentByIdErrorMessage: action.payload,
        isLoading: false,
      };
    case StudentActionTypes.UPDATE_STUDENT:
      return {
        ...state,
        isLoading: true,
      };
    case StudentActionTypes.UPDATE_STUDENT_SUCCESS:
      return {
        updateStudentSuccessMessage: action.payload,
        isLoading: false,
      };
    case StudentActionTypes.UPDATE_STUDENT_FAILURE:
      return {
        updateStudentErrorMessage: action.payload,
        isLoading: false,
      };
    case StudentActionTypes.DELETE_STUDENT:
      return {
        ...state,
        isLoading: true,
      };
    case StudentActionTypes.DELETE_STUDENT_SUCCESS:
      return {
        deleteStudentSuccessMessage: action.payload,
        isLoading: false,
      };
    case StudentActionTypes.DELETE_STUDENT_FAILURE:
      return {
        deleteStudentErrorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default studentReducer;
