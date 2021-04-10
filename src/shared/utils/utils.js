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
