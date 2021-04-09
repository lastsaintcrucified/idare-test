import { projectActionTypes } from "./project.types.js";

const INITIAL_STATE = {
  name: "",
  description: "",
  client: "",
  contractor: "",
};

export const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case projectActionTypes.FETCH_DATA:
      return {
        ...state,
        name: action.payload.name,
        description: action.payload.description,
        client: action.payload.client,
        contractor: action.payload.contractor,
      };
    default:
      return state;
  }
};
