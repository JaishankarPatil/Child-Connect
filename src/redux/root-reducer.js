import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import staffReducer from "./staff/staff.reducer";
import studentReducer from "./student/student.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["staff"],
};

const rootReducer = combineReducers({
  staff: staffReducer,
  user: userReducer,
  student: studentReducer,
});

export default persistReducer(persistConfig, rootReducer);
