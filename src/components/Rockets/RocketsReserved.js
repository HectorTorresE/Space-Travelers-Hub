import PropTypes from 'prop-types';

const RocketsReserved = ({ rockets }) => (
  <div>
    <h1>My Rockets</h1>
    {rockets.length === 0 && (
      <h3> There are no rockets reserved</h3>
    )}
    {rockets.length > 0 && (
      <ul>
        {
          rockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))
        }
      </ul>
    )}
  </div>
);

RocketsReserved.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    reserved: PropTypes.bool,
  })).isRequired,
};
export default RocketsReserved;
