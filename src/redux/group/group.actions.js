import GroupActionTypes from "./group.types";

export const fetchGroupsStart = () => ({
  type: GroupActionTypes.FETCH_GROUP_START,
});

export const fetchGroupSuccess = (groups) => ({
  type: GroupActionTypes.FETCH_GROUP_SUCCESS,
  payload: groups,
});

export const fetchGroupFailure = (errorMessage) => ({
  type: GroupActionTypes.UPDATE_GROUP_FAILURE,
  payload: errorMessage,
});
