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

export const selectStandardsErrorMessage = createSelector(
  [selectStandard],

  (standard) => standard.fetchAllStandardsErrorMessage
);

export const selectStandardByIdErrorMessage = createSelector(
  [selectStandard],

  (standard) => standard.fetchStandardByIdErrorMessage
);

export const selectStandardsIsLoadingselectStandardsIsLoading = createSelector(
  [selectStandard],

  (standard) => standard.isLoading
);

export const selectStandardCreateSuccessMessage = createSelector(
  [selectStandard],

  (standard) => standard.createStandardSuccessMessage
);

export const selectStandardCreateErrorMessage = createSelector(
  [selectStandard],

  (standard) => standard.createStandardErrorMessage
);

export const selectStandardToUpdate = createSelector(
  [selectStandard],

  (standard) => standard.standardToUpdate
);

export const selectStandardUpdateSuccessMessage = createSelector(
  [selectStandard],

  (standard) => standard.updateStandardSuccessMessage
);

export const selectStandardUpdateErrorMessage = createSelector(
  [selectStandard],

  (standard) => standard.updateStandardErrorMessage
);

export const selectdeleteStandardSuccessMessage = createSelector(
  [selectStandard],

  (standard) => standard.deleteStandardSuccessMessage
);

export const selectdeleteStandardErrorMessage = createSelector(
  [selectStandard],

  (standard) => standard.deleteStandardErrorMessage
);
