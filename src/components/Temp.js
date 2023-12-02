import React, { useEffect, useState } from "react";

export default function Temp() {
  const [weather, setWeather] = useState(0);
  const [condition, setCondition] = useState("good");
  const [quote, setQuote] = useState("");
  const [good, setGood] = useState("");

  function quoteOfTheDay(weather) {
    if (weather > 30) {
      setQuote("Nature is so powerful, so strong.");
    } else {
      return setQuote(
        "Nature is so powerful, so strong. Capturing its essence is not easy - your work becomes a dance with light and the weather. It takes you to a place within yourself."
      );
    }
  }

  function aboutWeather() {
    if (good === true) {
      setGood("The weather is good");
    } else {
      setGood("The weather is not good");
    }
  }

  useEffect(() => {
    fetch("https://example-apis.vercel.app/api/weather").then((response) =>
      response.json().then((json) => {
        setWeather(json.temperature);
        setCondition(json.condition);
        aboutWeather(json.isGoodWeather);
        quoteOfTheDay(json.temperature);
      })
    );
  }, []);

  return (
    <>
      <h1>{weather}°</h1>
      <h2>{condition}</h2>
      <h3>{good}</h3>
      <p>{quote}</p>
    </>
  );
}
