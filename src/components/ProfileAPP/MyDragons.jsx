import { nanoid } from '@reduxjs/toolkit';
import { selectDragons } from 'features/dragons/dragonsSlice';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MyDragons = () => {
  const { dragons } = useSelector(selectDragons);
  const dragonReserved = [...dragons.filter((dragon) => dragon.reserve === true)]
    .map((dragon) => (
      <tr key={nanoid()}><td className="left">{dragon.namee}</td></tr>
    ));
  const nodragons = (
    <p className="center">No Dragon Found</p>
  );
  const missionTable = (
    <Table bordered>
      <tbody>
        {dragonReserved}
      </tbody>
    </Table>
  );

  return (
    <section className="profileCol">
      <h2>My Dragons</h2>
      {(dragonReserved.length > 0) ? missionTable : nodragons }
    </section>
  );
};

export default MyDragons;
