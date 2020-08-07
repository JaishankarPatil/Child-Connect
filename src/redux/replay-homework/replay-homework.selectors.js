import { createSelector } from "reselect";

const selectReplayHomework = (state) => state.replayHomework;

export const selectReplayHomeworks = createSelector(
  [selectReplayHomework],

  (replayHomework) => replayHomework.replayHomeworks
);

export const selectReplayHomeworksIsLoading = createSelector(
  [selectReplayHomework],

  (replayHomework) => replayHomework.isLoading
);

export const selectReplayHomeworksByUserIdErrorMessage = createSelector(
  [selectReplayHomework],

  (replayHomework) => replayHomework.fetchReplayHomeworkByUserIdFailureMessage
);

export const selectReplayHomeworkByReplayHomeworkIdErrorMessage = createSelector(
  [selectReplayHomework],

  (replayHomework) =>
    replayHomework.fetchReplayHomeworkByReplayHomeworkIdFailureMessage
);

export const selectReplayHomeworkCreateSuccessMessage = createSelector(
  [selectReplayHomework],

  (replayHomework) => replayHomework.createReplayHomeworkSuccessMessage
);

export const selectReplayHomeworkCreateErrorMessage = createSelector(
  [selectReplayHomework],

  (replayHomework) => replayHomework.createReplayHomeworkFailureMessage
);

export const selectReplayHomeworkToUpdate = createSelector(
  [selectReplayHomework],

  (replayHomework) => replayHomework.replayHomeworkToUpdate
);

export const selectReplayHomeworkUpdateSuccessMessage = createSelector(
  [selectReplayHomework],

  (replayHomework) => replayHomework.updateReplayHomeworkSuccessMessage
);

export const selectReplayHomeworkUpdateErrorMessage = createSelector(
  [selectReplayHomework],

  (replayHomework) => replayHomework.updateReplayHomeworkErrorMessage
);

export const selectReplayHomeworkDeleteSuccessMessage = createSelector(
  [selectReplayHomework],

  (replayHomework) => replayHomework.deleteReplayHomeworkSuccessMessage
);

export const selectReplayHomeworkDeleteErrorMessage = createSelector(
  [selectReplayHomework],

  (replayHomework) => replayHomework.deleteReplayHomeworkErrorMessage
);
