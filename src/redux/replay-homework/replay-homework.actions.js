import ReplayHomeworkActionTypesfrom from "./replay-homework.types";

export const fetchReplayHomeworkByUserId = (userId) => ({
  type: ReplayHomeworkActionTypesfrom.FETCH_REPLAYHOMEWORK_BYUSERID_START,
  payload: userId,
});

export const fetchReplayHomeworkByUserIdSuccess = (replayHomeworks) => ({
  type: ReplayHomeworkActionTypesfrom.FETCH_REPLAYHOMEWORK_BYUSERID_SUCCESS,
  payload: replayHomeworks,
});

export const fetchReplayHomeworkByUserIdFailure = (errorMessage) => ({
  type: ReplayHomeworkActionTypesfrom.FETCH_REPLAYHOMEWORK_BYUSERID_FAILURE,
  payload: errorMessage,
});

export const createReplayHomework = (newReplayHomework) => ({
  type: ReplayHomeworkActionTypesfrom.CREATE_REPLAYHOMEWORK,
  payload: newReplayHomework,
});

export const createReplayHomeworkSuccess = (successMessage) => ({
  type: ReplayHomeworkActionTypesfrom.CREATE_REPLAYHOMEWORK_SUCCESS,
  payload: successMessage,
});

export const createReplayHomeworkFailure = (errorMessage) => ({
  type: ReplayHomeworkActionTypesfrom.CREATE_REPLAYHOMEWORK_FAILURE,
  payload: errorMessage,
});

export const fetchReplayHomeworkByReplayHomeworkId = (replayHomeworkId) => ({
  type:
    ReplayHomeworkActionTypesfrom.FETCH_REPLAYHOMEWORK_BYREPLAYHOMEWORKID_START,
  payload: replayHomeworkId,
});

export const fetchReplayHomeworkByHomeworkReplayIdSuccess = (
  replayHomeworkToUpdate
) => ({
  type:
    ReplayHomeworkActionTypesfrom.FETCH_REPLAYHOMEWORK_BYREPLAYHOMEWORKID_SUCCESS,
  payload: replayHomeworkToUpdate,
});

export const fetchReplayHomeworkByReplayHomeworkIdFailure = (errorMessage) => ({
  type:
    ReplayHomeworkActionTypesfrom.FETCH_REPLAYHOMEWORK_BYREPLAYHOMEWORKID_FAILURE,
  payload: errorMessage,
});

export const updateReplayHomework = (replayHomeworkToUpdate) => ({
  type: ReplayHomeworkActionTypesfrom.UPDATE_REPLAYHOMEWORK,
  payload: replayHomeworkToUpdate,
});

export const updateReplayHomeworkSuccess = (successMessage) => ({
  type: ReplayHomeworkActionTypesfrom.UPDATE_REPLAYHOMEWORK_SUCCESS,
  payload: successMessage,
});

export const updateReplayHomeworkFailure = (errorMessage) => ({
  type: ReplayHomeworkActionTypesfrom.UPDATE_REPLAYHOMEWORK_FAILURE,
  payload: errorMessage,
});

export const deleteReplayHomeworkByReplayHomeworkId = (ReplayHomeworkId) => ({
  type: ReplayHomeworkActionTypesfrom.DELETE_REPLAYHOMEWORK,
  payload: ReplayHomeworkId,
});

export const deleteReplayHomeworkByReplayHomeworkIdSuccess = (
  successMessage
) => ({
  type: ReplayHomeworkActionTypesfrom.DELETE_REPLAYHOMEWORK_SUCCESS,
  payload: successMessage,
});

export const deleteReplayHomeworkByReplayHomeworkIdFailure = (
  errorMessage
) => ({
  type: ReplayHomeworkActionTypesfrom.DELETE_REPLAYHOMEWORK_FAILURE,
  payload: errorMessage,
});
