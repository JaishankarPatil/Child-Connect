import { createSelector } from "reselect";

const selectGroup = (state) => state.group;

export const selectGroups = createSelector(
  [selectGroup],

  (group) => group.groups
);

export const selectGroupsIsLoading = createSelector(
  [selectGroup],

  (group) => group.isLoading
);

export const selectGroupsErrorMessage = createSelector(
  [selectGroup],

  (group) => group.fetchAllGroupErrorMessage
);

export const selectGroupByIdErrorMessage = createSelector(
  [selectGroup],

  (group) => group.fetchGroupByIdErrorMessage
);

export const selectGroupIsLoadingselectGroupIsLoading = createSelector(
  [selectGroup],

  (group) => group.isLoading
);

export const selectGroupCreateSuccessMessage = createSelector(
  [selectGroup],

  (group) => group.createGroupSuccessMessage
);

export const selectGroupCreateErrorMessage = createSelector(
  [selectGroup],

  (group) => group.createGroupErrorMessage
);

export const selectGroupToUpdate = createSelector(
  [selectGroup],

  (group) => group.groupToUpdate
);

export const selectGroupUpdateSuccessMessage = createSelector(
  [selectGroup],

  (group) => group.updateGroupSuccessMessage
);

export const selectGroupUpdateErrorMessage = createSelector(
  [selectGroup],

  (group) => group.updateGroupErrorMessage
);

export const selectdeleteGroupSuccessMessage = createSelector(
  [selectGroup],

  (group) => group.deleteGroupSuccessMessage
);

export const selectdeleteGroupErrorMessage = createSelector(
  [selectGroup],

  (group) => group.deleteGroupErrorMessage
);
