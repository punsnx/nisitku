import { useState } from "react";
import ListProblems from "./ListProblems";
import ReportPage from "./Report";

function ProblemsPage() {
  const [like, setLike] = useState(37);
  const [liked, setLiked] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(<></>);
  const openReport = (element) => {
    setOpen(true);
    setShow(element);
  };
  const closeReport = () => {
    setOpen(false);
    setShow(<></>);
  };

  const addLike = () => {
    if (!liked) {
      setLike(like + 1);
      setLiked(true);
    } else {
      setLike(like - 1);
      setLiked(false);
    }
  };
  const items = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);
  const reports = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="flex h-[15%] justify-center shadow-md">
          <label className="font-bold text-3xl mt-20 mb-4">KU Problems</label>
        </div>
        {/*  */}
        <div className="flex h-[10%] flex-row w-full ">
          <div className="flex w-[50%] justify-center items-center">
            <button
              className="w-[80%] h-10 rounded-xl bg-[#46E856] font-bold text-xl"
              onClick={() => openReport(<ReportPage />)}
            >
              + รายงานปัญหา
            </button>
          </div>
          <div className="flex flex-row w-[50%] justify-end items-center ">
            <label className="text-xl font-semibold mr-2">สถานะ :</label>
            <select className="flex w-[50%] h-8  mr-4 items-center">
              <option>ทั้งหมด</option>
              <option>ทั้งหมด1</option>
            </select>
          </div>
          {/*  */}
        </div>
        {/*  */}
        <div className="w-full h-[5%] shadow-md ">
          <div className="relative overflow-x-auto w-[95%] h-[100%] left-[5%] ">
            <ul className="flex space-x-4 ">
              {items.map((item, index) => (
                <li key={index}>
                  <button className="whitespace-nowrap w-20 bg-[#E7E7E7] bg-opacity-[75%] rounded-3xl ">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative flex w-full h-[70%] overflow-y-auto mt-4 mb-24">
          <ul className="flex flex-col space-y-4 w-full">
            {reports.map((item, index) => (
              <li key={index} className="flex w-full justify-center">
                <ListProblems
                  onLike={addLike}
                  topic={"ตะไลโง่"}
                  detail={"จอดนานมากคันนี้"}
                  type_problem={"ตะไล"}
                  likes={like}
                  finished={true}
                  liked={liked}
                ></ListProblems>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*  */}
      <div
        className={`fixed top-0 w-full h-screen bg-white rounded-t-3xl shadow-top-md transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transform-gpu`}
      >
        <div className="w-full h-full">
          <button className="absolute left-4 top-16" onClick={closeReport}>
            Back
          </button>
          {show}
        </div>
      </div>
    </>
  );
}

export default ProblemsPage;
