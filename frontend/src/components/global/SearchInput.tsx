import React, { useState, useEffect, useRef } from "react";
import { searchIcon } from "../../assets/image-icons-barrel";
import "./styles/SearchInput.css";
import { ISearchInputProps } from "../../types/components.types";

//custom search input
const SearchInput: React.FC<ISearchInputProps> = ({
  placeHolderText,
  value = "",
  onChange,
  onSearch,
  onKeyPress,
  autoFocus = false,
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const inputRef = useRef<HTMLInputElement>(null);

  //update local state when prop value changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Set focus if autoFocus is true
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch();
    }

    if (onKeyPress) {
      onKeyPress(e);
    }
  };

  const handleClear = () => {
    setInputValue("");

    if (onChange) {
      onChange("");
    }

    // Focus the input after clearing
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="search-input-container">
      <div className="search-input-wrapper">
        <img src={searchIcon} alt="Search" className="search-input__icon" />
        <input
          ref={inputRef}
          type="text"
          className="search-input__field"
          placeholder={placeHolderText}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {inputValue && (
          <button
            className="search-input__clear-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};
export default SearchInput;
