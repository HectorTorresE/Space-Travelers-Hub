import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector((store) => store.missions);

  useEffect(() => {
    if (!missions)dispatch(getMissions());
  }, [missions]);

  return (
    <div>
      <h1>Missions</h1>
      <ul>

        {(missions || []).map((mission) => (
          <li key={mission.mission_id}>
            mission_id:
            {' '}
            {mission.mission_id}
            ,
            mission_name:
            {' '}
            {mission.mission_name}
            ,
            description:
            {' '}
            {mission.description}
            ,
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
