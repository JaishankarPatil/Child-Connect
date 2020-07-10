import StandardActionTypes from "./standard.types";

const INITIAL_STATE = {
  standards: [],
  isLoading: false,
  errorMessage: "",
  createStandardSuccessMessage: "",
  updateStandardSuccessMessage: "",
  deleteStandardSuccessMessage: "",
  standardToUpdate: "",
};

const standardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StandardActionTypes.FETCH_STANDARD_START:
      return {
        ...state,
        isLoading: true,
      };
    case StandardActionTypes.FETCH_STANDARD_SUCCESS:
      return {
        standards: action.payload,
        isLoading: false,
      };
    case StandardActionTypes.FETCH_STANDARD_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    case StandardActionTypes.CREATE_STANDARD:
      return {
        ...state,
        isLoading: true,
      };
    case StandardActionTypes.CREATE_STANDARD_SUCCESS:
      return {
        createStandardSuccessMessage: action.payload,
        isLoading: false,
      };
    case StandardActionTypes.CREATE_STANDARD_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    case StandardActionTypes.FETCH_STANDARD_BYSTANDARDID_START:
      return {
        ...state,
        isLoading: true,
      };
    case StandardActionTypes.FETCH_STANDARD_BYSTANDARDID_SUCCESS:
      return {
        standardToUpdate: action.payload,
        isLoading: false,
      };
    case StandardActionTypes.FETCH_STANDARD_BYSTANDARDID_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    case StandardActionTypes.UPDATE_STANDARD:
      return {
        ...state,
        isLoading: true,
      };
    case StandardActionTypes.UPDATE_STANDARD_SUCCESS:
      return {
        updateStandardSuccessMessage: action.payload,
        isLoading: false,
      };
    case StandardActionTypes.UPDATE_STANDARD_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    case StandardActionTypes.DELETE_STANDARD:
      return {
        ...state,
        isLoading: true,
      };
    case StandardActionTypes.DELETE_STANDARD_SUCCESS:
      return {
        deleteStandardSuccessMessage: action.payload,
        isLoading: false,
      };
    case StandardActionTypes.DELETE_STANDARD_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default standardReducer;
