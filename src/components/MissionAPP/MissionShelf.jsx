import { useSelector } from 'react-redux';
import { selectMission } from 'features/missions/missionsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Table } from 'react-bootstrap';
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
  const missionArr = missions.map((mission) => (
    <li key={nanoid()}>
      mission name:
      {mission.missionName}
      <br />
      mission id:
      {mission.missionId}
      <br />
      description:
      {mission.description}
    </li>
  ));
  const missionTable = missions.map((mission) => (
    <MissionRow
      key={nanoid()}
      missionName={mission.missionName}
      missionId={mission.missionId}
      description={mission.description}
      isJoined={mission.isJoined}
    />
  ));
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Descripction</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missionTable}
        </tbody>
      </Table>
      <ul>
        {missionArr}
      </ul>
    </>
  );
};

export default MissionShelf;
