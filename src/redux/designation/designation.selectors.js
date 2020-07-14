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

export const selectDesignationsErrorMessage = createSelector(
  [selectDesignation],

  (designation) => designation.fetchAllDesignationsErrorMessage
);

export const selectDesignationByIdErrorMessage = createSelector(
  [selectDesignation],

  (designation) => designation.fetchDesignationByIdErrorMessage
);

export const selectDesignationCreateSuccessMessage = createSelector(
  [selectDesignation],

  (designation) => designation.createDesignationSuccessMessage
);

export const selectDesignationCreateErrorMessage = createSelector(
  [selectDesignation],

  (designation) => designation.createDesignationErrorMessage
);

export const selectDesignationToUpdate = createSelector(
  [selectDesignation],

  (designation) => designation.designationToUpdate
);

export const selectDesignationUpdateSuccessMessage = createSelector(
  [selectDesignation],

  (designation) => designation.updateDesignationSuccessMessage
);

export const selectDesignationUpdateErrorMessage = createSelector(
  [selectDesignation],

  (designation) => designation.updateDesignationErrorMessage
);

export const selectdeleteDesignationSuccessMessage = createSelector(
  [selectDesignation],

  (designation) => designation.deleteDesignationSuccessMessage
);

export const selectdeleteDesignationErrorMessage = createSelector(
  [selectDesignation],

  (designation) => designation.deleteDesignationErrorMessage
);
