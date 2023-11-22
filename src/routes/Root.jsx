import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Root = ({ handlesearch, handleclean }) => {
  const { pathname } = useLocation();

  return (
    <div className="app">
      {pathname !== "/" && (
        <Header onchange={handlesearch} onclick={handleclean} />
      )}
      <Outlet />
      {pathname !== "/" && <Footer />}
    </div>
  );
};

export default Root;
