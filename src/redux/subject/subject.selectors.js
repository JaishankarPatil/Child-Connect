import { createSelector } from "reselect";

const selectSubject = (state) => state.subject;

export const selectSubjects = createSelector(
  [selectSubject],

  (subject) => subject.subjects
);

export const selectSubjectsIsLoading = createSelector(
  [selectSubject],

  (subject) => subject.isLoading
);
