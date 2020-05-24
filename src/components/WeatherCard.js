import React from "react";
import Card from "react-bootstrap/Card";

const WeatherCard = ({ weatherData }) => {
  const { weatherAbbr, title, tempMax, tempMin, weather } = weatherData;
  return (
    <Card style={{ width: "18rem" }}>
      {weatherData ? (
        <Card.Img
          variant="top"
          style={{ padding: 30 }}
          src={`https://www.metaweather.com/static/img/weather/${weatherAbbr}.svg`}
        />
      ) : null}

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Temperature from {tempMin} to {tempMax}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
