import { addSpecialist } from 'features/missions/missionsSlice';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import styles from 'styles/MissionRow.module.css';
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
  if (isJoined) memberBtn = <Button variant="primary" size="sm">Active Memeber</Button>;
  else memberBtn = <Button variant="secondary" size="sm">NOT A MEMBER</Button>;
  let joinBtn;
  if (isJoined) joinBtn = <Button variant="outline-danger" onClick={() => handleMissionChange(missionId)}>Leave Mission</Button>;
  else joinBtn = <Button variant="outline-secondary" onClick={() => handleMissionChange(missionId)}>Join Mission</Button>;
  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td className={styles.center}>{memberBtn}</td>
      <td className={styles.center}>{joinBtn}</td>
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
