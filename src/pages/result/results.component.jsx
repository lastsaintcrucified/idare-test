import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../../shared/customButton/custom-button.component";
import Pdf from "react-to-pdf";

import TableData from "../../component/table/table.component.jsx";
import ChartData from "../../component/chart/chart.component.jsx";
import "./results.styles.scss";

const ref = React.createRef();

const ResultPage = ({ history }) => {
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="result">
      <Pdf targetRef={ref} filename="results.pdf" scale={0.6}>
        {({ toPdf }) => (
          <CustomButton inverted onClick={toPdf}>
            Generate PDF
          </CustomButton>
        )}
      </Pdf>
      <div ref={ref} className="chart">
        <TableData />
        <br />
        <h1>Chart</h1>
        <ChartData />
      </div>
      <div className="btn">
        <CustomButton onClick={handleClick}>Home</CustomButton>
      </div>
    </div>
  );
};

export default withRouter(ResultPage);
