import { NavLink, Link, useLocation } from "react-router-dom";
import Search from "./Search";

const Header = ({ onchange, onclick }) => {
  const { pathname } = useLocation();

  return (
    <header className="header-container">
      <h1 className="logo">
        <Link to="/">Zoo</Link>
      </h1>
      {pathname !== "/about" && <Search onchange={onchange} />}
      <nav className="links">
        <ul>
          <div className="link-container">
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
              <NavLink to="/animals" className="link" onClick={onclick}>
                Animals
              </NavLink>
            </li>
          </div>
          <div className="link-container">
            <li>
              <NavLink to="/birds" className="link" onClick={onclick}>
                Birds
              </NavLink>
            </li>
            <li>
              <NavLink to="/insects" className="link" onClick={onclick}>
                Insects
              </NavLink>
            </li>
            <li>
              <NavLink to="/fish" className="link" onClick={onclick}>
                Fish
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
