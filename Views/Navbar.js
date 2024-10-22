import { NavLink } from "react-router-dom";
import './NavBar.css'; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pre-cooling" className="nav-link">Pre-Cooling Sample</NavLink>
        </li>
        <li>
          <NavLink to="/trailers" className="nav-link">Trailer Finder Sample</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
