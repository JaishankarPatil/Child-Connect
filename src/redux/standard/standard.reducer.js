import StandardActionTypes from "./standard.types";

const INITIAL_STATE = {
  standards: [],
  isLoading: false,
  errorMessage: "",
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
    default:
      return state;
  }
};

export default standardReducer;
