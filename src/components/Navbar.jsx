import { nanoid } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'profile', text: 'My Profile' },
];

const Navbar = () => (
  <nav className="navbar">
    <ul>
      {links.map((link) => (
        <li key={nanoid}>
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
