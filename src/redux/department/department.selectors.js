import { createSelector } from "reselect";

const selectDepartment = (state) => state.department;

export const selectDepartments = createSelector(
  [selectDepartment],

  (department) => department.departments
);

export const selectDepartmentsIsLoading = createSelector(
  [selectDepartment],

  (department) => department.isLoading
);
