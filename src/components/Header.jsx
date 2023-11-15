import { NavLink } from "react-router-dom";
import Search from "./Search";

const Header = ({ onchange }) => {
  return (
    <header className="header-container">
      <h1 className="logo">Zoo</h1>
      <Search onchange={onchange} />
      <nav className="links">
        <ul>
          <li>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/animals" className="link">
              Animals
            </NavLink>
          </li>
          <li>
            <NavLink to="/birds" className="link">
              Birds
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
