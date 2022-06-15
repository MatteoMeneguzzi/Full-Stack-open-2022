import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  const handleQuery = (e) => {
    const { value } = e.target;

    setQuery(value);
  };

  let filteredData = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  console.log(filteredData);
  let countriesList = filteredData.map((item, index) => (
    <div key={index}>{item.name.common}</div>
  ));

  let singleCountry = filteredData.map((item, index) => {
    let languages = [];
    for (const key in item.languages) {
      if (Object.hasOwnProperty.call(item.languages, key)) {
        languages.push(item.languages[key]);
      }
    }

    return (
      <div>
        <h2>{item.name.common}</h2>
        <div>capital {item.capital}</div>
        <div>area {item.area}</div>

        <h3>languages:</h3>

        <ul>
          {languages.map((language) => (
            <li>{language}</li>
          ))}
        </ul>

        <img src={item.flags.png} />
      </div>
    );
  });

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <div>
      find countries <input value={query} onChange={handleQuery} />
      {countriesList.length > 10 ? (
        <div>Too many matches, specify another filter</div>
      ) : countriesList.length === 1 ? (
        <>{singleCountry}</>
      ) : (
        <>{countriesList}</>
      )}
    </div>
  );
};

export default App;
