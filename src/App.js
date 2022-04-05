import './App.css';
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Rockets from './views/Rockets';
import Missions from './views/Missions';
import Profile from './views/Profile';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRocketsList } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsList());
  }, []);
  

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Rockets/>}/>
        <Route path='/missions' element={<Missions/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
