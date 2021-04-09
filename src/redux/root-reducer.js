import { combineReducers } from "redux";

import { projectReducer } from "./project/project.reducer.js";

export default combineReducers({
  project: projectReducer,
});
