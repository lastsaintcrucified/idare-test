import React, { useState } from "react";
import { withRouter } from "react-router";
import CustomButton from "../../shared/customButton/custom-button.component.jsx";
import FormInput from "../../shared/formInput/form-input.component.jsx";

import "./form2.styles.scss";

const Form2 = ({ history }) => {
  const [step1, setStep1] = useState({
    name: "",
    description: "",
    client: "",
    contractor: "",
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
    setStep1({ ...step1, [name]: value });
  };
  const {
    name,
    description,
    client,
    contractor,
    max_X,
    min_X,
    max_Y,
    min_Y,
    max_Z,
    min_Z,
  } = step1;
  return (
    <div className="form2">
      <form onSubmit={handleSubmit}>
        <FormInput
          name="name"
          value={name}
          required
          handleChange={handleChange}
          label="Project Name"
        />
        <FormInput
          name="description"
          value={description}
          textStyle="textArea"
          required
          handleChange={handleChange}
          label="Project Description"
        />
        <FormInput
          name="client"
          value={client}
          required
          handleChange={handleChange}
          label="Client"
        />
        <FormInput
          name="contractor"
          value={contractor}
          required
          handleChange={handleChange}
          label="Contractor"
        />
        <input type="file" id="myFile" name="filename" />
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
        <CustomButton type="submit">Confirm</CustomButton>
      </div>
    </div>
  );
};

export default withRouter(Form2);
