import TimetableIcon from "../../assets/home_icon_timetable.svg";
import TalaiIcon from "../../assets/home_icon_talai.svg";
import NotificationIcon from "../../assets/home_icon_notification.svg";
import QRCodeIcon from "../../assets/home_icon_qrcode.svg";
import TicketIcon from "../../assets/home_icon_ticket.svg";
import BotIcon from "../../assets/home_icon_bot.svg";
import HomeIMG from "../../assets/home_img.svg";
import KU80Logo from "../../assets/KU80_LOGO.png";

const TopComponent = (user) => {
  return (
    <div className="relative mb-5">
      {/* IMG */}
      <TopIMG />
      {/* WHITE OVERLAY Container */}
      <div
        style={{ bottom: "-1px" }}
        className="absolute left-0 right-0 w-full"
      >
        {/* overlay components */}
        <div className="flex w-full h-12 rounded-t-full bg-white">
          <div
            style={{ position: "absolute", top: "-100%" }}
            className="flex w-full h-full"
          >
            {/* PROFILE IMG */}
            <div className="flex flex-none w-[37%] h-[200%]">
              <ProfileIMG user={user} />
            </div>
            {/* SUPER BUTTTON */}
            <div className="grow h-[200%] flex-row text-xs">
              {/* LINE1 */}
              <SuperBT_L1 />
              {/* LINE2 */}
              <SuperBT_L2 />
            </div>
            {/* END SUPER BUTTON */}
          </div>
        </div>
      </div>
    </div>
  );
};

const TopIMG = () => {
  return <img className="top-0 left-0 right-0 w-full " src={HomeIMG} />;
};

const ProfileIMG = (user) => {
  return (
    <div className="relative left-[15%] w-28 h-28 rounded-full overflow-hidden border-4 border-green-500">
      <div className="w-full h-full rounded-full overflow-hidden border-2 border-white relative ">
        <img
          src={user.user.user.profileImg}
          alt="Circular Image"
          className="w-full h-full object-cover object-center rounded-full"
        />
        {console.log("profile", user)}
      </div>
    </div>
  );
};

const SuperBT_L1 = () => {
  return (
    <div className="flex w-full h-[50%]">
      <div className="grow flex items-center justify-between ">
        <button className="flex w-[49%] px-2 py-1 items-center justify-between space-x-1 opacity-75 rounded-full bg-[#B7EEBC] ">
          <img
            src={TimetableIcon}
            alt="Timetable"
            className="flex flex-none h-5 w-5"
          />
          <p className="grow flex">Time Table</p>
        </button>
        <button className="flex w-[49%] px-2 py-1 items-center justify-between space-x-1 opacity-75 rounded-full bg-[#B7EEBC]">
          <img src={TalaiIcon} alt="Talai" className="flex flex-none h-5 w-5" />
          <p className="grow flex">Talai</p>
        </button>
      </div>
      <div className="flex-none flex items-center justify-center w-[15%]">
        <button className="flex px-2 py-1 relative">
          <img src={NotificationIcon} alt="Notification" className="h-6 w-6" />
          <div className="absolute top-0 left-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
            7
          </div>
        </button>
      </div>
    </div>
  );
};

const SuperBT_L2 = () => {
  return (
    <div className="flex w-full h-[50%] ">
      <div className="grow flex items-center justify-between ">
        <button className="flex w-[49%] px-2 py-1 items-center justify-between space-x-1 opacity-75 rounded-full bg-[#B7EEBC]">
          <img
            src={QRCodeIcon}
            alt="QRCode"
            className="flex flex-none h-5 w-5"
          />
          <p className="grow flex">QR Code</p>
        </button>
        <button className="flex w-[49%] px-2 py-1 items-center justify-between space-x-1 opacity-75 rounded-full bg-[#B7EEBC]">
          <img
            src={TicketIcon}
            alt="Ticket"
            className="flex flex-none h-5 w-5 "
          />
          <p className="grow flex">Ticket</p>
        </button>
      </div>
      <div className="flex-none flex items-center justify-center w-[15%] h-full mt-4 ">
        <button className="flex w-[70%] h-[70%] ">
          <img src={BotIcon} alt="Bot" className="h-[100%] w-[100%] " />
        </button>
      </div>
    </div>
  );
};
export default TopComponent;
