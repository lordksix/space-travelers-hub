import { addSpecialist } from 'features/missions/missionsSlice';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const MissionRow = (props) => {
  const {
    missionName, missionId, description, isJoined,
  } = props;
  const dispatch = useDispatch();

  const handleMissionChange = (id) => {
    dispatch(addSpecialist(id));
  };

  let memberBtn;
  if (isJoined) memberBtn = <Button variant="primary">Active Memeber</Button>;
  else memberBtn = <Button variant="secondary">NOT A MEMBER</Button>;
  let joinBtn;
  if (isJoined) joinBtn = <Button variant="outline-danger" onClick={() => handleMissionChange(missionId)}>Leave Mission</Button>;
  else joinBtn = <Button variant="outline-secondary" onClick={() => handleMissionChange(missionId)}>Join Mission</Button>;
  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td>{memberBtn}</td>
      <td>{joinBtn}</td>
    </tr>
  );
};

MissionRow.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isJoined: PropTypes.bool.isRequired,
};

export default MissionRow;
