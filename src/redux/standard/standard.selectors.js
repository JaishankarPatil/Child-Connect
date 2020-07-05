import { createSelector } from "reselect";

const selectStandard = (state) => state.standard;

export const selectStandards = createSelector(
  [selectStandard],

  (standard) => standard.standards
);

export const selectStandardsIsLoading = createSelector(
  [selectStandard],

  (standard) => standard.isLoading
);
