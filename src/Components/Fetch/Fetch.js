import { useState, useEffect } from "react";

const Fetch = ({ setWeather, setCondition, setGood, url }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(url).then((response) =>
        response.json().then((json) => {
          setWeather(json.temperature);
          setCondition(json.condition);
          setGood(json.isGoodWeather);
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [setWeather, setCondition, setGood]);
};

export default Fetch;
