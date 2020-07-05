import DesignationtActionTypes from "./designation.types";

const INITIAL_STATE = {
  designations: [],
  errorMessage: "",
  isLoading: false,
};

const designationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DesignationtActionTypes.FETCH_DESIGNATIONT_START:
      return {
        ...state,
        isLoading: true,
      };
    case DesignationtActionTypes.FETCH_DESIGNATIONT_SUCCESS:
      return {
        designations: action.payload,
        isLoading: false,
      };
    case DesignationtActionTypes.UPDATE_DESIGNATIONT_FAILURE:
      return {
        errorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default designationReducer;
