import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReservation } from 'features/rockets/rocketsSlice';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleReserveButton = (id) => () => {
    dispatch(rocketReservation(id));
  };
  return (
    <div className="rocket-box">
      <div className="image-box">
        <img src={rocket.image} alt="rocket" />
      </div>
      <div className="rocket-details-box">
        <h3>{rocket.name}</h3>
        <p>{rocket.description}</p>
        <button type="button" className="reserver-button" onClick={handleReserveButton(rocket.id)}>Reserve Rocket</button>
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
  }).isRequired,
};
