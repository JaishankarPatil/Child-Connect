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
