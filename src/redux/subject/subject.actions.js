import SubjectActionTypes from "./subject.types";

export const fetchSubjectsStart = () => ({
  type: SubjectActionTypes.FETCH_SUBJECT_START,
});

export const fetchSubjectSuccess = (subjects) => ({
  type: SubjectActionTypes.FETCH_SUBJECT_SUCCESS,
  payload: subjects,
});

export const fetchSubjectFailure = (errorMessage) => ({
  type: SubjectActionTypes.FETCH_SUBJECT_FAILURE,
  payload: errorMessage,
});
