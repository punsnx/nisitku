import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { IsLogin } from "./api/auth";
import LoginPage from "./Pages/login";
const Layout = () => {
  return (
    <>
      {IsLogin() ? (
        <>
          <div className="app">
            <Outlet />
          </div>
          <div className="nav">
            <NavBar />
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default Layout;
