import Porblems from "../components/KUServices/Problems/Page";
import Emergency from "../components/KUServices/Emergency/Page";
import searchIcon from "../assets/kuservices_icon_search.svg";
import { useState } from "react";

const KUServices = () => {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(<></>);
  const openService = (element) => {
    setOpen(true);
    setShow(element);
  };
  const closeService = () => {
    setOpen(false);
    setShow(<></>);
  };
  return (
    <>
      <div className="absolute w-full h-full z-0">
        <div className="flex">
          <label className="text-4xl font-bold mt-20 ml-5">KUServices</label>
        </div>
        <div className="flex w-full h-20  my-5 justify-center items-center">
          <div
            className="flex flex-row w-[80%] h-[80%] border border-black rounded-3xl justify-start items-center
          "
          >
            <label className="text-xl text-gery-200 ml-6">Search</label>
            <div className="flex w-full h-full justify-end items-center">
              <img src={searchIcon} className="h-[50%] mr-4" />
            </div>
          </div>
        </div>
        <div className="flex">
          <label className="text-xl font-semibold ml-5">Our Services</label>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-row w-[90%] my-5 justify-between">
            <button
              onClick={() => openService(<Porblems />)}
              className="w-[45%] h-12 bg-[#BFB5FF] rounded-xl"
            >
              Problems
            </button>
            <button
              onClick={() => openService(<Emergency />)}
              className="w-[45%] bg-[#FFBBD7] rounded-xl"
            >
              Emergency
            </button>
          </div>
          <div className="flex flex-row w-[90%] my-5 justify-between">
            <button
              onClick={() => openService(<Porblems />)}
              className="w-[45%] h-12 bg-[#BFB5FF] rounded-xl"
            >
              Problems
            </button>
            <button
              onClick={() => openService(<Emergency />)}
              className="w-[45%] bg-[#FFBBD7] rounded-xl"
            >
              Emergency
            </button>
          </div>
        </div>
        <div className="flex">
          <label className="text-xl font-semibold ml-5">Trending</label>
        </div>
        <div className="flex w-full h-[50%] justify-center">
          <div className="w-[80%] h-[70%] bg-[#FDDD8D] mt-3 rounded-3xl"></div>
        </div>
        <div
          className={`fixed bottom-0 w-full h-[100%] bg-white transform transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transform-gpu`}
        >
          <div className="w-full h-full">
            <button className="absolute left-4 top-16" onClick={closeService}>
              Back
            </button>
            {show}
          </div>
        </div>
      </div>
    </>
  );
};
export default KUServices;
