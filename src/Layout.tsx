import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
};

export default Layout;
