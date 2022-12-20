import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivitiy({ activity, isForGoodWeather = false }) {
    console.log("act", activities);
    setActivities([...activities, { id: uid(), activity, isForGoodWeather }]);
  }
  return (
    <>
      <Form onAddActivity={handleAddActivitiy} />
    </>
  );
}

export default App;
