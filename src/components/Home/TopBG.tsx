import TimetableIcon from "../../assets/home_icon_timetable.svg";
import TalaiIcon from "../../assets/home_icon_talai.svg";
import NotificationIcon from "../../assets/home_icon_notification.svg";
import QRCodeIcon from "../../assets/home_icon_qrcode.svg";
import TicketIcon from "../../assets/home_icon_ticket.svg";
import BotIcon from "../../assets/home_icon_bot.svg";

const TopComponent = () => {
  return (
    <div className="relative">
      {/* IMG */}
      <img
        className="top-0 left-0 right-0 w-full "
        src="/src/assets/home_img.png"
      />
      {/* WHITE OVERLAY */}
      <div
        style={{ bottom: "-1px" }}
        className="absolute left-0 right-0 w-full"
      >
        {/* overlay component */}
        <div className="bg-white w-full h-12 rounded-t-full flex">
          <div
            style={{ position: "absolute", top: "-100%" }}
            className="w-full h-full flex"
          >
            {/* PROFILE IMG */}
            <div className="flex flex-none w-[40%] h-[200%]">
              <div className="left-[20%] relative w-28 h-28 rounded-full overflow-hidden border-4 border-green-500">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white relative ">
                  <img
                    src="/src/assets/home_img.png"
                    alt="Circular Image"
                    className="w-full h-full object-cover object-center rounded-full"
                  />
                </div>
              </div>
            </div>
            {/* SUPER BUTTTON */}
            <div className="grow h-[200%] flex-row text-xs">
              {/* LINE1 */}
              <div className="flex w-full h-[50%] ">
                <div className="grow flex items-center justify-start space-x-2">
                  <button className="flex w-[45%] px-2 py-1 bg-[#B7EEBC] opacity-75 rounded-full">
                    <img
                      src={TimetableIcon}
                      alt="Timetable"
                      className="h-5 w-5"
                    />
                    TimeTable
                  </button>
                  <button className="flex w-[45%] px-2 py-1 bg-[#B7EEBC] opacity-75 rounded-full">
                    <img src={TalaiIcon} alt="Talai" className="h-5 w-5" />
                    Talai
                  </button>
                </div>
                <div className="flex-none flex items-center justify-end">
                  <button className="flex px-2 py-1">
                    <img
                      src={NotificationIcon}
                      alt="Notification"
                      className="h-5 w-5"
                    />
                  </button>
                </div>
              </div>
              {/* LINE2 */}
              <div className="flex w-full h-[50%] ">
                <div className="grow flex items-center justify-start space-x-2">
                  <button className="flex w-[45%] px-2 py-1 bg-[#B7EEBC] opacity-75 rounded-full">
                    <img src={QRCodeIcon} alt="QRCode" className="h-5 w-5" />
                    QR Code
                  </button>
                  <button className="flex w-[45%] px-2 py-1 bg-[#B7EEBC] opacity-75 rounded-full">
                    <img src={TicketIcon} alt="Ticket" className="h-5 w-5 " />
                    Ticket
                  </button>
                </div>
                <div className="flex-none flex items-center justify-end">
                  <button className="flex px-2 py-1 ">
                    <img src={BotIcon} alt="Bot" className="h-5 w-5" />
                  </button>
                </div>
              </div>
              {/* END SUPER BUTTON */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopComponent;
