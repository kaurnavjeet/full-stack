import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`https://restcountries.eu/rest/v2/name/${search}`)
  //     .then(response => {
  //       setCountries(response.data);
  //     });
  // });

  const handleChange = e => {
    setName(e.target.value);
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(response => {
        console.log(response.data);
        setCountries(response.data);
      });
  };

  return (
    <div>
      Find Countries
      <input type="text" onChange={handleChange} value={name} />
      <h2>Countries</h2>
      {countries.length > 10
        ? "Too many matches, please enter more letters"
        : countries.length === 1
        ? countries.map(country => (
            <div key={country.area}>
              <h2>{country.name}</h2>
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
              <p>Languages</p>
              <ul>
                {country.languages.map(language => (
                  <li key={language[0]}>{language.name}</li>
                ))}
              </ul>
              <img
                src={country.flag}
                alt="flag"
                style={{ height: "250px", width: "250px" }}
              />
            </div>
          ))
        : countries.map(country => (
            <div key={country.gini}>
              <p>{country.name}</p>
            </div>
          ))}
    </div>
  );
}

export default App;
