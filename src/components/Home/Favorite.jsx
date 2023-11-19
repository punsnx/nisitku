import library_icon from "../../assets/home_icon_library.svg";
import talaiTo_icon from "../../assets/home_icon_talaiTo.svg";
import kuGift_icon from "../../assets/home_icon_gift.svg";
const MainFavorite = () => {
  const items = [
    ["Library\nBooking", library_icon],
    ["Talai to\nSC45", talaiTo_icon],
    ["KU\nPrivileges", kuGift_icon],
    ["Library\nBooking", library_icon],
    ["Talai to\nSC45", talaiTo_icon],
    ["KU\nPrivileges", kuGift_icon],
  ];
  return (
    <>
      <div className="relative overflow-x-auto w-[96%] h-[100%] left-[4%]  ">
        <ul className="absolute flex space-x-4 ">
          {items.map((item, index) => (
            <li key={index}>
              <button className="flex flex-row w-32 h-full py-2 px-4 space-x-1 bg-[#B7EEBC] bg-opacity-[75%] rounded-3xl ">
                <div className="flex w-[40%] h-full justify-center items-center">
                  <img src={item[1]} alt="" />
                </div>
                <div className="w-[60%] text-left text-sm">
                  <label>{item[0]}</label>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MainFavorite;
