import { chartActionTypes } from "./chart.types.js";

const INITIAL_STATE = {
  x_axis: [],
  y_axis: [],
};

export const chartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chartActionTypes.FETCH_CHART:
      return {
        ...state,
        x_axis: [...action.payload.x_axis],
        y_axis: [...action.payload.y_axis],
      };
    default:
      return state;
  }
};
