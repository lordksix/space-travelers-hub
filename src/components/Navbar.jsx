import { nanoid } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';
import logo from 'images/logo-space-travelers-inc.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'dragons', text: 'Dragons' },
  { path: 'profile', text: 'My Profile' },
];

const Navbar = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState({});
  const [showLogoTitleBox, setShowLogoTitleBox] = useState({ display: 'flex' });
  return (
    <nav className="navbar">
      <div className="logo-title-box" style={showLogoTitleBox}>
        <img src={logo} alt=" Space Traveler's Hub Logo" />
        <h1>Space Traveler&lsquo;s Hub</h1>
      </div>
      <div className="btn-box">
        {toggleMobileMenu.display ? (
          <button
            type="button"
            onClick={() => {
              setToggleMobileMenu({});
              setShowLogoTitleBox({ display: 'flex' });
            }}
          >
            <GrClose />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setToggleMobileMenu({ display: 'flex' });
              setShowLogoTitleBox({ display: 'none' });
            }}
          >
            <GiHamburgerMenu />
          </button>
        ) }
      </div>
      <ul className="nav-list" style={toggleMobileMenu}>
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
};

export default Navbar;
