import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/Navbar';
import Rockets from './views/Rockets';
import Missions from './views/Missions';
import Profile from './views/Profile';
import { getRocketsList } from './redux/rockets/rockets';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsList());
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
