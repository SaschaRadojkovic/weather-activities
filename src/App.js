import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import List from "./components/List/List";

function App() {
  const [activities, setActivities] = useState([]);
  const isGoodWeather = true;

  function handleAddActivitiy({ activity, isForGoodWeather = false }) {
    console.log("act", activities);
    setActivities([...activities, { id: uid(), activity, isForGoodWeather }]);
  }
  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === false;
  });
  console.log(activities);

  return (
    <>
      <Form onAddActivity={handleAddActivitiy} />

      <List activities={isGoodWeather ? activities : filteredActivities} />
    </>
  );
}

export default App;
