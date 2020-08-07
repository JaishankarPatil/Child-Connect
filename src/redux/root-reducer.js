import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import staffReducer from "./staff/staff.reducer";
import studentReducer from "./student/student.reducer";
import userReducer from "./user/user.reducer";
import groupReducer from "./group/group.reducer";
import departmentReducer from "./department/department.reducer";
import designationReducer from "./designation/designation.reducer";
import standardReducer from "./standard/standard.reducer";
import subjectReducer from "./subject/subject.reducer";
import homeworkReducer from "./homework/homework.reducer";
import replayHomeworkReducer from "./replay-homework/replay-homework.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["staff"],
};

const rootReducer = combineReducers({
  staff: staffReducer,
  user: userReducer,
  student: studentReducer,
  group: groupReducer,
  department: departmentReducer,
  designation: designationReducer,
  standard: standardReducer,
  subject: subjectReducer,
  homework: homeworkReducer,
  replayHomework: replayHomeworkReducer,
});

export default persistReducer(persistConfig, rootReducer);
