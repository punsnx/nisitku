import { useState, useEffect } from "react";
import { getTokenData } from "../api/auth";
import qrcode from "../assets/home_icon_qrcode.svg";
const NisitCard = ({ isOpen, onClose }) => {
  const [user, setUser] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        const data = await getTokenData(token);
        if (data) {
          setUser(data);
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 w-full h-5/6 bg-white rounded-t-3xl shadow-top-md transform transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transform-gpu`}
      >
        <div className="w-full h-full ">
          <div className="flex flex-row w-full h-[5%] items-end">
            <div className="flex w-full justify-start ml-6">
              <label>NisitCard</label>
            </div>
            <div className="flex w-full justify-end mr-6">
              <button
                className="px-2 rounded-full bg-[#FF605C]"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
          {/*  */}
          <div className="flex w-full h-[80%] justify-center items-center bg-white">
            <div className="w-[80%] h-[80%] bg-gray-800 rounded-3xl">
              {/*  */}
              <div className="flex w-full h-[7%] justify-center items-end ">
                <div className="w-[35%] h-[60%] bg-white rounded-full"></div>
              </div>
              <div className="flex w-full h-[50%] justify-center items-start">
                <img
                  src={user.profileImg}
                  className="h-[90%] rounded-3xl mt-8"
                />
              </div>
              {/*  */}
              <div className="flex flex-col w-full h-[20%] text-white items-center justify-center ">
                <div className="flex w-[100%] justify-center">
                  <div className="flex flex-row  justify-start space-x-2 whitespace-nowrap">
                    <label className="font-bold text-lg">Fullname</label>
                    <label className="text-lg">
                      {user.fname} {user.lname}
                    </label>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-row w-[100%] justify-center space-x-1">
                  <div className="flex flex-row  justify-start space-x-2 whitespace-nowrap">
                    <label className="font-bold">Year</label>
                    <label className="">{user.year}</label>
                  </div>
                  <div className="flex flex-row  justify-start space-x-2 whitespace-nowrap">
                    <label className="font-bold">NisitID</label>
                    <label className="">{user.nisitid}</label>
                  </div>
                </div>

                {/*  */}
              </div>
              <div className="flex w-full h-[33%]  justify-center">
                <div className="flex w-20 h-20 justify-center items-center rounded-3xl bg-white">
                  <img src={qrcode} className="h-[75%] fill-white" />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};
export default NisitCard;
