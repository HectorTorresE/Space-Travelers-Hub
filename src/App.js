import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Rockets from './views/Rockets';
import Missions from './views/Missions';
import Profile from './views/Profile';

function App() {
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
