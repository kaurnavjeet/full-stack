import React from "react";
import Contact from "./Contact";

const Contacts = ({ persons, search }) => {
  return (
    <div>
      {persons
        .filter(person =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )
        .map(person => (
          <div key={person.number}>
            <Contact person={person} />
          </div>
        ))}
    </div>
  );
};

export default Contacts;
