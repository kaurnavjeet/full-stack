import React from "react";

const SearchFilter = ({ handleFilter, search }) => {
  return (
    <div>
      Filter by name:{" "}
      <input type="text" onChange={handleFilter} value={search} />
    </div>
  );
};

export default SearchFilter;
