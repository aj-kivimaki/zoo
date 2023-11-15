import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Root = ({ handleSearch }) => {
  const { pathname } = useLocation();

  return (
    <div className="app">
      {pathname !== "/" && <Header onchange={handleSearch} />}
      <Outlet />
      {pathname !== "/" && <Footer />}
    </div>
  );
};

export default Root;
