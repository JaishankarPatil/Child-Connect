import { createSelector } from "reselect";

const selectDesignation = (state) => state.designation;

export const selectDesignations = createSelector(
  [selectDesignation],

  (designation) => designation.designations
);

export const selectDesignationsIsLoading = createSelector(
  [selectDesignation],

  (designation) => designation.isLoading
);
