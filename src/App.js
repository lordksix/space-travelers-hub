import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Rockets from 'routes/Rockets';
import MissionsApp from 'routes/MissionsApp';
import ProfileApp from 'routes/ProfileApp';
import NotMatch from 'routes/NotMatch';

function App() {
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
