import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import List from "./components/List/List";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivitiy({ activity, isForGoodWeather = false }) {
    console.log("act", activities);
    setActivities([...activities, { id: uid(), activity, isForGoodWeather }]);
  }
  return (
    <>
      <Form onAddActivity={handleAddActivitiy} />
      <List activities={activities} />
    </>
  );
}

export default App;
