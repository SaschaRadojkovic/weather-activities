export default function List({ activities }) {
  return (
    <section>
      <ul>
        {activities.map(({ isForGoodWeather, activity, id }) => {
          return (
            <li key={id}>
              {activity}
              {isForGoodWeather ? "Good Weather" : " Bad Weather"}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
