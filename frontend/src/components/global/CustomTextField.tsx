import React from "react";
import './styles/CustomTextField.css'
import "./styles/CustomTextField.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICustomTextFieldProps } from "../../types/components.types";


//input style for custom textfield
const inputStyleCustomTextField = {
    height: "48px",
    width: "fit-content",
    border: "1px solid #ced4da",
    borderRadius: "4px",
    padding: "0 12px",
    fontSize: "16px",
    outline: "none",
    margin: "3px",
  };
  

// Custom textfield component
const CustomTextField: React.FC<ICustomTextFieldProps> = ({
  embeddedIconAtStart,
  inputProps: { id, name, placeHolderTxt, helperTxt, type, value },
  inputStyle,
  disabled,
  onChange,
  floatingLabel = false, //default will be false
}) => {
  return (
    <div
      className={`custom-text-field ${floatingLabel ? "floating-label" : ""}`}
      style={{ width: "100%" }}
    >
      <div className="input-container">
        {embeddedIconAtStart && (
          <FontAwesomeIcon
            icon={embeddedIconAtStart}
            className="embedded-icon"
          />
        )}
        <input
          id={id}
          name={name}
          type={type ?? "text"}
          value={value}
          readOnly={disabled ?? false}
          onChange={onChange}
          autoComplete="off"
          placeholder={floatingLabel ? "" : placeHolderTxt}
          style={{
            ...inputStyleCustomTextField, //base input style
            ...inputStyle, // further styles
            paddingLeft: embeddedIconAtStart ? "50px" : "10px", //padding if icon is present,
          }}
        />
        {floatingLabel && (
          <label htmlFor={id} className="custom-label">
            {placeHolderTxt}
          </label>
        )}
      </div>
      {helperTxt && (
        <span
          style={{
            fontSize: 15,
            paddingTop: "10px",
            color: "red",
            textAlign: "center",
          }}
        >
          {helperTxt}
        </span>
      )}
    </div>
  );
};
export default CustomTextField;
