import { useEffect, useState } from "react";
import { getIG } from "../../api/igAPI";
import PopShow from "./popShow";

const MainNews = ({ setFixed }) => {
  const [news, setNews] = useState(false);
  useEffect(
    () => {
      const fetchData = async () => {
        const result = await getIG("kasetsart_ku", 5);
        console.log(result);
        setNews(result);
      };

      fetchData();

      // Code to run after the component renders
      // This function will run on component mount and whenever there is a change in dependencies.

      // Clean-up function (optional)
      return () => {
        // Code to run before the component unmounts
        // It's useful for cleaning up subscriptions or any resource allocation.
      };
    },
    [
      /* dependency array */
    ]
  );
  const [highlight, setHighlight] = useState(false);
  const [isPopOpen, setIsPopOpen] = useState(false);
  const [show, setShow] = useState(false);
  const openPopShow = (item) => {
    setShow(item);
    setFixed(true);
    setIsPopOpen(true);
  };
  const closePopShow = () => {
    setFixed(false);
    setIsPopOpen(false);
  };

  const items = ["All", "Academic", "Announcement", "Research"];

  const loadingGif =
    "https://cdn.discordapp.com/attachments/1083025504887648368/1175922327670763611/LoadingGif.gif";
  // const loadingGif =
  //   "https://cdn.discordapp.com/attachments/1083040320033411134/1175485500182757386/imgLoading.gif.gif";
  const imgItems = Array.from({ length: 5 }, (_, index) => loadingGif);
  return (
    <>
      <PopShow
        isOpen={isPopOpen}
        onClose={closePopShow}
        data={show}
        title={"News"}
      />
      <div className="flex flex-row h-[29px] w-full mb-[2%] bg-white">
        <div className="flex text-center w-[30%]  bg-white">
          <div className="w-[10px] ml-[20%] bg-[#3EB265]"></div>
          <p className="font-semibold text-2xl ml-2">News</p>
        </div>
        <div className="flex justify-end w-[20%] bg-white">
          <button className="flex w-[85%] bg-[#68B984] rounded-lg text-white justify-center text-base">
            more
          </button>
        </div>
        <div className="grow flex bg-white justify-end">
          <div className="relative overflow-x-auto w-[90%]">
            <ul className="absolute flex space-x-2">
              {items.map((item, index) => (
                <li key={index}>
                  <button className="whitespace-nowrap px-3 bg-black bg-opacity-[15%] rounded-xl text-sm text-black">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute overflow-x-auto w-[96%] left-[4%]">
        {news ? (
          <ul className="flex space-x-4">
            {news.map((item, index) => (
              <li key={index} className="flex-shrink-0 bg-white rounded-3xl ">
                <button onClick={() => openPopShow(item)}>
                  <div className="flex w-full h-8 bg-black rounded-tl-3xl rounded-tr-3xl justify-center items-center">
                    <label className="text-white">{item.date}</label>
                  </div>
                  <img
                    src={item.images[0]}
                    alt={`news-${index}`}
                    className="w-36 h-36 object-cover object-center  rounded-bl-3xl rounded-br-3xl"
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex space-x-4">
            {imgItems.map((item, index) => (
              <li
                key={index}
                className="flex-shrink-0 bg-white rounded-3xl border-2"
              >
                <img
                  src={item}
                  alt={`news-${index}`}
                  className="w-36 h-44 object-cover object-center rounded-3xl"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default MainNews;
