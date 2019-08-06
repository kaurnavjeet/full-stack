import React from "react";
import InputBase from "@material-ui/core/InputBase";

const SearchFilter = ({ handleFilter, search, classes }) => {
  return (
    <div>
      <InputBase
        placeholder="Search by name..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={handleFilter}
        value={search}
      />
    </div>
  );
};

export default SearchFilter;
