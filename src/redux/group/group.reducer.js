import GroupActionTypes from "./group.types";

const INITIAL_STATE = {
  groups: [],
  isLoading: false,
  createGroupSuccessMessage: "",
  updateGroupSuccessMessage: "",
  deleteGroupSuccessMessage: "",
  fetchAllGroupsErrorMessage: "",
  fetchGroupByIdErrorMessage: "",
  createGroupErrorMessage: "",
  updateGroupErrorMessage: "",
  deleteGroupErrorMessage: "",
  groupToUpdate: "",
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
        groups: action.payload,
        isLoading: false,
      };
    case GroupActionTypes.FETCH_GROUP_FAILURE:
      return {
        fetchAllGroupsErrorMessage: action.payload,
        isLoading: false,
      };
    case GroupActionTypes.CREATE_GROUP:
      return {
        ...state,
        isLoading: true,
      };
    case GroupActionTypes.CREATE_GROUP_SUCCESS:
      return {
        createGroupSuccessMessage: action.payload,
        isLoading: false,
      };
    case GroupActionTypes.CREATE_GROUP_FAILURE:
      return {
        createGroupErrorMessage: action.payload,
        isLoading: false,
      };
    case GroupActionTypes.FETCH_GROUP_BYGROUPID_START:
      return {
        ...state,
        isLoading: true,
      };
    case GroupActionTypes.FETCH_GROUP_BYGROUPID_SUCCESS:
      return {
        groupToUpdate: action.payload,
        isLoading: false,
      };
    case GroupActionTypes.FETCH_GROUP_BYGROUPID_FAILURE:
      return {
        fetchGroupByIdErrorMessage: action.payload,
        isLoading: false,
      };
    case GroupActionTypes.UPDATE_GROUP:
      return {
        ...state,
        isLoading: true,
      };
    case GroupActionTypes.UPDATE_GROUP_SUCCESS:
      return {
        updateGroupSuccessMessage: action.payload,
        isLoading: false,
      };
    case GroupActionTypes.UPDATE_GROUP_FAILURE:
      return {
        updateGroupErrorMessage: action.payload,
        isLoading: false,
      };
    case GroupActionTypes.DELETE_GROUP:
      return {
        ...state,
        isLoading: true,
      };
    case GroupActionTypes.DELETE_GROUP_SUCCESS:
      return {
        deleteGroupSuccessMessage: action.payload,
        isLoading: false,
      };
    case GroupActionTypes.DELETE_GROUP_FAILURE:
      return {
        deleteGroupErrorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default groupReducer;
