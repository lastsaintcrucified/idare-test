import React from "react";
import { withRouter } from "react-router";
import CustomButton from "../../shared/customButton/custom-button.component.jsx";
import FormInput from "../../shared/formInput/form-input.component.jsx";
import { connect } from "react-redux";

import "./form2.styles.scss";
import InputCsv from "../../shared/inputCsv/inputCsv.component.jsx";

const Form2 = ({ history, project, data }) => {
  // const [step2, setStep2] = useState({
  //   max_X: "",
  //   min_X: "",
  //   max_Y: "",
  //   min_Y: "",
  //   max_Z: "",
  //   min_Z: "",
  // });
  const handleSubmit = () => {
    console.log("Submitted");
  };
  // const handleChange = (e) => {
  //   const { value, name } = e.target;
  //   setStep2({ ...step2, [name]: value });
  // };
  const { max_X, min_X, max_Y, min_Y, max_Z, min_Z } = data;
  const { name, description, client, contractor } = project;
  return (
    <div className="form2">
      <form onSubmit={handleSubmit}>
        <FormInput
          name="name"
          value={name}
          disabled
          required
          label="Project Name"
        />
        <FormInput
          name="description"
          value={description}
          disabled
          textStyle="textArea"
          required
          label="Project Description"
        />
        <FormInput
          name="client"
          value={client}
          disabled
          required
          label="Client"
        />
        <FormInput
          name="contractor"
          value={contractor}
          disabled
          required
          label="Contractor"
        />
        {/* <input type="file" id="myFile" name="filename" /> */}
        <h5>Upload Csv file</h5>
        <InputCsv />
        <FormInput
          name="max_X"
          value={max_X || ""}
          onChange={() => {}}
          required
          label="max_X"
          allShrink={true}
        />
        <FormInput
          name="min_X"
          value={min_X || ""}
          onChange={() => {}}
          required
          label="min_X"
          allShrink={true}
        />
        <FormInput
          name="max_Y"
          value={max_Y || ""}
          onChange={() => {}}
          required
          label="max_Y"
          allShrink={true}
        />
        <FormInput
          name="min_Y"
          value={min_Y || ""}
          onChange={() => {}}
          required
          label="min_Y"
          allShrink={true}
        />
        <FormInput
          name="max_Z"
          value={max_Z || ""}
          onChange={() => {}}
          required
          label="max_Z"
          allShrink={true}
        />
        <FormInput
          name="min_Z"
          value={min_Z || ""}
          onChange={() => {}}
          required
          label="min_Z"
          allShrink={true}
        />
      </form>
      <div className="buttons">
        <CustomButton onClick={() => history.push("/")} inverted type="submit">
          Back
        </CustomButton>
        <CustomButton onClick={() => history.push("/result")} type="submit">
          Confirm
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = ({ project, data }) => ({
  project,
  data,
});

export default withRouter(connect(mapStateToProps)(Form2));
