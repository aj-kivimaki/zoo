import Search from "./Search";

const Header = ({ onchange }) => {
  return (
    <header>
      <h1>Zoo</h1>
      <Search onchange={onchange} />
    </header>
  );
};

export default Header;
