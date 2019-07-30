import React from "react";

const FilterFunction = ({ handleChange, search }) => {
  return (
    <div className="input-group my-4 col-6 mx-auto">
      <input
        className="form-control py-2  border"
        type="search"
        placeholder="Search for Country"
        id="example-search-input"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
};

export default FilterFunction;
