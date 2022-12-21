export default function Form({ onAddActivity }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        onAddActivity({
          activity: event.target.elements.activity.value,
          isForGoodWeather: event.target.elements.isForGoodWeather.checked,
        });
        event.target.reset();
        event.target.activity.focus();
      }}
    >
      <h1>Add new Activity:</h1>
      <label htmlFor="activity">Name</label>
      <input required id="activity" name="activity" type="text"></input>
      <label htmlFor="isForGoodWeather">is for good weather?</label>
      <input
        type="checkbox"
        id="isForGoodWeather"
        name="isForGoodWeather"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
