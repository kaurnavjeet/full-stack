import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Country = ({ country }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={country.flag} />
      <Card.Body>
        <Card.Title>{country.name}</Card.Title>
      </Card.Body>
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
      </ListGroup>
    </Card>
  );
};

export default Country;
