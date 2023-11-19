import { useEffect, useState } from "react";
import emgergencyLight_icon from "../../../assets/emergency_icon_emergencyLight.svg";
import police_icon from "../../../assets/emergency_icon_police.svg";
import healthcare_black_icon from "../../../assets/emergency_icon_healthcare_black.svg";
import makeCall_icon from "../../../assets/emergency_icon_makeCall.svg";

function EmergencyPage() {
  return (
    <>
      <div
        className="flex flex-col w-full h-full "
        style={{ minWidth: "360px", minHeight: "830px" }}
      >
        <div className="flex w-full justify-center h-[15%]  shadow-md items-end">
          <label className="text-3xl font-bold mb-4">Emergency</label>
        </div>
        <div className="flex w-full h-[55%]  justify-center items-center">
          <div className="flex flex-col w-[85%] h-[95%] bg-[#66F1A6] rounded-3xl justify-center items-center shadow-xl">
            <div className="flex w-full h-[20%] justify-center items-center">
              <label className="text-3xl">แจ้งเหตุฉุกเฉิน</label>
            </div>
            {/*  */}
            <div className="flex w-full h-[60%] justify-center items-center">
              <div className="flex w-72 h-72 bg-[#60E69E] rounded-full justify-center items-center">
                <div className="flex w-56 h-56 bg-[#57D792] rounded-full justify-center items-center">
                  <div className="flex w-40 h-40 bg-[#FE5252] rounded-full justify-center items-center">
                    <img src={emgergencyLight_icon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col w-full h-[20%] justify-center items-center text-lg">
              <label>หน่วยงานรักษาความปลอดภัย</label>
              <label>มหาวิทยาลัยเกษตรศาสตร์</label>
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col w-full h-[5%] text-xl font-bold space-y-2">
          <div className="flex w-full h-full justify-start items-center">
            <label className="ml-[8%]">Contacts</label>
          </div>
          <div className="flex flex-col w-full h-32">
            <div className="flex flex-row w-full h-32 justify-center space-x-8">
              <div className="flex flex-col w-[40%] h-full bg-white rounded-3xl shadow-xl border border-black">
                <div className="flex w-full h-[70%] justify-center items-center ">
                  <img
                    src={police_icon}
                    alt="call_police_img"
                    className="h-[80%]"
                  />
                </div>
                <div className="flex flex-row w-full h-[30%] text-base justify-between ">
                  <div className="flex w-[70%] h-full justify-end ">
                    <label>สถานีตำรวจ</label>
                  </div>
                  <div className="flex w-[25%] h-full justify-left ">
                    <img
                      src={makeCall_icon}
                      alt="call_police_img"
                      className="h-[60%]"
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col w-[40%] h-full bg-white rounded-3xl shadow-xl border border-black">
                <div className="flex w-full h-[70%] justify-center items-center ">
                  <img
                    src={healthcare_black_icon}
                    alt="call_police_img"
                    className="h-[80%]"
                  />
                </div>
                <div className="flex flex-row w-full h-[30%] text-base justify-between ">
                  <div className="flex w-[70%] h-full justify-end ">
                    <label>ห้องฉุกเฉิน</label>
                  </div>
                  <div className="flex w-[25%] h-full justify-left ">
                    <img
                      src={makeCall_icon}
                      alt="call_health_emergency_img"
                      className="h-[60%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmergencyPage;
