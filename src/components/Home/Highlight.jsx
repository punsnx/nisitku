import { useEffect, useState } from "react";
import { getIG } from "../../api/igAPI";
import PopShow from "./popShow";
const MainHighlight = () => {
  useEffect(
    () => {
      const fetchData = async () => {
        const result = await getIG("newsroom.ku", 10);
        console.log(result);
        setHighlight(result);
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
    setIsPopOpen(true);
  };

  const closePopShow = () => {
    setIsPopOpen(false);
  };
  const imgItems = Array.from(
    { length: 5 },
    (_, index) =>
      `https://cdn.discordapp.com/attachments/1083040320033411134/1175485500182757386/imgLoading.gif.gif`
  );
  return (
    <>
      <PopShow
        isOpen={isPopOpen}
        onClose={closePopShow}
        data={show}
        title={"Highlight"}
      />

      <div className="absolute overflow-x-auto w-[96%] left-[4%]">
        {highlight ? (
          <ul className="flex space-x-4">
            {highlight.map((item, index) => (
              <li key={index} className="flex-shrink-0 bg-white rounded-3xl ">
                <button onClick={() => openPopShow(item)}>
                  <img
                    src={item.images[0]}
                    alt={`news-${index}`}
                    className="w-32 h-32 object-cover object-center  rounded-3xl "
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
                className="flex-shrink-0 bg-white rounded-3xl border border-black"
              >
                <img
                  src={item}
                  alt={`news-${index}`}
                  className="w-32 h-32 object-cover object-center rounded-3xl"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default MainHighlight;
