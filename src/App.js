import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Rockets />}/>
          <Route path='missions' element={<MissionsApp />}/>
          <Route path='myprofile' element={<MyProfileApp />}/>
          <Route path='*' element={<NotMatch />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
