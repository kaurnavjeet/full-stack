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

  return (
    <div className="container-fluid">
      <header className="App-header" />
      <FilterFunction handleChange={handleChange} search={search} />

      <h2>Countries</h2>
      <Countries countries={countries} search={search} />
    </div>
  );
}

export default App;
