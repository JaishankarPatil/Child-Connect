import apisauce from "apisauce";

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const create = (
  baseURL = "https://walkinchildconnect.cloudjiffy.net/ChildConnectAdminWeb"
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
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEiLCJpYXQiOjE1OTM2NzgyOTMsImV4cCI6MTYwOTIzMDI5M30.66Gi4n58gWurSPE16UkpiDXGRsbB7PxtPya5zYySRGVC1ND9-GIX-NdXirRTCXpWedUjPmSY__AHFRAGhJZ4Gw",
    },
    // 10 second timeout...
    timeout: 90240,
  });

  const getAllStaffs = () => api.get(baseURL + "/staff/v1/queryAllStaffs");
  const deleteStaff = (staffId) =>
    api.delete(proxyurl + baseURL + `/staff/v1/deleteStaffById/${staffId}`);
  const getStaffById = (staffId) =>
    api.get(proxyurl + baseURL + `/staff/v1/queryStaffByStaffId/${staffId}`);

  console.log("inside api call", getAllStaffs);

  const addStaff = (newStaff) => {
    console.log("newStaff", newStaff);
    api.post(baseURL + "/staff/v1/createStaff", newStaff);
  };

  const updateStaff = (updatedStaff) => {
    console.log("updatedStaff", updatedStaff);

    api.put(baseURL + "/staff/v1/updateStaff", updatedStaff);
  };

  //student
  const getAllStudents = () =>
    api.get(proxyurl + baseURL + "/student/v1/queryAllStudents");
  const createStudent = (newStudent) =>
    api.post(baseURL + "/student/v1/createStudent", newStudent);

  return {
    // a list of the API functions from step 2
    getAllStaffs,
    deleteStaff,
    addStaff,
    getStaffById,
    updateStaff,

    //students
    getAllStudents,
    createStudent,
  };
};

export default { create };
