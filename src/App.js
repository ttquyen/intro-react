import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const api = {
    key: "82aa72c74c59ec0131ec5316dbe1f5c6",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const [searchInput, setSearchInput] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchCity(searchInput);
  };
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!searchCity) return;
      setLoading(true);
      try {
        const url = `${api.base}weather?q=${searchCity}&units=metric&APPID=${api.key}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setWeatherInfo(JSON.stringify(data));
          setErrorMsg("");
        } else {
          setWeatherInfo({});
          setErrorMsg(data.message);
        }
      } catch (e) {
        console.log(">>>>");
        setErrorMsg(e.message);
      }
      setLoading(false);
    };
    fetchWeatherData();
  }, [searchCity]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="input-city"
          type="text"
          placeholder="City"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button>Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {errorMsg ? (
            <div style={{ color: "red" }}>{errorMsg}</div>
          ) : (
            <div>{weatherInfo}</div>
          )}
        </>
      )}
    </>
  );
}

export default App;
