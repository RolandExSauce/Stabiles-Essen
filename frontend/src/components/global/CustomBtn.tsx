import React, { useRef, useState, useCallback, useEffect } from "react";
import "./styles/CustomBtn.css";
import { ICustomBtnProps } from "../../types/components.types";

// This reusable button component will be used throughout the entire application
const CustomBtn: React.FC<ICustomBtnProps> = ({
  handleClick,
  disabled,
  btnText,
  buttonIcon,
  buttonStyleOptions,
  roundButtonBorders,
  buttonType, // Default to "button" if not specified
}) => {
  // const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <button
      type={buttonType ?? "button"}
      style={{
        borderRadius: roundButtonBorders ? "40px" : "",
        ...buttonStyleOptions?.buttonStyles,
      }}
      className={`button ${disabled ? "disabled" : ""}`}
      // ref={buttonRef}
      disabled={disabled} // Disable the button if `disabled` is true
      onClick={handleClick}
    >
      <div className="text-icon">
        {buttonIcon && <img src={buttonIcon} style={buttonStyleOptions?.iconStyles} />}
        <span
          style={{
            color: "#040F36",
            ...buttonStyleOptions?.buttonTxtStyles,
          }}
        >
          {btnText}
        </span>
      </div>
    </button>
  );
};

export default CustomBtn;
