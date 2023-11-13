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
      <div className="fixed bottom-0 left-0 right-0 w-full  bg-slate-200  text-xs flex justify-center rounded-tl-3xl rounded-tr-3xl">
        <div className="mx-4 w-full flex justify-between">
          <Link to="/">
            <button className=" py-4 text-center hover:text-lime-500">
              <img src={HomeIcon} alt="Home" className="h-5 w-5 mx-auto" />
              Home
            </button>
          </Link>
          <Link to="/academic">
            <button className="py-4 text-center hover:text-lime-500">
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
            style={{ position: "relative", top: "-20px" }}
            className="p-4 text-center hover:bg-[#39A35D] bg-[#3EB265] text-white rounded-full"
          >
            <img src={IDCardIcon} alt="IDCard" className="h-10 w-10 mx-auto" />
            NisitCard
          </button>
          <Link to="/kuservices">
            <button className="py-4 text-center hover:text-lime-500">
              <img
                src={KUServicesIcon}
                alt="KUServices"
                className="h-5 w-5 mx-auto"
              />
              Services
            </button>
          </Link>
          <Link to="/myprofile">
            <button className="py-4 text-center hover:text-lime-500">
              <img
                src={MyProfileIcon}
                alt="MyProfile"
                className="h-5 w-5 mx-auto"
              />
              Profile
            </button>
          </Link>
        </div>
      </div>
      <NisitCard isOpen={isNavOpen} onClose={closeNav} />
    </>
  );
};
export default NavBar;
