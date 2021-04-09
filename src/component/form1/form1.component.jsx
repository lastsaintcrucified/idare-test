import React, { useState } from "react";
import CustomButton from "../../shared/customButton/custom-button.component.jsx";
import { withRouter } from "react-router-dom";
import FormInput from "../../shared/formInput/form-input.component.jsx";
import { connect } from "react-redux";

import "./form1.styles.scss";
import { fetchData } from "../../redux/project/project.action.js";

const Form1 = ({ history, fetchData }) => {
  const [step1, setStep1] = useState({
    name: "",
    description: "",
    client: "",
    contractor: "",
  });
  const handleSubmit = () => {
    console.log("Submitted");
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setStep1({ ...step1, [name]: value });
  };
  const handleClick = () => {
    console.log("data ->", step1);
    fetchData(step1);
    history.push("/form2");
  };
  const { name, description, client, contractor } = step1;
  return (
    <div className="form1">
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
      </form>
      <CustomButton onClick={handleClick} inverted type="submit">
        Next
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: ({ name, description, client, contractor }) =>
    dispatch(fetchData({ name, description, client, contractor })),
});

export default withRouter(connect(null, mapDispatchToProps)(Form1));
