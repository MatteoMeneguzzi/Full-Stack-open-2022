import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [temperature, setTemperature] = useState();
  const [wind, setWind] = useState();

  const handleQuery = (e) => {
    const { value } = e.target;

    setQuery(value);
  };

  let filteredData = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  const showInfo = (item) => {
    const value = item.target.parentElement.childNodes[0].data;

    setQuery(value);
  };

  console.log(filteredData);
  let countriesList = filteredData.map((item, index) => (
    <>
      <div key={index}>
        {item.name.common}
        <button onClick={showInfo}>show</button>
      </div>
    </>
  ));

  const api_key = process.env.REACT_APP_API_KEY;
  console.log(api_key);
  console.log(
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${api_key}`
    )
  );

  let singleCountry = filteredData.map((item, index) => {
    let languages = [];
    for (const key in item.languages) {
      if (Object.hasOwnProperty.call(item.languages, key)) {
        languages.push(item.languages[key]);
      }
    }

    const lat = item.capitalInfo.latlng[0].toFixed(2);

    const lng = item.capitalInfo.latlng[1].toFixed(2);

    function fToC(fahrenheit) {
      var fTemp = fahrenheit;
      var fToCel = ((fTemp - 32) * 5) / 9;
      return fToCel;
    }

    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}.44&lon=${lng}&exclude=hourly,daily&appid=${api_key}`
      )
      .then((res) => {
        let newTemperature = fToC(res.data.main.temp);
        setTemperature(newTemperature);

        let newWind = res.data.wind.speed;
        setWind(newWind);
      });

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
        <h2>Weather in {item.capital}</h2>
        <div>temperature {temperature} Celsius</div>
        <img src={item.flags.png} />
        <div>wind {wind} m/s</div>
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
        <>{singleCountry.pop()}</>
      ) : (
        <>{countriesList}</>
      )}
    </div>
  );
};

export default App;
