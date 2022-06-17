import axios from "axios";
import { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const handleName = (e) => {
    const { value } = e.target;

    setNewName(value);
  };

  const handleNumber = (e) => {
    const { value } = e.target;

    setNewNumber(value);
  };

  const handleSearch = (e) => {
    const { value } = e.target;

    setSearch(value);
  };

  const filteredData = persons.filter((person) => {
    if (search === "") {
      return person;
    } else {
      return person.name.toLowerCase().includes(search.toLowerCase());
    }
  });

  const addUser = (e) => {
    e.preventDefault();

    const newPersons = [...persons];

    const currentPerson = {
      name: newName,
      number: newNumber,
      id: new Date(),
    };

    if (currentPerson.name === "") {
      return;
    } else if (
      newPersons.filter((e) => e.name === currentPerson.name).length > 0
    ) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        let person = newPersons.find(
          (person) => person.name === currentPerson.name
        );

        personService
          .update(person.id, currentPerson)
          .then((updatedPerson) =>
            setPersons(
              newPersons.map((item) =>
                item.id === person.id ? updatedPerson : item
              )
            )
          )
          .catch((err) => {
            alert(`${person.content} was already deleted from server`);
            setPersons(newPersons.filter((item) => item.id !== person.id));
          });
      }
    } else {
      personService.create(currentPerson).then((person) => {
        setPersons([...newPersons, person]);
      });
    }
  };

  const deleteUser = (id) => {
    const person = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.drop(id).then(() => {
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPersons(updatedPersons);
      });
    }
  };

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  return (
    <>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <PersonForm
        newName={newName}
        handleName={handleName}
        newNumber={newNumber}
        handleNumber={handleNumber}
        addUser={addUser}
      />
      <h2>Numbers</h2>
      <Persons filteredData={filteredData} deleteUser={deleteUser} />
    </>
  );
};

export default App;
