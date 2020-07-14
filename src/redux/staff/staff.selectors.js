import { createSelector } from "reselect";

const selectStaff = (state) => state.staff;

export const selectStaffs = createSelector(
  [selectStaff],

  (staff) => staff.staffs
);

export const selectStaffsIsLoading = createSelector(
  [selectStaff],

  (staff) => staff.isLoading
);

export const selectStaffsErrorMessage = createSelector(
  [selectStaff],

  (staff) => staff.fetchAllStaffsErrorMessage
);

export const selectStaffByIdErrorMessage = createSelector(
  [selectStaff],

  (staff) => staff.fetchStaffByIdErrorMessage
);

export const selectStaffCreateSuccessMessage = createSelector(
  [selectStaff],

  (staff) => staff.createStaffSuccessMessage
);

export const selectStaffCreateErrorMessage = createSelector(
  [selectStaff],

  (staff) => staff.createStaffErrorMessage
);

export const selectStaffToUpdate = createSelector(
  [selectStaff],

  (staff) => staff.staffToUpdate
);

export const selectStaffUpdateSuccessMessage = createSelector(
  [selectStaff],

  (staff) => staff.updateStaffSuccessMessage
);

export const selectStaffUpdateErrorMessage = createSelector(
  [selectStaff],

  (staff) => staff.updateStaffErrorMessage
);

export const selectdeleteStaffSuccessMessage = createSelector(
  [selectStaff],

  (staff) => staff.deleteStaffSuccessMessage
);

export const selectdeleteStaffErrorMessage = createSelector(
  [selectStaff],

  (staff) => staff.deleteStaffErrorMessage
);
