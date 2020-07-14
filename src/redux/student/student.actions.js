import StudentActionTypes from "./student.types";

export const fetchStudentsStart = () => ({
  type: StudentActionTypes.FETCH_STUDENT_START,
});

export const fetchStudentSuccess = (students) => ({
  type: StudentActionTypes.FETCH_STUDENT_SUCCESS,
  payload: students,
});

export const fetchStudentFailure = (errorMessage) => ({
  type: StudentActionTypes.FETCH_STUDENT_FAILURE,
  payload: errorMessage,
});

export const createStudent = (newStudent) => ({
  type: StudentActionTypes.CREATE_STUDENT,
  payload: newStudent,
});

export const createStudentSuccess = (successMessage) => ({
  type: StudentActionTypes.CREATE_STUDENT_SUCCESS,
  payload: successMessage,
});

export const createStudentFailure = (errorMessage) => ({
  type: StudentActionTypes.DELETE_STUDENT_FAILURE,
  payload: errorMessage,
});

export const updateStudent = (studentToUpdate) => ({
  type: StudentActionTypes.UPDATE_STUDENT,
  payload: studentToUpdate,
});

export const updateStudentSuccess = (successMessage) => ({
  type: StudentActionTypes.UPDATE_STUDENT_SUCCESS,
  payload: successMessage,
});

export const updateStudentFailure = (errorMessage) => ({
  type: StudentActionTypes.UPDATE_STUDENT_FAILURE,
  payload: errorMessage,
});

export const fetchStudentByStudentIdUpdateStart = (studentId) => ({
  type: StudentActionTypes.FETCH_STUDENT_BYSTUDENTID_START,
  payload: studentId,
});

export const fetchStudentByStudentIdUpdateSuccess = (studentToUpdate) => ({
  type: StudentActionTypes.FETCH_STUDENT_BYSTUDENTID_SUCCESS,
  payload: studentToUpdate,
});

export const fetchStudentByStudentIdUpdateFailure = (errorMessage) => ({
  type: StudentActionTypes.FETCH_STUDENT_BYSTUDENTID_SUCCESS,
  payload: errorMessage,
});

export const deleteStudentByStudentId = (studentId) => ({
  type: StudentActionTypes.DELETE_STUDENT,
  payload: studentId,
});

export const deleteStudentByStudentIdSuccess = (successMessage) => ({
  type: StudentActionTypes.DELETE_STUDENT_SUCCESS,
  payload: successMessage,
});

export const deleteStudentByStudentIdFailure = (errorMessage) => ({
  type: StudentActionTypes.DELETE_STUDENT_FAILURE,
  payload: errorMessage,
});
