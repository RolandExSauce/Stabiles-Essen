import "./styles/SearchInput.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISearchInputProps } from "../../types/components.types";

//TODO: accept prop for placeholder text
const SearchInput: React.FC<ISearchInputProps> = ({ placeHolderText }) => {
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        placeholder={placeHolderText}
        className="search-input"
      />
    </div>
  );
};

export default SearchInput;
