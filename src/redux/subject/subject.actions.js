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

export const createSubject = (newSubject) => ({
  type: SubjectActionTypes.CREATE_SUBJECT,
  payload: newSubject,
});

export const createSubjectSuccess = (successMessage) => ({
  type: SubjectActionTypes.CREATE_SUBJECT_SUCCESS,
  payload: successMessage,
});

export const createSubjectFailure = (errorMessage) => ({
  type: SubjectActionTypes.DELETE_SUBJECT_FAILURE,
  payload: errorMessage,
});

export const fetchSubjectBySubjectIdStart = (subjectId) => ({
  type: SubjectActionTypes.FETCH_SUBJECT_BYSUBJECTID_START,
  payload: subjectId,
});
