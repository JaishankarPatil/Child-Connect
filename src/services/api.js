import apisauce from "apisauce";

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const create = (
  //baseURL = "https://walkinchildconnect.cloudjiffy.net/ChildConnectAdminWeb"
  baseURL = "https://newchildconnect.cloudjiffy.net/ChildConnectAdminWeb"
) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEiLCJpYXQiOjE1OTM2NzgyOTMsImV4cCI6MTYwOTIzMDI5M30.66Gi4n58gWurSPE16UkpiDXGRsbB7PxtPya5zYySRGVC1ND9-GIX-NdXirRTCXpWedUjPmSY__AHFRAGhJZ4Gw",
    },
    // 10 second timeout...
    timeout: 90240,
  });

  const fetchAllStaffs = () => api.get(baseURL + "/staff/v1/queryAllStaffs");
  const createStaff = (newStaff) =>
    api.post(baseURL + "/staff/v1/createStaff", newStaff);
  const updateStaff = (updatedStaff) =>
    api.put(baseURL + "/staff/v1/updateStaff", updatedStaff);
  const fetchStaffByStaffId = (staffId) =>
    api.get(proxyurl + baseURL + `/staff/v1/queryStaffByStaffId/${staffId}`);
  const deleteStaff = (staffId) =>
    api.delete(proxyurl + baseURL + `/staff/v1/deleteStaffById/${staffId}`);

  //student
  const fetchAllStudents = () =>
    api.get(proxyurl + baseURL + "/student/v1/queryAllStudents");
  const createStudent = (newStudent) =>
    api.post(baseURL + "/student/v1/createStudent", newStudent);
  const updateStudent = (StudentToUpdate) =>
    api.put(proxyurl + baseURL + "/student/v1/updateStudent", StudentToUpdate);
  const fetchStudentByStudentId = (studentId) =>
    api.get(baseURL + `/student/v1/queryStudentByStudentId/${studentId}`);
  const deleteStudent = (studentId) =>
    api.delete(
      proxyurl + baseURL + `/student/v1/deleteStudentById/${studentId}`
    );

  //Group

  const fetchAllGroups = () =>
    api.get(proxyurl + baseURL + "/group/v1/queryAllGroups");
  const createGroup = (newGroup) =>
    api.post(baseURL + "/group/v1/createGroup", newGroup);
  const updateGroup = (GroupToUpdate) =>
    api.put(proxyurl + baseURL + "/group/v1/updateGroup", GroupToUpdate);
  const fetchGroupByGroupId = (groupId) =>
    api.get(baseURL + `/group/v1/queryGroupByGroupId/${groupId}`);
  const deleteGroup = (groupId) =>
    api.delete(proxyurl + baseURL + `/group/v1/deleteGroupById/${groupId}`);

  //Department

  const fetchAllDepartments = () =>
    api.get(proxyurl + baseURL + "/department/v1/queryAllDepartments");
  const createDepartment = (newDepartment) =>
    api.post(baseURL + "/department/v1/createDepartment", newDepartment);
  const updateDepartment = (DepartmentToUpdate) =>
    api.put(
      proxyurl + baseURL + "/department/v1/updateDepartment",
      DepartmentToUpdate
    );
  const fetchDepartmentByDepartmentId = (departmentId) =>
    api.get(
      baseURL + `/department/v1/queryDepartmentByDepartmentId/${departmentId}`
    );
  const deleteDepartment = (departmentId) =>
    api.delete(
      proxyurl + baseURL + `/department/v1/deleteDepartmentById/${departmentId}`
    );

  //Designation
  const fetchAllDesignations = () =>
    api.get(proxyurl + baseURL + "/designation/v1/queryAllDesignations");
  const createDesignation = (newDesignation) =>
    api.post(baseURL + "/designation/v1/createDesignation", newDesignation);
  const updateDesignation = (DesignationToUpdate) =>
    api.put(
      proxyurl + baseURL + "/designation/v1/updateDesignation",
      DesignationToUpdate
    );
  const fetchDesignationByDesignationId = (designationId) =>
    api.get(
      baseURL +
        `/designation/v1/queryDesignationByDesignationId/${designationId}`
    );
  const deleteDesignation = (designationId) =>
    api.delete(
      proxyurl +
        baseURL +
        `/designation/v1/deleteDesignationById/${designationId}`
    );

  //Standards
  const fetchAllStandards = () =>
    api.get(proxyurl + baseURL + "/standard/v1/queryAllStandards");
  const createStandard = (newStandards) =>
    api.post(baseURL + "/standard/v1/createStandard", newStandards);
  const updateStandard = (StandardToUpdate) =>
    api.put(
      proxyurl + baseURL + "/standard/v1/updateStandard",
      StandardToUpdate
    );
  const fetchStandardByStandardId = (standardId) =>
    api.get(baseURL + `/standard/v1/queryStandardByStandardId/${standardId}`);
  const deleteStandard = (standardId) =>
    api.delete(
      proxyurl + baseURL + `/standard/v1/deleteStandardById/${standardId}`
    );

  //Subjects
  const fetchAllSubjects = () =>
    api.get(baseURL + "/subject/v1/queryAllSubjects");
  const createSubject = (newSubject) =>
    api.post(baseURL + "/subject/v1/createSubject", newSubject);
  const updateSubject = (subjectToUpdate) => {
    console.log("subjectToUpdate API", subjectToUpdate);
    alert("final api check");
    api.put(proxyurl + baseURL + "subject/v1/updateSubject", subjectToUpdate);
  };
  const fetchSubjectBySubjectId = (subjectId) =>
    api.get(baseURL + `/subject/v1/querySubjectBySubjectId/${subjectId}`);
  const deleteSubject = (subjectId) =>
    api.delete(
      proxyurl + baseURL + `/subject/v1/deleteSubjectById/${subjectId}`
    );

  //File upload

  const uploadFileTest = (formData) =>
    api.post(proxyurl + baseURL + `/file/uploadFile`, formData);

  //Homework

  const createHomework = (newHomework) =>
    api.post(baseURL + "/homework/v1/createHomeWork", newHomework);

  return {
    // a list of the API functions from step 2
    fetchAllStaffs,
    createStaff,
    updateStaff,
    fetchStaffByStaffId,
    deleteStaff,

    //students
    fetchAllStudents,
    createStudent,
    updateStudent,
    fetchStudentByStudentId,
    deleteStudent,

    //Group
    fetchAllGroups,
    createGroup,
    updateGroup,
    fetchGroupByGroupId,
    deleteGroup,

    //Departments
    fetchAllDepartments,
    createDepartment,
    updateDepartment,
    fetchDepartmentByDepartmentId,
    deleteDepartment,

    //Designation
    fetchAllDesignations,
    createDesignation,
    updateDesignation,
    fetchDesignationByDesignationId,
    deleteDesignation,

    //Standards
    fetchAllStandards,
    createStandard,
    updateStandard,
    fetchStandardByStandardId,
    deleteStandard,

    //Subjects
    fetchAllSubjects,
    createSubject,
    fetchSubjectBySubjectId,
    deleteSubject,
    updateSubject,

    //File Upload

    uploadFileTest,

    //Homework

    createHomework,
  };
};

export default { create };
