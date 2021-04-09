import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../../shared/customButton/custom-button.component";
import "./results.styles.scss";

const ResultPage = ({ history }) => {
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="result">
      <div>
        <table>
          <tr>
            <th>Project Name</th>
            <th>Project Description</th>
            <th>Client</th>
            <th>contractor</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr>
        </table>
        <br />
        <table>
          <tr>
            <th>max_X</th>
            <th>min_X</th>
            <th>max_Y</th>
            <th>min_Y</th>
            <th>max_Z</th>
            <th>min_Z</th>
          </tr>
          <tr>
            <td>10</td>
            <td>11</td>
            <td>33</td>
            <td>12</td>
            <td>12</td>
            <td>56</td>
          </tr>
        </table>
      </div>
      <div className="btn">
        <CustomButton onClick={handleClick}>Home</CustomButton>
      </div>
    </div>
  );
};

export default withRouter(ResultPage);
