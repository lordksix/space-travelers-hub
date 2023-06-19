import logo from 'images/logo-space-travelers-inc.png';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <>
    <header>
      <img src={logo} alt=" Space Traveler's Hub Logo" />
      <h1>Space Traveler&lsquo;s Hub</h1>
      <Navbar />
    </header>
    <Outlet />
  </>
);

export default Layout;
