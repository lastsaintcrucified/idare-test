import { combineReducers } from "redux";

import { projectReducer } from "./project/project.reducer.js";
import { dataReducer } from "./data/data.reducer.js";
import { chartReducer } from "./chart/chart.reducer.js";

export default combineReducers({
  project: projectReducer,
  data: dataReducer,
  chart: chartReducer,
});
