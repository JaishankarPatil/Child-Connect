import SubjectActionTypes from "./subject.types";

const INITIAL_STATE = {
  subjects: [],
  isLoading: false,
  errorMessage: "",
  createSubjectSuccessMessage: "",
  updateSubjectSuccessMessage: "",
  deleteSubjectSuccessMessage: "",
  fetchAllSubjectsErrorMessage: "",
  fetchSubjectByIdErrorMessage: "",
  createSubjectErrorMessage: "",
  updateSubjectErrorMessage: "",
  deleteSubjectErrorMessage: "",
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
        fetchAllSubjectsErrorMessage: action.payload,
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
        createSubjectErrorMessage: action.payload,
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
        fetchSubjectByIdErrorMessage: action.payload,
        isLoading: false,
      };
    case SubjectActionTypes.UPDATE_SUBJECT:
      return {
        ...state,
        isLoading: true,
      };
    case SubjectActionTypes.UPDATE_SUBJECT_SUCCESS:
      return {
        updateSubjectSuccessMessage: action.payload,
        isLoading: false,
      };
    case SubjectActionTypes.UPDATE_SUBJECT_FAILURE:
      return {
        updateSubjectErrorMessage: action.payload,
        isLoading: false,
      };
    case SubjectActionTypes.DELETE_SUBJECT:
      return {
        ...state,
        isLoading: true,
      };
    case SubjectActionTypes.DELETE_SUBJECT_SUCCESS:
      return {
        deleteSubjectSuccessMessage: action.payload,
        isLoading: false,
      };
    case SubjectActionTypes.DELETE_SUBJECT_FAILURE:
      return {
        deleteSubjectErrorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default subjectReducer;
