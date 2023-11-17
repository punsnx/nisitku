import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/home";
import Academic from "./Pages/academic";
import KUServices from "./Pages/kuservices";
import MyProfile from "./Pages/myprofile";
import NoPage from "./Pages/404";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="academic_" element={<Academic />} />
          <Route path="kuservices" element={<KUServices />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoute;
