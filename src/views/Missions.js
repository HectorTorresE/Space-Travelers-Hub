import './Missions.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from '../components/Mission';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector((store) => store.missions);

  useEffect(() => {
    if (!missions)dispatch(getMissions());
  }, [missions]);

  return (
    <div className="Missions">
      <table className="mission-list">
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {(missions || []).map((mission) => (
          <Mission
            key={mission.mission_id}
            mission_id={mission.mission_id}
            mission_name={mission.mission_name}
            description={mission.description}
          />
        ))}
      </table>
    </div>
  );
};

export default Missions;
