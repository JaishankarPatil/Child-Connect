import StaffActionTypes from "./staff.types";

const INITIAL_STATE = {
  staffs: [],
  isLoading: false,
  createStaffSuccessMessage: "",
  updateStaffSuccessMessage: "",
  deleteStaffSuccessMessage: "",
  fetchAllStaffsErrorMessage: "",
  fetchStaffByIdErrorMessage: "",
  createStaffErrorMessage: "",
  updateStaffErrorMessage: "",
  deleteStaffErrorMessage: "",
  staffToUpdate: "",
};

const staffReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StaffActionTypes.FETCH_STAFF_START:
      return {
        ...state,
        isLoading: true,
      };
    case StaffActionTypes.FETCH_STAFF_SUCCESS:
      return {
        staffs: action.payload,
        isLoading: false,
      };
    case StaffActionTypes.FETCH_STAFF_FAILURE:
      return {
        fetchAllStaffsErrorMessage: action.payload,
        isLoading: false,
      };
    case StaffActionTypes.CREATE_STAFF:
      return {
        ...state,
        isLoading: true,
      };
    case StaffActionTypes.CREATE_STAFF_SUCCESS:
      return {
        createStaffSuccessMessage: action.payload,
        isLoading: false,
      };
    case StaffActionTypes.CREATE_STAFF_FAILURE:
      return {
        createStaffErrorMessage: action.payload,
        isLoading: false,
      };
    case StaffActionTypes.FETCH_STAFF_BYSTAFFID_START:
      return {
        ...state,
        isLoading: true,
      };
    case StaffActionTypes.FETCH_STAFF_BYSTAFFID_SUCCESS:
      return {
        staffToUpdate: action.payload,
        isLoading: false,
      };
    case StaffActionTypes.FETCH_STAFF_BYSTAFFID_FAILURE:
      return {
        fetchStaffByIdErrorMessage: action.payload,
        isLoading: false,
      };
    case StaffActionTypes.UPDATE_STAFF:
      return {
        ...state,
        isLoading: true,
      };
    case StaffActionTypes.UPDATE_STAFF_SUCCESS:
      return {
        updateStaffSuccessMessage: action.payload,
        isLoading: false,
      };
    case StaffActionTypes.UPDATE_STAFF_FAILURE:
      return {
        updateStaffErrorMessage: action.payload,
        isLoading: false,
      };
    case StaffActionTypes.DELETE_STAFF:
      return {
        ...state,
        isLoading: true,
      };
    case StaffActionTypes.DELETE_STAFF_SUCCESS:
      return {
        deleteStaffSuccessMessage: action.payload,
        isLoading: false,
      };
    case StaffActionTypes.DELETE_STAFF_FAILURE:
      return {
        deleteStaffErrorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default staffReducer;
