import HomeworkActionTypes from "./homework.types";
import { retry } from "redux-saga/effects";

const INITIAL_STATE = {
  homeworks: [],
  homeworksByGroupId: [],
  groups: [],
  isLoading: false,
  fetchHomeworksFailedErrorMessage: "",
  creteHomeworkSuccessMessage: "",
  creteHomeworFailureMessage: "",
  updateHomeworkSuccessMessage: "",
  deleteHomeworkSuccessMessage: "",
  fetchHomeworkByIdErrorMessage: "",
  updateHomeworkErrorMessage: "",
  deleteHomeworkErrorMessage: "",
  homeworkToUpdate: "",
  fetchGroupsByStudentIdErrorMessage: "",
  fetchHomeworksByGroupIdErrorMessage: "",
};

const homeworkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeworkActionTypes.FETCH_HOMEWORK_START:
      return {
        ...state,
        isLoading: true,
      };
    case HomeworkActionTypes.FETCH_HOMEWORK_SUCCESS:
      return {
        isLoading: false,
        homeworks: action.payload,
      };
    case HomeworkActionTypes.FETCH_HOMEWORK_FAILURE:
      return {
        isLoading: false,
        fetchHomeworksFailedErrorMessage: action.payload,
      };
    case HomeworkActionTypes.CREATE_HOMEWORK:
      return {
        ...state,
        isLoading: true,
      };
    case HomeworkActionTypes.CREATE_HOMEWORK_SUCCESS:
      return {
        creteHomeworkSuccessMessage: action.payload,
        isLoading: false,
      };
    case HomeworkActionTypes.CREATE_HOMEWORK_FAILURE:
      return {
        creteHomeworFailureMessage: action.payload,
        isLoading: false,
      };
    case HomeworkActionTypes.FETCH_HOMEWORK_BYHOMEWORKID_START:
      return {
        ...state,
        isLoading: true,
      };
    case HomeworkActionTypes.FETCH_HOMEWORK_BYHOMEWORKID_SUCCESS:
      return {
        homeworkToUpdate: action.payload,
        isLoading: false,
      };
    case HomeworkActionTypes.FETCH_HOMEWORK_BYHOMEWORKID_FAILURE:
      return {
        fetchHomeworkByIdErrorMessage: action.payload,
        isLoading: false,
      };
    case HomeworkActionTypes.UPDATE_HOMEWORK:
      return {
        ...state,
        isLoading: true,
      };
    case HomeworkActionTypes.UPDATE_HOMEWORK_SUCCESS:
      return {
        updateHomeworkSuccessMessage: action.payload,
        isLoading: false,
      };
    case HomeworkActionTypes.UPDATE_HOMEWORK_FAILURE:
      return {
        updateHomeworkErrorMessage: action.payload,
        isLoading: false,
      };
    case HomeworkActionTypes.DELETE_HOMEWORK:
      return {
        ...state,
        isLoading: true,
      };
    case HomeworkActionTypes.DELETE_HOMEWORK_SUCCESS:
      return {
        deleteHomeworkSuccessMessage: action.payload,
        isLoading: false,
      };
    case HomeworkActionTypes.DELETE_HOMEWORK_FAILURE:
      return {
        deleteHomeworkErrorMessage: action.payload,
        isLoading: false,
      };
    case HomeworkActionTypes.FETCH_GROUPS_BYSTUDENTID_START:
      return {
        ...state,
        isLoading: true,
      };
    case HomeworkActionTypes.FETCH_GROUPS_BYSTUDENTID_SUCCESS:
      return {
        groups: action.payload,
        isLoading: false,
      };
    case HomeworkActionTypes.FETCH_GROUPS_BYSTUDENTID_FAILURE:
      return {
        fetchGroupsByStudentIdErrorMessage: action.payload,
        isLoading: false,
      };
    case HomeworkActionTypes.FETCH_HOMEWORKS_BYGROUPID_START:
      return {
        ...state,
        isLoading: true,
      };
    case HomeworkActionTypes.FETCH_HOMEWORKS_BYGROUPID_SUCCESS:
      return {
        homeworksByGroupId: action.payload,
        isLoading: false,
      };
    case HomeworkActionTypes.FETCH_HOMEWORKS_BYGROUPID_FAILURE:
      return {
        fetchHomeworksByGroupIdErrorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default homeworkReducer;
