import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import List from "./components/List/List";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/sahara"
      );
      const result = await response.json();
      setWeather(result);
    }
    fetchWeather();
  }, []);

  function handleAddActivitiy({ activity, isForGoodWeather = false }) {
    setActivities([...activities, { id: uid(), activity, isForGoodWeather }]);
  }
  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === weather.isGoodWeather;
  });

  return (
    <>
      <h1>
        {weather.condition}
        {weather.temperature} Grad Temperatur
      </h1>
      <Form onAddActivity={handleAddActivitiy} />

      <List
        weather={weather.isGoodWeather ? true : false}
        activities={filteredActivities}
      />
    </>
  );
}

export default App;
