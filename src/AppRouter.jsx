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
function AppRoute() {
  const [LoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await IsLogin();
      if (res) {
        setLoggedIn(true);
      }
    };
    fetchData();
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
          <Route index element={cAuth(<Home />)} />
          <Route path="academic_" element={cAuth(<Academic />)} />
          <Route path="kuservices" element={cAuth(<KUServices />)} />
          <Route path="myprofile" element={cAuth(<MyProfile />)} />
          <Route path="*" element={cAuth(<NoPage />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
