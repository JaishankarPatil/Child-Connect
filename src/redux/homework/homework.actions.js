import HomeworkActionTypes from "./homework.types";

export const fetchHomeworkStarts = () => ({
  type: HomeworkActionTypes.FETCH_HOMEWORK_START,
});

export const fetchHomeworkSuccess = (homeworks) => ({
  type: HomeworkActionTypes.FETCH_HOMEWORK_SUCCESS,
  payload: homeworks,
});

export const fetchHomeworkFailure = (errorMessage) => ({
  type: HomeworkActionTypes.FETCH_HOMEWORK_FAILURE,
  payload: errorMessage,
});

export const createHomework = (newHomework) => ({
  type: HomeworkActionTypes.CREATE_HOMEWORK,
  payload: newHomework,
});

export const createHomeworkSuccess = (successMessage) => ({
  type: HomeworkActionTypes.CREATE_HOMEWORK_SUCCESS,
  payload: successMessage,
});

export const createHomeworkFailure = (errorMessage) => ({
  type: HomeworkActionTypes.CREATE_HOMEWORK_FAILURE,
  payload: errorMessage,
});

export const updateHomework = (homeworkToUpdate) => ({
  type: HomeworkActionTypes.UPDATE_HOMEWORK,
  payload: homeworkToUpdate,
});

export const updateHomeworkSuccess = (successMessage) => ({
  type: HomeworkActionTypes.UPDATE_HOMEWORK_SUCCESS,
  payload: successMessage,
});

export const updateHomeworkFailure = (errorMessage) => ({
  type: HomeworkActionTypes.UPDATE_HOMEWORK_FAILURE,
  payload: errorMessage,
});

export const fetchHomeworkByHomeworkId = (homeworkId) => ({
  type: HomeworkActionTypes.FETCH_HOMEWORK_BYHOMEWORKID_START,
  payload: homeworkId,
});

export const fetchHomeworkByHomeworkIdSuccess = (homeworkToUpdate) => ({
  type: HomeworkActionTypes.FETCH_HOMEWORK_BYHOMEWORKID_SUCCESS,
  payload: homeworkToUpdate,
});

export const fetchHomeworkByHomeworkIdFailure = (errorMessage) => ({
  type: HomeworkActionTypes.FETCH_HOMEWORK_BYHOMEWORKID_FAILURE,
  payload: errorMessage,
});

export const deleteHomeworkByHomeworkId = (homeworkId) => ({
  type: HomeworkActionTypes.DELETE_HOMEWORK,
  payload: homeworkId,
});

export const deleteHomeworkByHomeworkIdSuccess = (successMessage) => ({
  type: HomeworkActionTypes.DELETE_HOMEWORK_SUCCESS,
  payload: successMessage,
});

export const deleteHomeworkByHomeworkIdFailure = (errorMessage) => ({
  type: HomeworkActionTypes.DELETE_HOMEWORK_FAILURE,
  payload: errorMessage,
});
