import { createSelector } from "reselect";

const selectStudent = (state) => state.student;

export const selectStudents = createSelector(
  [selectStudent],

  (student) => student.students
);

export const selectStudentsIsLoading = createSelector(
  [selectStudent],

  (student) => student.isLoading
);
