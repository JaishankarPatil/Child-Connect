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

export const selectDepartmentsErrorMessage = createSelector(
  [selectDepartment],

  (department) => department.fetchAllDepartmentsErrorMessage
);

export const selectDepartmentByIdErrorMessage = createSelector(
  [selectDepartment],

  (department) => department.fetchDepartmentByIdErrorMessage
);

export const selectDepartmentsIsLoadingselectDepartmentsIsLoading = createSelector(
  [selectDepartment],

  (department) => department.isLoading
);

export const selectDepartmentCreateSuccessMessage = createSelector(
  [selectDepartment],

  (department) => department.createDepartmentSuccessMessage
);

export const selectDepartmentCreateErrorMessage = createSelector(
  [selectDepartment],

  (department) => department.createDepartmentErrorMessage
);

export const selectDepartmentToUpdate = createSelector(
  [selectDepartment],

  (department) => department.departmentToUpdate
);

export const selectDepartmentUpdateSuccessMessage = createSelector(
  [selectDepartment],

  (department) => department.updateDepartmentSuccessMessage
);

export const selectDepartmentUpdateErrorMessage = createSelector(
  [selectDepartment],

  (department) => department.updateDepartmentErrorMessage
);

export const selectdeleteDepartmentSuccessMessage = createSelector(
  [selectDepartment],

  (department) => department.deleteDepartmentSuccessMessage
);

export const selectdeleteDepartmentErrorMessage = createSelector(
  [selectDepartment],

  (department) => department.deleteDepartmentErrorMessage
);
