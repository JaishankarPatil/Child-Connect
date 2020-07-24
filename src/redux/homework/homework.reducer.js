import HomeworkActionTypes from "./homework.types";

const INITIAL_STATE = {
  homeworks: [],
  fetchHomeworksFailedErrorMessage: "",
  isLoading: false,
  creteHomeworkSuccessMessage: "",
  creteHomeworFailureMessage: "",
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
        homeworks: action.payload,
        isLoading: false,
      };
    case HomeworkActionTypes.FETCH_HOMEWORK_FAILURE:
      return {
        fetchHomeworksFailedErrorMessage: action.payload,
        isLoading: false,
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

    default:
      return state;
  }
};

export default homeworkReducer;
