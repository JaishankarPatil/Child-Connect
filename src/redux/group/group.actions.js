import GroupActionTypes from "./group.types";

export const fetchGroupsStart = () => ({
  type: GroupActionTypes.FETCH_GROUP_START,
});

export const fetchGroupSuccess = (groups) => ({
  type: GroupActionTypes.FETCH_GROUP_SUCCESS,
  payload: groups,
});

export const fetchGroupFailure = (errorMessage) => ({
  type: GroupActionTypes.FETCH_GROUP_FAILURE,
  payload: errorMessage,
});

export const createGroup = (newGroup) => ({
  type: GroupActionTypes.CREATE_GROUP,
  payload: newGroup,
});

export const createGroupSuccess = (successMessage) => ({
  type: GroupActionTypes.CREATE_GROUP_SUCCESS,
  payload: successMessage,
});

export const createGroupFailure = (errorMessage) => ({
  type: GroupActionTypes.DELETE_GROUP_FAILURE,
  payload: errorMessage,
});

export const updateGroup = (groupToUpdate) => ({
  type: GroupActionTypes.UPDATE_GROUP,
  payload: groupToUpdate,
});

export const updateGroupSuccess = (successMessage) => ({
  type: GroupActionTypes.UPDATE_GROUP_SUCCESS,
  payload: successMessage,
});

export const updateGroupFailure = (errorMessage) => ({
  type: GroupActionTypes.UPDATE_GROUP_FAILURE,
  payload: errorMessage,
});

export const fetchGroupByGroupIdUpdateStart = (groupId) => ({
  type: GroupActionTypes.FETCH_GROUP_BYGROUPID_START,
  payload: groupId,
});

export const fetchGroupByGroupIdUpdateSuccess = (group) => ({
  type: GroupActionTypes.FETCH_GROUP_BYGROUPID_SUCCESS,
  payload: group,
});

export const fetchGroupByGroupIdUpdateFailure = (errorMessage) => ({
  type: GroupActionTypes.FETCH_GROUP_BYGROUPID_SUCCESS,
  payload: errorMessage,
});

export const deleteGroupByGroupId = (groupId) => ({
  type: GroupActionTypes.DELETE_GROUP,
  payload: groupId,
});

export const deleteGroupByGroupIdSuccess = (successMessage) => ({
  type: GroupActionTypes.DELETE_GROUP_SUCCESS,
  payload: successMessage,
});

export const deleteGroupByGroupIdFailure = (errorMessage) => ({
  type: GroupActionTypes.DELETE_GROUP_FAILURE,
  payload: errorMessage,
});
