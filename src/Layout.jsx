import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { IsLogin } from "./api/auth";
import LoginPage from "./Pages/login";
import { useState, useEffect } from "react";
const Layout = () => {
  // const [LoggedIn, setLoggedIn] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await IsLogin();
  //     if (res) {
  //       setLoggedIn(true);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log("IsLogin ? ", LoggedIn);
  return (
    <>
      <div className="app">
        <Outlet />
      </div>
      <div className="nav">
        <NavBar />
      </div>
      {/* {LoggedIn ? (
        <>

        </>
      ) : (
        <LoginPage />
      )} */}
    </>
  );
};

export default Layout;
