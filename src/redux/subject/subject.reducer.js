import SubjectActionTypes from "./subject.types";

const INITIAL_STATE = {
  subjects: [],
  isLoading: false,
  errorMessage: "",
  createSubjectSuccessMessage: "",
  subjectToUpdate: "",
};

const subjectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SubjectActionTypes.FETCH_SUBJECT_START:
      return {
        ...state,
        isLoading: true,
      };
    case SubjectActionTypes.FETCH_SUBJECT_SUCCESS:
      return {
        subjects: action.payload,
        isLoading: false,
      };
    case SubjectActionTypes.FETCH_SUBJECT_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    case SubjectActionTypes.CREATE_SUBJECT:
      return {
        ...state,
        isLoading: true,
      };
    case SubjectActionTypes.CREATE_SUBJECT_SUCCESS:
      return {
        createSubjectSuccessMessage: action.payload,
        isLoading: false,
      };
    case SubjectActionTypes.CREATE_SUBJECT_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    case SubjectActionTypes.FETCH_SUBJECT_BYSUBJECTID_START:
      return {
        ...state,
        isLoading: true,
      };
    case SubjectActionTypes.FETCH_SUBJECT_BYSUBJECTID_SUCCESS:
      return {
        subjectToUpdate: action.payload,
        isLoading: false,
      };
    case SubjectActionTypes.FETCH_SUBJECT_BYSUBJECTID_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default subjectReducer;
