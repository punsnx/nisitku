const MainEvents = () => {
  const items = Array.from({ length: 5 }, (_, index) => `Item ${index + 1}`);
  return (
    <>
      <div className="flex flex-row h-[15%] w-full mb-[2%] bg-slate-300">
        <div className="flex text-center w-[25%]  bg-red-300">
          <div className="w-[10px] ml-[20%] bg-[#3EB265]"></div>
          <p className="font-semibold text-2xl ml-2">Events</p>
        </div>
        <div className="flex justify-end w-[20%] bg-red-500">
          <button className="flex w-[85%] bg-[#68B984] rounded-lg text-white justify-center text-base">
            more
          </button>
        </div>
        <div className="grow flex bg-orange-200 justify-end">
          <div className="relative overflow-x-auto w-[90%]">
            <ul className="absolute flex space-x-2">
              {items.map((item, index) => (
                <li key={index}>
                  <button className="whitespace-nowrap px-3 bg-black bg-opacity-[15%] rounded text-sm text-black">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto w-[96%] h-[85%] left-[4%]  ">
        <ul className="absolute flex space-x-4 ">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-12 py-20 bg-white rounded-3xl border border-black"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MainEvents;
