export const convertData = (data) => {
  const tempXYZ = {
    x: [],
    y: [],
    z: [],
  };

  data.shift();
  data.pop();
  data.map((dt) => {
    tempXYZ.x.push(parseFloat(dt.data[1]));
    tempXYZ.y.push(parseFloat(dt.data[2]));
    tempXYZ.z.push(parseFloat(dt.data[3]));
    return tempXYZ;
  });

  return tempXYZ;
};
export const minMax = (data) => {
  const result = {
    max_X: Math.max(...data.x),
    min_X: Math.min(...data.x),
    max_Y: Math.max(...data.y),
    min_Y: Math.min(...data.y),
    max_Z: Math.max(...data.z),
    min_Z: Math.min(...data.z),
  };

  return result;
};

export const chart = (data) => {
  const chartData = {
    x_axis: [],
    y_axis: [],
  };
  data.map((dt) => {
    chartData.x_axis.push(parseInt(dt.data[0]));
    chartData.y_axis.push(parseFloat(dt.data[1]));
    return chartData;
  });
  return chartData;
};

export const chartConvert = (data) => {
  const x = [...data.x_axis];
  const y = [...data.y_axis];
  var result = {};
  x.forEach((key, i) => (result[key] = y[i]));
  return result;
};
