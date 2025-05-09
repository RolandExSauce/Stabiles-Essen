import React from "react";
import "./styles/CustomBtn.css";
import { ICustomBtnProps } from "../../types/components.types";

//Custom button component
const CustomBtn: React.FC<ICustomBtnProps> = ({
  btnText,
  disabled,
  variant = "primary",
  size = "medium",
  icon,
  fullWidth = false,
  type = "button",
  handleClick,
}) => {
  const btnClasses = [
    "custom-btn",
    `custom-btn--${variant}`,
    `custom-btn--${size}`,
    fullWidth ? "custom-btn--full-width" : "",
    disabled ? "custom-btn--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={btnClasses}
      disabled={disabled}
      type={type}
      onClick={handleClick}
    >
      {icon && <span className="custom-btn__icon">{icon}</span>}
      <span className="custom-btn__text">{btnText}</span>
    </button>
  );
};

export default CustomBtn;
