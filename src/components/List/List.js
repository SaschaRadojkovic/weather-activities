export default function List({ weather, activities }) {
  console.log(activities);
  return (
    <section>
      <h2>
        {weather ? " Good Weather Activities" : " Bad Weather Activities"}
      </h2>
      <ul>
        {activities.map(({ isForGoodWeather, activity, id }) => {
          return (
            <li key={id}>
              {activity}
              {isForGoodWeather ? " Good Weather" : " Bad Weather"}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
