import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from 'routes/Layout';
import Rockets from 'routes/Rockets';
import MissionsApp from 'routes/MissionsApp';
import MyProfileApp from 'routes/MyProfileApp';
import NotMatch from 'routes/NotMatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="missions" element={<MissionsApp />} />
          <Route path="myprofile" element={<MyProfileApp />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
