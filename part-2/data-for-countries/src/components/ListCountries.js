import React from "react";

const ListCountries = ({ countries }) => {
  return (
    <div>
      {countries.map(country => (
        <p key={country.area}>{country.name}</p>
      ))}
    </div>
  );
};

export default ListCountries;
