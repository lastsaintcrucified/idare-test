import { dataActionTypes } from "./data.types.js";

export const fetchData = (data) => ({
  type: dataActionTypes.FETCH_DATA,
  payload: data,
});
