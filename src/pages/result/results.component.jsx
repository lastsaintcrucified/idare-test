import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Pdf from "react-to-pdf";
import CustomButton from "../../shared/customButton/custom-button.component";
import "./results.styles.scss";

const ref = React.createRef();

const ResultPage = ({ history, project, data }) => {
  const handleClick = () => {
    history.push("/");
  };
  const { name, description, client, contractor } = project;
  const { max_X, min_X, max_Y, min_Y, max_Z, min_Z } = data;
  return (
    <div className="result">
      <Pdf targetRef={ref} filename="results.pdf" x={30} y={30}>
        {({ toPdf }) => (
          <CustomButton inverted onClick={toPdf}>
            Generate PDF
          </CustomButton>
        )}
      </Pdf>
      <div ref={ref}>
        <h1>Results</h1>
        <table>
          <tr>
            <th>Project Name</th>
            <th>Project Description</th>
            <th>Client</th>
            <th>contractor</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>{client}</td>
            <td>{contractor}</td>
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
            <td>{max_X}</td>
            <td>{min_X}</td>
            <td>{max_Y}</td>
            <td>{min_Y}</td>
            <td>{max_Z}</td>
            <td>{min_Z}</td>
          </tr>
        </table>
      </div>
      <div className="btn">
        <CustomButton onClick={handleClick}>Home</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = ({ project, data }) => ({
  project,
  data,
});

export default withRouter(connect(mapStateToProps)(ResultPage));
