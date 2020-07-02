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
