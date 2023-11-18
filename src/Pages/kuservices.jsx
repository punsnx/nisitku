import Porblems from "../components/KUServices/Problems/Page";
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
        <div className="flex">
          <label className="text-xl font-semibold mt-10 ml-5">
            Our Services
          </label>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-row w-[90%] my-5 justify-between">
            <button
              onClick={() => openService(<Porblems />)}
              className="w-[45%] h-12 bg-lime-200 rounded-xl"
            >
              Problems
            </button>
            <button
              onClick={() => openService(<Porblems />)}
              className="w-[45%] bg-lime-200 rounded-xl"
            >
              Problems
            </button>
          </div>
        </div>
        <div
          className={`fixed bottom-0 w-full h-[100%] bg-white rounded-t-3xl shadow-top-md transform transition-transform ${
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
