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

    const currentPerson = { name: newName, number: newNumber };

    if (currentPerson.name === "") {
      return;
    } else if (
      newPersons.filter((e) => e.name === currentPerson.name).length > 0
    ) {
      alert(`${newName} is already added to phonebook`);
    } else {
      personService.create(currentPerson).then((res) => {
        let updatedPersons = persons.concat(res.data);
        setPersons(updatedPersons);
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
    personService.getAll().then((res) => setPersons(res.data));
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
