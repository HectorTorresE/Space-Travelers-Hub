import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector(
    (store) => (store.missions ? store.missions.filter((x) => x.reserved) : store.missions),
  );

  useEffect(() => {
    if (missions === null)dispatch(getMissions());
  }, [missions]);
  return (
    <div className="Profile">
      <div>
        <h1>My Missions</h1>
        <ul>
          {(missions || []).map((mission) => (
            <li key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>My Rockets</h1>
      </div>
    </div>
  );
};

export default Profile;
