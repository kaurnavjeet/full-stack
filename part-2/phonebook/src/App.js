import React, { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import SearchFilter from "./components/SearchFilter";
import Contacts from "./components/Contacts";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "510-555-5555" },
    { name: "Arthur Peter", number: "510-666-6666" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setNewSearch] = useState("");

  const handleFilter = e => {
    setNewSearch(e.target.value);
  };

  const handleChange = e => {
    setNewName(e.target.value);
  };

  const handleNumber = e => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    persons.forEach(person => {
      if (person.name === newName) {
        window.alert(`${newName} is already added to Phonebook`);
      } else if (person.number === newNumber) {
        window.alert(`${newNumber} is already added to Phonebook`);
      } else {
        const newPerson = {
          name: newName,
          number: newNumber
        };
        setPersons(persons.concat(newPerson));
      }
    });

    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter handleFilter={handleFilter} search={search} />
      <h2>Add Contact</h2>
      <AddContact
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newName={newName}
        handleNumber={handleNumber}
        newNumber={newNumber}
      />
      <h2>Contacts</h2>
      <Contacts persons={persons} search={search} />
    </div>
  );
};

export default App;
