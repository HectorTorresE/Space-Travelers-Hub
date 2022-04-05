import { useSelector } from 'react-redux';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets.rockets);
  const fetching = useSelector((state) => state.rockets.fetching);
  return (
    <div>
      {!fetching && (
        <ul>
          {rocketsList.map((rocket) => (
            <li key={rocket.id}>{`id: ${rocket.id}, name: ${rocket.name}`}</li>
          ))}
        </ul>
      )}
      {fetching && (
        <h3>Fetching data please wait...</h3>
      )}
    </div>
  );
};

export default Rockets;
