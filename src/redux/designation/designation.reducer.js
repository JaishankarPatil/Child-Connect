import DesignationActionTypes from "./designation.types";

const INITIAL_STATE = {
  designations: [],
  errorMessage: "",
  isLoading: false,
  createDesignationSuccessMessage: "",
  updateDesignationSuccessMessage: "",
  deleteDesignationSuccessMessage: "",
  fetchAllDesignationsErrorMessage: "",
  fetchDesignationByIdErrorMessage: "",
  createDesignationErrorMessage: "",
  updateDesignationErrorMessage: "",
  deleteDesignationErrorMessage: "",
  designationToUpdate: "",
};

const designationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DesignationActionTypes.FETCH_DESIGNATION_START:
      return {
        ...state,
        isLoading: true,
      };
    case DesignationActionTypes.FETCH_DESIGNATION_SUCCESS:
      return {
        designations: action.payload,
        isLoading: false,
      };
    case DesignationActionTypes.FETCH_DESIGNATION_FAILURE:
      return {
        fetchAllDesignationsErrorMessage: action.payload,
        isLoading: false,
      };
    case DesignationActionTypes.CREATE_DESIGNATION:
      return {
        ...state,
        isLoading: true,
      };
    case DesignationActionTypes.CREATE_DESIGNATION_SUCCESS:
      return {
        createDesignationSuccessMessage: action.payload,
        isLoading: false,
      };
    case DesignationActionTypes.CREATE_DESIGNATION_FAILURE:
      return {
        createDesignationErrorMessage: action.payload,
        isLoading: false,
      };
    case DesignationActionTypes.FETCH_DESIGNATION_BYDESIGNATIONID_START:
      return {
        ...state,
        isLoading: true,
      };
    case DesignationActionTypes.FETCH_DESIGNATION_BYDESIGNATIONID_SUCCESS:
      return {
        designationToUpdate: action.payload,
        isLoading: false,
      };
    case DesignationActionTypes.FETCH_DESIGNATION_BYDESIGNATIONID_FAILURE:
      return {
        fetchDesignationByIdErrorMessage: action.payload,
        isLoading: false,
      };
    case DesignationActionTypes.UPDATE_DESIGNATION:
      return {
        ...state,
        isLoading: true,
      };
    case DesignationActionTypes.UPDATE_DESIGNATION_SUCCESS:
      return {
        updateDesignationSuccessMessage: action.payload,
        isLoading: false,
      };
    case DesignationActionTypes.UPDATE_DESIGNATION_FAILURE:
      return {
        updateDesignationErrorMessage: action.payload,
        isLoading: false,
      };
    case DesignationActionTypes.DELETE_DESIGNATION:
      return {
        ...state,
        isLoading: true,
      };
    case DesignationActionTypes.DELETE_DESIGNATION_SUCCESS:
      return {
        deleteDesignationSuccessMessage: action.payload,
        isLoading: false,
      };
    case DesignationActionTypes.DELETE_DESIGNATION_FAILURE:
      return {
        deleteDesignationErrorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default designationReducer;
