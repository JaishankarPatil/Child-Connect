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

export const selectStudentsErrorMessage = createSelector(
  [selectStudent],

  (student) => student.fetchAllStudentsErrorMessage
);

export const selectStudentByIdErrorMessage = createSelector(
  [selectStudent],

  (student) => student.fetchStudentByIdErrorMessage
);

export const selectStudentCreateSuccessMessage = createSelector(
  [selectStudent],

  (student) => student.createStudentSuccessMessage
);

export const selectStudentCreateErrorMessage = createSelector(
  [selectStudent],

  (student) => student.createStudentErrorMessage
);

export const selectStudentToUpdate = createSelector(
  [selectStudent],

  (student) => student.studentToUpdate
);

export const selectStudentUpdateSuccessMessage = createSelector(
  [selectStudent],

  (student) => student.updateStudentSuccessMessage
);

export const selectStudentUpdateErrorMessage = createSelector(
  [selectStudent],

  (student) => student.updateStudentErrorMessage
);

export const selectdeleteStudentSuccessMessage = createSelector(
  [selectStudent],

  (student) => student.deleteStudentSuccessMessage
);

export const selectdeleteStudentErrorMessage = createSelector(
  [selectStudent],

  (student) => student.deleteStudentErrorMessage
);
