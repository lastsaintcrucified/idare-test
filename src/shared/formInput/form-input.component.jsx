import React from "react";

import "./form-input.styles.scss";

const FormInput = ({
  handleChange,
  label,
  textStyle,
  allShrink,
  ...otherProps
}) => (
  <div className="group">
    {textStyle === "textArea" ? (
      <textarea
        className="form-input-area"
        onChange={handleChange}
        {...otherProps}
      />
    ) : (
      <input className="form-input" onChange={handleChange} {...otherProps} />
    )}
    {label ? (
      <label
        className={`${
          otherProps.value.length
            ? "shrink"
            : allShrink === true
            ? "shrink"
            : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
