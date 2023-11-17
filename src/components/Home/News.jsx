import { useEffect, useState } from "react";
import { getNews } from "../../api/news";

const MainNews = () => {
  const [news, setNews] = useState([]);
  useEffect(
    () => {
      // const fetchData = async () => {
      //   const result = await getNews(5);
      //   console.log(result);
      //   setNews(result);
      // };

      // fetchData();

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
  const items = Array.from({ length: 5 }, (_, index) => `Item ${index + 1}`);
  return (
    <>
      <div className="flex flex-row h-[29px] w-full mb-[2%] bg-white">
        <div className="flex text-center w-[25%]  bg-white">
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
                  <button className="whitespace-nowrap px-3 bg-black bg-opacity-[15%] rounded text-sm text-black">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto w-[96%] h-[82%] left-[4%]  ">
        <ul className="absolute flex space-x-4 ">
          {items.map((item, index) => (
            <li
              key={index}
              className="p-12 bg-white rounded-3xl border border-black"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* <ul>
        {news ? (
          news.map((item, index) => (
            <li
              key={index}
              className="p-12 bg-white rounded-3xl border border-black"
            >
              <img src={item.images[0]} alt="" />
            </li>
          ))
        ) : (
          <></>
        )}
      </ul> */}
    </>
  );
};
export default MainNews;
