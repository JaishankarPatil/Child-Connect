import StaffActionTypes from "./staff.types";

import { deleteStaffFromStafs } from "./staff.utils";

const INITIAL_STATE = {
  staffs: [],
  isLoading: false,
};

const staffReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StaffActionTypes.FETCH_STAFFS_START:
      return {
        ...state,
        isLoading: true,
      };

    case StaffActionTypes.FETCH_STAFFS_SUCCESS:
      return {
        isLoading: false,
        staffs: action.payload,
      };

    case StaffActionTypes.FETCH_STAFFS_FAILURE:
      return {
        isLoading: false,
        errorMessage: action.payload,
      };

    case StaffActionTypes.CREATE_STAFF:
      return {
        ...state,
      };

    case StaffActionTypes.UPDATE_STAFF:
      return {
        ...state,
      };

    case StaffActionTypes.DELETE_STAFF:
      return {
        ...state,
        staffs: action.payload,
      };

    default:
      return state;
  }
};

export default staffReducer;
