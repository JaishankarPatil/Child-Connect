import { createSelector } from "reselect";

const selectHomework = (state) => state.homework;

export const selectHomeworksIsLoading = createSelector(
  [selectHomework],

  (homework) => homework.isLoading
);

export const selectHomeworks = createSelector(
  [selectHomework],

  (homework) => homework.homeworks
);

export const selectHomeworkBySubject = (subject) =>
  createSelector(
    [selectHomeworks],

    (homeworks) => (homeworks ? homeworks[subject] : null)
  );
