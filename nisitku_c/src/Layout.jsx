import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <>
      <div className="app">
        <Outlet />
      </div>
      <div className="nav">
        <NavBar />
      </div>
    </>
  );
};

export default Layout;
