import saveToLocalStorage, { updateReserved } from './localStorage';

const GETROCKETS_START = 'space-travelers/rockets/GETROCKETSSTART';
const GETROCKETS_SUCCESS = 'space-travelers/rockets/GETROCKETSSUCCESS';
const GGETROCKETS_FAIL = 'space-travelers/rockets/GETROCKETSFAIL';
const RESERVEROCKET = 'space-travelers/rockets/RESERVEROCKET';
const CANCELROCKET = 'space-travelers/rockets/CANCELROCKET';
const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const INITIAL_STATE = {
  rockets: [],
  fetching: true,
};

export function reserveRocket(id) {
  return {
    type: RESERVEROCKET,
    payload: id,
  };
}

export function cancelRocket(id) {
  return {
    type: CANCELROCKET,
    payload: id,
  };
}

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
  let newRockets = [];
  switch (action.type) {
    case GETROCKETS_SUCCESS:
      newRockets = updateReserved(action.payload);
      return {
        rockets: newRockets,
        fetching: false,
      };
    case GETROCKETS_START:
      return {
        ...state,
        fetching: true,
      };
    case GGETROCKETS_FAIL:
      return state;
    case RESERVEROCKET:
      newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== Number(action.payload)) return rocket;
        return { ...rocket, reserved: true };
      });
      saveToLocalStorage(newRockets);
      return {
        ...state,
        rockets: newRockets,
      };
    case CANCELROCKET:
      newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== Number(action.payload)) return rocket;
        return { ...rocket, reserved: false };
      });
      saveToLocalStorage(newRockets);
      return {
        ...state,
        rockets: newRockets,
      };
    default:
      return state;
  }
}

export function getRocketsList() {
  return (dispatch) => {
    const url = `${BASE_URL}`;
    dispatch(getRocketsStart());
    fetch(url)
      .then((response) => response.json().then((json) => {
        const rockets = json.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          image: rocket.flickr_images[0],
        }));
        dispatch(getRocketsSuccess(rockets));
      }))
      .catch(() => dispatch(getRocketsFail()));
  };
}
