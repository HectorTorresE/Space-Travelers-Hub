const GETROCKETS_START = 'space-travelers/rockets/GETROCKETSSTART';
const GETROCKETS_SUCCESS = 'space-travelers/rockets/GETROCKETSSUCCESS';
const GGETROCKETS_FAIL = 'space-travelers/rockets/GETROCKETSFAIL';
const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const INITIAL_STATE = {
  rockets: [],
  fetching: true,
};

export function getRocketsStart() {
  return {
    type: GETROCKETS_START,
  };
}

export function getRocketsSuccess(rockets) {
  return {
    type: GETROCKETS_SUCCESS,
    payload: rockets,
  };
}

export function getRocketsFail() {
  return {
    type: GGETROCKETS_FAIL,
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GETROCKETS_SUCCESS:
      return {
        rockets: action.payload,
        fetching: false,
      };
    case GETROCKETS_START:
      return {
        ...state,
        fetching: true,
      };
    case GGETROCKETS_FAIL:
      return state;
    default: return state;
  }
}

export function getRocketsList() {
  return (dispatch) => {
    const url = `${BASE_URL}`;
    dispatch(getRocketsStart());
    fetch(url).then((response) => (
      response.json().then((json) => {
        const rockets = json.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          image: rocket.flickr_images[0],
        }));
        dispatch(getRocketsSuccess(rockets));
      }))).catch(() => dispatch(getRocketsFail()));
  };
}
