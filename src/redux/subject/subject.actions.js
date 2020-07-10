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

export const updateSubject = (subjectToUpdate) => ({
  type: SubjectActionTypes.UPDATE_SUBJECT,
  payload: subjectToUpdate,
});

export const updateSubjectSuccess = (successMessage) => ({
  type: SubjectActionTypes.UPDATE_SUBJECT_SUCCESS,
  payload: successMessage,
});

export const updateSubjectFailure = (errorMessage) => ({
  type: SubjectActionTypes.UPDATE_SUBJECT_FAILURE,
  payload: errorMessage,
});

export const fetchSubjectBySubjectIdUpdateStart = (subjectId) => ({
  type: SubjectActionTypes.FETCH_SUBJECT_BYSUBJECTID_START,
  payload: subjectId,
});

export const fetchSubjectBySubjectIdUpdateSuccess = (subject) => ({
  type: SubjectActionTypes.FETCH_SUBJECT_BYSUBJECTID_SUCCESS,
  payload: subject,
});

export const fetchSubjectBySubjectIdUpdateFailure = (errorMessage) => ({
  type: SubjectActionTypes.FETCH_SUBJECT_BYSUBJECTID_SUCCESS,
  payload: errorMessage,
});

export const deleteSubjectBySubjectId = (subjectId) => ({
  type: SubjectActionTypes.DELETE_SUBJECT,
  payload: subjectId,
});

export const deleteSubjectBySubjectIdSuccess = (successMessage) => ({
  type: SubjectActionTypes.DELETE_SUBJECT_SUCCESS,
  payload: successMessage,
});

export const deleteSubjectBySubjectIdFailure = (errorMessage) => ({
  type: SubjectActionTypes.DELETE_SUBJECT_FAILURE,
  payload: errorMessage,
});
