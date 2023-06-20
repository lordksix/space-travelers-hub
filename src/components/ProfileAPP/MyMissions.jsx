import { nanoid } from '@reduxjs/toolkit';
import { selectMission } from 'features/missions/missionsSlice';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MyMissions = () => {
  const { missions } = useSelector(selectMission);
  const missionReserved = [...missions.filter((mission) => mission.reserve === true)]
    .map((mission) => (
      <tr key={nanoid()}><td>{mission.missionName}</td></tr>
    ));
  const nomissions = (
    <p className="center">No Mission Found</p>
  );
  const missionTable = (
    <Table bordered>
      <tbody>
        {missionReserved}
      </tbody>
    </Table>
  );

  return (
    <section className="profileCol">
      <h2>My Missions</h2>
      {(missionReserved.length > 0) ? missionTable : nomissions }
    </section>
  );
};

export default MyMissions;
