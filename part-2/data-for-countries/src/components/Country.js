import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Weather from "./Weather";

const Country = ({ country }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={country.flag} />

        <Card.Header style={{ textAlign: "center", fontSize: "25px" }}>
          {country.name}
        </Card.Header>

        <ListGroup className="list-group-flush">
          <ListGroupItem>Capital: {country.capital}</ListGroupItem>
          <ListGroupItem>Population: {country.population}</ListGroupItem>
          <ListGroupItem>
            Languages
            <ul className="list-group">
              {country.languages.map((language, index) => (
                <li key={index} className="list-group-item">
                  {language.name}
                </li>
              ))}
            </ul>
          </ListGroupItem>
          <Weather capital={country.capital} />
        </ListGroup>
      </Card>
    </div>
  );
};

export default Country;
