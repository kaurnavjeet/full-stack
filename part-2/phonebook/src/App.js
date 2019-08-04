import React, { useState, useEffect } from "react";
import "./App.css";

import phoneBookService from './services/phonebook'
import AddContact from "./components/AddContact";
import SearchFilter from "./components/SearchFilter";
import Contacts from "./components/Contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setNewSearch] = useState("");

  useEffect(() => {
    phoneBookService.getAll()
    .then(initialContacts => {
      setPersons(initialContacts);
    });
  }, []);

  const handleFilter = e => {
    setNewSearch(e.target.value);
  };

  const handleChange = e => {
    setNewName(e.target.value);
  };

  const handleNumber = e => {
    setNewNumber(e.target.value);
  };

  // const getMaxId = () => {
  //   const allIds = persons.map(person => {
  //     return person.id
  //   })
  //   const maxId = Math.max(...allIds)
  //   return maxId + 1
  // }
 



  const handleSubmit = (e) => {
    e.preventDefault();
    const duplicates = persons.filter(person => person.name === newName)
        const newPerson = {
          name: newName,
          number: newNumber,
         
        };

        if(duplicates.length) {
          const numConfirm = window.confirm(`${newName} is already added to Phonebook, replace the old number with a new one?`)

          if(numConfirm) {
            phoneBookService.update(duplicates[0].id, newPerson).then(updatedContact => {
                  setPersons(persons.map(person => { return person.id === updatedContact.id ? updatedContact : person}))
                }).catch(error => {
                  window.alert(`${newName} is already deleted from phonebook.`)
                  setPersons(persons.filter(p => p.id !== duplicates[0].id))
                })
          }
        } else {
        phoneBookService.create(newPerson).then(returnedContact => {
          setPersons(persons.concat(returnedContact))
        
      })
    }

    setNewName("");
    setNewNumber("");
  };

  const handleDelete = (e, person) => {
    e.preventDefault()

    const confirmation = window.confirm(`Delete ${person.name}?`)

    if(confirmation) {
    phoneBookService.deletePerson(person.id).then(returnedContact => {
      setPersons(persons.filter(p => p.id !== person.id))
    }).catch(error => {
      console.log(error)
    })
  }
  }

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
      <Contacts persons={persons} search={search} handleDelete={handleDelete}/>
    </div>
  );
};

export default App;
