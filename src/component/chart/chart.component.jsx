import React from "react";
import { connect } from "react-redux";
import { chartConvert } from "../../shared/utils/utils.js";
import { ColumnChart } from "react-chartkick";
import "chartkick/chart.js";

const Chart = ({ chart }) => {
  const chartData = chartConvert(chart);
  return (
    <div className="chartName">
      <ColumnChart
        data={chartData}
        xtitle="Kp"
        ytitle="X"
        min={585270.709}
        max={585800.436}
        curve={false}
        width="340px"
      />
    </div>
  );
};

const mapStateToProps = ({ chart }) => ({
  chart,
});
export default connect(mapStateToProps)(Chart);
