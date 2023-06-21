import { nanoid } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';
import logo from 'images/logo-space-travelers-inc.png';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'profile', text: 'My Profile' },
];

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-title-box">
      <img src={logo} alt=" Space Traveler's Hub Logo" />
      <h1>Space Traveler&lsquo;s Hub</h1>
    </div>
    <ul className="nav-list">
      {links.map((link) => (
        <li key={nanoid()}>
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
