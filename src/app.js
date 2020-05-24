import React, { useState, useEffect } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [id, setId] = useState(1100661);
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.consolidated_weather[0].weather_state_abbr);
        setWeatherData({
          weatherAbbr: data.consolidated_weather[0].weather_state_abbr,
          title: data.title,
          tempMax: data.consolidated_weather[0].max_temp,
          tempMin: data.consolidated_weather[0].min_temp,
          weather: data.consolidated_weather[0].weather_state_name,
        });
      });
  }, [id]);

  const search = (city) => {
    console.log(city);
    fetch(`
    https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`)
      .then((res) => res.json())
      .then((data) => setId(data[0].woeid));
  };

  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Weather App</h1>
        <Search search={search} />
        {weatherData ? <WeatherCard weatherData={weatherData} /> : null}
      </Jumbotron>
    </Container>
  );
};

export default App;
