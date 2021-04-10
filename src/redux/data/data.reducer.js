import { dataActionTypes } from "./data.types.js";

const INITIAL_STATE = {
  max_X: 0,
  min_X: 0,
  max_Y: 0,
  min_Y: 0,
  max_Z: 0,
  min_Z: 0,
};

export const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dataActionTypes.FETCH_DATA:
      return {
        ...state,
        max_X: action.payload.max_X,
        min_X: action.payload.min_X,
        max_Y: action.payload.max_Y,
        min_Y: action.payload.min_Y,
        max_Z: action.payload.max_Z,
        min_Z: action.payload.min_Z,
      };
    default:
      return state;
  }
};
