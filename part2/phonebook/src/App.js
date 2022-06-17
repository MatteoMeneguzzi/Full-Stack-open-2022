import axios from "axios";
import { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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
      setPersons([...newPersons, currentPerson]);
    }
  };

  const filteredData = persons.filter((person) => {
    if (search === "") {
      return person;
    } else {
      return person.name.toLowerCase().includes(search.toLowerCase());
    }
  });

  useEffect(() => {
    axios
      .get("http://localhost:3008/persons")
      .then((res) => setPersons(res.data));
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
      <Persons filteredData={filteredData} />
    </>
  );
};

export default App;
