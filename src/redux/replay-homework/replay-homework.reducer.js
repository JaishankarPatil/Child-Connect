import ReplayHomeworkActionTypes from "./replay-homework.types";

const INITIAL_STATE = {
  replayHomeworks: [],
  replayHomeworkToUpdate: "",
  isLoading: false,
  fetchReplayHomeworkByUserIdFailureMessage: "",
  fetchReplayHomeworkByReplayHomeworkIdFailureMessage: "",
  createReplayHomeworkSuccessMessage: "",
  createReplayHomeworkFailureMessage: "",
  updateReplayHomeworkSuccessMessage: "",
  updateReplayHomeworkErrorMessage: "",
  deleteReplayHomeworkSuccessMessage: "",
  deleteReplayHomeworkErrorMessage: "",
};

const replayHomeworkReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    case ReplayHomeworkActionTypes.FETCH_REPLAYHOMEWORK_BYUSERID_START:
      return {
        ...state,
        isLoading: true,
      };
    case ReplayHomeworkActionTypes.FETCH_REPLAYHOMEWORK_BYUSERID_SUCCESS:
      return {
        isLoading: false,
        replayHomeworks: action.payload,
      };
    case ReplayHomeworkActionTypes.FETCH_REPLAYHOMEWORK_BYUSERID_FAILURE:
      return {
        isLoading: false,
        fetchReplayHomeworkByUserIdFailureMessage: action.payload,
      };
    case ReplayHomeworkActionTypes.CREATE_REPLAYHOMEWORK:
      return {
        ...state,
        isLoading: true,
      };
    case ReplayHomeworkActionTypes.CREATE_REPLAYHOMEWORK_SUCCESS:
      return {
        createReplayHomeworkSuccessMessage: action.payload,
        isLoading: false,
      };
    case ReplayHomeworkActionTypes.DELETE_REPLAYHOMEWORK_FAILURE:
      return {
        createReplayHomeworkFailureMessage: action.payload,
        isLoading: false,
      };
    case ReplayHomeworkActionTypes.FETCH_REPLAYHOMEWORK_BYREPLAYHOMEWORKID_START:
      return {
        ...state,
        isLoading: true,
      };
    case ReplayHomeworkActionTypes.FETCH_REPLAYHOMEWORK_BYREPLAYHOMEWORKID_SUCCESS:
      return {
        isLoading: false,
        replayHomeworkToUpdate: action.payload,
      };
    case ReplayHomeworkActionTypes.FETCH_REPLAYHOMEWORK_BYREPLAYHOMEWORKID_FAILURE:
      return {
        fetchReplayHomeworkByReplayHomeworkIdFailureMessage: action.payload,
        isLoading: false,
      };
    case ReplayHomeworkActionTypes.UPDATE_REPLAYHOMEWORK:
      return {
        ...state,
        isLoading: true,
      };
    case ReplayHomeworkActionTypes.UPDATE_REPLAYHOMEWORK_SUCCESS:
      return {
        isLoading: false,
        updateReplayHomeworkSuccessMessage: action.payload,
      };
    case ReplayHomeworkActionTypes.UPDATE_REPLAYHOMEWORK_FAILURE:
      return {
        isLoading: false,
        updateReplayHomeworkErrorMessage: action.payload,
      };
    case ReplayHomeworkActionTypes.DELETE_REPLAYHOMEWORK:
      return {
        ...state,
        isLoading: true,
      };
    case ReplayHomeworkActionTypes.DELETE_REPLAYHOMEWORK_SUCCESS:
      return {
        deleteReplayHomeworkSuccessMessage: action.payload,
        isLoading: false,
      };
    case ReplayHomeworkActionTypes.DELETE_REPLAYHOMEWORK_FAILURE:
      return {
        isLoading: false,
        deleteReplayHomeworkErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default replayHomeworkReducer;
