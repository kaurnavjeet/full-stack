import React from "react";
import Contact from "./Contact";

const Contacts = ({ persons, search, handleDelete }) => {
  return (
    <div>
      {persons
        .filter(person =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )
        .map(person => (
          <div key={person.id}>
            <Contact person={person} handleDelete={handleDelete}/>
          </div>
        ))}
    </div>
  );
};

export default Contacts;
