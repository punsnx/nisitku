const MainFavorite = () => {
  const items = Array.from({ length: 5 }, (_, index) => `Item ${index + 1}`);
  return (
    <>
      <div className="relative overflow-x-auto w-[96%] h-[100%] left-[4%]  ">
        <ul className="absolute flex space-x-4 ">
          {items.map((item, index) => (
            <li key={index}>
              <button className="whitespace-nowrap py-4 px-8 bg-[#B7EEBC] bg-opacity-[75%] rounded-3xl ">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MainFavorite;
