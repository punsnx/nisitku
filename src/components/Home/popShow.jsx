const PopShow = ({ isOpen, onClose, data, title }) => {
  return (
    <>
      <div
        className={`fixed flex bottom-0 left-0 w-full h-full items-center justify-center bg-white transform transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transform-gpu`}
        style={{ zIndex: isOpen ? 998 : -1 }}
      >
        {/* {console.log(data)} */}
        <div className="flex relative w-full h-full">
          <div>
            <button className="absolute top-12 left-4" onClick={onClose}>
              Close
            </button>
          </div>
          <div className="flex flex-col w-full space-y-4">
            <div className="flex w-full justify-center">
              <label className="mt-14 font-bold text-3xl">{title}</label>
            </div>
            <div className="flex overflow-x-auto w-full">
              <ul className="flex space-x-4">
                {isOpen ? (
                  <li className="flex w-full justify-center">
                    <img
                      src={data.images[0]}
                      className="w-[80%] object-cover object-center rounded-3xl"
                    />
                  </li>
                ) : (
                  <></>
                )}
              </ul>
            </div>
            <div className="flex flex-col w-full items-center">
              <div className="w-[80%]">
                <label className="text-xs ">{data.info}</label>
              </div>
              <div className="flex w-full justify-center">
                <label className="text-xs">
                  {data.date} {data.time}
                </label>
              </div>
            </div>
            {/*  */}
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
};
export default PopShow;
