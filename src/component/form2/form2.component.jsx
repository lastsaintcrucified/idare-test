import React, { useState } from "react";
import { withRouter } from "react-router";
import CustomButton from "../../shared/customButton/custom-button.component.jsx";
import FormInput from "../../shared/formInput/form-input.component.jsx";
import { connect } from "react-redux";
import { CSVReader } from "react-papaparse";

import "./form2.styles.scss";

const buttonRef = React.createRef();

const Form2 = ({ history, project }) => {
  const handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };
  const handleOnFileLoad = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log("---------------------------");
    console.log(err);
    console.log("---------------------------");
  };

  const handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  const handleRemoveFile = (e) => {
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };
  const [step2, setStep2] = useState({
    max_X: "",
    min_X: "",
    max_Y: "",
    min_Y: "",
    max_Z: "",
    min_Z: "",
  });
  const handleSubmit = () => {
    console.log("Submitted");
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setStep2({ ...step2, [name]: value });
  };
  const { max_X, min_X, max_Y, min_Y, max_Z, min_Z } = step2;
  const { name, description, client, contractor } = project;
  return (
    <div className="form2">
      <form onSubmit={handleSubmit}>
        <FormInput
          name="name"
          value={name}
          disabled
          required
          handleChange={handleChange}
          label="Project Name"
        />
        <FormInput
          name="description"
          value={description}
          disabled
          textStyle="textArea"
          required
          handleChange={handleChange}
          label="Project Description"
        />
        <FormInput
          name="client"
          value={client}
          disabled
          required
          handleChange={handleChange}
          label="Client"
        />
        <FormInput
          name="contractor"
          value={contractor}
          disabled
          required
          handleChange={handleChange}
          label="Contractor"
        />
        {/* <input type="file" id="myFile" name="filename" /> */}
        <h5>Upload Csv file</h5>
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
              <button
                className="upBtn"
                type="button"
                onClick={handleOpenDialog}
              >
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
        <FormInput
          name="max_X"
          value={max_X}
          required
          handleChange={handleChange}
          label="max_X"
        />
        <FormInput
          name="min_X"
          value={min_X}
          textStyle="textArea"
          required
          handleChange={handleChange}
          label="min_X"
        />
        <FormInput
          name="max_Y"
          value={max_Y}
          required
          handleChange={handleChange}
          label="max_Y"
        />
        <FormInput
          name="min_Y"
          value={min_Y}
          required
          handleChange={handleChange}
          label="min_Y"
        />
        <FormInput
          name="max_Z"
          value={max_Z}
          required
          handleChange={handleChange}
          label="max_Z"
        />
        <FormInput
          name="min_Z"
          value={min_Z}
          required
          handleChange={handleChange}
          label="min_Z"
        />
      </form>
      <div className="buttons">
        <CustomButton onClick={() => history.push("/")} inverted type="submit">
          Back
        </CustomButton>
        <CustomButton onClick={() => console.log(project)} type="submit">
          Confirm
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = ({ project }) => ({
  project,
});

export default withRouter(connect(mapStateToProps)(Form2));
