import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroupItem } from "react-bootstrap";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await axios.get(
          `http://api.apixu.com/v1/current.json?key=53d601eb03d1412c9c004840192807&q=${capital}`
        );
        setWeather(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getWeather();
  }, [capital]);

  return (
    <>
      <ListGroupItem>
        Temperature: {weather && weather.current && weather.current.temp_c} °C
        <img
          src={weather && weather.current && weather.current.condition.icon}
          alt={weather && weather.current && weather.current.condition.text}
          style={{ width: "50px", height: "50px", marginLeft: "25px" }}
        />
      </ListGroupItem>
      <ListGroupItem>
        Wind: {weather && weather.current && weather.current.wind_kph} kph{" "}
        {weather && weather.current && weather.current.wind_dir}
      </ListGroupItem>
    </>
  );
};

export default Weather;
