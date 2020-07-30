import { createSelector } from "reselect";

const selectHomework = (state) => state.homework;

export const selectHomeworkBySubject = (subject) =>
  createSelector(
    [selectHomeworks],

    (homeworks) => (homeworks ? homeworks[subject] : null)
  );

export const selectHomeworks = createSelector(
  [selectHomework],

  (homework) => homework.homeworks
);

export const selectHomeworksIsLoading = createSelector(
  [selectHomework],

  (homework) => homework.isLoading
);

export const selectHomeworksErrorMessage = createSelector(
  [selectHomework],

  (homework) => homework.fetchAllHomeworkErrorMessage
);

export const selectHomeworkByIdErrorMessage = createSelector(
  [selectHomework],

  (homework) => homework.fetchHomeworkByIdErrorMessage
);

export const selectHomeworkIsLoading = createSelector(
  [selectHomework],

  (homework) => homework.isLoading
);

export const selectHomeworkCreateSuccessMessage = createSelector(
  [selectHomework],

  (homework) => homework.createHomeworkSuccessMessage
);

export const selectHomeworkCreateErrorMessage = createSelector(
  [selectHomework],

  (homework) => homework.createHomeworkErrorMessage
);

export const selectHomeworkToUpdate = createSelector(
  [selectHomework],

  (homework) => homework.homeworkToUpdate
);

export const selectHomeworkUpdateSuccessMessage = createSelector(
  [selectHomework],

  (homework) => homework.updateHomeworkSuccessMessage
);

export const selectHomeworkUpdateErrorMessage = createSelector(
  [selectHomework],

  (homework) => homework.updateHomeworkErrorMessage
);

export const selectdeleteHomeworkSuccessMessage = createSelector(
  [selectHomework],

  (homework) => homework.deleteHomeworkSuccessMessage
);

export const selectdeleteHomeworkErrorMessage = createSelector(
  [selectHomework],

  (homework) => homework.deleteHomeworkErrorMessage
);
