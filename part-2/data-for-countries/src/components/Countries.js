import React from "react";
import Country from "./Country";
import ListCountries from "./ListCountries";

const Countries = ({ countries, search, handleClick }) => {
  let countriesToDisplay = countries;

  if (search) {
    countriesToDisplay = countries.filter(country =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (countriesToDisplay.length === 1) {
    return <Country country={countriesToDisplay[0]} />;
  }

  if (countriesToDisplay.length < 1 || !search) {
    return <div />;
  }

  if (countriesToDisplay.length > 10) {
    return <div>Too many matches, please enter more letters</div>;
  }

  return (
    <div>
      <ListCountries countries={countriesToDisplay} handleClick={handleClick} />
    </div>
  );
};

export default Countries;
