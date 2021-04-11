import React, { useState } from "react";
import CustomButton from "../../shared/customButton/custom-button.component.jsx";
import { withRouter } from "react-router-dom";
import FormInput from "../../shared/formInput/form-input.component.jsx";
import { connect } from "react-redux";

import "./form1.styles.scss";
import { fetchProject } from "../../redux/project/project.action.js";

const Form1 = ({ history, fetchProject }) => {
  const [step1, setStep1] = useState({
    name: "",
    description: "",
    client: "",
    contractor: "",
  });
  const handleSubmit = () => {
    console.log("data ->", step1);
    fetchProject(step1);
    history.push("/form2");
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setStep1({ ...step1, [name]: value });
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
          minLength="6"
          maxLength="30"
        />
        <FormInput
          name="description"
          value={description}
          textStyle="textArea"
          required
          handleChange={handleChange}
          label="Project Description"
          minLength="15"
        />
        <FormInput
          name="client"
          value={client}
          required
          handleChange={handleChange}
          label="Client"
          minLength="6"
          maxLength="30"
        />
        <FormInput
          name="contractor"
          value={contractor}
          required
          handleChange={handleChange}
          label="Contractor"
          minLength="6"
          maxLength="30"
        />
        <CustomButton type="submit">Next</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchProject: ({ name, description, client, contractor }) =>
    dispatch(fetchProject({ name, description, client, contractor })),
});

export default withRouter(connect(null, mapDispatchToProps)(Form1));
