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
import { getMissions } from 'features/missions/missionsSlice';
import 'styles/rocketsList.scss';
import { getDragons } from 'features/dragons/dragonsSlice';
import DragonAPP from 'routes/DragonApp';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
    dispatch(fetchRockets());
    dispatch(getDragons());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="missions" element={<MissionsApp />} />
          <Route path="dragons" element={<DragonAPP />} />
          <Route path="profile" element={<ProfileApp />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
