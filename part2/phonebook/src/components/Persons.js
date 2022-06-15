const Persons = ({ filteredData }) => {
  const personsList = filteredData.map((person, index) => (
    <div key={index}>
      {person.name} {person.number}
    </div>
  ));
  return <>{personsList}</>;
};

export default Persons;
