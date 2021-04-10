import { projectActionTypes } from "./project.types.js";

export const fetchProject = (project) => ({
  type: projectActionTypes.FETCH_PROJECT,
  payload: project,
});
