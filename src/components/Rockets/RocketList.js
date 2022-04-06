import PropTypes from 'prop-types';
import RocketCard from './RocketCard';
import './List.css';

const RocketList = ({ rockets }) => (
  <div className="rocketContainer">
    {
      rockets.map((rocket) => (
        <RocketCard
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.image}
          reserved={rocket.reserved}
        />
      ))
    }
  </div>
);

RocketList.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    reserved: PropTypes.bool,
  })).isRequired,
};

export default RocketList;
