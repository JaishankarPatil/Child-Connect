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
