import React from "react";

import { Button } from "react-bootstrap";

const ListCountries = ({ countries, handleClick }) => {
  return (
    <div>
      {countries.map(country => (
        <ul key={country.area}>
          <li>
            {country.name}{" "}
            <Button
              className="showButton"
              variant="outline-info"
              onClick={handleClick}
              country={country.name}
            >
              Show
            </Button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ListCountries;
