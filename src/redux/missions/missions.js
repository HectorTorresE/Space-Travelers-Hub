const LIST = 'space-travelers-hub/missions/LIST';
const defaultMissions = [];

export default function reducer(state = defaultMissions, action = {}) {
  switch (action.type) {
    case LIST: {
      return [];
    }
    default:
      return state;
  }
}

export const getMissions = () => ({ type: LIST });
