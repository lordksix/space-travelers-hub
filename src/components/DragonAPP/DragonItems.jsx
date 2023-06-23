import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReservation } from 'features/dragons/dragonsSlice';

const DragonItem = ({ dragon }) => {
  const dispatch = useDispatch();
  const handleReserveButn = (id) => () => {
    dispatch(toggleReservation(id));
  };
  return (
    <div className="rocket-box">
      <div className="image-box">
        <img src={dragon.image} alt="rocket" />
      </div>
      <div className="rocket-details-box">
        <h3>{dragon.name}</h3>
        <p>
          {dragon.reserve && <span className="reserved-badge">Reserved </span>}
          {dragon.description}
        </p>
        {dragon.reserve ? (
          <button
            type="button"
            className="cancel-reservation-btn"
            onClick={handleReserveButn(dragon.id)}
          >
            Cancel Reservation
          </button>
        )
          : <button type="button" className="reservation-btn" onClick={handleReserveButn(dragon.id)}>Reserve Dragon</button>}
      </div>
    </div>
  );
};

export default DragonItem;

DragonItem.propTypes = {
  dragon: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
    reserve: PropTypes.bool,
  }).isRequired,
};
