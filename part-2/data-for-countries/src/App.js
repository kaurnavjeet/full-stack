import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Countries from "./components/Countries";

import FilterFunction from "./components/FilterFunction";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then(response => {
        setCountries(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleClick = e => {
    setSearch(e.target.attributes.country.value);
  };

  return (
    <div>
      <header className="App-header">Countries Bot</header>
      <FilterFunction handleChange={handleChange} search={search} />
      <div className="container">
        <Countries
          countries={countries}
          search={search}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
