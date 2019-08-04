import React from "react";

const Contact = ({ person, handleDelete }) => {
  return (
    <p>
      {person.name} {person.number} <button onClick={(e) => handleDelete(e, person)}>Delete</button>
    </p>
  );
};

export default Contact;
