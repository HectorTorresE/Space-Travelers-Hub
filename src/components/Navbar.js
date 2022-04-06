import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './planet.png';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
  },
  {
    id: 3,
    path: '/profile',
    text: 'My Profile',
  },
];

const NavBar = () => (
  <nav>
    <div className="header">
      <img src={logo} alt="corporate logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <div className="navlinks">
      {
      links.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
        >
          {link.text}
        </NavLink>
      ))
    }
    </div>
  </nav>
);

export default NavBar;
