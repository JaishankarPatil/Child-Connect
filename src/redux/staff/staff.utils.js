export const deleteStaffFromStafs = (staffList, staffToBeDeleted) => {
  console.log("staffToBeDeleted", staffToBeDeleted);
  return staffList.filter((staff) => staff.id !== staffToBeDeleted.id);
};
