import { ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";

import classes from "./SearchBar.module.css";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={classes.search}>
      <FiSearch className={classes.icon} aria-hidden="true" focusable="false" />

      <input
        type="search"
        value={value}
        placeholder="Search products..."
        onChange={handleChange}
        aria-label="Search products"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className={classes.clear}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;
