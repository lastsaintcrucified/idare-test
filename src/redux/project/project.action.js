import { projectActionTypes } from "./project.types.js";

export const fetchData = (project) => ({
  type: projectActionTypes.FETCH_DATA,
  payload: project,
});
