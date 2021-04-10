import React from "react";
import { connect } from "react-redux";
import { CSVReader } from "react-papaparse";
import { fetchData } from "../../redux/data/data.action.js";
import { convertData, minMax, chart } from "../utils/utils.js";

import "./inputCsv.styles.scss";
import { fetchChart } from "../../redux/chart/chart.action.js";

const buttonRef = React.createRef();
const InputCsv = ({ fetchData, fetchChart }) => {
  const fakeData = {
    max_X: "",
    min_X: "",
    max_Y: "",
    min_Y: "",
    max_Z: "",
    min_Z: "",
  };
  const handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };
  const handleOnFileLoad = (data) => {
    const abc = convertData(data);
    const chartData = chart(data);
    console.log(chartData);
    fetchChart(chartData);
    fetchData(minMax(abc));
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log("---------------------------");
    console.log(err);
    console.log("---------------------------");
  };

  const handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    fetchData(fakeData);
    console.log(data);
    console.log("---------------------------");
  };

  const handleRemoveFile = (e) => {
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };
  return (
    <div>
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      >
        {({ file }) => (
          <aside
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 10,
            }}
          >
            <button className="upBtn" type="button" onClick={handleOpenDialog}>
              Browse file
            </button>
            <div
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#ccc",
                height: 45,
                lineHeight: 2.5,
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 13,
                paddingTop: 3,
                width: "60%",
              }}
            >
              {file && file.name}
            </div>
            <button className="rmBtn" onClick={handleRemoveFile}>
              Remove
            </button>
          </aside>
        )}
      </CSVReader>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: ({ max_X, min_X, max_Y, min_Y, max_Z, min_Z }) =>
    dispatch(fetchData({ max_X, min_X, max_Y, min_Y, max_Z, min_Z })),
  fetchChart: ({ x_axis, y_axis }) => dispatch(fetchChart({ x_axis, y_axis })),
});

export default connect(null, mapDispatchToProps)(InputCsv);
