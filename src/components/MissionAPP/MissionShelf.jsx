import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMissions, selectMission } from 'features/missions/missionsSlice';
import { nanoid } from '@reduxjs/toolkit';

const MissionShelf = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  const { missions, isLoading, error } = useSelector(selectMission);

  const nobooks = (
    <h3 className="center">No Books Found</h3>
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
  if (missions.length < 1) return <>{nobooks}</>;
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
  return (
    <ul>
      {missionArr}
    </ul>
  );
};

export default MissionShelf;
