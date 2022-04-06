const LIST = 'space-travelers-hub/missions/LIST';
const LIST_SUCCESS = 'space-travelers-hub/missions/LIST_SUCCESS';
const LIST_FAILURE = 'space-travelers-hub/missions/LIST_FAILURE';
const JOIN = 'space-travelers-hub/missions/JOIN';

export default function reducer(state = null, action = {}) {
  switch (action.type) {
    case JOIN: {
      return state.map((mission) => (
        mission.mission_id === action.missionId
          ? { ...mission, reserved: true }
          : mission));
    }
    case LIST_SUCCESS: {
      return [...action.list];
    }
    default:
      return state;
  }
}

export const getMissions = () => (dispatch) => {
  dispatch({ type: LIST });
  return fetch('https://api.spacexdata.com/v3/missions').then(
    (request) => request.json().then((list) => dispatch({
      type: LIST_SUCCESS,
      list,
    })),
    (err) => dispatch({ type: LIST_FAILURE, err }),
  );
};

export const joinMission = (missionId) => ({ type: JOIN, missionId });
