import React, { useState, useEffect } from "react";
import "./App.css";
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import phoneBookService from './services/phonebook'
import AddContact from "./components/AddContact";
import SearchFilter from "./components/SearchFilter";
import Contacts from "./components/Contacts";
import Notifications from './components/Notifications'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setNewSearch] = useState("");
  const [notification, setNotification] = useState({
    message: null,
    type: null
  })

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
            phoneBookService
            .update(duplicates[0].id, newPerson)
            .then(updatedContact => {
                  setPersons(
                    persons.map(person => { 
                      return person.id === updatedContact.id ? updatedContact : person})
                  )
                  setNotification(
                    {message: `${newName} was successfully updated`, 
                    type: "success"})
                  setTimeout(() => {
                    setNotification({message: null, type: null})
                  }, 5000)
                })
                .catch(error => {
                  setNotification({message: `${newName} is already deleted from phonebook.`, type: "error"})
                  setTimeout(() => {
                    setNotification({message: null, type: null})
                  }, 5000)
                  setPersons(persons.filter(p => p.id !== duplicates[0].id))
                })
          }
        } else {
          phoneBookService
            .create(newPerson)
            .then(returnedContact => {
                setPersons(persons.concat(returnedContact))
                setNotification({
                  message: `${newName} was successfully added to the phonebook`,
                  type: "success"
                })
                setTimeout(() => {
                  setNotification({message: null, type: null})
                }, 5000)
        
            })
            .catch(error => {
              setNotification({
                message: `${newName} could not be added to the phonebook`,
                type: "error"
              })
              setTimeout(() => {
                setNotification({message: null, type: null})
              })
            })
    }

    setNewName("");
    setNewNumber("");
  };

  const handleDelete = (e, person) => {
    e.preventDefault()

    const confirmation = window.confirm(`Delete ${person.name}?`)

    if(confirmation) {
      phoneBookService
        .deletePerson(person.id)
        .then(returnedContact => {
            setPersons(persons.filter(p => p.id !== person.id))
            setNotification({
              message: `${person.name} was successfully deleted from phonebook`,
              type: "success"
            })
            setTimeout(() => {
              setNotification({message: null, type: null})
            }, 5000)
        })
        .catch(error => {
          setNotification({
            message: `${person.name} could not be deleted from phonebook`,
            type: "error"
          })
          setTimeout(() => {
            setNotification({message: null, type: null})
          }, 5000)
        })
    }
  }

  return (
    <div>
      <Typography variant='h1' align="center" gutterBottom>Phonebook
      </Typography>
     
      
        <Notifications message={notification.message} type={notification.type} />
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
