import { useSelector } from 'react-redux';
import { selectMission } from 'features/missions/missionsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Table } from 'react-bootstrap';
import styles from 'styles/MissionShelf.module.css';
import MissionRow from './MissionRow';

const MissionShelf = () => {
  const { missions, isLoading, error } = useSelector(selectMission);

  const nomissions = (
    <h3 className="center">No Mission Found</h3>
  );

  if (isLoading) return <h3 className="center">Loading...</h3>;
  if (error) {
    return (
      <h3 className="center">
        Error:
        {' '}
        {error}
      </h3>
    );
  }
  if (missions.length < 1) return <>{nomissions}</>;

  const missionTable = missions.map((mission) => (
    <MissionRow
      key={nanoid()}
      missionName={mission.missionName}
      missionId={mission.missionId}
      description={mission.description}
      reserve={mission.reserve}
    />
  ));

  return (
    <main className={styles.missionsSection}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className={styles.left}>Mission</th>
            <th className={styles.left}>Descripction</th>
            <th className={`${styles.double} ${styles.left}`}>Status</th>
            <th className={styles.double}> </th>
          </tr>
        </thead>
        <tbody>
          {missionTable}
        </tbody>
      </Table>
    </main>
  );
};

export default MissionShelf;
