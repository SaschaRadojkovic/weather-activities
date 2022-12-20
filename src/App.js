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
  const [weather, setWeather] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/sahara"
      );
      const result = await response.json();
      setWeather(result);
      console.log("result", result);
    }
    fetchWeather();
    console.log("weather", weather);
  }, []);

  function handleAddActivitiy({ activity, isForGoodWeather = false }) {
    console.log("act", activities);
    setActivities([...activities, { id: uid(), activity, isForGoodWeather }]);
  }
  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === weather.isForGoodWeather;
  });
  console.log(activities);

  return (
    <>
      <h1>
        {weather.condition}
        {weather.temperature} F
      </h1>
      <Form onAddActivity={handleAddActivitiy} />

      <List
        weather={weather.isGoodWeather ? true : false}
        activities={weather.isGoodWeather ? activities : filteredActivities}
      />
    </>
  );
}

export default App;
