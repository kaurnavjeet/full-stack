import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import phoneBookService from "./services/phonebook";
import AddContact from "./components/AddContact";
import SearchFilter from "./components/SearchFilter";
import Contacts from "./components/Contacts";
import Notifications from "./components/Notifications";

const headerStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const tableStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(2),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const formStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(7)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  fab: {
    margin: theme.spacing(2)
  }
}));

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setNewSearch] = useState("");
  const [notification, setNotification] = useState({
    message: null,
    type: null
  });

  useEffect(() => {
    phoneBookService.getAll().then(initialContacts => {
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

  const handleSubmit = e => {
    e.preventDefault();
    const duplicates = persons.filter(person => person.name === newName);
    const newPerson = {
      name: newName,
      number: newNumber
    };

    if (duplicates.length) {
      const numConfirm = window.confirm(
        `${newName} is already added to Phonebook, replace the old number with a new one?`
      );

      if (numConfirm) {
        phoneBookService
          .update(duplicates[0].id, newPerson)
          .then(updatedContact => {
            setPersons(
              persons.map(person => {
                return person.id === updatedContact.id
                  ? updatedContact
                  : person;
              })
            );
            setNotification({
              message: `${newName} was successfully updated`,
              type: "success"
            });
            setTimeout(() => {
              setNotification({ message: null, type: null });
            }, 5000);
          })
          .catch(error => {
            setNotification({
              message: `${newName} is already deleted from phonebook.`,
              type: "error"
            });
            setTimeout(() => {
              setNotification({ message: null, type: null });
            }, 5000);
            setPersons(persons.filter(p => p.id !== duplicates[0].id));
          });
      }
    } else {
      phoneBookService
        .create(newPerson)
        .then(returnedContact => {
          setPersons(persons.concat(returnedContact));
          setNotification({
            message: `${newName} was successfully added to the phonebook`,
            type: "success"
          });
          setTimeout(() => {
            setNotification({ message: null, type: null });
          }, 5000);
        })
        .catch(error => {
          setNotification({
            message: `${newName} could not be added to the phonebook`,
            type: "error"
          });
          setTimeout(() => {
            setNotification({ message: null, type: null });
          });
        });
    }

    setNewName("");
    setNewNumber("");
  };

  const handleDelete = (e, person) => {
    e.preventDefault();

    const confirmation = window.confirm(`Delete ${person.name}?`);

    if (confirmation) {
      phoneBookService
        .deletePerson(person.id)
        .then(returnedContact => {
          setPersons(persons.filter(p => p.id !== person.id));
          setNotification({
            message: `${person.name} was successfully deleted from phonebook`,
            type: "success"
          });
          setTimeout(() => {
            setNotification({ message: null, type: null });
          }, 5000);
        })
        .catch(error => {
          setNotification({
            message: `${person.name} could not be deleted from phonebook`,
            type: "error"
          });
          setTimeout(() => {
            setNotification({ message: null, type: null });
          }, 5000);
        });
    }
  };
  const classes = headerStyles();
  const tableClasses = tableStyles();
  const formClasses = formStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
            <Typography className={classes.title} variant="h6" noWrap>
              Phonebook
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <SearchFilter
                handleFilter={handleFilter}
                search={search}
                classes={classes}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      {/* <Container maxWidth="lg"> */}
      <Notifications message={notification.message} type={notification.type} />

      <AddContact
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newName={newName}
        handleNumber={handleNumber}
        newNumber={newNumber}
        formClasses={formClasses}
      />
      <Typography className={classes.title} variant="h6" noWrap>
        Contacts
      </Typography>
      <Contacts
        persons={persons}
        search={search}
        handleDelete={handleDelete}
        tableClasses={tableClasses}
        StyledTableCell={StyledTableCell}
        StyledTableRow={StyledTableRow}
      />
      {/* </Container> */}
    </div>
  );
};

export default App;
