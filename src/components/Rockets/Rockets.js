import { useSelector } from 'react-redux';
import RocketList from './RocketList';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets.rockets);
  const fetching = useSelector((state) => state.rockets.fetching);
  return (
    <>
      {!fetching && (
        <RocketList rockets={rocketsList} />
      )}
      {fetching && (
        <h3>Fetching data please wait...</h3>
      )}
    </>
  );
};

export default Rockets;
