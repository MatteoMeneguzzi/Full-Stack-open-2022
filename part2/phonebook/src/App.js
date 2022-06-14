import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setNewName(value);
  };

  const addUser = (e) => {
    e.preventDefault();

    const newPersons = [...persons];

    const currentName = { name: newName };

    if (newPersons.filter((e) => e.name === currentName.name).length > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...newPersons, currentName]);
    }
  };

  const personsList = persons.map((person, index) => (
    <div key={index}>{person.name}</div>
  ));

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChange} />
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
