import PropTypes from 'prop-types';

const MissionRow = (props) => {
const { missionName, missionId, description, isJoined } = props;
};

MissionRow.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isJoined: PropTypes.bool.isRequired,
};

export default MissionRow;
