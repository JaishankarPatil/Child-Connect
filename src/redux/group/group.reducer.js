import GroupActionTypes from "./group.types";

const INITIAL_STATE = {
  groups: [],
  isLoading: false,
  errorMessage: "",
};

const groupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GroupActionTypes.FETCH_GROUP_START:
      return {
        ...state,
        isLoading: true,
      };
    case GroupActionTypes.FETCH_GROUP_SUCCESS:
      return {
        isLoading: false,
        groups: action.payload,
      };
    case GroupActionTypes.FETCH_GROUP_FAILURE:
      return {
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default groupReducer;
