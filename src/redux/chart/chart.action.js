import { chartActionTypes } from "./chart.types.js";

export const fetchChart = (data) => ({
  type: chartActionTypes.FETCH_CHART,
  payload: data,
});
