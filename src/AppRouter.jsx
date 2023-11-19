import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/home";
import Academic from "./Pages/academic";
import KUServices from "./Pages/kuservices";
import MyProfile from "./Pages/myprofile";
import NoPage from "./Pages/404";
import LoginPage from "./Pages/login";
import { IsLogin } from "./api/auth";
import { useState, useEffect } from "react";
import { getTokenData } from "./api/auth";

function AppRoute() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      const res = await IsLogin();
      if (res) {
        setLoggedIn(true);
      }
    };
    const fetchUser = async () => {
      if (token) {
        const data = await getTokenData(token);
        if (data) {
          setUser(data);
        }
      }
    };
    fetchData();
    fetchUser();
  }, []);

  const cAuth = (path) => {
    if (!LoggedIn) {
      return <LoginPage />;
    }
    return path;
  };
  console.log("IsLogin ? ", LoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={cAuth(<Layout />)}>
          <Route index element={cAuth(<Home user={user} />)} />
          <Route path="academic_" element={cAuth(<Academic />)} />
          <Route path="kuservices" element={cAuth(<KUServices />)} />
          <Route path="myprofile" element={cAuth(<MyProfile user={user} />)} />
          <Route path="*" element={cAuth(<NoPage />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
