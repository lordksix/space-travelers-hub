import { addSpecialist } from 'features/missions/missionsSlice';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import styles from 'styles/MissionRow.module.css';
import { useDispatch } from 'react-redux';

const MissionRow = (props) => {
  const {
    missionName, missionId, description, reserve,
  } = props;
  const dispatch = useDispatch();

  const handleMissionChange = (id) => {
    dispatch(addSpecialist(id));
  };

  const memberBtn = <Button variant="primary" size="sm">Active Memeber</Button>;
  const nonMemberBtn = <Button variant="secondary" size="sm">NOT A MEMBER</Button>;
  const joinBtn = <Button variant="outline-danger" onClick={() => handleMissionChange(missionId)}>Leave Mission</Button>;
  const leaveBtn = <Button variant="outline-secondary" onClick={() => handleMissionChange(missionId)}>Join Mission</Button>;
  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td className={styles.center}>{reserve ? memberBtn : nonMemberBtn}</td>
      <td className={styles.center}>{reserve ? joinBtn : leaveBtn}</td>
    </tr>
  );
};

MissionRow.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserve: PropTypes.bool.isRequired,
};

export default MissionRow;
