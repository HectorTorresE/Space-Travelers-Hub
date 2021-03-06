import './Profile.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import RocketsReserved from '../components/Rockets/RocketsReserved';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector(
    (store) => (store.missions ? store.missions.filter((x) => x.reserved) : store.missions),
  );

  useEffect(() => {
    if (missions === null)dispatch(getMissions());
  }, [missions]);

  const rocketsList = useSelector((state) => state.rockets.rockets);
  return (
    <div className="Profile">
      <div className="col">
        <h1>My Missions</h1>
        <ul>
          {(missions || []).map((mission) => (
            <li key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="col">
        <RocketsReserved rockets={rocketsList.filter((rocket) => rocket.reserved)} />
      </div>
    </div>
  );
};

export default Profile;
