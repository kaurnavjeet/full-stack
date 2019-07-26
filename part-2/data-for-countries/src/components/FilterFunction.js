import React from "react";

const FilterFunction = ({ handleChange, search }) => {
  return (
    <form className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search for Country"
        aria-label="Search"
        onChange={handleChange}
        value={search}
      />
    </form>
  );
};

export default FilterFunction;
