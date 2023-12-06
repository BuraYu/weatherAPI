// App.jsx
import { useState, useEffect } from "react";
import { uid } from "uid";
import "./App.css";

import Fetch from "./Components/Fetch/Fetch";
import List from "./Components/List/List";
import Form from "./Components/Form/Form";
import FetchDataHeader from "./Components/Header/FetchDataHeader";

function App() {
  const getDefaultList = () => {
    return [
      {
        id: uid(),
        nameOfActivity: "Reading",
        goodWeatherActivity: true,
      },
      {
        id: uid(),
        nameOfActivity: "Biking",
        goodWeatherActivity: true,
      },
      {
        id: uid(),
        nameOfActivity: "Dancing",
        goodWeatherActivity: false,
      },
    ];
  };

  const [weather, setWeather] = useState(0);
  const [condition, setCondition] = useState();
  const [good, setGood] = useState();
  const [activityList, setActivityList] = useState(() => {
    const storedList = localStorage.getItem("activityList");
    return storedList
      ? (getDefaultList(), JSON.parse(storedList))
      : getDefaultList();
  });

  const fetchUrl = "https://example-apis.vercel.app/api/weather";

  useEffect(() => {
    localStorage.setItem("activityList", JSON.stringify(activityList));
  }, [activityList]);

  const handleDelete = (id) => {
    setActivityList((prevActivityList) =>
      prevActivityList.filter((activity) => activity.id !== id)
    );
  };

  const handleSubmit = (activityName, isGoodWeatherActivity) => {
    const newActivity = {
      id: uid(),
      nameOfActivity: activityName,
      goodWeatherActivity: isGoodWeatherActivity,
    };

    setActivityList((prevActivityList) => [...prevActivityList, newActivity]);
  };

  return (
    <main className="app">
      <Fetch
        setWeather={setWeather}
        setCondition={setCondition}
        setGood={setGood}
        url={fetchUrl}
      />
      <FetchDataHeader
        getWeather={weather}
        getCondition={condition}
        getGood={good}
      />

      <List
        activityList={activityList}
        goodWeatherOnly={good}
        handleDelete={handleDelete}
      />
      <Form handleSubmit={handleSubmit} />
    </main>
  );
}

export default App;
