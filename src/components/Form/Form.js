export default function Form({ onAddActivity }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        onAddActivity(data);

        console.log(data);
      }}
    >
      <h1>Add new Activity:</h1>
      <label htmlFor="activity">Name</label>
      <input id="activity" name="activity" type="text"></input>
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
