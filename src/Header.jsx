import Search from "./Search";

const Header = ({ onchange }) => {
  return (
    <header className="header-container">
      <h1>Zoo</h1>
      <Search onchange={onchange} />
    </header>
  );
};

export default Header;
