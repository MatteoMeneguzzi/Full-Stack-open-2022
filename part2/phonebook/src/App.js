import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
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

  const personsList = filteredData.map((person, index) => (
    <div key={index}>
      {person.name} {person.number}
    </div>
  ));

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={search} onChange={handleSearch} />
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input type='tel' value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type='submit' onClick={addUser}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsList}
    </div>
  );
};

export default App;
