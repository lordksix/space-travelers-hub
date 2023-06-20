import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Layout from 'components/Layout';
import Rockets from 'routes/Rockets';
import MissionsApp from 'routes/MissionsApp';
import ProfileApp from 'routes/ProfileApp';
import { fetchRockets } from 'features/rockets/rocketsSlice';
import NotMatch from 'routes/NotMatch';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from 'features/missions/missionsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
=======

  useEffect(() => {
    dispatch(getMissions());

  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="missions" element={<MissionsApp />} />
          <Route path="profile" element={<ProfileApp />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
