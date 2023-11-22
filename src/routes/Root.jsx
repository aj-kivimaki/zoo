import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Root = ({ handleSearch, handleClean }) => {
  const { pathname } = useLocation();

  return (
    <div className="app">
      {pathname !== "/" && (
        <Header onchange={handleSearch} onclick={handleClean} />
      )}
      <Outlet />
      {pathname !== "/" && <Footer />}
    </div>
  );
};

export default Root;
