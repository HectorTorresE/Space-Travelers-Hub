import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.css';
import { cancelRocket, reserveRocket } from '../../redux/rockets/rockets';

const RocketCard = ({
  id, name, description, image, reserved,
}) => {
  const dispatch = useDispatch();
  const onClickReserved = (event) => {
    dispatch(reserveRocket(event.target.dataset.id));
  };
  const onClickCancel = (event) => {
    dispatch(cancelRocket(event.target.dataset.id));
  };
  return (
    <div className="rocket-card">
      <img src={image} alt="rocket type" width={200} height={150} />
      <div className="info-rocket">
        <h3>{name}</h3>
        <p>
          {reserved && <span className="rocket-reserved">Reserved</span>}
          {description}
        </p>
        {!reserved && (
          <button
            type="button"
            className="reserved-button"
            data-id={id}
            onClick={onClickReserved}
          >
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button
            type="button"
            className="cancel-button"
            data-id={id}
            onClick={onClickCancel}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

RocketCard.defaultProps = {
  reserved: false,
};

RocketCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};
export default RocketCard;
