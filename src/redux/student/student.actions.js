import StudentActionTypes from "./student.types";

export const fetchStudentsStarts = () => ({
  type: StudentActionTypes.FETCH_STUDENT_START,
});

export const fetchStudentsSuccess = (students) => ({
  type: StudentActionTypes.FETCH_STUDENT_SUCCESS,
  payload: students,
});

export const fetchStudentsFailure = (errorMessage) => ({
  type: StudentActionTypes.FETCH_STUDENT_FAILURE,
  payload: errorMessage,
});

export const createStudent = (newStudent) => ({
  type: StudentActionTypes.CREATE_STUDENT,
  payload: newStudent,
});
