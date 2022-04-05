const LIST = 'space-travelers-hub/missions/LIST';
const LIST_SUCCESS = 'space-travelers-hub/missions/LIST_SUCCESS';
const LIST_FAILURE = 'space-travelers-hub/missions/LIST_FAILURE';

const defaultMissions = [];

export default function reducer(state = defaultMissions, action = {}) {
  switch (action.type) {
    case LIST: {
      return [];
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
    (request) => request.json().then((map) => dispatch({
      type: LIST_SUCCESS,
      list: Object.keys(map)
      // eslint-disable-next-line camelcase
        .map((item_id) => map[item_id].map((book) => ({ ...book, item_id }))).flat(),
    })),
    (err) => dispatch({ type: LIST_FAILURE, err }),
  );
};
