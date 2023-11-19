import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { IsLogin } from "./api/auth";
import LoginPage from "./Pages/login";
import { useState, useEffect } from "react";

const Layout = () => {
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
