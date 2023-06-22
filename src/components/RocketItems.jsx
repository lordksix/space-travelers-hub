import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReservation, cancelReservation } from 'features/rockets/rocketsSlice';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleReserveButn = (id) => () => {
    dispatch(rocketReservation(id));
  };
  const handleCancelReservationBtn = (id) => () => {
    dispatch(cancelReservation(id));
  };
  return (
    <div className="rocket-box">
      <div className="image-box">
        <img src={rocket.image} alt="rocket" />
      </div>
      <div className="rocket-details-box">
        <h3>{rocket.name}</h3>
        <p>
          {rocket.reserved && <span className="reserved-badge">Reserved </span>}
          {rocket.description}
        </p>
        {rocket.reserved ? (
          <button
            type="button"
            className="cancel-reservation-btn"
            onClick={handleCancelReservationBtn(rocket.id)}
          >
            Cancel Reservation
          </button>
        )
          : <button type="button" className="reservation-btn" onClick={handleReserveButn(rocket.id)}>Reserve Rocket</button>}
      </div>
    </div>
  );
};

export default RocketItem;

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};
