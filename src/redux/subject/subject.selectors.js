import { createSelector } from "reselect";

const selectSubject = (state) => state.subject;

export const selectSubjects = createSelector(
  [selectSubject],

  (subject) => subject.subjects
);

export const selectSubjectsErrorMessage = createSelector(
  [selectSubject],

  (subject) => subject.fetchAllSubjectsErrorMessage
);

export const selectSubjectByIdErrorMessage = createSelector(
  [selectSubject],

  (subject) => subject.fetchSubjectByIdErrorMessage
);

export const selectSubjectsIsLoading = createSelector(
  [selectSubject],

  (subject) => subject.isLoading
);

export const selectSubjectCreateSuccessMessage = createSelector(
  [selectSubject],

  (subject) => subject.createSubjectSuccessMessage
);

export const selectSubjectCreateErrorMessage = createSelector(
  [selectSubject],

  (subject) => subject.createSubjectErrorMessage
);

export const selectSubjectToUpdate = createSelector(
  [selectSubject],

  (subject) => subject.subjectToUpdate
);

export const selectSubjectUpdateSuccessMessage = createSelector(
  [selectSubject],

  (subject) => subject.updateSubjectSuccessMessage
);

export const selectSubjectUpdateErrorMessage = createSelector(
  [selectSubject],

  (subject) => subject.updateSubjectErrorMessage
);

export const selectdeleteSubjectSuccessMessage = createSelector(
  [selectSubject],

  (subject) => subject.deleteSubjectSuccessMessage
);

export const selectdeleteSubjectErrorMessage = createSelector(
  [selectSubject],

  (subject) => subject.deleteSubjectErrorMessage
);
