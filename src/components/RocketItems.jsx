import PropTypes from 'prop-types';

const RocketItem = ({ rocket }) => (
  <div className="rocket-box">
    <div className="image-box">
      <img src={rocket.image} alt="rocket" />
    </div>
    <div className="rocket-details-box">
      <h3>{rocket.name}</h3>
      <p>{rocket.description}</p>
      <button type="button" className="reserver-button">Reserve Rocket</button>
    </div>
  </div>
);

export default RocketItem;

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
