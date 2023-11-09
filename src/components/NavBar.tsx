import { useState } from "react";
import { Link } from "react-router-dom";
import NisitCard from "./NisitCard";
import HomeIcon from "../assets/icon_home.svg";
import AcademicIcon from "../assets/icon_academic.svg";
import IDCardIcon from "../assets/icon_idcard.svg";
import KUServicesIcon from "../assets/icon_kuservices.svg";
import MyProfileIcon from "../assets/icon_myprofile.svg";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-white text-black p-2 flex justify-between gap-x-2 text-xs">
        <Link to="/">
          <button className="flex-1 text-center py-2 hover:text-lime-500">
            <img src={HomeIcon} alt="Home" className="h-5 w-5 mx-auto" />
            Home
          </button>
        </Link>
        <Link to="/academic">
          <button className="flex-1 text-center py-2 hover:text-lime-500">
            <img
              src={AcademicIcon}
              alt="Academic"
              className="h-5 w-5 mx-auto"
            />
            Aademic
          </button>
        </Link>
        <button
          onClick={openNav}
          className="flex-1 text-center py-2 hover:bg-[#39A35D] bg-[#3EB265] rounded-full text-white"
        >
          <img src={IDCardIcon} alt="IDCard" className="h-5 w-5 mx-auto" />
          NisitCard
        </button>
        <Link to="/kuservices">
          <button className="flex-1 text-center py-2 hover:text-lime-500">
            <img
              src={KUServicesIcon}
              alt="KUServices"
              className="h-5 w-5 mx-auto"
            />
            KU Services
          </button>
        </Link>
        <Link to="/myprofile">
          <button className="flex-1 text-center py-2 hover:text-lime-500">
            <img
              src={MyProfileIcon}
              alt="MyProfile"
              className="h-5 w-5 mx-auto"
            />
            My Profile
          </button>
        </Link>
      </div>
      <NisitCard isOpen={isNavOpen} onClose={closeNav} />
    </>
  );
};
export default NavBar;
